const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection2B27 = {
  body: Joi.object().keys({
    totalpcavi: Joi.string().allow('').optional(),
    functpcavai: Joi.string().allow('').optional(),
    totallaptopavi: Joi.string().allow('').optional(),
    functlaptopavai: Joi.string().allow('').optional(),
    totaltabletavai: Joi.string().allow('').optional(),
    functtabletavai: Joi.string().allow('').optional(),
    totalteacherlerandevavai: Joi.string().allow('').optional(),
    functteacherlerandevavai: Joi.string().allow('').optional(),
    totalCMSavai: Joi.string().allow('').optional(),
    functCMSavai: Joi.string().allow('').optional(),
    totalprojectoravai: Joi.string().allow('').optional(),
    functprojectoravai: Joi.string().allow('').optional(),
    totalprinteravai: Joi.string().allow('').optional(),
    functprinteravai: Joi.string().allow('').optional(),
    totalscanneravai: Joi.string().allow('').optional(),
    functscanneravai: Joi.string().allow('').optional(),
    totalserveravai: Joi.string().allow('').optional(),
    functserveravai: Joi.string().allow('').optional(),
    totalwebcamavai: Joi.string().allow('').optional(),
    functwebcamavai: Joi.string().allow('').optional(),
    totalsmarttvavai: Joi.string().allow('').optional(),
    functsmarttvavai: Joi.string().allow('').optional(),
    totalsmartclassavai: Joi.string().allow('').optional(),
    functsmartclassavai: Joi.string().allow('').optional(),
    totalmobusedforteachingavai: Joi.string().allow('').optional(),
    functmobusedforteachingavai: Joi.string().allow('').optional(),
    totalradioavai: Joi.string().allow('').optional(),
    functradioavai: Joi.string().allow('').optional(),
    totalupsavai: Joi.string().allow('').optional(),
    functupsavai: Joi.string().allow('').optional(),
    internetf: Joi.string().allow('').optional(),
    typeofinternet: Joi.string().allow('').optional(),
    internetpurpose: Joi.string().allow('').optional(),
    computerlab: Joi.string().allow('').optional(),
    econtent: Joi.string().allow('').optional(),
    cwsn: Joi.string().allow('').optional(),
    dth: Joi.string().allow('').optional(),
    digitallab: Joi.string().allow('').optional(),
    ebookavi: Joi.string().allow('').optional(),
    ictteacher: Joi.string().allow('').optional(),
    noofhours: Joi.string().allow('').optional(),
    ictlab: Joi.string().allow('').optional(),
    yearofimplant: Joi.string().allow('').optional(),
    ictlabfunct: Joi.string().allow('').optional(),
    model1: Joi.string().allow('').optional(),
    ictinst: Joi.string().allow('').optional(),
    scode: Joi.string().allow('').optional(),
  }),
};

const getAllSection2B27 = {
  query: Joi.object().keys({
    totalpcavi: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.string().allow('').optional(),
    page: Joi.string().allow('').optional(),
  }),
};

const getSection2B27 = {
  params: Joi.object().keys({
    Section2B27Id: Joi.string().custom(objectId),
  }),
};

const updateSection2B27 = {
  params: Joi.object().keys({
    Section2B27Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      totalpcavi: Joi.string().allow('').optional(),
      functpcavai: Joi.string().allow('').optional(),
      totallaptopavi: Joi.string().allow('').optional(),
      functlaptopavai: Joi.string().allow('').optional(),
      totaltabletavai: Joi.string().allow('').optional(),
      functtabletavai: Joi.string().allow('').optional(),
      totalteacherlerandevavai: Joi.string().allow('').optional(),
      functteacherlerandevavai: Joi.string().allow('').optional(),
      totalCMSavai: Joi.string().allow('').optional(),
      functCMSavai: Joi.string().allow('').optional(),
      totalprojectoravai: Joi.string().allow('').optional(),
      functprojectoravai: Joi.string().allow('').optional(),
      totalprinteravai: Joi.string().allow('').optional(),
      functprinteravai: Joi.string().allow('').optional(),
      totalscanneravai: Joi.string().allow('').optional(),
      functscanneravai: Joi.string().allow('').optional(),
      totalserveravai: Joi.string().allow('').optional(),
      functserveravai: Joi.string().allow('').optional(),
      totalwebcamavai: Joi.string().allow('').optional(),
      functwebcamavai: Joi.string().allow('').optional(),
      totalsmarttvavai: Joi.string().allow('').optional(),
      functsmarttvavai: Joi.string().allow('').optional(),
      totalsmartclassavai: Joi.string().allow('').optional(),
      functsmartclassavai: Joi.string().allow('').optional(),
      totalmobusedforteachingavai: Joi.string().allow('').optional(),
      functmobusedforteachingavai: Joi.string().allow('').optional(),
      totalradioavai: Joi.string().allow('').optional(),
      functradioavai: Joi.string().allow('').optional(),
      totalupsavai: Joi.string().allow('').optional(),
      functupsavai: Joi.string().allow('').optional(),
      internetf: Joi.string().allow('').optional(),
      typeofinternet: Joi.string().allow('').optional(),
      internetpurpose: Joi.string().allow('').optional(),
      computerlab: Joi.string().allow('').optional(),
      econtent: Joi.string().allow('').optional(),
      cwsn: Joi.string().allow('').optional(),
      dth: Joi.string().allow('').optional(),
      digitallab: Joi.string().allow('').optional(),
      ebookavi: Joi.string().allow('').optional(),
      ictteacher: Joi.string().allow('').optional(),
      noofhours: Joi.string().allow('').optional(),
      ictlab: Joi.string().allow('').optional(),
      yearofimplant: Joi.string().allow('').optional(),
      ictlabfunct: Joi.string().allow('').optional(),
      model1: Joi.string().allow('').optional(),
      ictinst: Joi.string().allow('').optional(),
      scode: Joi.string().allow('').optional(),
    })
    .min(1),
};

const deleteSection2B27 = {
  params: Joi.object().keys({
    Section2B27Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection2B27,
  getAllSection2B27,
  getSection2B27,
  updateSection2B27,
  deleteSection2B27,
};
