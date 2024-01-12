const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const saralInformation1Service = require('../../services/saral/saral.information1.service');

const createSaralInfo1 = catchAsync(async (req, res) => {
  const saral = await saralInformation1Service.createSaralInfo1(req.body);
  res.status(httpStatus.CREATED).send(saral);
});

const getSaralInfo1s = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['saralName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allSaral = await saralInformation1Service.getAllSaralInfo1s(filter, options);
  res.send(allSaral);
});

const getSaralInfo1 = catchAsync(async (req, res) => {
  const saral = await saralInformation1Service.getSaralInfo1ById(req.params.saralId);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral information1 not found');
  }
  res.send(saral);
});

const updateSaralInfo1 = catchAsync(async (req, res) => {
  const updatedSaral = await saralInformation1Service.updateSaralInfo1ById(req.params.saralId, req.body);
  res.send(updatedSaral);
});

const deleteSaralInfo1 = catchAsync(async (req, res) => {
  const deletedSaral = await saralInformation1Service.deleteSaralInfo1ById(req.params.saralId);
  res.status(httpStatus.NO_CONTENT).send(deletedSaral);
});

const getSaralInfoBysaralId = catchAsync(async (req, res) => {
  const { saralId } = req.params;
  const result = await saralInformation1Service.getSaralInfo1BySaralId(saralId);
  res.send(result);
});

module.exports = {
  createSaralInfo1,
  getSaralInfo1s,
  getSaralInfo1,
  updateSaralInfo1,
  deleteSaralInfo1,
  getSaralInfoBysaralId,
};
