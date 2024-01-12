const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1C57Service = require('../../services/masterService/section1C(1.55 to 1.57.8).service');

const createSection1C57 = catchAsync(async (req, res) => {
  const Section1C57 = await Section1C57Service.createSection1C57(req.body);
  res.status(httpStatus.CREATED).send(Section1C57);
});

const getAllSection1C57 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1C57Service.getAllSection1C57(filter, options);
  res.send(result);
});

const getSection1C57ById = catchAsync(async (req, res) => {
  const Section1C57 = await Section1C57Service.getSection1C57ById(req.params.Section1C57Id);
  if (!Section1C57) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1C57 not found');
  }
  res.send(Section1C57);
});

const updateSection1C57 = catchAsync(async (req, res) => {
  const Section1C57 = await Section1C57Service.updateSection1C57ById(req.params.Section1C57Id, req.body);
  res.send(Section1C57);
});

const deleteSection1C57 = catchAsync(async (req, res) => {
  await Section1C57Service.deleteSection1C57ById(req.params.Section1C57Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1C57,
  getAllSection1C57,
  getSection1C57ById,
  updateSection1C57,
  deleteSection1C57,
};
