const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const saralInformation2Schema = mongoose.Schema(
  {
    saralId: {
      type: String,
    },
    scode: {
      type: String,
    },
    maintenancegrant: {
      type: String,
      trim: true,
    },
    buildingrant: {
      type: String,
      trim: true,
    },
    pariposhan: {
      type: String,
      trim: true,
    },
    buildingrent: {
      type: Number,
      trim: true,
    },
    othergrant: {
      type: String,
      trim: true,
    },
    childenroll: {
      type: Number,
      trim: true,
    },
    nostuadmissionquota: {
      type: Number,
      trim: true,
    },
    nobookfiction: {
      type: Number,
      trim: true,
    },
    nobooknonfiction: {
      type: Number,
      trim: true,
    },
    magazine: {
      type: String,
      trim: true,
    },
    jsmagazine: {
      type: Number,
      trim: true,
    },
    rbook: {
      type: String,
      trim: true,
    },
    tobaccoinside: {
      type: String,
      trim: true,
    },
    smokingarea: {
      type: String,
      trim: true,
    },
    infotobacco: {
      type: String,
      trim: true,
    },
    cotpa: {
      type: String,
      trim: true,
    },
    tobaccoinsideper: {
      type: String,
      trim: true,
    },
    signage: {
      type: String,
      trim: true,
    },
    controltobacco: {
      type: String,
      trim: true,
    },
    intiativetobacco: {
      type: String,
      trim: true,
    },
    statenodaloff: {
      type: String,
      trim: true,
    },
    antitobacco: {
      type: String,
      trim: true,
    },
    controltobaccocommite: {
      type: String,
      trim: true,
    },
    meetreport: {
      type: String,
      trim: true,
    },
    tobaccofreeschool: {
      type: String,
      trim: true,
    },
    tobaccoyard: {
      type: String,
      trim: true,
    },
    tfet: {
      type: String,
      trim: true,
    },
    evidencetobacco: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
saralInformation2Schema.plugin(toJSON);
saralInformation2Schema.plugin(paginate);

const SaralInformation2 = mongoose.model('SaralInformation2', saralInformation2Schema);
module.exports = SaralInformation2;
