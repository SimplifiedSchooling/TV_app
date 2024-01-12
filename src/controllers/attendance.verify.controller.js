const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { attendanceVerifyService } = require('../services');

const createAttendanceVerify = catchAsync(async (req, res) => {
  req.body.file = req.file.path;
  const attendanceVerify = await attendanceVerifyService.createAttendanceVerify(req.body);
  res.status(httpStatus.CREATED).send(attendanceVerify);
});

const queryAttendanceVerify = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await attendanceVerifyService.queryAttendanceVerify(filter, options);
  res.send(result);
});

const getAttendanceVerify = catchAsync(async (req, res) => {
  const result = await attendanceVerifyService.getAttendanceVerifyById(req.params.Id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'attendance verify not found');
  }
  res.send(result);
});

const UpdateAttendanceVerify = catchAsync(async (req, res) => {
  const result = await attendanceVerifyService.updateAttendanceerifyById(req.params.Id, req.body);
  res.send(result);
});

const deleteAttendanceVerify = catchAsync(async (req, res) => {
  await attendanceVerifyService.deleteAttendanceVerifyById(req.params.Id);
  res.status(httpStatus.NO_CONTENT).send();
});

const getAttendanceDetailsController = async (req, res) => {
  const { classId, sectionId, date } = req.query;
  const result = await attendanceVerifyService.getAttendanceDetails(classId, sectionId, date);

  if (result.error) {
    return res.status(404).json({ error: result.error });
  }

  res.json(result);
};
module.exports = {
  createAttendanceVerify,
  queryAttendanceVerify,
  getAttendanceVerify,
  UpdateAttendanceVerify,
  deleteAttendanceVerify,
  getAttendanceDetailsController,
};
