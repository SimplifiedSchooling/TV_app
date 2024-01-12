const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createManagementAdministrationType = {
  body: Joi.object().keys({
    type: Joi.string().required(),
  }),
};

const getAllManagementAdministrationTypes = {
  query: Joi.object().keys({
    type: Joi.string(),
  }),
};

const getManagementAdministrationType = {
  params: Joi.object().keys({
    managementAdmTypeId: Joi.string().custom(objectId),
  }),
};

const updateManagementAdministrationType = {
  params: Joi.object().keys({
    managementAdmTypeId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      type: Joi.string().required(),
    })
    .min(1),
};

const deleteManagementAdministrationType = {
  params: Joi.object().keys({
    managementAdmTypeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createManagementAdministrationType,
  getAllManagementAdministrationTypes,
  getManagementAdministrationType,
  updateManagementAdministrationType,
  deleteManagementAdministrationType,
};
