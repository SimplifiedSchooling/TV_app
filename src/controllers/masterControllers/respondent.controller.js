const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { Respondent } = require('../../services');

const createRespondent = catchAsync(async (req, res) => {
  const respondent = await Respondent.createRespondent(req.body);
  res.status(httpStatus.CREATED).send(respondent);
});

const getAllRespondents = catchAsync(async (req, res) => {
  const result = await Respondent.getAllRespondent();
  res.send(result);
});

const getRespondent = catchAsync(async (req, res) => {
  const respondent = await Respondent.getRespondentById(req.params.respondentId);
  if (!respondent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Respondent not found');
  }
  res.send(respondent);
});

const updateRespondent = catchAsync(async (req, res) => {
  const respondent = await Respondent.updateRespondentById(req.params.respondentId, req.body);
  res.send(respondent);
});

const deleteRespondent = catchAsync(async (req, res) => {
  await Respondent.deleteRespondentById(req.params.respondentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createRespondent,
  getAllRespondents,
  getRespondent,
  updateRespondent,
  deleteRespondent,
};
