const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const saralInformation4Schema = mongoose.Schema(
  {
    saralId: {
      type: String,
    },
    scode: {
      type: String,
    },
    typeofactivity: {
      type: String,
      trim: true,
    },
    feestructapprove: {
      type: String,
      trim: true,
    },
    feerevisionpendstatelev: {
      type: String,
      trim: true,
    },
    committeesmc: {
      type: String,
      trim: true,
    },
    smcacademicyear: {
      type: Number,
      trim: true,
    },
    smccommitteplan: {
      type: String,
      trim: true,
    },
    committeeconstitute: {
      type: String,
      trim: true,
    },
    smcsmdccommitte: {
      type: String,
      trim: true,
    },
    smdcpreviousyear: {
      type: Number,
      trim: true,
    },
    smdccommitteimprove: {
      type: String,
      trim: true,
    },
    committedetail: {
      type: String,
      trim: true,
    },
    committeeconstitutepta: {
      type: String,
      trim: true,
    },
    noofmeetingpta: {
      type: Number,
      trim: true,
    },
    committedetailpta: {
      type: String,
      trim: true,
    },
    committeeconstitutemta: {
      type: String,
      trim: true,
    },
    committedetailmta: {
      type: String,
      trim: true,
    },
    committeeconstituteac: {
      type: String,
      trim: true,
    },
    committedetailac: {
      type: String,
      trim: true,
    },
    committeeconstitutetc: {
      type: String,
      trim: true,
    },
    committedetailtc: {
      type: String,
      trim: true,
    },
    committeeconstitutesc: {
      type: String,
      trim: true,
    },
    committedetailsc: {
      type: String,
      trim: true,
    },
    committeeconstitutemdmc: {
      type: String,
      trim: true,
    },
    committedetailmdmc: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
saralInformation4Schema.plugin(toJSON);
saralInformation4Schema.plugin(paginate);

const SaralInformation4 = mongoose.model('SaralInformation4', saralInformation4Schema);
module.exports = SaralInformation4;
