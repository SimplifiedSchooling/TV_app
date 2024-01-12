const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1A40 = {
  body: Joi.object().keys({
    primaryschdistance: Joi.string().allow('').optional(),
    upperprimaryschdistance: Joi.string().allow('').optional(),
    secondaryschdistance: Joi.string().allow('').optional(),
    highersecondaryschdistance: Joi.string().allow('').optional(),
    allweatherroad: Joi.string().allow('').optional(),
    primaryschinstructionalday: Joi.string().allow('').optional(),
    upperprimaryschinstructionalday: Joi.string().allow('').optional(),
    secondaryschinstructionalday: Joi.string().allow('').optional(),
    highersecondaryschinstructionalday: Joi.string().allow('').optional(),
    primaryschperdayhours: Joi.string().allow('').optional(),
    upperprimaryschperdayhours: Joi.string().allow('').optional(),
    secondaryschperdayhours: Joi.string().allow('').optional(),
    highersecondaryschperdayhours: Joi.string().allow('').optional(),
    primaryschperdayhoursteacher: Joi.string().allow('').optional(),
    upperprimaryschperdayhoursteacher: Joi.string().allow('').optional(),
    secondaryschperdayhoursteacher: Joi.string().allow('').optional(),
    highersecondaryschperdayhoursteacher: Joi.string().allow('').optional(),
    primaryCCE: Joi.string().allow('').optional(),
    upperprimaryCCE: Joi.string().allow('').optional(),
    secondaryCCE: Joi.string().allow('').optional(),
    highersecondaryCCE: Joi.string().allow('').optional(),
    primaryCCENoAss: Joi.string().allow('').optional(),
    upperprimaryCCENoAss: Joi.string().allow('').optional(),
    secondaryCCENoAss: Joi.string().allow('').optional(),
    highersecondaryCCENoAss: Joi.string().allow('').optional(),
    cumulativerecords: Joi.string().allow('').optional(),
    cumulativerecordsparent: Joi.string().allow('').optional(),
    assementprepared: Joi.string().allow('').optional(),
    academicsession: Joi.string().allow('').optional(),
    admissionundersec12: Joi.string().allow('').optional(),
    anganwadiavaliable: Joi.string().allow('').optional(),
    anganwaditrained1: Joi.string().allow('').optional(),
    aganwadieduSta1: Joi.string().allow('').optional(),
    anganwaditrained2: Joi.string().allow('').optional(),
    aganwadieduSta2: Joi.string().allow('').optional(),
    anganwaditrained3: Joi.string().allow('').optional(),
    aganwadieduSta3: Joi.string().allow('').optional(),
    anganwaditrained1Name: Joi.string().allow('').optional(),
    anganwaditrained1Boys: Joi.string().allow('').optional(),
    anganwaditrained1Girls: Joi.string().allow('').optional(),
    anganwaditrained2Name: Joi.string().allow('').optional(),
    anganwaditrained2Boys: Joi.string().allow('').optional(),
    anganwaditrained2Girls: Joi.string().allow('').optional(),
    anganwaditrained3Name: Joi.string().allow('').optional(),
    anganwaditrained3Boys: Joi.string().allow('').optional(),
    anganwaditrained3Girls: Joi.string().allow('').optional(),
    Balavatikastarted: Joi.string().allow('').optional(),
    scode: Joi.string().allow('').optional(),
  }),
};

const getAllSection1A40 = {
  query: Joi.object().keys({
    primaryclass: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1A40 = {
  params: Joi.object().keys({
    Section1A40Id: Joi.string().custom(objectId),
  }),
};

const updateSection1A40 = {
  params: Joi.object().keys({
    Section1A40Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      primaryschdistance: Joi.string().allow('').optional(),
      upperprimaryschdistance: Joi.string().allow('').optional(),
      secondaryschdistance: Joi.string().allow('').optional(),
      highersecondaryschdistance: Joi.string().allow('').optional(),
      allweatherroad: Joi.string().allow('').optional(),
      primaryschinstructionalday: Joi.string().allow('').optional(),
      upperprimaryschinstructionalday: Joi.string().allow('').optional(),
      secondaryschinstructionalday: Joi.string().allow('').optional(),
      highersecondaryschinstructionalday: Joi.string().allow('').optional(),
      primaryschperdayhours: Joi.string().allow('').optional(),
      upperprimaryschperdayhours: Joi.string().allow('').optional(),
      secondaryschperdayhours: Joi.string().allow('').optional(),
      highersecondaryschperdayhours: Joi.string().allow('').optional(),
      primaryschperdayhoursteacher: Joi.string().allow('').optional(),
      upperprimaryschperdayhoursteacher: Joi.string().allow('').optional(),
      secondaryschperdayhoursteacher: Joi.string().allow('').optional(),
      highersecondaryschperdayhoursteacher: Joi.string().allow('').optional(),
      primaryCCE: Joi.string().allow('').optional(),
      upperprimaryCCE: Joi.string().allow('').optional(),
      secondaryCCE: Joi.string().allow('').optional(),
      highersecondaryCCE: Joi.string().allow('').optional(),
      primaryCCENoAss: Joi.string().allow('').optional(),
      upperprimaryCCENoAss: Joi.string().allow('').optional(),
      secondaryCCENoAss: Joi.string().allow('').optional(),
      highersecondaryCCENoAss: Joi.string().allow('').optional(),
      cumulativerecords: Joi.string().allow('').optional(),
      cumulativerecordsparent: Joi.string().allow('').optional(),
      assementprepared: Joi.string().allow('').optional(),
      academicsession: Joi.string().allow('').optional(),
      admissionundersec12: Joi.string().allow('').optional(),
      anganwadiavaliable: Joi.string().allow('').optional(),
      anganwaditrained1: Joi.string().allow('').optional(),
      aganwadieduSta1: Joi.string().allow('').optional(),
      anganwaditrained2: Joi.string().allow('').optional(),
      aganwadieduSta2: Joi.string().allow('').optional(),
      anganwaditrained3: Joi.string().allow('').optional(),
      aganwadieduSta3: Joi.string().allow('').optional(),
      anganwaditrained1Name: Joi.string().allow('').optional(),
      anganwaditrained1Boys: Joi.string().allow('').optional(),
      anganwaditrained1Girls: Joi.string().allow('').optional(),
      anganwaditrained2Name: Joi.string().allow('').optional(),
      anganwaditrained2Boys: Joi.string().allow('').optional(),
      anganwaditrained2Girls: Joi.string().allow('').optional(),
      anganwaditrained3Name: Joi.string().allow('').optional(),
      anganwaditrained3Boys: Joi.string().allow('').optional(),
      anganwaditrained3Girls: Joi.string().allow('').optional(),
      Balavatikastarted: Joi.string().allow('').optional(),
      scode: Joi.string().allow('').optional(),
    })
    .min(1),
};

const deleteSection1A40 = {
  params: Joi.object().keys({
    Section1A40Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1A40,
  getAllSection1A40,
  getSection1A40,
  updateSection1A40,
  deleteSection1A40,
};
