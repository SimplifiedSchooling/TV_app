const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createMedium = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getMediums = {
  query: Joi.object().keys({
    name: Joi.string(),
    boardId: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getMedium = {
  params: Joi.object().keys({
    mediumId: Joi.string().custom(objectId),
  }),
};

const getMediumbyBoardId = {
  params: Joi.object().keys({
    boardId: Joi.string().custom(objectId),
  }),
};

const updateMedium = {
  params: Joi.object().keys({
    mediumId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      boardId: Joi.string(),
    })
    .min(1),
};

const deleteMedium = {
  params: Joi.object().keys({
    mediumId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createMedium,
  getMediums,
  getMedium,
  updateMedium,
  deleteMedium,
  getMediumbyBoardId,
};
