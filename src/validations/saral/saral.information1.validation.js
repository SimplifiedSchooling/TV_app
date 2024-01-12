const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSaralInfo1 = {
  body: Joi.object().keys({
    saralId: Joi.string(),
    scode: Joi.string(),
    anganwadicenteradj: Joi.string(),
    noofanganwadinear: Joi.number(),
    noofsevika: Joi.number(),
    agewiseboy: Joi.number(),
    agewisegirl: Joi.number(),
    balwadicenter: Joi.number(),
    recognizbalwadi: Joi.number(),
    recognitiondate: Joi.date(),
    noofteacher: Joi.number(),
    eodeputyvisit: Joi.number(),
    eovisit: Joi.number(),
    dodeputyvisit: Joi.number(),
    ddvisits: Joi.number(),
    dvisitno: Joi.number(),
    zmdvisits: Joi.number(),
    mdminspno: Joi.number(),
    internalaudit: Joi.number(),
    externalaudit: Joi.number(),
    localauditb: Joi.number(),
    auditorauditbgen: Joi.number(),
    boarddisplay: Joi.number(),
    socialaudit: Joi.string(),
    grantssa: Joi.string(),
    spillapril: Joi.number(),
    expenditurers: Joi.number(),
    sdevelopgrant: Joi.string(),
    smaintenancegrant: Joi.string(),
    tlmgrant: Joi.string(),
    fundscwsn: Joi.string(),
    grantcontingency: Joi.string(),
    contingengrantob: Joi.number(),
    modelschool1: Joi.number(),
    sbpgadoptscheme: Joi.number(),
    hostelallowance: Joi.number(),
    publiccontribut: Joi.number(),
    attendallowance: Joi.number(),
    examfeerefund: Joi.number(),
    csr: Joi.number(),
    shetkiallowance: Joi.number(),
    idmifund: Joi.number(),
  }),
};

const getAllSaralInfo1s = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSaralInfo1 = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
};
const getSaralByobjectId = {
  params: Joi.object().keys({
    saralId: Joi.string().custom(objectId),
  }),
};

const updateSaralInfo1ById = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
  body: Joi.object()
    .keys({
      saralId: Joi.string(),
      anganwadicenteradj: Joi.string(),
      noofanganwadinear: Joi.number(),
      noofsevika: Joi.number(),
      agewiseboy: Joi.number(),
      agewisegirl: Joi.number(),
      balwadicenter: Joi.number(),
      recognizbalwadi: Joi.number(),
      recognitiondate: Joi.date(),
      noofteacher: Joi.number(),
      eodeputyvisit: Joi.number(),
      eovisit: Joi.number(),
      dodeputyvisit: Joi.number(),
      ddvisits: Joi.number(),
      dvisitno: Joi.number(),
      zmdvisits: Joi.number(),
      mdminspno: Joi.number(),
      internalaudit: Joi.number(),
      externalaudit: Joi.number(),
      localauditb: Joi.number(),
      auditorauditbgen: Joi.number(),
      boarddisplay: Joi.number(),
      socialaudit: Joi.string(),
      grantssa: Joi.string(),
      spillapril: Joi.number(),
      expenditurers: Joi.number(),
      sdevelopgrant: Joi.string(),
      smaintenancegrant: Joi.string(),
      tlmgrant: Joi.string(),
      fundscwsn: Joi.string(),
      grantcontingency: Joi.string(),
      contingengrantob: Joi.number(),
      modelschool1: Joi.number(),
      sbpgadoptscheme: Joi.number(),
      hostelallowance: Joi.number(),
      publiccontribut: Joi.number(),
      attendallowance: Joi.number(),
      examfeerefund: Joi.number(),
      csr: Joi.number(),
      shetkiallowance: Joi.number(),
      idmifund: Joi.number(),
    })
    .min(2),
};
const deleteSaralInfo1ById = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
};

module.exports = {
  createSaralInfo1,
  getAllSaralInfo1s,
  getSaralInfo1,
  updateSaralInfo1ById,
  deleteSaralInfo1ById,
  getSaralByobjectId,
};
