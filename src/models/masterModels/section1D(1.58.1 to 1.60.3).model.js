const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1D60 = mongoose.Schema(
  {
    schoolgrantrecipt: {
      type: String,
      trim: true,
    },
    schoolgrantexpen: {
      type: String,
      trim: true,
    },
    librarygrantrecipt: {
      type: String,
      trim: true,
    },
    librarygrantexpen: {
      type: String,
      trim: true,
    },
    repairgrantreceipt: {
      type: String,
      trim: true,
    },
    repairgrantexpen: {
      type: String,
      trim: true,
    },
    phyedugrantreceipt: {
      type: String,
      trim: true,
    },
    phyedugrantexpen: {
      type: String,
      trim: true,
    },
    mediagrantreceipt: {
      type: String,
      trim: true,
    },
    mediagrantexpen: {
      type: String,
      trim: true,
    },
    traininggrantreceipt: {
      type: String,
      trim: true,
    },
    traininggrantexpen: {
      type: String,
      trim: true,
    },
    preschoolgrantreceipt: {
      type: String,
      trim: true,
    },
    preschoolgrantexpen: {
      type: String,
      trim: true,
    },
    ngo: {
      type: String,
      trim: true,
    },
    ngoName: {
      type: String,
      trim: true,
    },
    ngoAmount: {
      type: String,
      trim: true,
    },
    psu: {
      type: String,
      trim: true,
    },
    psuName: {
      type: String,
      trim: true,
    },
    psuAmount: {
      type: String,
      trim: true,
    },
    Community: {
      type: String,
      trim: true,
    },
    communityName: {
      type: String,
      trim: true,
    },
    communityAmount: {
      type: String,
      trim: true,
    },
    Other: {
      type: String,
      trim: true,
    },
    otherName: {
      type: String,
      trim: true,
    },
    otherAmount: {
      type: String,
      trim: true,
    },
    ictItem: {
      type: String,
      trim: true,
    },
    sportEqu: {
      type: String,
      trim: true,
    },
    libraryBooks: {
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
section1D60.plugin(toJSON);
section1D60.plugin(paginate);

const Section1D60 = mongoose.model('section1D60', section1D60);

module.exports = Section1D60;
