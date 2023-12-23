const Event = require('../models/eventsModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllEvents = asyncWrapper(async (req, res) => {
  const event = await Event.find({});
  res.status(200).json({ success: true, data: event });
});

const createEvent = asyncWrapper(async (req, res, next) => {
  const event = await Event.create(req.body);
  res.status(201).json({ success: true, data: event });
});

const geteventById = asyncWrapper(async (req, res, next) => {
  const { id: eventID } = req.params;
  const event = await Event.findOne({ _id: eventID });
  if (!event) {
    return next(createCustomError(`No event member with id: ${eventID}`, 404));
  }
  res.status(200).json({ success: true, data: event });
});

const deleteEvent = asyncWrapper(async (req, res, next) => {
  const { id: eventID } = req.params;
  const event = await Event.findOneAndDelete({ _id: eventID });
  if (!event) {
    return next(createCustomError(`No event member with id: ${eventID}`, 404));
  }
  res.status(200).json({ success: true, data: event });
});

const updateEvent = asyncWrapper(async (req, res, next) => {
  const { id: eventID } = req.params;
  const event = await Event.findOneAndUpdate({ _id: eventID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!event) {
    return next(createCustomError(`No event member with id: ${eventID}`, 404));
  }
  res.status(200).json({ success: true, data: event });
});

module.exports = {
  getAllEvents,
  createEvent,
  geteventById,
  updateEvent,
  deleteEvent,
};
