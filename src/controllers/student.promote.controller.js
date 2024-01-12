const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { studentPromoteServices } = require('../services');

const createStudentPromote = catchAsync(async (req, res) => {
  const newStudentPromote = await studentPromoteServices.createStudentPromote(req.body);
  res.status(httpStatus.CREATED).send(newStudentPromote);
});

const getStudentPromotes = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['studioName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudentPromotes = await studentPromoteServices.getAllStudentPromotes(filter, options);
  res.send(allStudentPromotes);
});

const getStudentPromote = catchAsync(async (req, res) => {
  const singleStudentPromote = await studentPromoteServices.getStudentPromoteById(req.params.studentPromoteId);
  if (!singleStudentPromote) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentPromote not found');
  }
  res.send(singleStudentPromote);
});

const updateStudentPromote = catchAsync(async (req, res) => {
  const updatedStudentPromote = await studentPromoteServices.updateStudentPromoteById(req.params.studentPromoteId, req.body);
  res.send(updatedStudentPromote);
});

const deleteStudentPromote = catchAsync(async (req, res) => {
  const deletedStudentPromote = await studentPromoteServices.deleteStudentPromoteById(req.params.studentPromoteId);
  res.status(httpStatus.NO_CONTENT).send(deletedStudentPromote);
});

const createStudentData = catchAsync(async (req, res) => {
  const { currentClassId, currentSectionId, nextSessionId, nextClassId, scode, studentData } = req.body;
  const createdRecords = await studentPromoteServices.createStudentData({
    currentClassId,
    currentSectionId,
    nextSessionId,
    nextClassId,
    scode,
    studentData,
  });

  res.status(201).json({ createdRecords });
});

const getStudentPromoteData = catchAsync(async (req, res) => {
  const { classId, sessionId } = req.params;
  const result = await studentPromoteServices.getStudentPromoteData(classId, sessionId);

  res.status(200).json(result);
});

module.exports = {
  createStudentPromote,
  getStudentPromotes,
  getStudentPromote,
  updateStudentPromote,
  deleteStudentPromote,
  createStudentData,
  getStudentPromoteData,
};
