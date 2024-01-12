const express = require('express')
const router = express.Router()

const {
  getAllForms,
  createForm,
  getFormById,
  updateForm,
  deleteForm
} = require('../controllers/contactFormController')

router.route('/').get(getAllForms).post(createForm)
router.route('/:id').get(getFormById).patch(updateForm).delete(deleteForm)
module.exports = router


