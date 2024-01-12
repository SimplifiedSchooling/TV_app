const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const saralInformation2Service = require('../../services/saral/saral.information2.service');

const createSaralInfo2 = catchAsync(async (req, res) => {
  const saral = await saralInformation2Service.createSaralInfo2(req.body);
  res.status(httpStatus.CREATED).send(saral);
});

const getSaralInfo2s = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['saralName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allSaral = await saralInformation2Service.getAllSaralInfo2s(filter, options);
  res.send(allSaral);
});

const getSaralInfo2 = catchAsync(async (req, res) => {
  const saral = await saralInformation2Service.getSaralInfo2ById(req.params.saralId);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral information2 not found');
  }
  res.send(saral);
});

const updateSaralInfo2 = catchAsync(async (req, res) => {
  const updatedSaral = await saralInformation2Service.updateSaralInfo2ById(req.params.saralId, req.body);
  res.send(updatedSaral);
});

const deleteSaralInfo2 = catchAsync(async (req, res) => {
  const deletedSaral = await saralInformation2Service.deleteSaralInfo2ById(req.params.saralId);
  res.status(httpStatus.NO_CONTENT).send(deletedSaral);
});

const getSaralInfoBysaralId = catchAsync(async (req, res) => {
  const { saralId } = req.params;
  const result = await saralInformation2Service.getSaralInfo1BySaralId(saralId);
  res.send(result);
});

module.exports = {
  createSaralInfo2,
  getSaralInfo2s,
  getSaralInfo2,
  updateSaralInfo2,
  deleteSaralInfo2,
  getSaralInfoBysaralId,
};
