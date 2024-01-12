const httpStatus = require('http-status');
const { join } = require('path');
const csv = require('csvtojson');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const studentService = require('../services/student.service');

const staticFolder = join(__dirname, '../../');
const uploadsFolder = join(staticFolder, 'uploads');

const bulkUpload = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await studentService.bulkUpload(payload);
  res.status(httpStatus.CREATED).send(result);
});

const bulkUploadFile = catchAsync(async (req, res) => {
  const { sessionId, classId, sectionId } = req.params;
  if (req.file) {
    const csvFilePath = join(uploadsFolder, req.file.filename);
    const csvJsonArray = await csv().fromFile(csvFilePath);
    const staff = await studentService.bulkUpload(null, csvJsonArray, sessionId, classId, sectionId);
    res.status(httpStatus.CREATED).send(staff);
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Missing file');
  }
});

const createStudent = catchAsync(async (req, res) => {
  const newStudent = await studentService.createStudent(req.body);
  res.status(httpStatus.CREATED).send(newStudent);
});

const getStudents = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudents = await studentService.getAllStudents(filter, options);
  res.send(allStudents);
});

const getStudent = catchAsync(async (req, res) => {
  const singleStudent = await studentService.getStudentById(req.params.studentId);
  if (!singleStudent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  res.send(singleStudent);
});

const getStudentByScode = catchAsync(async (req, res) => {
  const student = await studentService.getStudentScode(req.params.scode);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  res.send(student);
});

const updateStudent = catchAsync(async (req, res) => {
  const updatedStudent = await studentService.updateStudentById(req.params.studentId, req.body);
  res.send(updatedStudent);
});

const deleteStudent = catchAsync(async (req, res) => {
  const deletedStudent = await studentService.deleteStudentById(req.params.studentId);
  res.status(httpStatus.NO_CONTENT).send(deletedStudent);
});

const getAllStudentOfLeaveCert = catchAsync(async (req, res) => {
  const { name, scode } = req.query;
  const filter = { name, scode, laboratoryDue: true, libraryDue: true, feedDue: true, otherDue: true };
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudents = await studentService.getAllStudentOfLeaveCert(filter, options);
  res.send(allStudents);
});

module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  bulkUpload,
  bulkUploadFile,
  getStudentByScode,
  getAllStudentOfLeaveCert,
};
