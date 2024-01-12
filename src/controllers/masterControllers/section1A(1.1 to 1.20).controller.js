const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1A20Service = require('../../services/masterService/section1A(1.1 to 1.20).service');

const createSection1A20 = catchAsync(async (req, res) => {
  const Section1A20 = await Section1A20Service.createSection1A20(req.body);
  res.status(httpStatus.CREATED).send(Section1A20);
});

const getAllSection1A20 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1A20Service.getAllSection1A20(filter, options);
  res.send(result);
});

const getSection1A20ById = catchAsync(async (req, res) => {
  const Section1A20 = await Section1A20Service.getSection1A20ById(req.params.Section1A20Id);
  if (!Section1A20) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A not found');
  }
  res.send(Section1A20);
});

const updateSection1A20 = catchAsync(async (req, res) => {
  const Section1A20 = await Section1A20Service.updateSection1A20ById(req.params.Section1A20Id, req.body);
  res.send(Section1A20);
});

const deleteSection1A20 = catchAsync(async (req, res) => {
  await Section1A20Service.deleteSection1A20ById(req.params.Section1A20Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1A20,
  getAllSection1A20,
  getSection1A20ById,
  updateSection1A20,
  deleteSection1A20,
};
