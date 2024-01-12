const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const saralInformation3Service = require('../../services/saral/saral.information3.service');

const createSaralInfo3 = catchAsync(async (req, res) => {
  const saral = await saralInformation3Service.createSaralInfo3(req.body);
  res.status(httpStatus.CREATED).send(saral);
});

const getSaralInfo3s = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['saralName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allSaral = await saralInformation3Service.getAllSaralInfo3s(filter, options);
  res.send(allSaral);
});

const getSaralInfo3 = catchAsync(async (req, res) => {
  const saral = await saralInformation3Service.getSaralInfo3ById(req.params.saralId);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral information3 not found');
  }
  res.send(saral);
});

const updateSaralInfo3 = catchAsync(async (req, res) => {
  const updatedSaral = await saralInformation3Service.updateSaralInfo3ById(req.params.saralId, req.body);
  res.send(updatedSaral);
});

const deleteSaralInfo3 = catchAsync(async (req, res) => {
  const deletedSaral = await saralInformation3Service.deleteSaralInfo3ById(req.params.saralId);
  res.status(httpStatus.NO_CONTENT).send(deletedSaral);
});

const getSaralInfoBysaralId = catchAsync(async (req, res) => {
  const { saralId } = req.params;
  const result = await saralInformation3Service.getSaralInfo1BySaralId(saralId);
  res.send(result);
});
module.exports = {
  createSaralInfo3,
  getSaralInfo3s,
  getSaralInfo3,
  updateSaralInfo3,
  deleteSaralInfo3,
  getSaralInfoBysaralId,
};
