const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1A53Service = require('../../services/masterService/section1A(1.51 to 1.53).service');

const createSection1A53 = catchAsync(async (req, res) => {
  const Section1A53 = await Section1A53Service.createSection1A53(req.body);
  res.status(httpStatus.CREATED).send(Section1A53);
});

const getAllSection1A53 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1A53Service.getAllSection1A53(filter, options);
  res.send(result);
});

const getSection1A53ById = catchAsync(async (req, res) => {
  const Section1A53 = await Section1A53Service.getSection1A53ById(req.params.Section1A53Id);
  if (!Section1A53) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A Section1A53 not found');
  }
  res.send(Section1A53);
});

const updateSection1A53 = catchAsync(async (req, res) => {
  const Section1A53 = await Section1A53Service.updateSection1A53ById(req.params.Section1A53Id, req.body);
  res.send(Section1A53);
});

const deleteSection1A53 = catchAsync(async (req, res) => {
  await Section1A53Service.deleteSection1A53ById(req.params.Section1A53Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1A53,
  getAllSection1A53,
  getSection1A53ById,
  updateSection1A53,
  deleteSection1A53,
};
