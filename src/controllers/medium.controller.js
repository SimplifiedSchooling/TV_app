const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { mediumService } = require('../services');

const createMedium = catchAsync(async (req, res) => {
  const medium = await mediumService.createMedium(req.body);
  res.status(httpStatus.CREATED).send(medium);
});

const getMediums = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['board']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await mediumService.queryMedium(filter, options);
  res.send(result);
});

const getMedium = catchAsync(async (req, res) => {
  const medium = await mediumService.getMediumById(req.params.mediumId);
  if (!medium) {
    throw new ApiError(httpStatus.NOT_FOUND, 'medium not found');
  }
  res.send(medium);
});

const updateMedium = catchAsync(async (req, res) => {
  const medium = await mediumService.updateMediumById(req.params.mediumId, req.body);
  res.send(medium);
});

const deleteMedium = catchAsync(async (req, res) => {
  await mediumService.deleteMediumById(req.params.mediumId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMedium,
  getMediums,
  getMedium,
  updateMedium,
  deleteMedium,
  // getMediumbyBoardId,
};
