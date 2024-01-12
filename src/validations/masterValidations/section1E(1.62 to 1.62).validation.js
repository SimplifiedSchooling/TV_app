const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1E62 = {
  body: Joi.object().keys({
    vocationalNSQF: Joi.string().allow('').optional(),
    sector1: Joi.string().allow('').optional(),
    sector1year: Joi.string().allow('').optional(),
    sector2: Joi.string().allow('').optional(),
    sector2year: Joi.string().allow('').optional(),
    sector3: Joi.string().allow('').optional(),
    sector3year: Joi.string().allow('').optional(),
    sector4: Joi.string().allow('').optional(),
    sector4year: Joi.string().allow('').optional(),
    vocCourseunder: Joi.string().allow('').optional(),
    schoolsetoftextbook: Joi.string().allow('').optional(),
    sepratrroomforVT: Joi.string().allow('').optional(),
    noVocecontent: Joi.string().allow('').optional(),
    trainingduration: Joi.string().allow('').optional(),
    servicetrainingDuration: Joi.string().allow('').optional(),
    Noofcalss10studentselfemppreyaer: Joi.string().allow('').optional(),
    Noofcalss12studentselfemppreyaer: Joi.string().allow('').optional(),
    avaiwithpresentcodition1: Joi.string().allow('').optional(),
    avaiwithpresentcodition2: Joi.string().allow('').optional(),
    avaiwithpresentcodition3: Joi.string().allow('').optional(),
    avaiwithpresentcodition4: Joi.string().allow('').optional(),
    sepratrroomavai1: Joi.string().allow('').optional(),
    sepratrroomavai2: Joi.string().allow('').optional(),
    sepratrroomavai3: Joi.string().allow('').optional(),
    sepratrroomavai4: Joi.string().allow('').optional(),
    scode: Joi.string().allow('').optional(),
  }),
};

const getAllSection1E62 = {
  query: Joi.object().keys({
    schoolgrantrecipt: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.string().allow('').optional(),
    page: Joi.string().allow('').optional(),
  }),
};

const getSection1E62 = {
  params: Joi.object().keys({
    Section1E62Id: Joi.string().custom(objectId),
  }),
};

const updateSection1E62 = {
  params: Joi.object().keys({
    Section1E62Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      vocationalNSQF: Joi.string().allow('').optional(),
      sector1: Joi.string().allow('').optional(),
      sector1year: Joi.string().allow('').optional(),
      sector2: Joi.string().allow('').optional(),
      sector2year: Joi.string().allow('').optional(),
      sector3: Joi.string().allow('').optional(),
      sector3year: Joi.string().allow('').optional(),
      sector4: Joi.string().allow('').optional(),
      sector4year: Joi.string().allow('').optional(),
      vocCourseunder: Joi.string().allow('').optional(),
      schoolsetoftextbook: Joi.string().allow('').optional(),
      sepratrroomforVT: Joi.string().allow('').optional(),
      noVocecontent: Joi.string().allow('').optional(),
      trainingduration: Joi.string().allow('').optional(),
      servicetrainingDuration: Joi.string().allow('').optional(),
      Noofcalss10studentselfemppreyaer: Joi.string().allow('').optional(),
      Noofcalss12studentselfemppreyaer: Joi.string().allow('').optional(),
      avaiwithpresentcodition1: Joi.string().allow('').optional(),
      avaiwithpresentcodition2: Joi.string().allow('').optional(),
      avaiwithpresentcodition3: Joi.string().allow('').optional(),
      avaiwithpresentcodition4: Joi.string().allow('').optional(),
      sepratrroomavai1: Joi.string().allow('').optional(),
      sepratrroomavai2: Joi.string().allow('').optional(),
      sepratrroomavai3: Joi.string().allow('').optional(),
      sepratrroomavai4: Joi.string().allow('').optional(),
      scode: Joi.string().allow('').optional(),
    })
    .min(1),
};

const deleteSection1E62 = {
  params: Joi.object().keys({
    Section1E62Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1E62,
  getAllSection1E62,
  getSection1E62,
  updateSection1E62,
  deleteSection1E62,
};
