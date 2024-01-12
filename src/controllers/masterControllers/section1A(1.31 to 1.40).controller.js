const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1A40Service = require('../../services/masterService/section1A(1.31 to 1.40).service');

const createSection1A40 = catchAsync(async (req, res) => {
  const Section1A40 = await Section1A40Service.createSection1A40(req.body);
  res.status(httpStatus.CREATED).send(Section1A40);
});

const getAllSection1A40 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1A40Service.getAllSection1A40(filter, options);
  res.send(result);
});

const getSection1A40ById = catchAsync(async (req, res) => {
  const Section1A40 = await Section1A40Service.getSection1A40ById(req.params.Section1A40Id);
  if (!Section1A40) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A Section1A40 not found');
  }
  res.send(Section1A40);
});

const updateSection1A40 = catchAsync(async (req, res) => {
  const Section1A40 = await Section1A40Service.updateSection1A40ById(req.params.Section1A40Id, req.body);
  res.send(Section1A40);
});

const deleteSection1A40 = catchAsync(async (req, res) => {
  await Section1A40Service.deleteSection1A40ById(req.params.Section1A40Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1A40,
  getAllSection1A40,
  getSection1A40ById,
  updateSection1A40,
  deleteSection1A40,
};
