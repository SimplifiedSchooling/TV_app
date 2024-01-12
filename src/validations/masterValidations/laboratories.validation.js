const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createLaboratory = {
  body: Joi.object().keys({
    laboratoryName: Joi.string().required(),
  }),
};

const getLaboratoryById = {
  params: Joi.object().keys({
    laboratoryId: Joi.string().custom(objectId),
  }),
};

const getAllLaboratory = {
  query: Joi.object().keys({
    laboratoryName: Joi.string(),
  }),
};

const updateLaboratoryId = {
  params: Joi.object().keys({
    laboratoryId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      laboratoryName: Joi.string().required(),
    })
    .min(1),
};
const deleteLaboratoryById = {
  params: Joi.object().keys({
    laboratoryId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLaboratory,
  getAllLaboratory,
  getLaboratoryById,
  updateLaboratoryId,
  deleteLaboratoryById,
};
