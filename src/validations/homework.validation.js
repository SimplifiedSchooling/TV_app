const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createHomework = {
  body: Joi.object().keys({
    Question: Joi.string(),
    veryShortAnswer: Joi.string(),
    shortAnswer: Joi.string(),
    longAnswer: Joi.string(),
    boardId: Joi.string(),
    mediumId: Joi.string(),
    classId: Joi.string(),
    bookId: Joi.string(),
    subjectId: Joi.string(),
    chapterId: Joi.string(),
  }),
};

const getAllHomework = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getHomework = {
  params: Joi.object().keys({
    homeworkId: Joi.string().custom(objectId),
  }),
};

const updateHomework = {
  params: Joi.object().keys({
    homeworkId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      Question: Joi.string(),
      veryShortAnswer: Joi.string(),
      shortAnswer: Joi.string(),
      longAnswer: Joi.string(),
      boardId: Joi.string(),
      mediumId: Joi.string(),
      classId: Joi.string(),
      bookId: Joi.string(),
      subjectId: Joi.string(),
      chapterId: Joi.string(),
    })
    .min(1),
};

const deleteHomework = {
  params: Joi.object().keys({
    homeworkId: Joi.string().custom(objectId),
  }),
};

const getHomeworkFilter = {
  query: Joi.object().keys({
    classId: Joi.string(),
    boardId: Joi.string(),
    mediumId: Joi.string(),
    bookId: Joi.string(),
    subjectId: Joi.string(),
    chapterId: Joi.string(),
  }),
};

module.exports = {
  createHomework,
  getAllHomework,
  getHomework,
  updateHomework,
  deleteHomework,
  getHomeworkFilter,
};
