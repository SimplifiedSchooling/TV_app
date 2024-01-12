const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSection = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const querySection = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection = {
  params: Joi.object().keys({
    sectionId: Joi.string().custom(objectId),
  }),
};

const updateSection = {
  params: Joi.object().keys({
    sectionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteSection = {
  params: Joi.object().keys({
    sectionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection,
  querySection,
  getSection,
  updateSection,
  deleteSection,
};
