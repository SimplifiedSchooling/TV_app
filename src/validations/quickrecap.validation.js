const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createQuickRecap = {
  body: Joi.object().keys({
    description: Joi.string().required(),
    boardId: Joi.string().custom(objectId).required(),
    mediumId: Joi.string().custom(objectId).required(),
    classId: Joi.string().custom(objectId).required(),
    subjectId: Joi.string().custom(objectId).required(),
    bookId: Joi.string().custom(objectId).required(),
    chapterId: Joi.string().custom(objectId).required(),
    chapterName: Joi.string().required(),
  }),
};

const getAllQuickRecap = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    chapterName: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getQuickRecapById = {
  params: Joi.object().keys({
    quickRecapId: Joi.string().custom(objectId),
  }),
};

const getQuickRecapByFilter = {
  params: Joi.object().keys({
    boardId: Joi.string().custom(objectId).required(),
    mediumId: Joi.string().custom(objectId).required(),
    classId: Joi.string().custom(objectId).required(),
    subjectId: Joi.string().custom(objectId).required(),
    bookId: Joi.string().custom(objectId).required(),
    chapterId: Joi.string().custom(objectId).required(),
  }),
};

const updateQuickRecap = {
  params: Joi.object().keys({
    quickRecapId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      description: Joi.string(),
      boardId: Joi.string().custom(objectId),
      mediumId: Joi.string().custom(objectId),
      classId: Joi.string().custom(objectId),
      subjectId: Joi.string().custom(objectId),
      bookId: Joi.string().custom(objectId),
      chapterId: Joi.string().custom(objectId),
      chapterName: Joi.string(),
    })
    .min(1),
};

const deleteQuickRecap = {
  params: Joi.object().keys({
    quickRecapId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createQuickRecap,
  getAllQuickRecap,
  getQuickRecapById,
  getQuickRecapByFilter,
  updateQuickRecap,
  deleteQuickRecap,
};
