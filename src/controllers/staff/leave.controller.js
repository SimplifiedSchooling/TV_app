const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const LeaveService = require('../../services/staff/leave.service');
const { filterPath } = require('../../utils/s3middleware');

const createLeave = catchAsync(async (req, res) => {
  const { file } = req;
  req.body.files = await filterPath(file.location);
  const Leave = await LeaveService.createLeave(req.body);
  res.status(httpStatus.CREATED).send(Leave);
});

const getAllLeave = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await LeaveService.getAllLeave(filter, options);
  res.send(result);
});

const getLeaveById = catchAsync(async (req, res) => {
  const Leave = await LeaveService.getLeaveById(req.params.LeaveId);
  if (!Leave) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Leave not found');
  }
  res.send(Leave);
});

const updateLeave = catchAsync(async (req, res) => {
  const { file } = req;
  req.body.files = await filterPath(file.location);
  const Leave = await LeaveService.updateLeaveById(req.params.LeaveId, req.body);
  res.send(Leave);
});

const deleteLeave = catchAsync(async (req, res) => {
  await LeaveService.deleteLeaveById(req.params.LeaveId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLeave,
  getAllLeave,
  getLeaveById,
  updateLeave,
  deleteLeave,
};
