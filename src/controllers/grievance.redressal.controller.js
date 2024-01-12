const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { grievanceService } = require('../services');

const createGrievance = catchAsync(async (req, res) => {
  const data = await grievanceService.createGrievanceRedressal(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllGrievances = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await grievanceService.getAllGrievanceRedressal(filter, options);
  res.send(result);
});

const getGrievance = catchAsync(async (req, res) => {
  const result = await grievanceService.getGrievanceRedressalById(req.params.grievanceRedressalId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Left Reason not found');
  }
  res.send(result);
});

const updateGrievance = catchAsync(async (req, res) => {
  const result = await grievanceService.updateGrievanceRedressalById(req.params.grievanceRedressalId, req.body);
  res.send(result);
});

const deleteGrievance = catchAsync(async (req, res) => {
  const result = await grievanceService.deleteGrievanceRedressalById(req.params.grievanceRedressalId);
  res.status(httpStatus.NO_CONTENT).send(result);
});

module.exports = {
  createGrievance,
  getAllGrievances,
  getGrievance,
  updateGrievance,
  deleteGrievance,
};
