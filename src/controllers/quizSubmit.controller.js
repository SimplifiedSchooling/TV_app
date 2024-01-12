const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { quizSubmitService } = require('../services');

const submitQuiz = catchAsync(async (req, res) => {
  const submitedQuiz = await quizSubmitService.submitQuiz(req.body);
  res.status(httpStatus.CREATED).send(submitedQuiz);
});

const getAllQuizSubmit = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['scode']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await quizSubmitService.querySubmit(filter, options);
  res.send(result);
});

const getQuizSubmitById = catchAsync(async (req, res) => {
  const result = await quizSubmitService.getQuizSubmitById(req.params.studentId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz Submition not found');
  }
  res.send(result);
});

const getQuizByQuery = catchAsync(async (req, res) => {
  const { scode, classId, subjectId, studentId, date } = req.query;
  const result = await quizSubmitService.getByRelation(scode, classId, subjectId, studentId, date);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz Submition not found');
  }
  res.send(result);
});
// const resultQuiz = catchAsync(async (req, res) => {
//   const { userId, subjectId } = req.params;
//   const quiz = await quizSubmitService.resultQuiz(userId, subjectId);
//   if (!quiz) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
//   }
//   res.status(httpStatus.OK).json(quiz);
// });

module.exports = {
  submitQuiz,
  getAllQuizSubmit,
  getQuizSubmitById,
  getQuizByQuery,
};
