const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createGrievanceRedressal = {
  body: Joi.object().keys({
    complainType: Joi.string().required(),
    complainBy: Joi.string().required(),
    phone: Joi.number().required(),
    date: Joi.date().required(),
  }),
};

const queryGrievanceRedressal = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getGrievanceRedressal = {
  params: Joi.object().keys({
    grievanceRedressalId: Joi.string().custom(objectId),
  }),
};

const updateGrievanceRedressal = {
  params: Joi.object().keys({
    grievanceRedressalId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      complainType: Joi.string(),
      complainBy: Joi.string(),
      phone: Joi.number(),
      date: Joi.date(),
    })
    .min(1),
};

const deleteGrievanceRedressal = {
  params: Joi.object().keys({
    grievanceRedressalId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createGrievanceRedressal,
  queryGrievanceRedressal,
  getGrievanceRedressal,
  updateGrievanceRedressal,
  deleteGrievanceRedressal,
};
