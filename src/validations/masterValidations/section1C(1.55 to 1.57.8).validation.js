const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1C57 = {
  body: Joi.object().keys({
    middayMeal: Joi.string().allow('').optional(),
    NoOfDayMidDayMeal: Joi.number().integer(),
    NoofteacherAadharindatabase: Joi.number().integer(),
    schoolevaluation: Joi.string().allow('').optional(),
    schoolcertifiedFIT: Joi.string().allow('').optional(),
    schoolprovHolisticReportCard: Joi.string().allow('').optional(),
    exemplerschool: Joi.string().allow('').optional(),
    dispphotoofteacher: Joi.string().allow('').optional(),
    schooladoptedVidyaPraveshModule: Joi.string().allow('').optional(),
    studentAttendanceEle: Joi.string().allow('').optional(),
    teacherattendanceEle: Joi.string().allow('').optional(),
    consYouthClub: Joi.string().allow('').optional(),
    constEcoClub: Joi.string().allow('').optional(),
    teacherIdcard: Joi.string().allow('').optional(),
    SSSAcertiobtain: Joi.string().allow('').optional(),
    scode: Joi.string().allow('').optional(),
  }),
};

const getAllSection1C57 = {
  query: Joi.object().keys({
    middayMeal: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1C57 = {
  params: Joi.object().keys({
    Section1C57Id: Joi.string().custom(objectId),
  }),
};

const updateSection1C57 = {
  params: Joi.object().keys({
    Section1C57Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      middayMeal: Joi.string().allow('').optional(),
      NoOfDayMidDayMeal: Joi.number().integer(),
      NoofteacherAadharindatabase: Joi.number().integer(),
      schoolevaluation: Joi.string().allow('').optional(),
      schoolcertifiedFIT: Joi.string().allow('').optional(),
      schoolprovHolisticReportCard: Joi.string().allow('').optional(),
      exemplerschool: Joi.string().allow('').optional(),
      dispphotoofteacher: Joi.string().allow('').optional(),
      schooladoptedVidyaPraveshModule: Joi.string().allow('').optional(),
      studentAttendanceEle: Joi.string().allow('').optional(),
      teacherattendanceEle: Joi.string().allow('').optional(),
      consYouthClub: Joi.string().allow('').optional(),
      constEcoClub: Joi.string().allow('').optional(),
      teacherIdcard: Joi.string().allow('').optional(),
      SSSAcertiobtain: Joi.string().allow('').optional(),
      scode: Joi.string().allow('').optional(),
    })
    .min(1),
};

const deleteSection1C57 = {
  params: Joi.object().keys({
    Section1C57Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1C57,
  getAllSection1C57,
  getSection1C57,
  updateSection1C57,
  deleteSection1C57,
};
