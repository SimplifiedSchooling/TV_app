const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { staffQualificationService } = require('../../services');

const createProfessionalQualification = catchAsync(async (req, res) => {
  const data = await staffQualificationService.createStaffQualification(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllProfessionalQualification = catchAsync(async (req, res) => {
  const result = await staffQualificationService.getAllStaffQualifications();
  res.send(result);
});

const getProfessionalQualificationById = catchAsync(async (req, res) => {
  const result = await staffQualificationService.getStaffQualificationById(req.params.qualificationId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type of Disability not found');
  }
  res.send(result);
});

const updateProfessionalQualificationById = catchAsync(async (req, res) => {
  const result = await staffQualificationService.updateStaffQualificationById(req.params.qualificationId, req.body);
  res.send(result);
});

const deleteProfessionalQualificationById = catchAsync(async (req, res) => {
  await staffQualificationService.deleteStaffQualificationById(req.params.qualificationId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProfessionalQualification,
  getAllProfessionalQualification,
  getProfessionalQualificationById,
  updateProfessionalQualificationById,
  deleteProfessionalQualificationById,
};
