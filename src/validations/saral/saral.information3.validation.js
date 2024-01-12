const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSaralInfo3 = {
  body: Joi.object().keys({
    saralId: Joi.string(),
    scode: Joi.string(),
    totallaptop: Joi.number(),
    totalprinter: Joi.number(),
    totalprinterfun: Joi.number(),
    laptopteacpurp: Joi.string(),
    complearnpurp: Joi.string(),
    computeradminpurp: Joi.string(),
    schoolnetwork: Joi.string(),
    bandwidth: Joi.number(),
    serviceprovider: Joi.string(),
    campusplan: Joi.string(),
    englishkit: Joi.string(),
    geographickit: Joi.string(),
    braillebooks: Joi.string(),
    largeprint: Joi.string(),
    noofutensils: Joi.number(),
    statusofutensils: Joi.string(),
    utensilsfrom: Joi.number(),
    noofplates: Joi.number(),
    noofspoons: Joi.number(),
    noofglass: Joi.number(),
    weighingmachine: Joi.string(),
    heightmeastool: Joi.string(),
    yearofprocurement: Joi.number(),
    badminton: Joi.string(),
    basketball: Joi.string(),
    carrom: Joi.string(),
    yoga: Joi.string(),
    football: Joi.string(),
    meterrun: Joi.string(),
    allequipments: Joi.number(),
    seatingarrang: Joi.string(),
    seatingarrangava: Joi.string(),
    seatingarrangereq: Joi.string(),
    transportprovider: Joi.number(),
    vehicaltype: Joi.string(),
    contractorowner: Joi.string(),
    rtoregistration: Joi.string(),
    drivername: Joi.string(),
    driverlicenseno: Joi.number(),
    driveraadharno: Joi.number(),
    helpername: Joi.string(),
    teacherresearch: Joi.number(),
    teacherarticlepublish: Joi.number(),
    curriculumdetails: Joi.string(),
  }),
};

const getAllSaralInfo3s = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSaralInfo3 = {
  params: Joi.object().keys({
    saralInfo3Id: Joi.string().custom(objectId),
  }),
};

const getSaralInfo = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
};

const updateSaralInfo3ById = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
  body: Joi.object()
    .keys({
      saralId: Joi.string(),
      totallaptop: Joi.number(),
      totalprinter: Joi.number(),
      totalprinterfun: Joi.number(),
      laptopteacpurp: Joi.string(),
      complearnpurp: Joi.string(),
      computeradminpurp: Joi.string(),
      schoolnetwork: Joi.string(),
      bandwidth: Joi.number(),
      serviceprovider: Joi.string(),
      campusplan: Joi.string(),
      englishkit: Joi.string(),
      geographickit: Joi.string(),
      braillebooks: Joi.string(),
      largeprint: Joi.string(),
      noofutensils: Joi.number(),
      statusofutensils: Joi.string(),
      utensilsfrom: Joi.number(),
      noofplates: Joi.number(),
      noofspoons: Joi.number(),
      noofglass: Joi.number(),
      weighingmachine: Joi.string(),
      heightmeastool: Joi.string(),
      yearofprocurement: Joi.number(),
      badminton: Joi.string(),
      basketball: Joi.string(),
      carrom: Joi.string(),
      yoga: Joi.string(),
      football: Joi.string(),
      meterrun: Joi.string(),
      allequipments: Joi.number(),
      seatingarrang: Joi.string(),
      seatingarrangava: Joi.string(),
      seatingarrangereq: Joi.string(),
      transportprovider: Joi.number(),
      vehicaltype: Joi.string(),
      contractorowner: Joi.string(),
      rtoregistration: Joi.string(),
      drivername: Joi.string(),
      driverlicenseno: Joi.number(),
      driveraadharno: Joi.number(),
      helpername: Joi.string(),
      teacherresearch: Joi.number(),
      teacherarticlepublish: Joi.number(),
      curriculumdetails: Joi.string(),
    })
    .min(1),
};
const deleteSaralInfo3ById = {
  params: Joi.object().keys({
    saralId: Joi.string(),
  }),
};

module.exports = {
  createSaralInfo3,
  getAllSaralInfo3s,
  getSaralInfo3,
  updateSaralInfo3ById,
  deleteSaralInfo3ById,
  getSaralInfo,
};
