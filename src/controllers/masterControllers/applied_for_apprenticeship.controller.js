const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const AppliedForApprenticeship = require('../../services/masterService/applied_for_apprenticeship.service');

const createAppliedForApprenticeship = catchAsync(async (req, res) => {
  const data = await AppliedForApprenticeship.createAppliedForApprenticeship(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllAppliedForApprenticeship = catchAsync(async (req, res) => {
  const result = await AppliedForApprenticeship.getAllAppliedForApprenticeship();
  res.send(result);
});

const getAppliedForApprenticeshipById = catchAsync(async (req, res) => {
  const result = await AppliedForApprenticeship.getAppliedForApprenticeshipById(req.params.apprenticeshipId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applied for apprenticeship not found');
  }
  res.send(result);
});

const updateAppliedForApprenticeshipById = catchAsync(async (req, res) => {
  const result = await AppliedForApprenticeship.updateAppliedForApprenticeshipById(req.params.apprenticeshipId, req.body);
  res.send(result);
});

const deleteAppliedForApprenticeshipById = catchAsync(async (req, res) => {
  await AppliedForApprenticeship.deleteAppliedForApprenticeshipById(req.params.apprenticeshipId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAppliedForApprenticeship,
  getAllAppliedForApprenticeship,
  getAppliedForApprenticeshipById,
  updateAppliedForApprenticeshipById,
  deleteAppliedForApprenticeshipById,
};
