const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { campusService } = require('../services');

const createCampus = catchAsync(async (req, res) => {
  const campus = await campusService.createCampus(req.body);
  res.status(httpStatus.CREATED).send(campus);
});

const queryCampus = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await campusService.queryCampus(filter, options);
  res.send(result);
});

const getCampusById = catchAsync(async (req, res) => {
  const campus = await campusService.getCampusById(req.params.campusId);
  if (!campus) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campus not found');
  }
  res.send(campus);
});

const updateCampus = catchAsync(async (req, res) => {
  const board = await campusService.updateCampusById(req.params.campusId, req.body);
  res.send(board);
});

const deleteCampus = catchAsync(async (req, res) => {
  await campusService.deleteCampusById(req.params.campusId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCampus,
  queryCampus,
  getCampusById,
  updateCampus,
  deleteCampus,
};
