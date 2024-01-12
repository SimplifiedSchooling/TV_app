const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSpecialEducator = {
  body: Joi.object().keys({
    specialEducator: Joi.string().required(),
  }),
};

const getSpecialEducatorById = {
  params: Joi.object().keys({
    specialEducatorId: Joi.string().custom(objectId),
  }),
};

const getAllSpecialEducator = {
  query: Joi.object().keys({
    specialEducator: Joi.string(),
  }),
};

const updateSpecialEducatorId = {
  params: Joi.object().keys({
    specialEducatorId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      specialEducator: Joi.string().required(),
    })
    .min(1),
};
const deleteSpecialEducatorById = {
  params: Joi.object().keys({
    specialEducatorId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSpecialEducator,
  getAllSpecialEducator,
  getSpecialEducatorById,
  updateSpecialEducatorId,
  deleteSpecialEducatorById,
};
