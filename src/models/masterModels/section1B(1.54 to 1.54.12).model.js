const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1B54Schema = mongoose.Schema(
  {
    sdmpdev: {
      type: String,
      trim: true,
    },
    structuralaudit: {
      type: String,
      trim: true,
    },
    nonstructuralaudit: {
      type: String,
      trim: true,
    },
    CCTVavi: {
      type: String,
      trim: true,
    },
    fireextinguisheravai: {
      type: String,
      trim: true,
    },
    havenodalteacher: {
      type: String,
      trim: true,
    },
    schoolsaftytraining: {
      type: String,
      trim: true,
    },
    disastermangtaught: {
      type: String,
      trim: true,
    },
    defensetrainingforgirls: {
      type: String,
      trim: true,
    },
    noofgirlsproselfdefensetraining: {
      type: String,
      trim: true,
    },
    displaysaftyguidondisboard: {
      type: String,
      trim: true,
    },
    teachergrantcounselor: {
      type: String,
      trim: true,
    },
    guidandcounseling: {
      type: String,
      trim: true,
    },
    sanitizationofparent: {
      type: String,
      trim: true,
    },
    awargenforstudent: {
      type: String,
      trim: true,
    },
    provisionforfeedbackstudent: {
      type: String,
      trim: true,
    },
    complaintbox: {
      type: String,
      trim: true,
    },
    providecopiesofsaftyguid: {
      type: String,
      trim: true,
    },
    frequecyofsaftyaudit: {
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
section1B54Schema.plugin(toJSON);
section1B54Schema.plugin(paginate);

const Section1B54Schema = mongoose.model('section1B54Schema', section1B54Schema);

module.exports = Section1B54Schema;
