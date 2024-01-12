const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { studentleftService } = require('../services');

const createStudentLeft = catchAsync(async (req, res) => {
  const data = await studentleftService.createStudentLeft(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllStudentLeft = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await studentleftService.getAllStudentLeft(filter, options);
  res.send(result);
});

const getStudentLeft = catchAsync(async (req, res) => {
  const result = await studentleftService.getStudentLeftById(req.params.studentleftId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Left Reason not found');
  }
  res.send(result);
});

const updateStudentLeft = catchAsync(async (req, res) => {
  const result = await studentleftService.updateStudentLeftById(req.params.studentleftId, req.body);
  res.send(result);
});

const deleteStudentLeft = catchAsync(async (req, res) => {
  const result = await studentleftService.deleteStudentLeftById(req.params.studentleftId);
  res.status(httpStatus.NO_CONTENT).send(result);
});

module.exports = {
  createStudentLeft,
  getAllStudentLeft,
  getStudentLeft,
  updateStudentLeft,
  deleteStudentLeft,
};
