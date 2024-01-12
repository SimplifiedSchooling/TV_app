const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { hostelService } = require('../services');

const createHostel = catchAsync(async (req, res) => {
  const data = await hostelService.createHostel(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const queryHostel = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['hostelName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await hostelService.queryHostel(filter, options);
  res.send(result);
});

const getHostel = catchAsync(async (req, res) => {
  const result = await hostelService.getHostelById(req.params.hostelId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hostel not found');
  }
  res.send(result);
});

const updateHostel = catchAsync(async (req, res) => {
  const result = await hostelService.updateHostelById(req.params.hostelId, req.body);
  res.send(result);
});

const deleteHostel = catchAsync(async (req, res) => {
  await hostelService.deleteHostelById(req.params.hostelId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createHostel,
  queryHostel,
  getHostel,
  updateHostel,
  deleteHostel,
};
