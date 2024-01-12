const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createChapter = {
  body: Joi.object().keys({
    boardId: Joi.string().required(),
    mediumId: Joi.string().required(),
    classId: Joi.string().required(),
    subjectId: Joi.string().required(),
    bookId: Joi.string().required(),
    chapterName: Joi.string().required(),
    order: Joi.number().required(),
    file: Joi.string(),
  }),
};

const getChapter = {
  params: Joi.object().keys({
    chapterId: Joi.string().custom(objectId).required(),
  }),
};
const getChaptersByBookId = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId).required(),
  }),
};

const getChaptersByFilter = {
  params: Joi.object().keys({
    boardId: Joi.string().custom(objectId).required(),
    mediumId: Joi.string().custom(objectId).required(),
    classId: Joi.string().custom(objectId).required(),
    subjectId: Joi.string().custom(objectId).required(),
    bookId: Joi.string().custom(objectId).required(),
  }),
};

const getAllChapter = {
  query: Joi.object().keys({
    chapterName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateChapterById = {
  params: Joi.object().keys({
    chapterId: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      boardId: Joi.string().custom(objectId),
      mediumId: Joi.string().custom(objectId),
      classId: Joi.string().custom(objectId),
      subjectId: Joi.string().custom(objectId),
      bookId: Joi.string().custom(objectId),
      chapterName: Joi.string(),
      order: Joi.number(),
      file: Joi.string(),
    })
    .min(1),
};
const deleteChapterById = {
  params: Joi.object().keys({
    chapterId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createChapter,
  getChapter,
  getAllChapter,
  updateChapterById,
  deleteChapterById,
  getChaptersByBookId,
  getChaptersByFilter,
};
