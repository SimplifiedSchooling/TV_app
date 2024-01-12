const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createMapping = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    classId: Joi.string().required(),
    subjectId: Joi.string().required(),
    mediumId: Joi.string().required(),
    boardId: Joi.string().required(),
    bookId: Joi.string().required(),
  }),
};

const queryMapping = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getMappingById = {
  params: Joi.object().keys({
    mappingId: Joi.string().custom(objectId),
  }),
};

const updateMapping = {
  params: Joi.object().keys({
    mappingId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      classId: Joi.string(),
      subjectId: Joi.string(),
      mediumId: Joi.string(),
      boardId: Joi.string(),
      bookId: Joi.string(),
    })
    .min(1),
};

const deleteMappingById = {
  params: Joi.object().keys({
    mappingId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createMapping,
  queryMapping,
  getMappingById,
  updateMapping,
  deleteMappingById,
};
