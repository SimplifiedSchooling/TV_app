const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createLanguage = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    code: Joi.number().required(),
  }),
};

const getAllLanguage = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLanguageById = {
  params: Joi.object().keys({
    languageId: Joi.string().custom(objectId),
  }),
};

const updateLanguage = {
  params: Joi.object().keys({
    languageId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      code: Joi.number(),
    })
    .min(1),
};

const deleteLanguage = {
  params: Joi.object().keys({
    languageId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLanguage,
  getAllLanguage,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
};
