const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { studioService } = require('../services');

const createStudio = catchAsync(async (req, res) => {
  const newStudio = await studioService.createStudio(req.body);
  res.status(httpStatus.CREATED).send(newStudio);
});

const getStudios = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['studioName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudios = await studioService.getAllStudios(filter, options);
  res.send(allStudios);
});

const getStudio = catchAsync(async (req, res) => {
  const singleStudio = await studioService.getStudioById(req.params.studioId);
  if (!singleStudio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapter not found');
  }
  res.send(singleStudio);
});

const updateStudio = catchAsync(async (req, res) => {
  const updatedStudio = await studioService.updateStudioById(req.params.studioId, req.body);
  res.send(updatedStudio);
});

const deleteStudio = catchAsync(async (req, res) => {
  const deletedStudio = await studioService.deleteStudioById(req.params.studioId);
  res.status(httpStatus.NO_CONTENT).send(deletedStudio);
});

module.exports = {
  createStudio,
  getStudios,
  getStudio,
  updateStudio,
  deleteStudio,
};
