const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createDepUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    mobNumber: Joi.number().required(),
    role: Joi.string().required(),
    designation: Joi.string(),
    department: Joi.string(),
  }),
};

const getDepUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getDepUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateDepUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      mobNumber: Joi.number().required(),
      role: Joi.string().required(),
      designation: Joi.string(),
      department: Joi.string(),
    })
    .min(1),
};

const deleteDepUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDepUser,
  getDepUsers,
  getDepUser,
  updateDepUser,
  deleteDepUser,
};
