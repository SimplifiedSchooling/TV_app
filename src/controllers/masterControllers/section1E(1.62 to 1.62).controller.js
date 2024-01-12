const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1E62Service = require('../../services/masterService/section1E(1.62 to 1.62).service');

const createSection1E62 = catchAsync(async (req, res) => {
  const Section1E62 = await Section1E62Service.createSection1E62(req.body);
  res.status(httpStatus.CREATED).send(Section1E62);
});

const getAllSection1E62 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1E62Service.getAllSection1E62(filter, options);
  res.send(result);
});

const getSection1E62ById = catchAsync(async (req, res) => {
  const Section1E62 = await Section1E62Service.getSection1E62ById(req.params.Section1E62Id);
  if (!Section1E62) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1E62 not found');
  }
  res.send(Section1E62);
});

const updateSection1E62 = catchAsync(async (req, res) => {
  const Section1E62 = await Section1E62Service.updateSection1E62ById(req.params.Section1E62Id, req.body);
  res.send(Section1E62);
});

const deleteSection1E62 = catchAsync(async (req, res) => {
  await Section1E62Service.deleteSection1E62ById(req.params.Section1E62Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1E62,
  getAllSection1E62,
  getSection1E62ById,
  updateSection1E62,
  deleteSection1E62,
};
