const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1A10Schema = mongoose.Schema(
  {
    schoolname: {
      type: String,
      required: true,
    },
    UDISEcode: {
      type: String,
      required: true,
    },
    districtname: {
      type: String,
      trim: true,
    },
    udiseblock: {
      type: String,
      trim: true,
    },
    typeofschool: {
      type: String,
    },
    revenueblock: {
      type: String,
    },
    villagename: {
      type: String,
    },
    grampanchayatname: {
      type: String,
    },
    urbanlocalbodies: {
      type: String,
    },
    wardname: {
      type: String,
    },
    address: {
      type: String,
    },
    pincode: {
      type: String,
    },
    crc: {
      type: String,
    },
    assembly: {
      type: String,
    },
    parliamentary: {
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    stdcode: {
      type: String,
    },
    landline: {
      type: String,
    },
    mobileno: {
      type: String,
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
    profile_count: {
      type: String,
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
section1A10Schema.plugin(toJSON);
section1A10Schema.plugin(paginate);

const Section1A10Schema = mongoose.model('section1A10Schema', section1A10Schema);

module.exports = Section1A10Schema;
