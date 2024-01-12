const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section3AService = require('../../services/masterService/section3A(3.1 to 3.4).service');

const createSection3A = catchAsync(async (req, res) => {
  const Section3A = await Section3AService.createSection3A(req.body);
  res.status(httpStatus.CREATED).send(Section3A);
});

const getAllSection3A = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section3AService.getAllSection3A(filter, options);
  res.send(result);
});

const getSection3AById = catchAsync(async (req, res) => {
  const Section3A = await Section3AService.getSection3AById(req.params.Section3AId);
  if (!Section3A) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section3A not found');
  }
  res.send(Section3A);
});

const updateSection3A = catchAsync(async (req, res) => {
  const Section3A = await Section3AService.updateSection3AById(req.params.Section3AId, req.body);
  res.send(Section3A);
});

const deleteSection3A = catchAsync(async (req, res) => {
  await Section3AService.deleteSection3AById(req.params.Section3AId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection3A,
  getAllSection3A,
  getSection3AById,
  updateSection3A,
  deleteSection3A,
};
