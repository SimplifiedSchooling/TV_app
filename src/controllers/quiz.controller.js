const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { quizeService } = require('../services');

const createQuize = catchAsync(async (req, res) => {
  const quize = await quizeService.createQuize(req.body);
  res.status(httpStatus.CREATED).send(quize);
});

const uploadFiles = catchAsync(async (req, res) => {
  const quizData = await quizeService.uploadQuiz(req.body);
  res.status(httpStatus.CREATED).send(quizData);
});

const getAllQuize = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['quizName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await quizeService.queryQuize(filter, options);
  res.send(result);
});

const getAllNotSelected = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['quizName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await quizeService.QuizeNotSelected(filter, options);
  res.send(result);
});

const getQuizeById = catchAsync(async (req, res) => {
  const quize = await quizeService.getQuizeById(req.params.quizeId);
  if (!quize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  res.send(quize);
});

const getQuizeByFilter = catchAsync(async (req, res) => {
  const { boardId, mediumId, classId, bookId, subjectId, chapterId } = req.query;
  // const filter = { boardId, mediumId, classId, bookId, subjectId, chapterId };
  const options = pick(req.query, ['sortBy', 'limit', 'page']);

  const quizes = await quizeService.getQuizeByFilter(boardId, mediumId, classId, bookId, subjectId, chapterId, options);

  if (!quizes) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quizes not found');
  }

  res.send(quizes);
});

const getQuizeByChapterId = catchAsync(async (req, res) => {
  const quize = await quizeService.getQuizeBychapterId(req.params.chapterId);
  if (!quize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  res.send(quize);
});

const getQuizeByQuizName = catchAsync(async (req, res) => {
  const quize = await quizeService.getQuizeByQestion(req.body.quizName);
  if (!quize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  res.send(quize);
});

const getQuizByClassIdAndDayWise = catchAsync(async (req, res) => {
  const quize = await quizeService.getQuizByclassIdAndDayWise(req.params.classId);
  if (!quize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  res.send(quize);
});

const QuizeByIdSubmit = catchAsync(async (req, res) => {
  const quiz = await quizeService.CheckoutAnswer(req.params.quizeId, req.body.answer);
  if (!quiz) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
  }
  res.send(quiz);
});

const updateQuizeById = catchAsync(async (req, res) => {
  const quize = await quizeService.updateQuizeById(req.params.quizeId, req.body);
  res.send(quize);
});

const deleteQuizeById = catchAsync(async (req, res) => {
  await quizeService.deleteQuizeById(req.params.quizeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createQuize,
  getAllQuize,
  getQuizeById,
  QuizeByIdSubmit,
  getQuizeByFilter,
  updateQuizeById,
  deleteQuizeById,
  getAllNotSelected,
  uploadFiles,
  getQuizByClassIdAndDayWise,
  getQuizeByQuizName,
  getQuizeByChapterId,
};
