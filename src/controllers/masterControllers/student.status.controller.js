const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const StudentStatusServices = require('../../services/masterService/student.status.service');
const ApiError = require('../../utils/ApiError');

const createStudentStatus = catchAsync(async (req, res) => {
  const studentStatus = await StudentStatusServices.createStudentStatus(req.body);
  res.status(httpStatus.CREATED).send(studentStatus);
});

const getAllStudentStatus = catchAsync(async (req, res) => {
  const allStudentStatus = await StudentStatusServices.getAllStudentStatus();
  res.send(allStudentStatus);
});

const getStudentStatusById = catchAsync(async (req, res) => {
  const singleStudentStatus = await StudentStatusServices.getStudentStatusById(req.params.studentStatusId);
  if (!singleStudentStatus) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentStatusnot found');
  }
  res.send(singleStudentStatus);
});

const updateStudentStatusById = catchAsync(async (req, res) => {
  const updateStudentStatus = await StudentStatusServices.updateStudentStatusyId(req.params.studentStatusId, req.body);
  res.send(updateStudentStatus);
});

const deleteistudentStatusById = catchAsync(async (req, res) => {
  const deleteStudentStatus = await StudentStatusServices.deleteStudentStatusById(req.params.studentStatusId);
  res.status(httpStatus.NO_CONTENT).send(deleteStudentStatus);
});

module.exports = {
  createStudentStatus,
  getAllStudentStatus,
  getStudentStatusById,
  updateStudentStatusById,
  deleteistudentStatusById,
};
