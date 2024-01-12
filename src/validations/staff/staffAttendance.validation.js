const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createAttendance = {
  body: Joi.object().keys({
    staffId: Joi.string().required(),
    date: Joi.string().required(),
    attedance_type: Joi.string().required().valid('holiday', 'late', 'present', 'absent', 'halfday'),
    remark: Joi.string().required(),
  }),
};

const getAttendance = {
  params: Joi.object().keys({
    attendanceId: Joi.string().custom(objectId).required(),
  }),
};

const getAllAttendance = {
  query: Joi.object().keys({
    attedance_type: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateAttendanceById = {
  params: Joi.object().keys({
    attendanceId: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      staffId: Joi.string(),
      date: Joi.string(),
      attedance_type: Joi.string(),
      remark: Joi.string(),
    })
    .min(1),
};
const deleteAttendanceById = {
  params: Joi.object().keys({
    attendanceId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createAttendance,
  getAttendance,
  getAllAttendance,
  updateAttendanceById,
  deleteAttendanceById,
};
