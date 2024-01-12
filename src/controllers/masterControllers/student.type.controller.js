const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { studentTypeService } = require('../../services');

const createStudentType = catchAsync(async (req, res) => {
  const student = await studentTypeService.createStudentType(req.body);
  res.status(httpStatus.CREATED).send(student);
});

const getAllStudentTypes = catchAsync(async (req, res) => {
  const result = await studentTypeService.getAllStudentType();
  res.send(result);
});

const getStudentType = catchAsync(async (req, res) => {
  const student = await studentTypeService.getStudentTypeById(req.params.studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Social category not found');
  }
  res.send(student);
});

const updateStudentType = catchAsync(async (req, res) => {
  const student = await studentTypeService.updateStudentTypeById(req.params.studentId, req.body);
  res.send(student);
});

const deleteStudentType = catchAsync(async (req, res) => {
  await studentTypeService.deleteStudentTypeById(req.params.studentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStudentType,
  getAllStudentTypes,
  getStudentType,
  updateStudentType,
  deleteStudentType,
};
