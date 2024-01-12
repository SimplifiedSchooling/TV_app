const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1B54 = {
  body: Joi.object().keys({
    sdmpdev: Joi.string().allow('').optional(),
    structuralaudit: Joi.string().allow('').optional(),
    nonstructuralaudit: Joi.string().allow('').optional(),
    CCTVavi: Joi.string().allow('').optional(),
    fireextinguisheravai: Joi.string().allow('').optional(),
    havenodalteacher: Joi.string().allow('').optional(),
    schoolsaftytraining: Joi.string().allow('').optional(),
    disastermangtaught: Joi.string().allow('').optional(),
    defensetrainingforgirls: Joi.string().allow('').optional(),
    noofgirlsproselfdefensetraining: Joi.string().allow('').optional(),
    displaysaftyguidondisboard: Joi.string().allow('').optional(),
    teachergrantcounselor: Joi.string().allow('').optional(),
    guidandcounseling: Joi.string().allow('').optional(),
    sanitizationofparent: Joi.string().allow('').optional(),
    awargenforstudent: Joi.string().allow('').optional(),
    provisionforfeedbackstudent: Joi.string().allow('').optional(),
    complaintbox: Joi.string().allow('').optional(),
    providecopiesofsaftyguid: Joi.string().allow('').optional(),
    frequecyofsaftyaudit: Joi.string().allow('').optional(),
    scode: Joi.string().allow('').optional(),
  }),
};

const getAllSection1B54 = {
  query: Joi.object().keys({
    sdmpdev: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1B54 = {
  params: Joi.object().keys({
    Section1B54Id: Joi.string().custom(objectId),
  }),
};

const updateSection1B54 = {
  params: Joi.object().keys({
    Section1B54Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      sdmpdev: Joi.string().allow('').optional(),
      structuralaudit: Joi.string().allow('').optional(),
      nonstructuralaudit: Joi.string().allow('').optional(),
      CCTVavi: Joi.string().allow('').optional(),
      fireextinguisheravai: Joi.string().allow('').optional(),
      havenodalteacher: Joi.string().allow('').optional(),
      schoolsaftytraining: Joi.string().allow('').optional(),
      disastermangtaught: Joi.string().allow('').optional(),
      defensetrainingforgirls: Joi.string().allow('').optional(),
      noofgirlsproselfdefensetraining: Joi.string().allow('').optional(),
      displaysaftyguidondisboard: Joi.string().allow('').optional(),
      teachergrantcounselor: Joi.string().allow('').optional(),
      guidandcounseling: Joi.string().allow('').optional(),
      sanitizationofparent: Joi.string().allow('').optional(),
      awargenforstudent: Joi.string().allow('').optional(),
      provisionforfeedbackstudent: Joi.string().allow('').optional(),
      complaintbox: Joi.string().allow('').optional(),
      providecopiesofsaftyguid: Joi.string().allow('').optional(),
      frequecyofsaftyaudit: Joi.string().allow('').optional(),
      scode: Joi.string().allow('').optional(),
    })
    .min(1),
};

const deleteSection1B54 = {
  params: Joi.object().keys({
    Section1B54Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1B54,
  getAllSection1B54,
  getSection1B54,
  updateSection1B54,
  deleteSection1B54,
};
