const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section3A = mongoose.Schema(
  {
    nofoaccountant: {
      type: String,
      trim: true,
    },
    nofolibassitant: {
      type: String,
      trim: true,
    },
    nofoheadclerk: {
      type: String,
      trim: true,
    },
    nofoLDC: {
      type: String,
      trim: true,
    },
    nofopeon: {
      type: String,
      trim: true,
    },
    nofonightwatchman: {
      type: String,
      trim: true,
    },
    nofolabassitant: {
      type: String,
      trim: true,
    },
    noforegularteacher: {
      type: String,
      trim: true,
    },
    nofononregularstaff: {
      type: String,
      trim: true,
    },
    totalnoofteachingstaff: {
      type: String,
      trim: true,
    },
    noofgusetteacher: {
      type: String,
      trim: true,
    },
    nooftransgenderstaff: {
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
section3A.plugin(toJSON);
section3A.plugin(paginate);

const Section3A = mongoose.model('section3A', section3A);

module.exports = Section3A;
