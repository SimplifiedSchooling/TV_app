const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { staffAttendanceService } = require('../../services');

const createAttendance = catchAsync(async (req, res) => {
  const newAttendance = await staffAttendanceService.createAttendance(req.body);
  res.status(httpStatus.CREATED).send(newAttendance);
});

const getAttendance = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['date']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allAttendance = await staffAttendanceService.getAllAttendance(filter, options);
  res.send(allAttendance);
});

const getSingleAttendance = catchAsync(async (req, res) => {
  const singleAttendance = await staffAttendanceService.getAttendanceById(req.params.attendanceId);
  if (!singleAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance not found');
  }
  res.send(singleAttendance);
});

const updateSingleAttendance = catchAsync(async (req, res) => {
  const updateddClass = await staffAttendanceService.updateAttendanceById(req.params.attendanceId, req.body);
  res.send(updateddClass);
});

const deleteSingleAttendance = catchAsync(async (req, res) => {
  const deletedAttendance = await staffAttendanceService.deleteAttendanceById(req.params.attendanceId);
  res.status(httpStatus.NO_CONTENT).send(deletedAttendance);
});

module.exports = {
  createAttendance,
  getAttendance,
  getSingleAttendance,
  updateSingleAttendance,
  deleteSingleAttendance,
};
