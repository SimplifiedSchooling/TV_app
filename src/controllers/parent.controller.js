const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { parentService } = require('../services');

const createParent = catchAsync(async (req, res) => {
  const parent = await parentService.createParent(req.body);
  res.status(httpStatus.CREATED).send(parent);
});

const getAllParent = catchAsync(async (req, res) => {
  const result = await parentService.getAllParent();
  res.send(result);
});

const getByIdParent = catchAsync(async (req, res) => {
  const parent = await parentService.getParentById(req.params.parentId);
  if (!parent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'parent not found');
  }
  res.send(parent);
});

const updateParentById = catchAsync(async (req, res) => {
  const parent = await parentService.updateParentById(req.params.parentId, req.body);
  res.send(parent);
});

const deleteParentById = catchAsync(async (req, res) => {
  await parentService.deleteParentById(req.params.parentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createParent,
  getAllParent,
  getByIdParent,
  updateParentById,
  deleteParentById,
};
