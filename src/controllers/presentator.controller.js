const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { presentatorService } = require('../services');

const createPresentator = catchAsync(async (req, res) => {
  const newStudio = await presentatorService.createPresentator(req.body);
  res.status(httpStatus.CREATED).send(newStudio);
});

const getAllPresentator = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['presentatorName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudios = await presentatorService.getAllPresentator(filter, options);
  res.send(allStudios);
});

const getPresentator = catchAsync(async (req, res) => {
  const singleStudio = await presentatorService.getPresentatorById(req.params.presentatorId);
  if (!singleStudio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapter not found');
  }
  res.send(singleStudio);
});

const updatePresentator = catchAsync(async (req, res) => {
  const updatedStudio = await presentatorService.updatePresentatorById(req.params.presentatorId, req.body);
  res.send(updatedStudio);
});

const deletePresentator = catchAsync(async (req, res) => {
  const deletedStudio = await presentatorService.deletePresentatorById(req.params.presentatorId);
  res.status(httpStatus.NO_CONTENT).send(deletedStudio);
});

module.exports = {
  createPresentator,
  getAllPresentator,
  getPresentator,
  updatePresentator,
  deletePresentator,
};
