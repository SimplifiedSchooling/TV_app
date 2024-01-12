const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section2B27 = mongoose.Schema(
  {
    totalpcavi: {
      type: String,
      trim: true,
    },
    functpcavai: {
      type: String,
      trim: true,
    },
    totallaptopavi: {
      type: String,
      trim: true,
    },
    functlaptopavai: {
      type: String,
      trim: true,
    },
    totaltabletavai: {
      type: String,
      trim: true,
    },
    functtabletavai: {
      type: String,
      trim: true,
    },
    totalteacherlerandevavai: {
      type: String,
      trim: true,
    },
    functteacherlerandevavai: {
      type: String,
      trim: true,
    },
    totalCMSavai: {
      type: String,
      trim: true,
    },
    functCMSavai: {
      type: String,
      trim: true,
    },
    totalprojectoravai: {
      type: String,
      trim: true,
    },
    functprojectoravai: {
      type: String,
      trim: true,
    },
    totalprinteravai: {
      type: String,
      trim: true,
    },
    functprinteravai: {
      type: String,
      trim: true,
    },
    totalscanneravai: {
      type: String,
      trim: true,
    },
    functscanneravai: {
      type: String,
      trim: true,
    },
    totalserveravai: {
      type: String,
      trim: true,
    },
    functserveravai: {
      type: String,
      trim: true,
    },
    totalwebcamavai: {
      type: String,
      trim: true,
    },
    functwebcamavai: {
      type: String,
      trim: true,
    },
    totalsmarttvavai: {
      type: String,
      trim: true,
    },
    functsmarttvavai: {
      type: String,
      trim: true,
    },
    totalsmartclassavai: {
      type: String,
      trim: true,
    },
    functsmartclassavai: {
      type: String,
      trim: true,
    },
    totalmobusedforteachingavai: {
      type: String,
      trim: true,
    },
    functmobusedforteachingavai: {
      type: String,
      trim: true,
    },
    totalradioavai: {
      type: String,
      trim: true,
    },
    functradioavai: {
      type: String,
      trim: true,
    },
    totalupsavai: {
      type: String,
      trim: true,
    },
    functupsavai: {
      type: String,
      trim: true,
    },
    internetf: {
      type: String,
      trim: true,
    },
    typeofinternet: {
      type: String,
      trim: true,
    },
    internetpurpose: {
      type: String,
      trim: true,
    },
    computerlab: {
      type: String,
      trim: true,
    },
    econtent: {
      type: String,
      trim: true,
    },
    cwsn: {
      type: String,
      trim: true,
    },
    dth: {
      type: String,
      trim: true,
    },
    digitallab: {
      type: String,
      trim: true,
    },
    ebookavi: {
      type: String,
      trim: true,
    },
    ictteacher: {
      type: String,
      trim: true,
    },
    noofhours: {
      type: String,
      trim: true,
    },
    ictlab: {
      type: String,
      trim: true,
    },
    yearofimplant: {
      type: String,
      trim: true,
    },
    ictlabfunct: {
      type: String,
      trim: true,
    },
    model1: {
      type: String,
      trim: true,
    },
    ictinst: {
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
section2B27.plugin(toJSON);
section2B27.plugin(paginate);

const Section2B27 = mongoose.model('section2B27', section2B27);

module.exports = Section2B27;
