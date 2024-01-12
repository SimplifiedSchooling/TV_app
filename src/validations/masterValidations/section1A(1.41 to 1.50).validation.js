const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1A50 = {
  body: Joi.object().keys({
    specialtraining: Joi.string().allow('').optional(),
    CurrentAcademicYearNoofboys: Joi.string().allow('').optional(),
    CurrentAcademicYearNoofgirls: Joi.string().allow('').optional(),
    previousAcademicYearNoofboys: Joi.string().allow('').optional(),
    previousAcademicYearNoofgirls: Joi.string().allow('').optional(),
    PreviousYearCompletedNoofboys: Joi.string().allow('').optional(),
    PreviousYearCompletedNoofgirls: Joi.string().allow('').optional(),
    whospecialtraining: Joi.string().allow('').optional(),
    wherespecialtraining: Joi.string().allow('').optional(),
    typespecialtraining: Joi.string().allow('').optional(),
    NoofStudentRemedial: Joi.string().allow('').optional(),
    NoofStudentattendLearingEnh: Joi.string().allow('').optional(),
    NoofAcademicInspection: Joi.string().allow('').optional(),
    NoofVisitbyCRC: Joi.string().allow('').optional(),
    NoofVisitByBRC: Joi.string().allow('').optional(),
    NoofVisitByDistrictOfficer: Joi.string().allow('').optional(),
    NoofVisitByClusterOfficer: Joi.string().allow('').optional(),
    NoofVisitByRegionalOfficer: Joi.string().allow('').optional(),
    NoofVisitByHeadquarterOfficer: Joi.string().allow('').optional(),
    SMCconstitutedAsPerRTE: Joi.string().allow('').optional(),
    SMCconstitutedAsPerSamagraShiksha: Joi.string().allow('').optional(),
    NoSMCMeetingConPreYear: Joi.string().allow('').optional(),
    WeatherSMCPlanSchoolDev: Joi.string().allow('').optional(),
    SMCPlanDevYear: Joi.string().allow('').optional(),
    SBCConstituted: Joi.string().allow('').optional(),
    AcademicCommitteeConstituted: Joi.string().allow('').optional(),
    PTAConstituted: Joi.string().allow('').optional(),
    PTAMeetingLastAcademicYear: Joi.string().allow('').optional(),
    PFMSregistered: Joi.string().allow('').optional(),
    MutiClassSchool: Joi.string().allow('').optional(),
    classtogether1: Joi.string().allow('').optional(),
    muticlassnostudent1: Joi.string().allow('').optional(),
    classtogether2: Joi.string().allow('').optional(),
    muticlassnostudent2: Joi.string().allow('').optional(),
    classtogether3: Joi.string().allow('').optional(),
    muticlassnostudent3: Joi.string().allow('').optional(),
    SchoolPartofComplex: Joi.string().allow('').optional(),
    HubSchoolComplex: Joi.string().allow('').optional(),
    nopreprimaryschoolcomplex: Joi.string().allow('').optional(),
    noprimaryschoolcomplex: Joi.string().allow('').optional(),
    noupperprimaryschoolcomplex: Joi.string().allow('').optional(),
    nosecondaryschoolcomplex: Joi.string().allow('').optional(),
    nohigherseconadryschoolcomplex: Joi.string().allow('').optional(),
    totalschoolcomplex: Joi.string().allow('').optional(),
    scode: Joi.string().allow('').optional(),
  }),
};

const getAllSection1A50 = {
  query: Joi.object().keys({
    primaryclass: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1A50 = {
  params: Joi.object().keys({
    Section1A50Id: Joi.string().custom(objectId),
  }),
};

const updateSection1A50 = {
  params: Joi.object().keys({
    Section1A50Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      specialtraining: Joi.string().allow('').optional(),
      CurrentAcademicYearNoofboys: Joi.string().allow('').optional(),
      CurrentAcademicYearNoofgirls: Joi.string().allow('').optional(),
      previousAcademicYearNoofboys: Joi.string().allow('').optional(),
      previousAcademicYearNoofgirls: Joi.string().allow('').optional(),
      PreviousYearCompletedNoofboys: Joi.string().allow('').optional(),
      PreviousYearCompletedNoofgirls: Joi.string().allow('').optional(),
      whospecialtraining: Joi.string().allow('').optional(),
      wherespecialtraining: Joi.string().allow('').optional(),
      typespecialtraining: Joi.string().allow('').optional(),
      NoofStudentRemedial: Joi.string().allow('').optional(),
      NoofStudentattendLearingEnh: Joi.string().allow('').optional(),
      NoofAcademicInspection: Joi.string().allow('').optional(),
      NoofVisitbyCRC: Joi.string().allow('').optional(),
      NoofVisitByBRC: Joi.string().allow('').optional(),
      NoofVisitByDistrictOfficer: Joi.string().allow('').optional(),
      NoofVisitByClusterOfficer: Joi.string().allow('').optional(),
      NoofVisitByRegionalOfficer: Joi.string().allow('').optional(),
      NoofVisitByHeadquarterOfficer: Joi.string().allow('').optional(),
      SMCconstitutedAsPerRTE: Joi.string().allow('').optional(),
      SMCconstitutedAsPerSamagraShiksha: Joi.string().allow('').optional(),
      NoSMCMeetingConPreYear: Joi.string().allow('').optional(),
      WeatherSMCPlanSchoolDev: Joi.string().allow('').optional(),
      SMCPlanDevYear: Joi.string().allow('').optional(),
      SBCConstituted: Joi.string().allow('').optional(),
      AcademicCommitteeConstituted: Joi.string().allow('').optional(),
      PTAConstituted: Joi.string().allow('').optional(),
      PTAMeetingLastAcademicYear: Joi.string().allow('').optional(),
      PFMSregistered: Joi.string().allow('').optional(),
      MutiClassSchool: Joi.string().allow('').optional(),
      classtogether1: Joi.string().allow('').optional(),
      muticlassnostudent1: Joi.string().allow('').optional(),
      classtogether2: Joi.string().allow('').optional(),
      muticlassnostudent2: Joi.string().allow('').optional(),
      classtogether3: Joi.string().allow('').optional(),
      muticlassnostudent3: Joi.string().allow('').optional(),
      SchoolPartofComplex: Joi.string().allow('').optional(),
      HubSchoolComplex: Joi.string().allow('').optional(),
      nopreprimaryschoolcomplex: Joi.string().allow('').optional(),
      noprimaryschoolcomplex: Joi.string().allow('').optional(),
      noupperprimaryschoolcomplex: Joi.string().allow('').optional(),
      nosecondaryschoolcomplex: Joi.string().allow('').optional(),
      nohigherseconadryschoolcomplex: Joi.string().allow('').optional(),
      totalschoolcomplex: Joi.string().allow('').optional(),
      scode: Joi.string().allow('').optional(),
    })
    .min(1),
};

const deleteSection1A50 = {
  params: Joi.object().keys({
    Section1A50Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1A50,
  getAllSection1A50,
  getSection1A50,
  updateSection1A50,
  deleteSection1A50,
};
