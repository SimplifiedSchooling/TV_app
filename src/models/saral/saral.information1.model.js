const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const saralInformation1Schema = mongoose.Schema(
  {
    saralId: {
      type: String,
    },
    scode: {
      type: String,
    },
    anganwadicenteradj: {
      type: String,
      trim: true,
    },
    noofanganwadinear: {
      type: Number,
      trim: true,
    },
    noofsevika: {
      type: Number,
      trim: true,
    },
    agewiseboy: {
      type: Number,
      trim: true,
    },
    agewisegirl: {
      type: Number,
      trim: true,
    },
    balwadicenter: {
      type: Number,
      trim: true,
    },
    recognizbalwadi: {
      type: Number,
      trim: true,
    },
    recognitiondate: {
      type: Date,
      trim: true,
    },
    noofteacher: {
      type: Number,
      trim: true,
    },
    eodeputyvisit: {
      type: Number,
      trim: true,
    },
    eovisit: {
      type: Number,
      trim: true,
    },
    dodeputyvisit: {
      type: Number,
      trim: true,
    },
    ddvisits: {
      type: Number,
      trim: true,
    },
    dvisitno: {
      type: Number,
      trim: true,
    },
    zmdvisits: {
      type: Number,
      trim: true,
    },
    mdminspno: {
      type: Number,
      trim: true,
    },
    internalaudit: {
      type: Number,
      trim: true,
    },
    externalaudit: {
      type: Number,
      trim: true,
    },
    localauditb: {
      type: Number,
      trim: true,
    },
    auditorauditbgen: {
      type: Number,
      trim: true,
    },

    boarddisplay: {
      type: Number,
      trim: true,
    },
    socialaudit: {
      type: String,
      trim: true,
    },
    grantssa: {
      type: String,
      trim: true,
    },
    spillapril: {
      type: Number,
      trim: true,
    },
    expenditurers: {
      type: Number,
      trim: true,
    },
    sdevelopgrant: {
      type: String,
      trim: true,
    },
    smaintenancegrant: {
      type: String,
      trim: true,
    },
    tlmgrant: {
      type: String,
      trim: true,
    },
    fundscwsn: {
      type: String,
      trim: true,
    },
    grantcontingency: {
      type: String,
      trim: true,
    },
    contingengrantob: {
      type: Number,
      trim: true,
    },
    modelschool1: {
      type: Number,
      trim: true,
    },
    sbpgadoptscheme: {
      type: Number,
      trim: true,
    },
    hostelallowance: {
      type: Number,
      trim: true,
    },
    publiccontribut: {
      type: Number,
      trim: true,
    },
    attendallowance: {
      type: Number,
      trim: true,
    },
    examfeerefund: {
      type: Number,
      trim: true,
    },
    csr: {
      type: Number,
      trim: true,
    },
    shetkiallowance: {
      type: Number,
      trim: true,
    },
    idmifund: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
saralInformation1Schema.plugin(toJSON);
saralInformation1Schema.plugin(paginate);

const SaralInformation1 = mongoose.model('SaralInformation1', saralInformation1Schema);
module.exports = SaralInformation1;
