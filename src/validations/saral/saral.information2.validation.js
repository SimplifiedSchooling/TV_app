const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSaralInfo2 = {
  body: Joi.object().keys({
    saralId: Joi.string(),
    scode: Joi.string(),
    maintenancegrant: Joi.string(),
    buildingrant: Joi.string(),
    pariposhan: Joi.string(),
    buildingrent: Joi.number(),
    othergrant: Joi.string(),
    childenroll: Joi.number(),
    nostuadmissionquota: Joi.number(),
    nobookfiction: Joi.number(),
    nobooknonfiction: Joi.number(),
    magazine: Joi.string(),
    jsmagazine: Joi.number(),
    rbook: Joi.string(),
    tobaccoinside: Joi.string(),
    smokingarea: Joi.string(),
    infotobacco: Joi.string(),
    cotpa: Joi.string(),
    tobaccoinsideper: Joi.string(),
    signage: Joi.string(),
    controltobacco: Joi.string(),
    intiativetobacco: Joi.string(),
    statenodaloff: Joi.string(),
    antitobacco: Joi.string(),
    controltobaccocommite: Joi.string(),
    meetreport: Joi.string(),
    tobaccofreeschool: Joi.string(),
    tobaccoyard: Joi.string(),
    tfet: Joi.string(),
    evidencetobacco: Joi.string(),
  }),
};

const getAllSaralInfo2s = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSaralInfo2 = {
  params: Joi.object().keys({
    saralInfo2Id: Joi.string().custom(objectId),
  }),
};

const getSaralInfo = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
};

const updateSaralInfo2ById = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
  body: Joi.object()
    .keys({
      saralId: Joi.string(),
      maintenancegrant: Joi.string(),
      buildingrant: Joi.string(),
      pariposhan: Joi.string(),
      buildingrent: Joi.number(),
      othergrant: Joi.string(),
      childenroll: Joi.number(),
      nostuadmissionquota: Joi.number(),
      nobookfiction: Joi.number(),
      nobooknonfiction: Joi.number(),
      magazine: Joi.string(),
      jsmagazine: Joi.number(),
      rbook: Joi.string(),
      tobaccoinside: Joi.string(),
      smokingarea: Joi.string(),
      infotobacco: Joi.string(),
      cotpa: Joi.string(),
      tobaccoinsideper: Joi.string(),
      signage: Joi.string(),
      controltobacco: Joi.string(),
      intiativetobacco: Joi.string(),
      statenodaloff: Joi.string(),
      antitobacco: Joi.string(),
      controltobaccocommite: Joi.string(),
      meetreport: Joi.string(),
      tobaccofreeschool: Joi.string(),
      tobaccoyard: Joi.string(),
      tfet: Joi.string(),
      evidencetobacco: Joi.string(),
    })
    .min(2),
};
const deleteSaralInfo2ById = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
};

module.exports = {
  createSaralInfo2,
  getAllSaralInfo2s,
  getSaralInfo2,
  updateSaralInfo2ById,
  deleteSaralInfo2ById,
  getSaralInfo,
};
