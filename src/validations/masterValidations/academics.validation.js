const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createAcademics = {
  body: Joi.object().keys({
    streamName: Joi.string().required(),
  }),
};

const getAcademicsById = {
  params: Joi.object().keys({
    academicsId: Joi.string().custom(objectId),
  }),
};

const getAllAcademics = {
  query: Joi.object().keys({
    streamName: Joi.string(),
  }),
};

const updateAcademicsbyId = {
  params: Joi.object().keys({
    academicsId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      streamName: Joi.string().required(),
    })
    .min(1),
};
const deleteAcademicsById = {
  params: Joi.object().keys({
    academicsId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAcademics,
  getAllAcademics,
  getAcademicsById,
  updateAcademicsbyId,
  deleteAcademicsById,
};
