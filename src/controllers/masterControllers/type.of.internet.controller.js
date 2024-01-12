const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const internetTypeServices = require('../../services/masterService/type.of.internet.service');
const ApiError = require('../../utils/ApiError');

const createInternetType = catchAsync(async (req, res) => {
  const newInternetType = await internetTypeServices.createInternetType(req.body);
  res.status(httpStatus.CREATED).send(newInternetType);
});

const getAllInternetType = catchAsync(async (req, res) => {
  const getAllInternetTypes = await internetTypeServices.getAllInternetType();
  res.send(getAllInternetTypes);
});

const getInternetTypeById = catchAsync(async (req, res) => {
  const singleInternetType = await internetTypeServices.getInternetTypeById(req.params.internetTypeId);
  if (!singleInternetType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'InternetType not found');
  }
  res.send(singleInternetType);
});

const updateInternetTypeyId = catchAsync(async (req, res) => {
  const updateInternetType = await internetTypeServices.updateInternetTypeyId(req.params.internetTypeId, req.body);
  res.send(updateInternetType);
});

const deleteInternetTypeById = catchAsync(async (req, res) => {
  const deleteInternetType = await internetTypeServices.deleteInternetTypeById(req.params.internetTypeId);
  res.status(httpStatus.NO_CONTENT).send(deleteInternetType);
});

module.exports = {
  createInternetType,
  getAllInternetType,
  getInternetTypeById,
  updateInternetTypeyId,
  deleteInternetTypeById,
};
