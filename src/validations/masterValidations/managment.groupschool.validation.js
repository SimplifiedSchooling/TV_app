const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createManaGroupSchool = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllManaGroupSchools = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getManaGroupSchool = {
  params: Joi.object().keys({
    managementId: Joi.string().custom(objectId),
  }),
};

const updateManaGroupSchool = {
  params: Joi.object().keys({
    managementId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteManaGroupSchool = {
  params: Joi.object().keys({
    managementId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createManaGroupSchool,
  getAllManaGroupSchools,
  getManaGroupSchool,
  updateManaGroupSchool,
  deleteManaGroupSchool,
};
