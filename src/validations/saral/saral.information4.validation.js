const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSaralInfo4 = {
  body: Joi.object().keys({
    saralId: Joi.string(),
    scode: Joi.string(),
    typeofactivity: Joi.string(),
    feestructapprove: Joi.string(),
    feerevisionpendstatelev: Joi.string(),
    committeesmc: Joi.string(),
    smcacademicyear: Joi.number(),
    smccommitteplan: Joi.string(),
    committeeconstitute: Joi.string(),
    smcsmdccommitte: Joi.string(),
    smdcpreviousyear: Joi.number(),
    smdccommitteimprove: Joi.string(),
    committedetail: Joi.string(),
    committeeconstitutepta: Joi.string(),
    noofmeetingpta: Joi.number(),
    committedetailpta: Joi.string(),
    committeeconstitutemta: Joi.string(),
    committedetailmta: Joi.string(),
    committeeconstituteac: Joi.string(),
    committedetailac: Joi.string(),
    committeeconstitutetc: Joi.string(),
    committedetailtc: Joi.string(),
    committeeconstitutesc: Joi.string(),
    committedetailsc: Joi.string(),
    committeeconstitutemdmc: Joi.string(),
    committedetailmdmc: Joi.string(),
  }),
};

const getAllSaralInfo4s = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSaralInfo4 = {
  params: Joi.object().keys({
    saralInfo4Id: Joi.string().custom(objectId),
  }),
};

const updateSaralInfo4ById = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
  body: Joi.object()
    .keys({
      saralId: Joi.string(),
      typeofactivity: Joi.string(),
      feestructapprove: Joi.string(),
      feerevisionpendstatelev: Joi.string(),
      committeesmc: Joi.string(),
      smcacademicyear: Joi.number(),
      smccommitteplan: Joi.string(),
      committeeconstitute: Joi.string(),
      smcsmdccommitte: Joi.string(),
      smdcpreviousyear: Joi.number(),
      smdccommitteimprove: Joi.string(),
      committedetail: Joi.string(),
      committeeconstitutepta: Joi.string(),
      noofmeetingpta: Joi.number(),
      committedetailpta: Joi.string(),
      committeeconstitutemta: Joi.string(),
      committedetailmta: Joi.string(),
      committeeconstituteac: Joi.string(),
      committedetailac: Joi.string(),
      committeeconstitutetc: Joi.string(),
      committedetailtc: Joi.string(),
      committeeconstitutesc: Joi.string(),
      committedetailsc: Joi.string(),
      committeeconstitutemdmc: Joi.string(),
      committedetailmdmc: Joi.string(),
    })
    .min(1),
};
const deleteSaralInfo4ById = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
};
const getSaralInfo = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
};
module.exports = {
  createSaralInfo4,
  getAllSaralInfo4s,
  getSaralInfo4,
  updateSaralInfo4ById,
  deleteSaralInfo4ById,
  getSaralInfo,
};
