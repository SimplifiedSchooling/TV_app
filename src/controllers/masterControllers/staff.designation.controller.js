const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { staffDesignationService } = require('../../services');

const createStaffDesignation = catchAsync(async (req, res) => {
  const data = await staffDesignationService.createStaffDesignation(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllStaffDesignation = catchAsync(async (req, res) => {
  const result = await staffDesignationService.getAllStaffDesignations();
  res.send(result);
});

const getStaffDesignationById = catchAsync(async (req, res) => {
  const result = await staffDesignationService.getStaffDesignationById(req.params.designationId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff Designation not found');
  }
  res.send(result);
});

const updateStaffDesignationById = catchAsync(async (req, res) => {
  const result = await staffDesignationService.updateStaffDesignationById(req.params.designationId, req.body);
  res.send(result);
});

const deleteStaffDesignationById = catchAsync(async (req, res) => {
  await staffDesignationService.deleteStaffDesignationById(req.params.designationId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStaffDesignation,
  getAllStaffDesignation,
  getStaffDesignationById,
  updateStaffDesignationById,
  deleteStaffDesignationById,
};
