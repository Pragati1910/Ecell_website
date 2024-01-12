const express = require('express')
const router = express.Router()

const {
  getAllCarousels,
  createCarousel,
  getCarouselById,
  updateCarousel,
  deleteCarousel
} = require('../controllers/carouselController')

router.route('/').get(getAllCarousels).post(createCarousel)
router.route('/:id').get(getCarouselById).patch(updateCarousel).delete(deleteCarousel)

module.exports = router
