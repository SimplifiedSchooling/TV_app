const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section2B27Service = require('../../services/masterService/section2B(2.22 to 2.27).service');

const createSection2B27 = catchAsync(async (req, res) => {
  const Section2B27 = await Section2B27Service.createSection2B27(req.body);
  res.status(httpStatus.CREATED).send(Section2B27);
});

const getAllSection2B27 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section2B27Service.getAllSection2B27(filter, options);
  res.send(result);
});

const getSection2B27ById = catchAsync(async (req, res) => {
  const Section2B27 = await Section2B27Service.getSection2B27ById(req.params.Section2B27Id);
  if (!Section2B27) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section2B27 not found');
  }
  res.send(Section2B27);
});

const updateSection2B27 = catchAsync(async (req, res) => {
  const Section2B27 = await Section2B27Service.updateSection2B27ById(req.params.Section2B27Id, req.body);
  res.send(Section2B27);
});

const deleteSection2B27 = catchAsync(async (req, res) => {
  await Section2B27Service.deleteSection2B27ById(req.params.Section2B27Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection2B27,
  getAllSection2B27,
  getSection2B27ById,
  updateSection2B27,
  deleteSection2B27,
};
