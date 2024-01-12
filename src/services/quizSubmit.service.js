const { QuizSubmit } = require('../models');

/**
 * Create a role
 * @param {Object} reqBody
 * @returns {Promise<QuizSubmit>}
 */
const submitQuiz = async (reqBody) => {
  const submitedQuiz = await QuizSubmit.create(reqBody);
  return submitedQuiz;
};

/**
 * Query for quiz submit
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySubmit = async (filter, options) => {
  const submit = await QuizSubmit.paginate(filter, options);
  return submit;
};

/**
 * Get role by id
 * @param {ObjectId} id
 * @returns {Promise<QuizSubmit>}
 */
const getQuizSubmitById = async (studentId) => {
  return QuizSubmit.findOne({ studentId });
};

/**
 * Get for shcool and teacher
 * @returns {Promise<QuizSubmit>}
 */
const getByRelation = async (scode, classId, subjectId, studentId, dateT) => {
  const date = dateT.toISOString().split('T')[0];
  return QuizSubmit.find({ scode, classId, subjectId, studentId, date });
};
// /**
//  * Get the total marks of a user's quiz submissions.
//  * @param {string} userId - User ID.
//  * @returns {Promise<number>} - Total marks.
//  */
// const resultQuiz = async (userId, subjectId) => {
//   // eslint-disable-next-line
//   const submissions = await QuizSubmit.find({ userId ,subjectId});
//   if (!submissions || submissions.length === 0) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'No quiz submissions found for the user');
//   }
//   let totalMarks = 0;
//   let correctAnswersCount = 0;
//   let incorrectAnswersCount = 0;
//   /* eslint-disable no-restricted-syntax */
//   /* eslint-disable no-await-in-loop */
//   for (const submission of submissions) {
//     const question = await Quize.findById(submission.questionId);
//     if (!question) {
//       throw new ApiError(httpStatus.NOT_FOUND, `Question not found for submission with ID: ${submission._id}`);
//     }
//     const correctOptions = question.correctOptions.map(String);
//     const userSelectedOptions = submission.selectedOptions.map(String);
//     const isCorrect = correctOptions.every((option) => userSelectedOptions.includes(option));
//     if (isCorrect) {
//       totalMarks += question.marks || 0;
//       // eslint-disable-next-line no-plusplus
//       correctAnswersCount++;
//     } else {
//       // eslint-disable-next-line no-plusplus
//       incorrectAnswersCount++;
//     }
//   }
/* eslint-enable no-await-in-loop */
/* eslint-enable no-restricted-syntax */
//   return {
//     totalMarks,
//     correctAnswersCount,
//     incorrectAnswersCount,
//   };
// };
module.exports = {
  submitQuiz,
  // resultQuiz,
  querySubmit,
  getQuizSubmitById,
  getByRelation,
};
