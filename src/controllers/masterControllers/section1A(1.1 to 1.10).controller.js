const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const Section1A10Service = require('../../services/masterService/section1A(1.1 to 1.10).service');

const createSection1A10 = catchAsync(async (req, res) => {
  const Section1A10 = await Section1A10Service.createsection1A10(req.body);
  res.status(httpStatus.CREATED).send(Section1A10);
});

const getAllSection1A10 = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await Section1A10Service.getAllsection1A10(filter, options);
  res.send(result);
});

const getSection1A10ById = catchAsync(async (req, res) => {
  const Section1A10 = await Section1A10Service.getsection1A10ById(req.params.Section1A10Id);
  if (!Section1A10) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A_10 not found');
  }
  res.send(Section1A10);
});

const updateSection1A10 = catchAsync(async (req, res) => {
  const Section1A10 = await Section1A10Service.updatesection1A10ById(req.params.Section1A10Id, req.body);
  res.send(Section1A10);
});

const getSchoolByScode = catchAsync(async (req, res) => {
  const school = await Section1A10Service.getSchoolScode(req.params.scode);
  if (!school) {
    throw new ApiError(httpStatus.NOT_FOUND, 'School not found');
  }
  res.send(school);
});

const deleteSection1A10 = catchAsync(async (req, res) => {
  await Section1A10Service.deletesection1A10ById(req.params.Section1A10Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection1A10,
  getAllSection1A10,
  getSection1A10ById,
  updateSection1A10,
  deleteSection1A10,
  getSchoolByScode,
};
