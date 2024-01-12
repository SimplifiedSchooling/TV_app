const Joi = require('joi');

const createMenu = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    imageUrl: Joi.string(),
    genderId: Joi.string(),
  }),
};

const getAllMenu = {
  body: Joi.object().keys({
    name: Joi.string(),
    imageUrl: Joi.string(),
    genderId: Joi.string(),
  }),
};
module.exports = {
  createMenu,
  getAllMenu,
};
