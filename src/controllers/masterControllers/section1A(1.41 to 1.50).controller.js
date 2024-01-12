const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1A50Service = require('../../services/masterService/section1A(1.41 to 1.50).service');

const createSection1A50 = catchAsync(async (req, res) => {
  const Section1A50 = await Section1A50Service.createSection1A50(req.body);
  res.status(httpStatus.CREATED).send(Section1A50);
});

const getAllSection1A50 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1A50Service.getAllSection1A50(filter, options);
  res.send(result);
});

const getSection1A50ById = catchAsync(async (req, res) => {
  const Section1A50 = await Section1A50Service.getSection1A50ById(req.params.Section1A50Id);
  if (!Section1A50) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A Section1A50 not found');
  }
  res.send(Section1A50);
});

const updateSection1A50 = catchAsync(async (req, res) => {
  const Section1A50 = await Section1A50Service.updateSection1A50ById(req.params.Section1A50Id, req.body);
  res.send(Section1A50);
});

const deleteSection1A50 = catchAsync(async (req, res) => {
  await Section1A50Service.deleteSection1A50ById(req.params.Section1A50Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1A50,
  getAllSection1A50,
  getSection1A50ById,
  updateSection1A50,
  deleteSection1A50,
};
