const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { studentAdmissionService } = require('../../services');

const createStudentAdmission = catchAsync(async (req, res) => {
  const student = await studentAdmissionService.createStudentAdmissionType(req.body);
  res.status(httpStatus.CREATED).send(student);
});

const getAllStudentAdmissions = catchAsync(async (req, res) => {
  const result = await studentAdmissionService.getAllStudentAdmissionType();
  res.send(result);
});

const getStudentAdmission = catchAsync(async (req, res) => {
  const student = await studentAdmissionService.getStudentAdmissionTypeById(req.params.studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Admission not found');
  }
  res.send(student);
});

const updateStudentAdmission = catchAsync(async (req, res) => {
  const student = await studentAdmissionService.updateStudentAdmissionTypeById(req.params.studentId, req.body);
  res.send(student);
});

const deleteStudentAdmission = catchAsync(async (req, res) => {
  await studentAdmissionService.deleteStudentAdmissionTypeById(req.params.studentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStudentAdmission,
  getAllStudentAdmissions,
  getStudentAdmission,
  updateStudentAdmission,
  deleteStudentAdmission,
};
