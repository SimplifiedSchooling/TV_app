const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { appointedService } = require('../../services');

const createAppointed = catchAsync(async (req, res) => {
  const appointed = await appointedService.createAppointedLevel(req.body);
  res.status(httpStatus.CREATED).send(appointed);
});

const getAllAppointed = catchAsync(async (req, res) => {
  const result = await appointedService.getAllAppointedLevel();
  res.send(result);
});

const getAppointed = catchAsync(async (req, res) => {
  const appointed = await appointedService.getAppointedLevelById(req.params.appointedId);
  if (!appointed) {
    throw new ApiError(httpStatus.NOT_FOUND, 'appointed level not found');
  }
  res.send(appointed);
});

const updateAppointed = catchAsync(async (req, res) => {
  const appointed = await appointedService.updateAppointedLevelById(req.params.appointedId, req.body);
  res.send(appointed);
});

const deleteAppointed = catchAsync(async (req, res) => {
  await appointedService.deleteAppointedLevelById(req.params.appointedId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAppointed,
  getAllAppointed,
  getAppointed,
  updateAppointed,
  deleteAppointed,
};
