const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudentPromote = {
  body: Joi.object().keys({
    sessionId: Joi.string().required(),
    studentId: Joi.number().required(),
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
    scode: Joi.string().required(),
    currentResult: Joi.string().required(),
    nextSessionStatus: Joi.string().required(),
  }),
};

const getStudentPromote = {
  params: Joi.object().keys({
    studentPromoteId: Joi.string().custom(objectId).required(),
  }),
};
const getStudentPromoteReports = {
  params: Joi.object().keys({
    classId: Joi.string().custom(objectId).required(),
    sessionId: Joi.string().custom(objectId).required(),
  }),
};

const getAllStudentPromote = {
  query: Joi.object().keys({
    attedance_type: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateStudentPromoteById = {
  params: Joi.object().keys({
    studentPromoteId: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    sessionId: Joi.string(),
    studentId: Joi.number(),
    classId: Joi.string(),
    sectionId: Joi.string(),
    scode: Joi.string(),
    currentResult: Joi.string(),
    nextSessionStatus: Joi.string(),
  }),
};
const deleteStudentPromoteById = {
  params: Joi.object().keys({
    studentPromoteId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createStudentPromote,
  getAllStudentPromote,
  getStudentPromote,
  updateStudentPromoteById,
  deleteStudentPromoteById,
  getStudentPromoteReports,
};
