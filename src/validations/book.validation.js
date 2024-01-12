const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBook = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    classId: Joi.string().custom(objectId).required(),
    subjectId: Joi.string().custom(objectId).required(),
    mediumId: Joi.string().custom(objectId).required(),
    boardId: Joi.string().custom(objectId).required(),
    file: Joi.string(),
  }),
};

const getBooks = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

const getBookBySubjectId = {
  params: Joi.object().keys({
    subjectId: Joi.string().custom(objectId),
  }),
};

const getBookByFilter = {
  params: Joi.object().keys({
    boardId: Joi.string().required(),
    mediumId: Joi.string().required(),
    classId: Joi.string().required(),
    subjectId: Joi.string().required(),
  }),
};
const updateBook = {
  params: Joi.object().keys({
    bookId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      classId: Joi.string(),
      subjectId: Joi.string(),
      mediumId: Joi.string(),
      boardId: Joi.string(),
      file: Joi.string(),
    })
    .min(1),
};

const deleteBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  getBookByFilter,
  updateBook,
  deleteBook,
  getBookBySubjectId,
};
