const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createHostel = {
  body: Joi.object().keys({
    hostelType: Joi.string().required(),
  }),
};

const getAllHostels = {
  query: Joi.object().keys({
    hostelType: Joi.string(),
  }),
};

const getHostel = {
  params: Joi.object().keys({
    hostelId: Joi.string().custom(objectId),
  }),
};

const updateHostel = {
  params: Joi.object().keys({
    hostelId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      hostelType: Joi.string().required(),
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
  getAllHostels,
  getHostel,
  updateHostel,
  deleteHostel,
};
