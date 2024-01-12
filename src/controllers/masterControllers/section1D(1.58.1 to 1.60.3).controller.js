const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1D60Service = require('../../services/masterService/section1D(1.58.1 to 1.60.3).service');

const createSection1D60 = catchAsync(async (req, res) => {
  const Section1D60 = await Section1D60Service.createSection1D60(req.body);
  res.status(httpStatus.CREATED).send(Section1D60);
});

const getAllSection1D60 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1D60Service.getAllSection1D60(filter, options);
  res.send(result);
});

const getSection1D60ById = catchAsync(async (req, res) => {
  const Section1D60 = await Section1D60Service.getSection1D60ById(req.params.Section1D60Id);
  if (!Section1D60) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1D60 not found');
  }
  res.send(Section1D60);
});

const updateSection1D60 = catchAsync(async (req, res) => {
  const Section1D60 = await Section1D60Service.updateSection1D60ById(req.params.Section1D60Id, req.body);
  res.send(Section1D60);
});

const deleteSection1D60 = catchAsync(async (req, res) => {
  await Section1D60Service.deleteSection1D60ById(req.params.Section1D60Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1D60,
  getAllSection1D60,
  getSection1D60ById,
  updateSection1D60,
  deleteSection1D60,
};
