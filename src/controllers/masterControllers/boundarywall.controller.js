const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const BoundaryWallService = require('../../services/masterService/boundarywall.services');

const createboundarywall = catchAsync(async (req, res) => {
  const boundarywall = await BoundaryWallService.createboundarywall(req.body);
  res.status(httpStatus.CREATED).send(boundarywall);
});

const getAllboundarywall = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await BoundaryWallService.getAllboundarywall(filter, options);
  res.send(result);
});

const getboundarywallById = catchAsync(async (req, res) => {
  const boundarywall = await BoundaryWallService.getboundarywallById(req.params.boundarywallId);
  if (!boundarywall) {
    throw new ApiError(httpStatus.NOT_FOUND, 'boundarywall not found');
  }
  res.send(boundarywall);
});

const updateboundarywall = catchAsync(async (req, res) => {
  const boundarywall = await BoundaryWallService.updateboundarywallById(req.params.boundarywallId, req.body);
  res.send(boundarywall);
});

const deleteboundarywall = catchAsync(async (req, res) => {
  await BoundaryWallService.deleteboundarywallById(req.params.boundarywallId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createboundarywall,
  getAllboundarywall,
  getboundarywallById,
  updateboundarywall,
  deleteboundarywall,
};
