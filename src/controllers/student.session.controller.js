const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const studentSessionService = require('../services/student.session.service');

const createStudentSession = catchAsync(async (req, res) => {
  const newStudentSession = await studentSessionService.createStudentSession(req.body);
  res.status(httpStatus.CREATED).send(newStudentSession);
});

const getStudentSession = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['session_Id']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudentSession = await studentSessionService.getAllStudentSession(filter, options);
  res.send(allStudentSession);
});

const getSingleStudentSession = catchAsync(async (req, res) => {
  const singleStudentSession = await studentSessionService.getStudentSessionById(req.params.studentSessionId);
  if (!singleStudentSession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student_session not found');
  }
  res.send(singleStudentSession);
});

const getStudentByScodeAndClassId = catchAsync(async (req, res) => {
  const { scode, classId } = req.params;
  const Student = await studentSessionService.getStudentByScodeAndClassId(scode, classId);
  if (!Student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  res.send(Student);
});

const getStudentsByClassAndSection = async (req, res) => {
  const { scode, classId, sectionId, date } = req.query;
  const data = await studentSessionService.getStudentsByClassAndSection(scode, classId, sectionId, date);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Internal Server Error');
  }
  res.status(200).json({ data });
};

const getStudentsListByClassAndSection = async (req, res) => {
  const { scode, classId, sectionId } = req.query;
  const data = await studentSessionService.getStudentsListByClassAndSection(scode, classId, sectionId);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Internal Server Error');
  }
  res.status(200).json({ data });
};

const updateSingleStudentSession = catchAsync(async (req, res) => {
  const updatedStudentSession = await studentSessionService.updateStudentSessionById(req.params.studentSessionId, req.body);
  res.send(updatedStudentSession);
});
const getStudentByStudentId = catchAsync(async (req, res) => {
  const Student = await studentSessionService.getStudentyId(req.params.studentId);
  res.send(Student);
});

const deleteSingleStudentSession = catchAsync(async (req, res) => {
  const deletedStudentSession = await studentSessionService.deleteStudentSessionById(req.params.studentSessionId);
  res.status(httpStatus.NO_CONTENT).send(deletedStudentSession);
});

module.exports = {
  createStudentSession,
  getStudentSession,
  getSingleStudentSession,
  updateSingleStudentSession,
  deleteSingleStudentSession,
  getStudentsByClassAndSection,
  getStudentByScodeAndClassId,
  getStudentByStudentId,
  getStudentsListByClassAndSection,
};
