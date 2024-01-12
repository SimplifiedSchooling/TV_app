const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createICTGovSchool = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllICTGovSchools = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getICTGovSchool = {
  params: Joi.object().keys({
    ictGovSchoolId: Joi.string().custom(objectId),
  }),
};

const updateICTGovSchool = {
  params: Joi.object().keys({
    ictGovSchoolId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteICTGovSchool = {
  params: Joi.object().keys({
    ictGovSchoolId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createICTGovSchool,
  getAllICTGovSchools,
  getICTGovSchool,
  updateICTGovSchool,
  deleteICTGovSchool,
};
