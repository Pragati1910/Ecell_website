const express = require('express')
const router = express.Router()

const {
  getAllTeam,
  createTeam,
  getTeamByIdById,
  updateTeam,
  deleteTeam
} = require('../controllers/teamAlumniController')

router.route('/').get(getAllTeam).post(createTeam)
router.route('/:id').get(getTeamById).patch(updateTeam).delete(deleteTeam)

module.exports = router
