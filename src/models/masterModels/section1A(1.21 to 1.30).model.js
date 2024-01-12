const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1A30Schema = mongoose.Schema(
  {
    primaryclass: {
      type: String,
      trim: true,
    },
    upperprimary: {
      type: String,
      trim: true,
    },
    Secondary: {
      type: String,
      trim: true,
    },
    languageId: {
      type: String,
      trim: true,
    },
    cwsnschool: {
      type: String,
      trim: true,
    },
    cwsnschooltype: {
      type: String,
      trim: true,
    },
    shiftschool: {
      type: String,
      trim: true,
    },
    trainingcenterschool: {
      type: String,
      trim: true,
    },
    residentialschool: {
      type: String,
      trim: true,
    },
    residentialschooltype: {
      type: String,
      trim: true,
    },
    hosteltype: {
      type: String,
      trim: true,
    },
    kgbvclass6boys: {
      type: String,
      trim: true,
    },
    kgbvclass7boys: {
      type: String,
      trim: true,
    },
    kgbvclass8boys: {
      type: String,
      trim: true,
    },
    kgbvclass9boys: {
      type: String,
      trim: true,
    },
    kgbvclass10boys: {
      type: String,
      trim: true,
    },
    kgbvclass11boys: {
      type: String,
      trim: true,
    },
    kgbvclass12boys: {
      type: String,
      trim: true,
    },
    kgbvclass6girls: {
      type: String,
      trim: true,
    },
    kgbvclass7girls: {
      type: String,
      trim: true,
    },
    kgbvclass8girls: {
      type: String,
      trim: true,
    },
    kgbvclass9girls: {
      type: String,
      trim: true,
    },
    kgbvclass10girls: {
      type: String,
      trim: true,
    },
    kgbvclass11girls: {
      type: String,
      trim: true,
    },
    kgbvclass12girls: {
      type: String,
      trim: true,
    },
    schoolhosteltype: {
      type: String,
      trim: true,
    },
    hoprimary: {
      type: String,
      trim: true,
    },
    hoprimaryboys: {
      type: String,
      trim: true,
    },
    hoprimarygirls: {
      type: String,
      trim: true,
    },
    houpperprimary: {
      type: String,
      trim: true,
    },
    houpperprimaryboys: {
      type: String,
      trim: true,
    },
    houpperprimarygirls: {
      type: String,
      trim: true,
    },
    hosecondary: {
      type: String,
      trim: true,
    },
    hosecondaryboys: {
      type: String,
      trim: true,
    },
    hosecondarygirls: {
      type: String,
      trim: true,
    },
    hohighersecondary: {
      type: String,
      trim: true,
    },
    hohighersecondaryboys: {
      type: String,
      trim: true,
    },
    hohighersecondarygirls: {
      type: String,
      trim: true,
    },
    minorityschool: {
      type: String,
      trim: true,
    },
    minoritytype: {
      type: String,
      trim: true,
    },
    mothertongue: {
      type: String,
      trim: true,
    },
    medium1: {
      type: String,
      trim: true,
    },
    medium2: {
      type: String,
      trim: true,
    },
    medium3: {
      type: String,
      trim: true,
    },
    medium4: {
      type: String,
      trim: true,
    },
    othermedium: {
      type: String,
      trim: true,
    },
    languagetaught1: {
      type: String,
      trim: true,
    },
    classtaught1: {
      type: String,
      trim: true,
    },
    langtatboys1: {
      type: String,
      trim: true,
    },
    langtatgirls1: {
      type: String,
      trim: true,
    },
    langtattrans1: {
      type: String,
      trim: true,
    },
    languagetaught2: {
      type: String,
      trim: true,
    },
    classtaught2: {
      type: String,
      trim: true,
    },
    langtatboys2: {
      type: String,
      trim: true,
    },
    langtatgirls2: {
      type: String,
      trim: true,
    },
    langtattrans2: {
      type: String,
      trim: true,
    },
    languagetaught3: {
      type: String,
      trim: true,
    },
    classtaught3: {
      type: String,
      trim: true,
    },
    langtatboys3: {
      type: String,
      trim: true,
    },
    langtatgirls3: {
      type: String,
      trim: true,
    },
    langtattrans3: {
      type: String,
      trim: true,
    },
    languagetaught4: {
      type: String,
      trim: true,
    },
    classtaught4: {
      type: String,
      trim: true,
    },
    langtatboys4: {
      type: String,
      trim: true,
    },
    langtatgirls4: {
      type: String,
      trim: true,
    },
    langtattrans4: {
      type: String,
      trim: true,
    },
    languagetaught5: {
      type: String,
      trim: true,
    },
    classtaught5: {
      type: String,
      trim: true,
    },
    langtatboys5: {
      type: String,
      trim: true,
    },
    langtatgirls5: {
      type: String,
      trim: true,
    },
    langtattrans5: {
      type: String,
      trim: true,
    },
    prevocational: {
      type: String,
      trim: true,
    },
    scode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
section1A30Schema.plugin(toJSON);
section1A30Schema.plugin(paginate);

const Section1A30Schema = mongoose.model('section1A30Schema', section1A30Schema);

module.exports = Section1A30Schema;
