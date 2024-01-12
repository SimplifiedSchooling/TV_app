const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createAdmit = {
  body: Joi.object().keys({
    admitType: Joi.string().required(),
  }),
};

const getAdmitById = {
  params: Joi.object().keys({
    admitId: Joi.string().custom(objectId),
  }),
};

const getAllAdmit = {
  query: Joi.object().keys({
    admitType: Joi.string(),
  }),
};

const updateAdmitbyId = {
  params: Joi.object().keys({
    admitId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      admitType: Joi.string().required(),
    })
    .min(1),
};
const deleteAdmitById = {
  params: Joi.object().keys({
    admitId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAdmit,
  getAllAdmit,
  getAdmitById,
  updateAdmitbyId,
  deleteAdmitById,
};
