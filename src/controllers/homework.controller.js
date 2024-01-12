const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { HomeworkSerices } = require('../services');

const createHomework = catchAsync(async (req, res) => {
  const Homework = await HomeworkSerices.createHomework(req.body);
  res.status(httpStatus.CREATED).send(Homework);
});

const getAllHomework = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await HomeworkSerices.queryHomework(filter, options);
  res.send(result);
});

const getHomeworkById = catchAsync(async (req, res) => {
  const homework = await HomeworkSerices.getHomeworkById(req.params.homeworkId);
  if (!homework) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Homework not found');
  }
  res.send(homework);
});

const getHomeworkByFilterId = catchAsync(async (req, res) => {
  const { boardId, mediumId, classId, bookId, subjectId, chapterId } = req.query;
  const homework = await HomeworkSerices.getHomeworkByFilterId(boardId, mediumId, classId, bookId, subjectId, chapterId);
  if (!homework) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Homework not found');
  }
  res.send(homework);
});

const updateHomework = catchAsync(async (req, res) => {
  const updateHomeworks = await HomeworkSerices.updateHomeworkById(req.params.homeworkId, req.body);
  res.send(updateHomeworks);
});

const deleteHomework = catchAsync(async (req, res) => {
  await HomeworkSerices.deleteHomeworkById(req.params.homeworkId);
  res.status(httpStatus.OK).send();
});

module.exports = {
  createHomework,
  getAllHomework,
  getHomeworkByFilterId,
  getHomeworkById,
  updateHomework,
  deleteHomework,
};
