const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createNewPlan = {
  body: Joi.object().keys({
    board: Joi.string(),
    medium: Joi.string(),
    class: Joi.string(),
    subject: Joi.string(),
    book: Joi.string(),
    chapter: Joi.string(),
    lesson: Joi.string(),
    name: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
    type: Joi.string().required(),
    order: Joi.string().required(),
    studioName: Joi.string().required(),
    liveStreamingPath: Joi.string().allow('', null),
    presenterName: Joi.string(),
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
      status: Joi.string(),
      name: Joi.string(),
      date: Joi.string(),
      time: Joi.string(),
      type: Joi.string(),
      board: Joi.string(),
      medium: Joi.string(),
      class: Joi.string(),
      subject: Joi.string(),
      book: Joi.string(),
      chapter: Joi.string(),
      lesson: Joi.string(),
      order: Joi.string(),
      studioName: Joi.string(),
      liveStreamingPath: Joi.string().allow('', null),
      presenterName: Joi.string(),
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
