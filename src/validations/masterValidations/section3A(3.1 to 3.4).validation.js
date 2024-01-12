const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection3A = {
  body: Joi.object().keys({
    nofoaccountant: Joi.string().allow('').optional(),
    nofolibassitant: Joi.string().allow('').optional(),
    nofoheadclerk: Joi.string().allow('').optional(),
    nofoLDC: Joi.string().allow('').optional(),
    nofopeon: Joi.string().allow('').optional(),
    nofonightwatchman: Joi.string().allow('').optional(),
    nofolabassitant: Joi.string().allow('').optional(),
    noforegularteacher: Joi.string().allow('').optional(),
    nofononregularstaff: Joi.string().allow('').optional(),
    totalnoofteachingstaff: Joi.string().allow('').optional(),
    noofgusetteacher: Joi.string().allow('').optional(),
    nooftransgenderstaff: Joi.string().allow('').optional(),
    scode: Joi.string().allow('').optional(),
  }),
};

const getAllSection3A = {
  query: Joi.object().keys({
    nofoaccountant: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection3A = {
  params: Joi.object().keys({
    Section3AId: Joi.string().custom(objectId),
  }),
};

const updateSection3A = {
  params: Joi.object().keys({
    Section3AId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      nofoaccountant: Joi.string().allow('').optional(),
      nofolibassitant: Joi.string().allow('').optional(),
      nofoheadclerk: Joi.string().allow('').optional(),
      nofoLDC: Joi.string().allow('').optional(),
      nofopeon: Joi.string().allow('').optional(),
      nofonightwatchman: Joi.string().allow('').optional(),
      nofolabassitant: Joi.string().allow('').optional(),
      noforegularteacher: Joi.string().allow('').optional(),
      nofononregularstaff: Joi.string().allow('').optional(),
      totalnoofteachingstaff: Joi.string().allow('').optional(),
      noofgusetteacher: Joi.string().allow('').optional(),
      nooftransgenderstaff: Joi.string().allow('').optional(),
      scode: Joi.string().allow('').optional(),
    })
    .min(1),
};

const deleteSection3A = {
  params: Joi.object().keys({
    Section3AId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection3A,
  getAllSection3A,
  getSection3A,
  updateSection3A,
  deleteSection3A,
};
