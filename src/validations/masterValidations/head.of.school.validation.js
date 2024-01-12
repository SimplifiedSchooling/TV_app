const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createInchargeType = {
  body: Joi.object().keys({
    inChargeType: Joi.string().required(),
  }),
};

const getAllInchargeType = {
  params: Joi.object().keys({
    inchargeId: Joi.string().custom(objectId),
  }),
};

const getInchargeTypeById = {
  query: Joi.object().keys({
    inChargeType: Joi.string(),
  }),
};

const updateInchargeTypeyId = {
  params: Joi.object().keys({
    inchargeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      inChargeType: Joi.string().required(),
    })
    .min(1),
};
const deleteInchargeTypeById = {
  params: Joi.object().keys({
    inchargeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createInchargeType,
  getAllInchargeType,
  getInchargeTypeById,
  updateInchargeTypeyId,
  deleteInchargeTypeById,
};
