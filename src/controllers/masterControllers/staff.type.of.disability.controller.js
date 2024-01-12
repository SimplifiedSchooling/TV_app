const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { staffDisabilityService } = require('../../services');

const createTypeOfDisability = catchAsync(async (req, res) => {
  const data = await staffDisabilityService.createStaffDisability(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllTypeOfDisability = catchAsync(async (req, res) => {
  const result = await staffDisabilityService.getAllStaffDisabilitys();
  res.send(result);
});

const getTypeOfDisabilityById = catchAsync(async (req, res) => {
  const result = await staffDisabilityService.getStaffDisabilityById(req.params.disabilityId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type of Disability not found');
  }
  res.send(result);
});

const updateTypeOfDisabilityById = catchAsync(async (req, res) => {
  const result = await staffDisabilityService.updateStaffDisabilityById(req.params.disabilityId, req.body);
  res.send(result);
});

const deleteTypeOfDisabilityById = catchAsync(async (req, res) => {
  await staffDisabilityService.deleteStaffDisabilityById(req.params.disabilityId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTypeOfDisability,
  getAllTypeOfDisability,
  getTypeOfDisabilityById,
  updateTypeOfDisabilityById,
  deleteTypeOfDisabilityById,
};
