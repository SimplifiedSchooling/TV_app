const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBoard = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const queryBoard = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getBoard = {
  params: Joi.object().keys({
    boardId: Joi.string().custom(objectId),
  }),
};

const updateBoard = {
  params: Joi.object().keys({
    boardId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteBoard = {
  params: Joi.object().keys({
    boardId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBoard,
  queryBoard,
  getBoard,
  updateBoard,
  deleteBoard,
};
