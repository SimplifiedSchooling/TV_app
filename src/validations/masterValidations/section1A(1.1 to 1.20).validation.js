const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1A20 = {
  body: Joi.object().keys({
    hoschool: Joi.string().allow('').optional().required(),
    hosname: Joi.string().allow('').optional(),
    hosmobileno: Joi.string()
      .regex(/^\d{10}$/)
      .allow('')
      .optional(),
    schoolcategory: Joi.string().required(),
    htlclass: Joi.string().allow('').optional(),
    htlclasshigher: Joi.string().allow('').optional(),
    schoolcwsn: Joi.string().allow('').optional(),
    noclasses: Joi.string().allow('').optional(),
    arts: Joi.string().allow('').optional(),
    science: Joi.string().allow('').optional(),
    commerce: Joi.string().allow('').optional(),
    Vocational: Joi.string().allow('').optional(),
    Streams: Joi.string().allow('').optional(),
    typeschool: Joi.string().allow('').optional(),
    manggroup: Joi.string().allow('').optional(),
    mangcode: Joi.string().required(),
    code101: Joi.string().allow('').optional(),
    admintype: Joi.string().allow('').optional(),
    affilationBoard: Joi.string().allow('').optional(),
    affilationNo: Joi.string().allow('').optional(),
    nameofotherboard: Joi.string().allow('').optional(),
    affilationBoardHigherSecondary: Joi.string().allow('').optional(),
    affilationNoHigherSecondary: Joi.string().allow('').optional(),
    nameofotherboardHigherSecondary: Joi.string().allow('').optional(),
    respodentType: Joi.string().allow('').optional(),
    respodentName: Joi.string().allow('').optional(),
    respodentMobileNo: Joi.string().allow('').optional(),
    yearofestablishment: Joi.string().allow('').optional(),
    PrimaryClass: Joi.string().allow('').optional(),
    upperprimary: Joi.string().allow('').optional(),
    Secondary: Joi.string().allow('').optional(),
    higherSecondary: Joi.string().allow('').optional(),
    scode: Joi.string().allow('').optional(),
  }),
};

const getAllSection1A20 = {
  query: Joi.object().keys({
    hoschool: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1A20 = {
  params: Joi.object().keys({
    Section1A20Id: Joi.string().custom(objectId),
  }),
};

const updateSection1A20 = {
  params: Joi.object().keys({
    Section1A20Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      hoschool: Joi.string().allow('').optional(),
      hosname: Joi.string().allow('').optional(),
      hosmobileno: Joi.string()
        .regex(/^\d{10}$/)
        .allow('')
        .optional(),
      schoolcategory: Joi.string(),
      htlclass: Joi.string().allow('').optional(),
      htlclasshigher: Joi.string().allow('').optional(),
      schoolcwsn: Joi.string().allow('').optional(),
      noclasses: Joi.string().allow('').optional(),
      arts: Joi.string().allow('').optional(),
      science: Joi.string().allow('').optional(),
      commerce: Joi.string().allow('').optional(),
      Vocational: Joi.string().allow('').optional(),
      Streams: Joi.string().allow('').optional(),
      typeschool: Joi.string().allow('').optional(),
      manggroup: Joi.string().allow('').optional(),
      mangcode: Joi.string(),
      code101: Joi.string().allow('').optional(),
      admintype: Joi.string().allow('').optional(),
      affilationBoard: Joi.string().allow('').optional(),
      affilationNo: Joi.string().allow('').optional(),
      nameofotherboard: Joi.string().allow('').optional(),
      affilationBoardHigherSecondary: Joi.string().allow('').optional(),
      affilationNoHigherSecondary: Joi.string().allow('').optional(),
      nameofotherboardHigherSecondary: Joi.string().allow('').optional(),
      respodentType: Joi.string().allow('').optional(),
      respodentName: Joi.string().allow('').optional(),
      respodentMobileNo: Joi.string().allow('').optional(),
      yearofestablishment: Joi.string().allow('').optional(),
      PrimaryClass: Joi.string().allow('').optional(),
      upperprimary: Joi.string().allow('').optional(),
      Secondary: Joi.string().allow('').optional(),
      higherSecondary: Joi.string().allow('').optional(),
      scode: Joi.string().allow('').optional(),
    })
    .min(1),
};

const deleteSection1A20 = {
  params: Joi.object().keys({
    Section1A20Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1A20,
  getAllSection1A20,
  getSection1A20,
  updateSection1A20,
  deleteSection1A20,
};
