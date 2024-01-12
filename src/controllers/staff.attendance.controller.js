const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const staffAttendanceService = require('../services/staff.attendance.service');

const newStaffAttendance = catchAsync(async (req, res) => {
  const StaffAttendance = await staffAttendanceService.createStaffAttendance(req.body);
  res.status(httpStatus.CREATED).send(StaffAttendance);
});

const getAllStaffAttendanceData = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await staffAttendanceService.getAllStaffAttendance(filter, options);
  res.send(result);
});

const getSingleStaffAttendance = catchAsync(async (req, res) => {
  const StaffAttendance = await staffAttendanceService.getStaffAttendanceById(req.params.StaffAttendanceId);
  if (!StaffAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StaffAttendance not found');
  }
  res.send(StaffAttendance);
});

// const getAttendanceByclassSectionDate = catchAsync(async (req, res) => {
//   const { classId, sectionId, date, scode } = await req.query;
//   const data = await staffAttendanceService.getAttendanceStats(classId, sectionId, date, scode);

//   res.status(200).json({ data });
// });
const updateStaffAttendance = catchAsync(async (req, res) => {
  const StaffAttendance = await staffAttendanceService.updateStaffAttendanceById(req.params.StaffAttendanceId, req.body);
  res.send(StaffAttendance);
});

const deleteStaffAttendance = catchAsync(async (req, res) => {
  await staffAttendanceService.deleteStaffAttendanceById(req.params.StaffAttendanceId);
  res.status(httpStatus.NO_CONTENT).send();
});

// const getWeekStatus = catchAsync(async (req, res) => {
//   const { scode, classId, sectionId, date } = req.query;
//   const weekStatus = await staffAttendanceService.getWeekReport(scode, classId, sectionId, date);
//   res.send(weekStatus);
// });

// const todaysAttendanceForSchool = catchAsync(async (req, res) => {
//   const { scode, date } = req.query;
//   const todayAttendance = await staffAttendanceService.getStaffAttendanceSummary(scode, date);
//   res.send(todayAttendance);
// });

// const getClasswiseAttendanceStudentList = catchAsync(async (req, res) => {
//   const { campusId, date } = req.query;
//   const classwiseAttendanceStudentList = await staffAttendanceService.getClasswiseStaffAttendanceList(campusId, date);
//   res.send(classwiseAttendanceStudentList);
// });

module.exports = {
  newStaffAttendance,
  getAllStaffAttendanceData,
  getSingleStaffAttendance,
  updateStaffAttendance,
  deleteStaffAttendance,
  //   getAttendanceByclassSectionDate,
  //   getWeekStatus,
  //   todaysAttendanceForSchool,
  //   getClasswiseAttendanceStudentList,
};
