const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1A50Schema = mongoose.Schema(
  {
    specialtraining: {
      type: String,
      trim: true,
    },
    CurrentAcademicYearNoofboys: {
      type: String,
      trim: true,
    },
    CurrentAcademicYearNoofgirls: {
      type: String,
      trim: true,
    },
    previousAcademicYearNoofboys: {
      type: String,
      trim: true,
    },
    previousAcademicYearNoofgirls: {
      type: String,
      trim: true,
    },
    PreviousYearCompletedNoofboys: {
      type: String,
      trim: true,
    },
    PreviousYearCompletedNoofgirls: {
      type: String,
      trim: true,
    },
    whospecialtraining: {
      type: String,
      trim: true,
    },
    wherespecialtraining: {
      type: String,
      trim: true,
    },
    typespecialtraining: {
      type: String,
      trim: true,
    },
    NoofStudentRemedial: {
      type: String,
      trim: true,
    },
    NoofStudentattendLearingEnh: {
      type: String,
      trim: true,
    },
    NoofAcademicInspection: {
      type: String,
      trim: true,
    },
    NoofVisitbyCRC: {
      type: String,
      trim: true,
    },
    NoofVisitByBRC: {
      type: String,
      trim: true,
    },
    NoofVisitByDistrictOfficer: {
      type: String,
      trim: true,
    },
    NoofVisitByClusterOfficer: {
      type: String,
      trim: true,
    },
    NoofVisitByRegionalOfficer: {
      type: String,
      trim: true,
    },
    NoofVisitByHeadquarterOfficer: {
      type: String,
      trim: true,
    },
    SMCconstitutedAsPerRTE: {
      type: String,
      trim: true,
    },
    SMCconstitutedAsPerSamagraShiksha: {
      type: String,
      trim: true,
    },
    NoSMCMeetingConPreYear: {
      type: String,
      trim: true,
    },
    WeatherSMCPlanSchoolDev: {
      type: String,
      trim: true,
    },
    SMCPlanDevYear: {
      type: String,
      trim: true,
    },
    SBCConstituted: {
      type: String,
      trim: true,
    },
    AcademicCommitteeConstituted: {
      type: String,
      trim: true,
    },
    PTAConstituted: {
      type: String,
      trim: true,
    },
    PTAMeetingLastAcademicYear: {
      type: String,
      trim: true,
    },
    PFMSregistered: {
      type: String,
      trim: true,
    },
    MutiClassSchool: {
      type: String,
      trim: true,
    },
    classtogether1: {
      type: String,
      trim: true,
    },
    muticlassnostudent1: {
      type: String,
      trim: true,
    },
    classtogether2: {
      type: String,
      trim: true,
    },
    muticlassnostudent2: {
      type: String,
      trim: true,
    },
    classtogether3: {
      type: String,
      trim: true,
    },
    muticlassnostudent3: {
      type: String,
      trim: true,
    },
    SchoolPartofComplex: {
      type: String,
      trim: true,
    },
    HubSchoolComplex: {
      type: String,
      trim: true,
    },
    nopreprimaryschoolcomplex: {
      type: String,
      trim: true,
    },
    noprimaryschoolcomplex: {
      type: String,
      trim: true,
    },
    noupperprimaryschoolcomplex: {
      type: String,
      trim: true,
    },
    nosecondaryschoolcomplex: {
      type: String,
      trim: true,
    },
    nohigherseconadryschoolcomplex: {
      type: String,
      trim: true,
    },
    totalschoolcomplex: {
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
section1A50Schema.plugin(toJSON);
section1A50Schema.plugin(paginate);

const Section1A50Schema = mongoose.model('section1A50Schema', section1A50Schema);

module.exports = Section1A50Schema;
