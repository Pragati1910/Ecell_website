const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, 'Please provide your VIT email'],
    match: [
      /^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  regno:{
    type:String,
    required: [true, 'Please provide your register number'],
    match:[
      /^\d{2}[a-zA-Z]{3}\d{4}$/,
      'Please provide valid register number',
    ],
    unique:true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  isApproved:{
    type: Boolean,
    default: false
  },
  role:{
    type:String,
    default:'member',
  },
  image:
  {
      data: Buffer,
      contentType: String
  }
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  )
}
UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await canditatePassword == this.password
  return isMatch
}
module.exports = mongoose.model('User', UserSchema)
