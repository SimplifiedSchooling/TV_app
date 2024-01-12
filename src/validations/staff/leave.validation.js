const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createLeave = {
  body: Joi.object().keys({
    applydate: Joi.date().default(new Date()),
    fromdate: Joi.string().trim(),
    todate: Joi.string().trim(),
    totaldays: Joi.string().trim(),
    reason: Joi.string().trim().allow(''),
    files: Joi.string().trim().allow(''),
  }),
};

const getAllLeave = {
  query: Joi.object().keys({
    applydate: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLeave = {
  params: Joi.object().keys({
    LeaveId: Joi.string().custom(objectId),
  }),
};

const updateLeave = {
  params: Joi.object().keys({
    LeaveId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      applydate: Joi.date().default(new Date()),
      fromdate: Joi.string().trim(),
      todate: Joi.string().trim(),
      totaldays: Joi.string().trim(),
      reason: Joi.string().trim().allow(''),
      files: Joi.string().trim().allow(''),
    })
    .min(1),
};

const deleteLeave = {
  params: Joi.object().keys({
    LeaveId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLeave,
  getAllLeave,
  getLeave,
  updateLeave,
  deleteLeave,
};
