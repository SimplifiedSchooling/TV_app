const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const StudentAttendanceService = require('../services/studentattendance.service');

const createStudentAttendance = catchAsync(async (req, res) => {
  const StudentAttendance = await StudentAttendanceService.createStudentAttendance(req.body);
  res.status(httpStatus.CREATED).send(StudentAttendance);
});

const getAllStudentAttendance = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await StudentAttendanceService.getAllStudentAttendance(filter, options);
  res.send(result);
});

const getStudentAttendanceById = catchAsync(async (req, res) => {
  const StudentAttendance = await StudentAttendanceService.getStudentAttendanceById(req.params.StudentAttendanceId);
  if (!StudentAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentAttendance not found');
  }
  res.send(StudentAttendance);
});

const getAttendanceByclassSectionDate = catchAsync(async (req, res) => {
  const { classId, sectionId, date, scode } = await req.query;
  const data = await StudentAttendanceService.getAttendanceStats(classId, sectionId, date, scode);

  res.status(200).json({ data });
});
const updateStudentAttendance = catchAsync(async (req, res) => {
  const StudentAttendance = await StudentAttendanceService.updateStudentAttendanceById(
    req.params.StudentAttendanceId,
    req.body
  );
  res.send(StudentAttendance);
});

const deleteStudentAttendance = catchAsync(async (req, res) => {
  await StudentAttendanceService.deleteStudentAttendanceById(req.params.StudentAttendanceId);
  res.status(httpStatus.NO_CONTENT).send();
});

const getWeekStatus = catchAsync(async (req, res) => {
  const { scode, classId, sectionId, date } = req.query;
  const weekStatus = await StudentAttendanceService.getWeekReport(scode, classId, sectionId, date);
  res.send(weekStatus);
});

const todaysAttendanceForSchool = catchAsync(async (req, res) => {
  const { scode, date } = req.query;
  const todayAttendance = await StudentAttendanceService.getStudentAttendanceSummary(scode, date);
  res.send(todayAttendance);
});

const getClasswiseAttendanceStudentList = catchAsync(async (req, res) => {
  const { campusId, date } = req.query;
  const classwiseAttendanceStudentList = await StudentAttendanceService.getClasswiseStudentAttendanceList(campusId, date);
  res.send(classwiseAttendanceStudentList);
});

// const attendenceOfSchool = catchAsync(async (req, res) => {
//   const { scode, date } = req.query;
//   const todayAttendance = await StudentAttendanceService.getStudentAttendanceSummary(scode, date);
//   res.send(todayAttendance);
// });

// const getAttendanceStatsController = async (req, res, next) => {
//   try {

//     const { classId, sectionId, date } = req.query;

//     const stats = await StudentAttendanceService.getAttendanceStats(classId, sectionId, date);

//     return res.json(stats);
//   } catch (error) {
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

const updateAttendanceStatusAndRemark = catchAsync(async (req, res) => {
  const { scode, classId, sectionId, date, entryUpdates } = req.body;
  const result = await StudentAttendanceService.updateStudentAttendance(scode, classId, sectionId, date, entryUpdates);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance not updated');
  }
  res.status(httpStatus.OK).json({ success: true, message: 'Attendance updated successfully' });
});

module.exports = {
  createStudentAttendance,
  getAllStudentAttendance,
  getStudentAttendanceById,
  updateStudentAttendance,
  deleteStudentAttendance,
  getAttendanceByclassSectionDate,
  getWeekStatus,
  todaysAttendanceForSchool,
  getClasswiseAttendanceStudentList,
  // getAttendanceStatsController,
  updateAttendanceStatusAndRemark,
};
