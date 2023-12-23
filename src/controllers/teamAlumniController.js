const Team = require('../models/teamAlumniModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllTeam = asyncWrapper(async (req, res) => {
  const team = await Team.find({});
  res.status(200).json({ success: true, data: team });
});

const createTeam = asyncWrapper(async (req, res, next) => {
  const team = await Team.create(req.body);
  res.status(201).json({ success: true, data: team });
});

const getTeamById = asyncWrapper(async (req, res, next) => {
  const { id: teamID } = req.params;
  const team = await Team.findOne({ _id: teamID });
  if (!team) {
    return next(createCustomError(`No team member with id: ${teamID}`, 404));
  }
  res.status(200).json({ success: true, data: team });
});

const deleteTeam = asyncWrapper(async (req, res, next) => {
  const { id: teamID } = req.params;
  const team = await Team.findOneAndDelete({ _id: teamID });
  if (!team) {
    return next(createCustomError(`No team member with id: ${teamID}`, 404));
  }
  res.status(200).json({ success: true, data: team });
});

const updateTeam = asyncWrapper(async (req, res, next) => {
  const { id: teamID } = req.params;
  const team = await Team.findOneAndUpdate({ _id: teamID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!team) {
    return next(createCustomError(`No team member with id: ${teamID}`, 404));
  }
  res.status(200).json({ success: true, data: team });
});

module.exports = {
  getAllTeam,
  createTeam,
  getTeamById,
  updateTeam,
  deleteTeam,
};
