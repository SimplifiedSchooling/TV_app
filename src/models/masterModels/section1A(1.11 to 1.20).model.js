const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1A20Schema = mongoose.Schema(
  {
    hoschool: {
      type: String,
      trim: true,
    },
    hosname: {
      type: String,
      trim: true,
    },
    hosmobileno: {
      type: String,
      trim: true,
    },
    schoolcategory: {
      type: String,
      trim: true,
    },
    htlclass: {
      type: String,
      trim: true,
    },
    htlclasshigher: {
      type: String,
      trim: true,
    },
    schoolcwsn: {
      type: String,
      trim: true,
    },
    noclasses: {
      type: String,
      trim: true,
    },
    arts: {
      type: String,
      trim: true,
    },
    science: {
      type: String,
      trim: true,
    },
    commerce: {
      type: String,
      trim: true,
    },
    Vocational: {
      type: String,
      trim: true,
    },
    Streams: {
      type: String,
      trim: true,
    },
    typeschool: {
      type: String,
      trim: true,
    },
    manggroup: {
      type: String,
      trim: true,
    },
    mangcode: {
      type: String,
      trim: true,
    },
    code101: {
      type: String,
      trim: true,
    },
    admintype: {
      type: String,
      trim: true,
    },
    affilationBoard: {
      type: String,
      trim: true,
    },
    affilationNo: {
      type: String,
      trim: true,
    },
    nameofotherboard: {
      type: String,
      trim: true,
    },
    affilationBoardHigherSecondary: {
      type: String,
      trim: true,
    },
    affilationNoHigherSecondary: {
      type: String,
      trim: true,
    },
    nameofotherboardHigherSecondary: {
      type: String,
      trim: true,
    },
    respodentType: {
      type: String,
      trim: true,
    },
    respodentName: {
      type: String,
      trim: true,
    },
    respodentMobileNo: {
      type: String,
      trim: true,
    },
    yearofestablishment: {
      type: String,
      trim: true,
    },
    PrimaryClass: {
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
    higherSecondary: {
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
section1A20Schema.plugin(toJSON);
section1A20Schema.plugin(paginate);

const Section1A20Schema = mongoose.model('section1A20Schema', section1A20Schema);

module.exports = Section1A20Schema;
