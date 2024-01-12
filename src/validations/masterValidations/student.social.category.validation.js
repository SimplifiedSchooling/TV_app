const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSocialCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllSocialCategorys = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getSocialCategory = {
  params: Joi.object().keys({
    socialcategoryId: Joi.string().custom(objectId),
  }),
};

const updateSocialCategory = {
  params: Joi.object().keys({
    socialcategoryId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteSocialCategory = {
  params: Joi.object().keys({
    socialcategoryId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSocialCategory,
  getAllSocialCategorys,
  getSocialCategory,
  updateSocialCategory,
  deleteSocialCategory,
};
