const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createHostel = {
  body: Joi.object().keys({
    hostelName: Joi.string().required(),
    type: Joi.string().required(),
    address: Joi.string().required(),
    intake: Joi.number().required(),
  }),
};

const queryHostel = {
  query: Joi.object().keys({
    hostelName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getHostel = {
  params: Joi.object().keys({
    hostelId: Joi.string().custom(objectId),
  }),
};

const updateHostel = {
  params: Joi.object().keys({
    hostelId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      hostelName: Joi.string().required(),
      type: Joi.string().required(),
      address: Joi.string().required(),
      intake: Joi.number().required(),
    })
    .min(1),
};

const deleteHostel = {
  params: Joi.object().keys({
    hostelId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createHostel,
  queryHostel,
  getHostel,
  updateHostel,
  deleteHostel,
};
