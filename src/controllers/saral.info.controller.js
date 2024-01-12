const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { SaralServices } = require('../services');

const createSaral = catchAsync(async (req, res) => {
  const saral = await SaralServices.createSaral(req.body);
  res.status(httpStatus.CREATED).send(saral);
});

const getSarals = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['saralName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allSaral = await SaralServices.getAllSarals(filter, options);
  res.send(allSaral);
});

const getSaral = catchAsync(async (req, res) => {
  const saral = await SaralServices.getSaralById(req.params.saralId);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral info not found');
  }
  res.send(saral);
});

const updateSaral = catchAsync(async (req, res) => {
  const updatedSaral = await SaralServices.updateSaralById(req.params.saralId, req.body);
  res.send(updatedSaral);
});

const deleteSaral = catchAsync(async (req, res) => {
  const deletedSaral = await SaralServices.deleteSaralById(req.params.saralId);
  res.status(httpStatus.NO_CONTENT).send(deletedSaral);
});

module.exports = {
  createSaral,
  getSarals,
  getSaral,
  updateSaral,
  deleteSaral,
};
