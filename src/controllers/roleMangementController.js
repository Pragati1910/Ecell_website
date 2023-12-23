const Memeber = require('../models/roleMangementModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllMemebers = asyncWrapper(async (req, res) => {
  const memeber = await Memeber.find({});
  res.status(200).json({ success: true, data: memeber });
});

const createMemeber = asyncWrapper(async (req, res, next) => {
  const memeber = await Memeber.create(req.body);
  res.status(201).json({ success: true, data: memeber });
});

const getMemeber = asyncWrapper(async (req, res, next) => {
  const { id: memeberID } = req.params;
  const memeber = await Memeber.findOne({ _id: memeberID });
  if (!memeber) {
    return next(createCustomError(`No memeber with id: ${memeberID}`, 404));
  }
  res.status(200).json({ success: true, data: memeber });
});

const deleteMemeber = asyncWrapper(async (req, res, next) => {
  const { id: memeberID } = req.params;
  const memeber = await Memeber.findOneAndDelete({ _id: memeberID });
  if (!memeber) {
    return next(createCustomError(`No memeber  with id: ${memeberID}`, 404));
  }
  res.status(200).json({ success: true, data: memeber });
});

const updateMemeber = asyncWrapper(async (req, res, next) => {
  const { id: memeberID } = req.params;
  const memeber = await Memeber.findOneAndUpdate({ _id: memeberID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!memeber) {
    return next(createCustomError(`No memeber with id: ${memeberID}`, 404));
  }
  res.status(200).json({ success: true, data: memeber });
});

module.exports = {
  getAllMemebers,
  createMemeber,
  getMemeber,
  updateMemeber,
  deleteMemeber,
};
