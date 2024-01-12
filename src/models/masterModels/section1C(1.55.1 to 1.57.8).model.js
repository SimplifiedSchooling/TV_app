const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1C57 = mongoose.Schema(
  {
    middayMeal: {
      type: String,
      trim: true,
    },
    NoOfDayMidDayMeal: {
      type: Number,
      integer: true,
    },
    NoofteacherAadharindatabase: {
      type: Number,
      integer: true,
    },
    schoolevaluation: {
      type: String,
      trim: true,
    },
    schoolcertifiedFIT: {
      type: String,
      trim: true,
    },
    schoolprovHolisticReportCard: {
      type: String,
      trim: true,
    },
    exemplerschool: {
      type: String,
      trim: true,
    },
    dispphotoofteacher: {
      type: String,
      trim: true,
    },
    schooladoptedVidyaPraveshModule: {
      type: String,
      trim: true,
    },
    studentAttendanceEle: {
      type: String,
      trim: true,
    },
    teacherattendanceEle: {
      type: String,
      trim: true,
    },
    consYouthClub: {
      type: String,
      trim: true,
    },
    constEcoClub: {
      type: String,
      trim: true,
    },
    teacherIdcard: {
      type: String,
      trim: true,
    },
    SSSAcertiobtain: {
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
section1C57.plugin(toJSON);
section1C57.plugin(paginate);

const Section1C57 = mongoose.model('section1C57', section1C57);

module.exports = Section1C57;
