const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { teacherService } = require('../../services');

const createTypeOfTeacher = catchAsync(async (req, res) => {
  const data = await teacherService.createTeacherType(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllTypeOfTeacher = catchAsync(async (req, res) => {
  const result = await teacherService.getAllTeacherType();
  res.send(result);
});

const getTypeOfTeacher = catchAsync(async (req, res) => {
  const teacher = await teacherService.getTeacherTypeById(req.params.teacherId);
  if (!teacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type Of Teacher not found');
  }
  res.send(teacher);
});

const updateTypeOfTeacher = catchAsync(async (req, res) => {
  const teacher = await teacherService.updateTeacherTypeById(req.params.teacherId, req.body);
  res.send(teacher);
});

const deleteTypeOfTeacher = catchAsync(async (req, res) => {
  await teacherService.deleteTeacherTypeById(req.params.teacherId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTypeOfTeacher,
  getAllTypeOfTeacher,
  getTypeOfTeacher,
  updateTypeOfTeacher,
  deleteTypeOfTeacher,
};
