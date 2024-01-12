const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { stafftranningService } = require('../../services');

const createStaffTranning = catchAsync(async (req, res) => {
  const data = await stafftranningService.createStaffTraning(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllStaffTranning = catchAsync(async (req, res) => {
  const result = await stafftranningService.getAllStaffTranings();
  res.send(result);
});

const getStaffTranningById = catchAsync(async (req, res) => {
  const result = await stafftranningService.getStaffTraningById(req.params.traningId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff Tranning not found');
  }
  res.send(result);
});

const updateStaffTranningById = catchAsync(async (req, res) => {
  const result = await stafftranningService.updateStaffTraningById(req.params.traningId, req.body);
  res.send(result);
});

const deleteStaffTranningById = catchAsync(async (req, res) => {
  await stafftranningService.deleteStaffTraningById(req.params.traningId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStaffTranning,
  getAllStaffTranning,
  getStaffTranningById,
  updateStaffTranningById,
  deleteStaffTranningById,
};
