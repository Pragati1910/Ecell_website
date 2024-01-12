const Carousel = require('../models/carouselModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllCarousels = asyncWrapper(async (req, res) => {
  const carousel = await Carousel.find({});
  res.status(200).json({ success: true, data: carousel });
});

const createCarousel = asyncWrapper(async (req, res, next) => {
  const carousel = await Carousel.create(req.body);
  res.status(201).json({ success: true, data: carousel });
});

const getCarouselById = asyncWrapper(async (req, res, next) => {
  const { id: carouselID } = req.params;
  const carousel = await Carousel.findOne({ _id: carouselID });
  if (!carousel) {
    return next(createCustomError(`No carousel with id: ${carouselID}`, 404));
  }
  res.status(200).json({ success: true, data: carousel });
});

const deleteCarousel = asyncWrapper(async (req, res, next) => {
  const { id: carouselID } = req.params;
  const carousel = await Carousel.findOneAndDelete({ _id: carouselID });
  if (!carousel) {
    return next(createCustomError(`No carousel  with id: ${carouselID}`, 404));
  }
  res.status(200).json({ success: true, data: carousel });
});

const updateCarousel = asyncWrapper(async (req, res, next) => {
  const { id: carouselID } = req.params;
  const carousel = await Carousel.findOneAndUpdate({ _id: carouselID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!carousel) {
    return next(createCustomError(`No carousel with id: ${carouselID}`, 404));
  }
  res.status(200).json({ success: true, data: carousel });
});

module.exports = {
  getAllCarousels,
  createCarousel,
  getCarouselById,
  updateCarousel,
  deleteCarousel,
};
