const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudentSession = {
  body: Joi.object().keys({
    sessionId: Joi.string().required(),
    studentId: Joi.number().required(),
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
    scode: Joi.string().required(),
  }),
};

const getStudentSession = {
  params: Joi.object().keys({
    studentSessionId: Joi.string().custom(objectId).required(),
  }),
};

const getStudentByStudentId = {
  params: Joi.object().keys({
    studentId: Joi.number().required(),
  }),
};
const getAllStudentByclassIdAndScode = {
  params: Joi.object().keys({
    classId: Joi.string().required(),
    scode: Joi.string().required(),
  }),
};

const getAllStudentByclassAndsection = {
  query: Joi.object().keys({
    scode: Joi.string().required(),
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
    date: Joi.string().required(),
  }),
};

const getAllStudentListByclassAndsection = {
  query: Joi.object().keys({
    scode: Joi.string().required(),
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
  }),
};

const getAllStudentSession = {
  query: Joi.object().keys({
    attedance_type: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateStudentSessionById = {
  params: Joi.object().keys({
    studentSessionId: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    classId: Joi.string(),
    sectionId: Joi.string(),
  }),
};
const deleteStudentSessionById = {
  params: Joi.object().keys({
    studentSessionId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createStudentSession,
  getAllStudentSession,
  getStudentSession,
  updateStudentSessionById,
  deleteStudentSessionById,
  getAllStudentByclassAndsection,
  getAllStudentByclassIdAndScode,
  getStudentByStudentId,
  getAllStudentListByclassAndsection,
};
