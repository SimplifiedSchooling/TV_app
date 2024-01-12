const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const saralInformation4Service = require('../../services/saral/saral.information4.service');

const createSaralInfo4 = catchAsync(async (req, res) => {
  const saral = await saralInformation4Service.createSaralInfo4(req.body);
  res.status(httpStatus.CREATED).send(saral);
});

const getSaralInfo4s = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['saralName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allSaral = await saralInformation4Service.getAllSaralInfo4s(filter, options);
  res.send(allSaral);
});

const getSaralInfo4 = catchAsync(async (req, res) => {
  const saral = await saralInformation4Service.getSaralInfo4ById(req.params.saralId);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral information4 not found');
  }
  res.send(saral);
});

const updateSaralInfo4 = catchAsync(async (req, res) => {
  const updatedSaral = await saralInformation4Service.updateSaralInfo4ById(req.params.saralId, req.body);
  res.send(updatedSaral);
});

const deleteSaralInfo4 = catchAsync(async (req, res) => {
  const deletedSaral = await saralInformation4Service.deleteSaralInfo4ById(req.params.saralId);
  res.status(httpStatus.NO_CONTENT).send(deletedSaral);
});

const getSaralInfoBysaralId = catchAsync(async (req, res) => {
  const { saralId } = req.params;
  const result = await saralInformation4Service.getSaralInfo1BySaralId(saralId);
  res.send(result);
});
module.exports = {
  createSaralInfo4,
  getSaralInfo4s,
  getSaralInfo4,
  updateSaralInfo4,
  deleteSaralInfo4,
  getSaralInfoBysaralId,
};
