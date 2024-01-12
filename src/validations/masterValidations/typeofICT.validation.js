const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createTypeOfICTGovSchool = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllTypeOfICTGovSchools = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getTypeOfICTGovSchool = {
  params: Joi.object().keys({
    typeOfICTId: Joi.string().custom(objectId),
  }),
};

const updateTypeOfICTGovSchool = {
  params: Joi.object().keys({
    typeOfICTId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteTypeOfICTGovSchool = {
  params: Joi.object().keys({
    typeOfICTId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createTypeOfICTGovSchool,
  getAllTypeOfICTGovSchools,
  getTypeOfICTGovSchool,
  updateTypeOfICTGovSchool,
  deleteTypeOfICTGovSchool,
};
