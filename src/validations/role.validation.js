const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createRole = {
  body: Joi.object().keys({
    role: Joi.string().required(),
    actions: Joi.array(),
  }),
};

const getRoleById = {
  params: Joi.object().keys({
    roleId: Joi.string().custom(objectId),
  }),
};

const updateRoleById = {
  params: Joi.object().keys({
    roleId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      role: Joi.string(),
      actions: Joi.array(),
    })
    .min(1),
};

const deleteRoleById = {
  params: Joi.object().keys({
    roleId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createRole,
  getRoleById,
  updateRoleById,
  deleteRoleById,
};
