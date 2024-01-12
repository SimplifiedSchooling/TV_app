const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { assectService } = require('../services');

const createAssect = catchAsync(async (req, res) => {
  // req.body.imagePath = req.file.imagePath;
  const data = await assectService.createAssect(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const queryAssect = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['assectName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await assectService.queryAssect(filter, options);
  res.send(result);
});

const getAssect = catchAsync(async (req, res) => {
  const result = await assectService.getAssectById(req.params.id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hostel not found');
  }
  res.send(result);
});

const updateAssect = catchAsync(async (req, res) => {
  const { assetId, scode } = req.query;
  const result = await assectService.updateAssectById(assetId, scode, req.body);
  res.send(result);
});

const deleteAssect = catchAsync(async (req, res) => {
  await assectService.deleteAssectById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAssect,
  queryAssect,
  getAssect,
  updateAssect,
  deleteAssect,
};
