const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const LectureAttendanceService = require('../services/lecture.attendance.service');
const studentSessionService = require('../services/student.session.service');

const newLectureAttendance = catchAsync(async (req, res) => {
  const LectureAttendance = await LectureAttendanceService.createLectureAttendance(req.body);
  res.status(httpStatus.CREATED).send(LectureAttendance);
});

const getAllLectureAttendanceData = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await LectureAttendanceService.getAllLectureAttendance(filter, options);
  res.send(result);
});

const getSingleLectureAttendance = catchAsync(async (req, res) => {
  const LectureAttendance = await LectureAttendanceService.getLectureAttendanceById(req.params.LectureAttendanceId);
  if (!LectureAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'LectureAttendance not found');
  }
  res.send(LectureAttendance);
});

// const getAttendanceByclassSectionDate = catchAsync(async (req, res) => {
//   const { classId, sectionId, date, scode } = await req.query;
//   const data = await LectureAttendanceService.getAttendanceStats(classId, sectionId, date, scode);

//   res.status(200).json({ data });
// });
const updateLectureAttendance = catchAsync(async (req, res) => {
  const LectureAttendance = await LectureAttendanceService.updateLectureAttendanceById(
    req.params.LectureAttendanceId,
    req.body
  );
  res.send(LectureAttendance);
});

const deleteLectureAttendance = catchAsync(async (req, res) => {
  await LectureAttendanceService.deleteLectureAttendanceById(req.params.LectureAttendanceId);
  res.status(httpStatus.NO_CONTENT).send();
});

// const getWeekStatus = catchAsync(async (req, res) => {
//   const { scode, classId, sectionId, date } = req.query;
//   const weekStatus = await LectureAttendanceService.getWeekReport(scode, classId, sectionId, date);
//   res.send(weekStatus);
// });

// const todaysAttendanceForSchool = catchAsync(async (req, res) => {
//   const { scode, date } = req.query;
//   const todayAttendance = await LectureAttendanceService.getLectureAttendanceSummary(scode, date);
//   res.send(todayAttendance);
// });

// const getClasswiseAttendanceStudentList = catchAsync(async (req, res) => {
//   const { campusId, date } = req.query;
//   const classwiseAttendanceStudentList = await LectureAttendanceService.getClasswiseLectureAttendanceList(campusId, date);
//   res.send(classwiseAttendanceStudentList);
// });

const createOrUpdateLectureAttendance = catchAsync(async (req, res) => {
  const lectureAttendanceBody = req.body;
  const result = await LectureAttendanceService.createOrUpdateLectureAttendance(lectureAttendanceBody);
  if (!result) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to create or update lecture attendance');
  }
  res.status(httpStatus.OK).json({ success: true, message: 'Lecture attendance created or updated successfully' });
});

const getStudentsByClassAndSection = async (req, res) => {
  const { scode, classId, sectionId, date } = req.body;
  const data = await studentSessionService.getStudentsByClassAndSectionForLectureAttendance(scode, classId, sectionId, date);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Internal Server Error');
  }
  res.status(200).json({ data });
};

module.exports = {
  newLectureAttendance,
  getAllLectureAttendanceData,
  getSingleLectureAttendance,
  updateLectureAttendance,
  deleteLectureAttendance,
  //   getAttendanceByclassSectionDate,
  //   getWeekStatus,
  //   todaysAttendanceForSchool,
  //   getClasswiseAttendanceStudentList,
  createOrUpdateLectureAttendance,
  getStudentsByClassAndSection,
};
