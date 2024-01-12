const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { demolishedService } = require('../services');
const { filterPath } = require('../utils/s3middleware');

const createDemolished = catchAsync(async (req, res) => {
  const { file } = req;
  req.body.imagePath = await filterPath(file.location);
  const demolished = await demolishedService.createDemolished(req.body);
  res.status(httpStatus.CREATED).send(demolished);
});

const getAllDemolished = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['asset']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await demolishedService.queryDemolished(filter, options);
  res.send(result);
});

const getDemolishedById = catchAsync(async (req, res) => {
  const demolished = await demolishedService.getDemolishedById(req.params.demolishedId);
  if (!demolished) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Demolished not found');
  }
  res.send(demolished);
});

const updateDemolishedById = catchAsync(async (req, res) => {
  const { file } = req;
  if (file) {
    req.body.imagePath = await filterPath(file.location);
  }
  const demolished = await demolishedService.updateDemolishedById(req.params.demolishedId, req.body);
  res.send(demolished);
});

const deleteDemolishedById = catchAsync(async (req, res) => {
  await demolishedService.deleteDemolishedById(req.params.demolishedId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDemolished,
  getAllDemolished,
  getDemolishedById,
  updateDemolishedById,
  deleteDemolishedById,
};
