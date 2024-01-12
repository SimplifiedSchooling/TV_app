const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1D60 = {
  body: Joi.object().keys({
    schoolgrantrecipt: Joi.string().allow('').optional(),
    schoolgrantexpen: Joi.string().allow('').optional(),
    librarygrantrecipt: Joi.string().allow('').optional(),
    librarygrantexpen: Joi.string().allow('').optional(),
    repairgrantreceipt: Joi.string().allow('').optional(),
    repairgrantexpen: Joi.string().allow('').optional(),
    phyedugrantreceipt: Joi.string().allow('').optional(),
    phyedugrantexpen: Joi.string().allow('').optional(),
    mediagrantreceipt: Joi.string().allow('').optional(),
    mediagrantexpen: Joi.string().allow('').optional(),
    traininggrantreceipt: Joi.string().allow('').optional(),
    traininggrantexpen: Joi.string().allow('').optional(),
    preschoolgrantreceipt: Joi.string().allow('').optional(),
    preschoolgrantexpen: Joi.string().allow('').optional(),
    ngo: Joi.string().allow('').optional(),
    ngoName: Joi.string().allow('').optional(),
    ngoAmount: Joi.number(),
    psu: Joi.string().allow('').optional(),
    psuName: Joi.string().allow('').optional(),
    psuAmount: Joi.number(),
    Community: Joi.string().allow('').optional(),
    communityName: Joi.string().allow('').optional(),
    communityAmount: Joi.number(),
    Other: Joi.string().allow('').optional(),
    otherName: Joi.string().allow('').optional(),
    otherAmount: Joi.number(),
    ictItem: Joi.string().allow('').optional(),
    sportEqu: Joi.string().allow('').optional(),
    libraryBooks: Joi.string().allow('').optional(),
    scode: Joi.string().allow('').optional(),
  }),
};

const getAllSection1D60 = {
  query: Joi.object().keys({
    schoolgrantrecipt: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1D60 = {
  params: Joi.object().keys({
    Section1D60Id: Joi.string().custom(objectId),
  }),
};

const updateSection1D60 = {
  params: Joi.object().keys({
    Section1D60Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      schoolgrantrecipt: Joi.string().allow('').optional(),
      schoolgrantexpen: Joi.string().allow('').optional(),
      librarygrantrecipt: Joi.string().allow('').optional(),
      librarygrantexpen: Joi.string().allow('').optional(),
      repairgrantreceipt: Joi.string().allow('').optional(),
      repairgrantexpen: Joi.string().allow('').optional(),
      phyedugrantreceipt: Joi.string().allow('').optional(),
      phyedugrantexpen: Joi.string().allow('').optional(),
      mediagrantreceipt: Joi.string().allow('').optional(),
      mediagrantexpen: Joi.string().allow('').optional(),
      traininggrantreceipt: Joi.string().allow('').optional(),
      traininggrantexpen: Joi.string().allow('').optional(),
      preschoolgrantreceipt: Joi.string().allow('').optional(),
      preschoolgrantexpen: Joi.string().allow('').optional(),
      ngo: Joi.string().allow('').optional(),
      ngoName: Joi.string().allow('').optional(),
      ngoAmount: Joi.number(),
      psu: Joi.string().allow('').optional(),
      psuName: Joi.string().allow('').optional(),
      psuAmount: Joi.number(),
      Community: Joi.string().allow('').optional(),
      communityName: Joi.string().allow('').optional(),
      communityAmount: Joi.number(),
      Other: Joi.string().allow('').optional(),
      otherName: Joi.string().allow('').optional(),
      otherAmount: Joi.number(),
      ictItem: Joi.string().allow('').optional(),
      sportEqu: Joi.string().allow('').optional(),
      libraryBooks: Joi.string().allow('').optional(),
      scode: Joi.string().allow('').optional(),
    })
    .min(1),
};

const deleteSection1D60 = {
  params: Joi.object().keys({
    Section1D60Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1D60,
  getAllSection1D60,
  getSection1D60,
  updateSection1D60,
  deleteSection1D60,
};
