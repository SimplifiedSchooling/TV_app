const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createManaCodeSchool = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    code: Joi.number().required(),
    group: Joi.string().required(),
  }),
};

const getAllManaCodeSchools = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getManaCodeSchool = {
  params: Joi.object().keys({
    managementCodeId: Joi.string().custom(objectId),
  }),
};

const updateManaCodeSchool = {
  params: Joi.object().keys({
    managementCodeId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      code: Joi.number().required(),
      group: Joi.string().required(),
    })
    .min(1),
};

const deleteManaCodeSchool = {
  params: Joi.object().keys({
    managementCodeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createManaCodeSchool,
  getAllManaCodeSchools,
  getManaCodeSchool,
  updateManaCodeSchool,
  deleteManaCodeSchool,
};
