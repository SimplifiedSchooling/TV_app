const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1E62 = mongoose.Schema(
  {
    vocationalNSQF: {
      type: String,
      trim: true,
    },
    sector1: {
      type: String,
      trim: true,
    },
    sector1year: {
      type: String,
      trim: true,
    },
    sector2: {
      type: String,
      trim: true,
    },
    sector2year: {
      type: String,
      trim: true,
    },
    sector3: {
      type: String,
      trim: true,
    },
    sector3year: {
      type: String,
      trim: true,
    },
    sector4: {
      type: String,
      trim: true,
    },
    sector4year: {
      type: String,
      trim: true,
    },
    vocCourseunder: {
      type: String,
      trim: true,
    },
    schoolsetoftextbook: {
      type: String,
      trim: true,
    },
    sepratrroomforVT: {
      type: String,
      trim: true,
    },
    noVocecontent: {
      type: String,
      trim: true,
    },
    trainingduration: {
      type: String,
      trim: true,
    },
    servicetrainingDuration: {
      type: String,
      trim: true,
    },
    Noofcalss10studentselfemppreyaer: {
      type: String,
      trim: true,
    },
    Noofcalss12studentselfemppreyaer: {
      type: String,
      trim: true,
    },
    avaiwithpresentcodition1: {
      type: String,
      trim: true,
    },
    avaiwithpresentcodition2: {
      type: String,
      trim: true,
    },
    avaiwithpresentcodition3: {
      type: String,
      trim: true,
    },
    avaiwithpresentcodition4: {
      type: String,
      trim: true,
    },
    sepratrroomavai1: {
      type: String,
      trim: true,
    },
    sepratrroomavai2: {
      type: String,
      trim: true,
    },
    sepratrroomavai3: {
      type: String,
      trim: true,
    },
    sepratrroomavai4: {
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
section1E62.plugin(toJSON);
section1E62.plugin(paginate);

const Section1E62 = mongoose.model('section1E62', section1E62);

module.exports = Section1E62;
