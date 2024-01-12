const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1A40Schema = mongoose.Schema(
  {
    primaryschdistance: {
      type: String,
      trim: true,
    },
    upperprimaryschdistance: {
      type: String,
      trim: true,
    },
    secondaryschdistance: {
      type: String,
      trim: true,
    },
    highersecondaryschdistance: {
      type: String,
      trim: true,
    },
    allweatherroad: {
      type: String,
      trim: true,
    },
    primaryschinstructionalday: {
      type: String,
      trim: true,
    },
    upperprimaryschinstructionalday: {
      type: String,
      trim: true,
    },
    secondaryschinstructionalday: {
      type: String,
      trim: true,
    },
    highersecondaryschinstructionalday: {
      type: String,
      trim: true,
    },
    primaryschperdayhours: {
      type: String,
      trim: true,
    },
    upperprimaryschperdayhours: {
      type: String,
      trim: true,
    },
    secondaryschperdayhours: {
      type: String,
      trim: true,
    },
    highersecondaryschperdayhours: {
      type: String,
      trim: true,
    },
    primaryschperdayhoursteacher: {
      type: String,
      trim: true,
    },
    upperprimaryschperdayhoursteacher: {
      type: String,
      trim: true,
    },
    secondaryschperdayhoursteacher: {
      type: String,
      trim: true,
    },
    highersecondaryschperdayhoursteacher: {
      type: String,
      trim: true,
    },
    primaryCCE: {
      type: String,
      trim: true,
    },
    upperprimaryCCE: {
      type: String,
      trim: true,
    },
    secondaryCCE: {
      type: String,
      trim: true,
    },
    highersecondaryCCE: {
      type: String,
      trim: true,
    },
    primaryCCENoAss: {
      type: String,
      trim: true,
    },
    upperprimaryCCENoAss: {
      type: String,
      trim: true,
    },
    secondaryCCENoAss: {
      type: String,
      trim: true,
    },
    highersecondaryCCENoAss: {
      type: String,
      trim: true,
    },
    cumulativerecords: {
      type: String,
      trim: true,
    },
    cumulativerecordsparent: {
      type: String,
      trim: true,
    },
    assementprepared: {
      type: String,
      trim: true,
    },
    academicsession: {
      type: String,
      trim: true,
    },
    admissionundersec12: {
      type: String,
      trim: true,
    },
    anganwadiavaliable: {
      type: String,
      trim: true,
    },
    anganwaditrained1: {
      type: String,
      trim: true,
    },
    aganwadieduSta1: {
      type: String,
      trim: true,
    },
    anganwaditrained2: {
      type: String,
      trim: true,
    },
    aganwadieduSta2: {
      type: String,
      trim: true,
    },
    anganwaditrained3: {
      type: String,
      trim: true,
    },
    aganwadieduSta3: {
      type: String,
      trim: true,
    },
    anganwaditrained1Name: {
      type: String,
      trim: true,
    },
    anganwaditrained1Boys: {
      type: String,
      trim: true,
    },
    anganwaditrained1Girls: {
      type: String,
      trim: true,
    },
    anganwaditrained2Name: {
      type: String,
      trim: true,
    },
    anganwaditrained2Boys: {
      type: String,
      trim: true,
    },
    anganwaditrained2Girls: {
      type: String,
      trim: true,
    },
    anganwaditrained3Name: {
      type: String,
      trim: true,
    },
    anganwaditrained3Boys: {
      type: String,
      trim: true,
    },
    anganwaditrained3Girls: {
      type: String,
      trim: true,
    },
    Balavatikastarted: {
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
section1A40Schema.plugin(toJSON);
section1A40Schema.plugin(paginate);

const Section1A40Schema = mongoose.model('section1A40Schema', section1A40Schema);

module.exports = Section1A40Schema;
