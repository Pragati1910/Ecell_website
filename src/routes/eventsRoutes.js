const express = require('express')
const router = express.Router()

const {
  getAllEvents,
  createEvent,
  geteventById,
  updateEvent,
  deleteEvent
} = require('../controllers/eventsController')

router.route('/').get(getAllEvents).post(createEvent)
router.route('/:id').get(geteventById).patch(updateEvent).delete(deleteEvent)

module.exports = router
