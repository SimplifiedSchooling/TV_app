const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { stateService } = require('../../services');

const createState = catchAsync(async (req, res) => {
  const data = await stateService.createState(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllState = catchAsync(async (req, res) => {
  const result = await stateService.getAllStates();
  res.send(result);
});

const getStateById = catchAsync(async (req, res) => {
  const result = await stateService.getStateById(req.params.stateId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sector not found');
  }
  res.send(result);
});

const updateStateById = catchAsync(async (req, res) => {
  const result = await stateService.updateStateById(req.params.stateId, req.body);
  res.send(result);
});

const deleteStateById = catchAsync(async (req, res) => {
  await stateService.deleteStateById(req.params.stateId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createState,
  getAllState,
  getStateById,
  updateStateById,
  deleteStateById,
};
