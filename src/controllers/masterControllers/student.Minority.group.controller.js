const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { studentMinorityService } = require('../../services');

const createStudentMinorityGroup = catchAsync(async (req, res) => {
  const student = await studentMinorityService.createStudentMinority(req.body);
  res.status(httpStatus.CREATED).send(student);
});

const getAllStudentMinorityGroups = catchAsync(async (req, res) => {
  const result = await studentMinorityService.getAllStudentMinority();
  res.send(result);
});

const getStudentMinorityGroup = catchAsync(async (req, res) => {
  const student = await studentMinorityService.getStudentMinorityById(req.params.studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Social category not found');
  }
  res.send(student);
});

const updateStudentMinorityGroup = catchAsync(async (req, res) => {
  const student = await studentMinorityService.updateStudentMinorityById(req.params.studentId, req.body);
  res.send(student);
});

const deleteStudentMinorityGroup = catchAsync(async (req, res) => {
  await studentMinorityService.deleteStudentMinorityById(req.params.studentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStudentMinorityGroup,
  getAllStudentMinorityGroups,
  getStudentMinorityGroup,
  updateStudentMinorityGroup,
  deleteStudentMinorityGroup,
};
