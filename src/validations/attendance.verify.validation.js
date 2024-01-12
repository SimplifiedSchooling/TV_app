const Joi = require('joi');

const createAVerify = {
  body: Joi.object().keys({
    file: Joi.string(),
    studentId1: Joi.string(),
    studentId2: Joi.string(),
    studentId3: Joi.string(),
    campusId: Joi.string(),
    classId: Joi.string(),
    sectionId: Joi.string(),
    inchargeId: Joi.string(),
    backCount: Joi.string(),
    date: Joi.string(),
  }),
};

const queryAVerify = {
  query: Joi.object().keys({
    inchargeId: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getAVerify = {
  params: Joi.object().keys({
    Id: Joi.string(),
  }),
};

const updateAverify = {
  params: Joi.object().keys({
    Id: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      file: Joi.string(),
      studentId1: Joi.string(),
      studentId2: Joi.string(),
      studentId3: Joi.string(),
      campusId: Joi.string(),
      inchargeId: Joi.string(),
      backCount: Joi.string(),
    })
    .min(1),
};

const deleteAverify = {
  params: Joi.object().keys({
    Id: Joi.string(),
  }),
};
const verifyValidations = {
  query: Joi.object().keys({
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
    date: Joi.string().required(),
  }),
};

module.exports = {
  createAVerify,
  queryAVerify,
  getAVerify,
  updateAverify,
  deleteAverify,
  verifyValidations,
};
