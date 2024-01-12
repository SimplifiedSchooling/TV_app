const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const safetyAndSecurityServices = require('../../services/masterService/safety.and.security.service');
const ApiError = require('../../utils/ApiError');

const createSafetyAndSecurity = catchAsync(async (req, res) => {
  const newsafetyAndSecurity = await safetyAndSecurityServices.createSafetyAndSecurity(req.body);
  res.status(httpStatus.CREATED).send(newsafetyAndSecurity);
});

const getAllSafetyAndSecurity = catchAsync(async (req, res) => {
  const getAllsafetyAndSecurity = await safetyAndSecurityServices.getAllSafetyAndSecurity();
  res.send(getAllsafetyAndSecurity);
});

const getSafetyAndSecurityById = catchAsync(async (req, res) => {
  const singlesafetyAndSecurity = await safetyAndSecurityServices.getSafetyAndSecurityById(req.params.safetyAndSecurityId);
  if (!singlesafetyAndSecurity) {
    throw new ApiError(httpStatus.NOT_FOUND, 'safetyAndSecurity not found');
  }
  res.send(singlesafetyAndSecurity);
});

const updateSafetyAndSecurityById = catchAsync(async (req, res) => {
  const updateLocationType = await safetyAndSecurityServices.updateSafetyAndSecurityyId(
    req.params.safetyAndSecurityId,
    req.body
  );
  res.send(updateLocationType);
});

const deleteSafetyAndSecurityById = catchAsync(async (req, res) => {
  const deleteLocationType = await safetyAndSecurityServices.deleteSafetyAndSecurityById(req.params.safetyAndSecurityId);
  res.status(httpStatus.NO_CONTENT).send(deleteLocationType);
});

module.exports = {
  createSafetyAndSecurity,
  getAllSafetyAndSecurity,
  getSafetyAndSecurityById,
  updateSafetyAndSecurityById,
  deleteSafetyAndSecurityById,
};
