const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createComplaint = {
  body: Joi.object().keys({
    subject: Joi.string().required(),
    description: Joi.string().required(),
  }),
};
const getAllComplaints = {
  query: Joi.object().keys({
    subject: Joi.string(),
  }),
};
const getComplaintById = {
  params: Joi.object().keys({
    complaintId: Joi.string().custom(objectId),
  }),
};

const updateComplaintbyId = {
  params: Joi.object().keys({
    complaintId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      subject: Joi.string().required(),
      description: Joi.string().required(),
    })
    .min(1),
};
const deleteComplaintById = {
  params: Joi.object().keys({
    complaintId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaintbyId,
  deleteComplaintById,
};
