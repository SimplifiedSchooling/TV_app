const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1A30Service = require('../../services/masterService/section1A(1.21 to 1.30).service');

const createSection1A30 = catchAsync(async (req, res) => {
  const Section1A30 = await Section1A30Service.createSection1A30(req.body);
  res.status(httpStatus.CREATED).send(Section1A30);
});

const getAllSection1A30 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1A30Service.getAllSection1A30(filter, options);
  res.send(result);
});

const getSection1A30ById = catchAsync(async (req, res) => {
  const Section1A30 = await Section1A30Service.getSection1A30ById(req.params.Section1A30Id);
  if (!Section1A30) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A not found');
  }
  res.send(Section1A30);
});

const updateSection1A30 = catchAsync(async (req, res) => {
  const Section1A30 = await Section1A30Service.updateSection1A30ById(req.params.Section1A30Id, req.body);
  res.send(Section1A30);
});

const deleteSection1A30 = catchAsync(async (req, res) => {
  await Section1A30Service.deleteSection1A30ById(req.params.Section1A30Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1A30,
  getAllSection1A30,
  getSection1A30ById,
  updateSection1A30,
  deleteSection1A30,
};
