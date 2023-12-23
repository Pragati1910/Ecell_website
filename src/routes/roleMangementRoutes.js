const express = require('express')
const router = express.Router()

const {
  getAllMemebers,
  createMemeber,
  getMemeber,
  updateMemeber,
  deleteMemeber
} = require('../controllers/roleMangementController')

router.route('/').get(getAllMemebers).post(createMemeber)
router.route('/:id').get(getMemeber).patch(updateMemeber).delete(deleteMemeber)

module.exports = router
