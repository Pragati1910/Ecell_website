const Form = require('../models/contactFormModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllForms = asyncWrapper(async (req, res) => {
  const form = await Form.find({});
  res.status(200).json({ success: true, data: form });
});

const createForm = asyncWrapper(async (req, res, next) => {
  const form = await Form.create(req.body);
  res.status(201).json({ success: true, data: form });
});

const getFormById = asyncWrapper(async (req, res, next) => {
  const { id: formID } = req.params;
  const form = await Form.findOne({ _id: formID });
  if (!form) {
    return next(createCustomError(`No form with id: ${formID}`, 404));
  }
  res.status(200).json({ success: true, data: form });
});

const deleteForm = asyncWrapper(async (req, res, next) => {
  const { id: formID } = req.params;
  const form = await Form.findOneAndDelete({ _id: formID });
  if (!form) {
    return next(createCustomError(`No form  with id: ${formID}`, 404));
  }
  res.status(200).json({ success: true, data: form });
});

const updateForm = asyncWrapper(async (req, res, next) => {
  const { id: formID } = req.params;
  const form = await Form.findOneAndUpdate({ _id: formID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!form) {
    return next(createCustomError(`No form with id: ${formID}`, 404));
  }
  res.status(200).json({ success: true, data: form });
});

module.exports = {
  getAllForms,
  createForm,
  getFormById,
  updateForm,
  deleteForm,
};
