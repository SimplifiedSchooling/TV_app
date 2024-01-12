const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { broadcastService } = require('../services');

const createboardcast = catchAsync(async (req, res) => {
  const boardcast = await broadcastService.createBoardcast(req.body);
  res.status(httpStatus.CREATED).send(boardcast);
});

const getAllboardcast = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['Broadcast']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await broadcastService.getAllBoardcasts(filter, options);
  res.send(result);
});

const getboardcastById = catchAsync(async (req, res) => {
  const Broadcast = await broadcastService.getBoardcastById(req.params.broadcastId);
  if (!Broadcast) {
    throw new ApiError(httpStatus.NOT_FOUND, 'broadcast not found');
  }
  res.send(Broadcast);
});

const updateboardcast = catchAsync(async (req, res) => {
  const boardcast = await broadcastService.updateBoardcastById(req.params.broadcastId, req.body);
  res.send(boardcast);
});

const deleteboardcast = catchAsync(async (req, res) => {
  await broadcastService.deleteBoardcastById(req.params.broadcastId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createboardcast,
  getAllboardcast,
  getboardcastById,
  updateboardcast,
  deleteboardcast,
};
