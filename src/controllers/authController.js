const User = require('../models/authModel')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require("../errors")
const userRepository = require("../repository/authRepository");

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
  const {email, password,isApproved } = req.body
  if (!email || !password)   {
    throw new BadRequestError('Please provide email /password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('User not found')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name } })
}

module.exports = {
  register,
  login,
}

