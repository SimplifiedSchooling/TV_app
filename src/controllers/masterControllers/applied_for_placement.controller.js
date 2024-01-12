const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const AppliedForPlacement = require('../../services/masterService/applied_for_placement.service');

const createAppliedForPlacement = catchAsync(async (req, res) => {
  const data = await AppliedForPlacement.createAppliedForPlacement(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllAppliedForPlacement = catchAsync(async (req, res) => {
  const result = await AppliedForPlacement.getAllAppliedForPlacement();
  res.send(result);
});

const getAppliedForPlacementById = catchAsync(async (req, res) => {
  const result = await AppliedForPlacement.getAppliedForPlacementById(req.params.placementId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applied for placement not found');
  }
  res.send(result);
});

const updateAppliedForPlacementById = catchAsync(async (req, res) => {
  const result = await AppliedForPlacement.updateAppliedForPlacementById(req.params.placementId, req.body);
  res.send(result);
});

const deleteAppliedForPlacementById = catchAsync(async (req, res) => {
  await AppliedForPlacement.deleteAppliedForPlacementById(req.params.placementId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAppliedForPlacement,
  getAllAppliedForPlacement,
  getAppliedForPlacementById,
  updateAppliedForPlacementById,
  deleteAppliedForPlacementById,
};
