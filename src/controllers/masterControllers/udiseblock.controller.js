const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const udiseblockService = require('../../services/masterService/udiseblock.service');

const createudiseblock = catchAsync(async (req, res) => {
  const udiseblock = await udiseblockService.createUdiseblock(req.body);
  res.status(httpStatus.CREATED).send(udiseblock);
});

const getAlludiseblock = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await udiseblockService.getAllUdiseblock(filter, options);
  res.send(result);
});

const getudiseblockById = catchAsync(async (req, res) => {
  const udiseblock = await udiseblockService.getUdiseblockById(req.params.udiseblockId);
  if (!udiseblock) {
    throw new ApiError(httpStatus.NOT_FOUND, 'udiseblock not found');
  }
  res.send(udiseblock);
});

const updateudiseblock = catchAsync(async (req, res) => {
  const udiseblock = await udiseblockService.updateUdiseblockById(req.params.udiseblockId, req.body);
  res.send(udiseblock);
});

const deleteudiseblock = catchAsync(async (req, res) => {
  await udiseblockService.deleteUdiseblockById(req.params.udiseblockId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createudiseblock,
  getAlludiseblock,
  getudiseblockById,
  updateudiseblock,
  deleteudiseblock,
};
