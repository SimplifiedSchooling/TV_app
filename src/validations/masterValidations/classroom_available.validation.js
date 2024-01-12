const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createclassroom = {
  body: Joi.object().keys({
    description: Joi.string().required(),
    count: Joi.string(),
  }),
};

const getAllclassroom = {
  query: Joi.object().keys({
    description: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getclassroom = {
  params: Joi.object().keys({
    classroomId: Joi.string().custom(objectId),
  }),
};

const updateclassroom = {
  params: Joi.object().keys({
    classroomId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      description: Joi.string(),
      count: Joi.string(),
    })
    .min(1),
};

const deleteclassroom = {
  params: Joi.object().keys({
    classroomId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createclassroom,
  getAllclassroom,
  getclassroom,
  updateclassroom,
  deleteclassroom,
};
