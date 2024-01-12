const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    userName: Joi.string().required(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    scode: Joi.string(),
    role: Joi.string().required(),
    mobNumber: Joi.number().required(),
    userId: Joi.string().required(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
const getStudentUserByRoleAndScode = {
  params: Joi.object().keys({
    role: Joi.string().required(),
    scode: Joi.string().required(),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      userName: Joi.string(),
      password: Joi.string().custom(password),
      name: Joi.string(),
      scode: Joi.string(),
      role: Joi.string(),
      mobNumber: Joi.number(),
      userId: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getStudentUserByRoleAndScode,
};
