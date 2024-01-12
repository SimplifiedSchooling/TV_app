const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section2A21Service = require('../../services/masterService/section2A(2.1 to 2.21).service');

const createSection2A21 = catchAsync(async (req, res) => {
  const Section2A21 = await Section2A21Service.createSection2A21(req.body);
  res.status(httpStatus.CREATED).send(Section2A21);
});

const getAllSection2A21 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section2A21Service.getAllSection2A21(filter, options);
  res.send(result);
});

const getSection2A21ById = catchAsync(async (req, res) => {
  const Section2A21 = await Section2A21Service.getSection2A21ById(req.params.Section2A21Id);
  if (!Section2A21) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section2A21 not found');
  }
  res.send(Section2A21);
});

const updateSection2A21 = catchAsync(async (req, res) => {
  const Section2A21 = await Section2A21Service.updateSection2A21ById(req.params.Section2A21Id, req.body);
  res.send(Section2A21);
});

const deleteSection2A21 = catchAsync(async (req, res) => {
  await Section2A21Service.deleteSection2A21ById(req.params.Section2A21Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection2A21,
  getAllSection2A21,
  getSection2A21ById,
  updateSection2A21,
  deleteSection2A21,
};
