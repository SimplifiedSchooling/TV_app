const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const ClassroomAvailableService = require('../../services/masterService/Classroom_available.service');

const createclassroom = catchAsync(async (req, res) => {
  const classroom = await ClassroomAvailableService.createclassroom(req.body);
  res.status(httpStatus.CREATED).send(classroom);
});

const getAllclassroom = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await ClassroomAvailableService.getAllclassroom(filter, options);
  res.send(result);
});

const getclassroomById = catchAsync(async (req, res) => {
  const classroom = await ClassroomAvailableService.getclassroomById(req.params.classroomId);
  if (!classroom) {
    throw new ApiError(httpStatus.NOT_FOUND, 'classroom not found');
  }
  res.send(classroom);
});

const updateclassroom = catchAsync(async (req, res) => {
  const classroom = await ClassroomAvailableService.updateclassroomById(req.params.classroomId, req.body);
  res.send(classroom);
});

const deleteclassroom = catchAsync(async (req, res) => {
  await ClassroomAvailableService.deleteclassroomById(req.params.classroomId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createclassroom,
  getAllclassroom,
  getclassroomById,
  updateclassroom,
  deleteclassroom,
};
