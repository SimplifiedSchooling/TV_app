const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const saralInformation3Schema = mongoose.Schema(
  {
    saralId: {
      type: String,
    },
    scode: {
      type: String,
    },
    totallaptop: {
      type: Number,
      trim: true,
    },
    totalprinter: {
      type: Number,
      trim: true,
    },
    totalprinterfun: {
      type: Number,
      trim: true,
    },
    laptopteacpurp: {
      type: String,
      trim: true,
    },
    complearnpurp: {
      type: String,
      trim: true,
    },
    computeradminpurp: {
      type: String,
      trim: true,
    },
    schoolnetwork: {
      type: String,
      trim: true,
    },
    bandwidth: {
      type: Number,
      trim: true,
    },
    serviceprovider: {
      type: String,
      trim: true,
    },
    campusplan: {
      type: String,
      trim: true,
    },
    englishkit: {
      type: String,
      trim: true,
    },
    geographickit: {
      type: String,
      trim: true,
    },
    braillebooks: {
      type: String,
      trim: true,
    },
    largeprint: {
      type: String,
      trim: true,
    },
    noofutensils: {
      type: Number,
      trim: true,
    },
    statusofutensils: {
      type: String,
      trim: true,
    },
    utensilsfrom: {
      type: Number,
      trim: true,
    },
    noofplates: {
      type: Number,
      trim: true,
    },
    noofspoons: {
      type: Number,
      trim: true,
    },
    noofglass: {
      type: Number,
      trim: true,
    },
    weighingmachine: {
      type: String,
      trim: true,
    },
    heightmeastool: {
      type: String,
      trim: true,
    },
    yearofprocurement: {
      type: Number,
      trim: true,
    },
    badminton: {
      type: String,
      trim: true,
    },
    basketball: {
      type: String,
      trim: true,
    },
    carrom: {
      type: String,
      trim: true,
    },
    yoga: {
      type: String,
      trim: true,
    },
    football: {
      type: String,
      trim: true,
    },
    meterrun: {
      type: String,
      trim: true,
    },
    allequipments: {
      type: Number,
      trim: true,
    },
    seatingarrang: {
      type: String,
      trim: true,
    },
    seatingarrangava: {
      type: String,
      trim: true,
    },
    seatingarrangereq: {
      type: String,
      trim: true,
    },
    transportprovider: {
      type: Number,
      trim: true,
    },
    vehicaltype: {
      type: String,
      trim: true,
    },
    contractorowner: {
      type: String,
      trim: true,
    },
    rtoregistration: {
      type: String,
      trim: true,
    },
    drivername: {
      type: String,
      trim: true,
    },
    driverlicenseno: {
      type: Number,
      trim: true,
    },
    driveraadharno: {
      type: Number,
      trim: true,
    },
    helpername: {
      type: String,
      trim: true,
    },
    teacherresearch: {
      type: Number,
      trim: true,
    },
    teacherarticlepublish: {
      type: Number,
      trim: true,
    },
    curriculumdetails: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
saralInformation3Schema.plugin(toJSON);
saralInformation3Schema.plugin(paginate);

const SaralInformation3 = mongoose.model('SaralInformation3', saralInformation3Schema);
module.exports = SaralInformation3;
