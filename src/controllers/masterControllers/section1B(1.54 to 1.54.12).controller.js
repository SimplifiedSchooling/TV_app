const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1B54Service = require('../../services/masterService/section1B(1.54 to 1.54.12).service');

const createSection1B54 = catchAsync(async (req, res) => {
  const Section1B54 = await Section1B54Service.createSection1B54(req.body);
  res.status(httpStatus.CREATED).send(Section1B54);
});

const getAllSection1B54 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1B54Service.getAllSection1B54(filter, options);
  res.send(result);
});

const getSection1B54ById = catchAsync(async (req, res) => {
  const Section1B54 = await Section1B54Service.getSection1B54ById(req.params.Section1B54Id);
  if (!Section1B54) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1B54 not found');
  }
  res.send(Section1B54);
});

const updateSection1B54 = catchAsync(async (req, res) => {
  const Section1B54 = await Section1B54Service.updateSection1B54ById(req.params.Section1B54Id, req.body);
  res.send(Section1B54);
});

const deleteSection1B54 = catchAsync(async (req, res) => {
  await Section1B54Service.deleteSection1B54ById(req.params.Section1B54Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1B54,
  getAllSection1B54,
  getSection1B54ById,
  updateSection1B54,
  deleteSection1B54,
};
