const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createNewPlan = {
  body: Joi.object().keys({
    bord: Joi.string(),
    board: Joi.string(),
    medium: Joi.string(),
    class: Joi.string(),
    subject: Joi.string(),
    book: Joi.string(),
    chapter: Joi.string(),
    title: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
    type: Joi.string().required(),
    order: Joi.string().required(),
    studioName: Joi.string().required().allow('', null),
    liveStreamingPath: Joi.string().allow('', null),
    presenterName: Joi.string().allow('', null),
    questions: Joi.array().items(Joi.string()).allow('', null),
  }),
};

const getSinglePlan = {
  params: Joi.object().keys({
    planId: Joi.string().custom(objectId),
  }),
};

const getAllPlan = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTodayPlan = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updatePlanById = {
  params: Joi.object().keys({
    planId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      bord: Joi.string(),
      board: Joi.string(),
      medium: Joi.string(),
      class: Joi.string(),
      subject: Joi.string(),
      book: Joi.string(),
      chapter: Joi.string(),
      title: Joi.string(),
      date: Joi.string(),
      time: Joi.string(),
      type: Joi.string(),
      order: Joi.string(),
      studioName: Joi.string().allow('', null),
      liveStreamingPath: Joi.string().allow('', null),
      presenterName: Joi.string().allow('', null),
      questions: Joi.array().items(Joi.string()).allow('', null),
    })
    .min(1),
};
const deletePlanById = {
  params: Joi.object().keys({
    planId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createNewPlan,
  getSinglePlan,
  getAllPlan,
  getTodayPlan,
  updatePlanById,
  deletePlanById,
};
