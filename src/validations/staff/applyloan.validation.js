const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createLoan = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    amount: Joi.number().required(),
  }),
};

const getAllLoan = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLoan = {
  params: Joi.object().keys({
    loanId: Joi.string().custom(objectId),
  }),
};

const updateLoan = {
  params: Joi.object().keys({
    loanId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().required(),
      amount: Joi.number().required(),
    })
    .min(1),
};

const deleteLoan = {
  params: Joi.object().keys({
    loanId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLoan,
  getAllLoan,
  getLoan,
  updateLoan,
  deleteLoan,
};
