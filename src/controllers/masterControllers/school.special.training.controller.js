const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { traningService } = require('../../services');

const createSchoolTraning = catchAsync(async (req, res) => {
  const data = await traningService.createSchoolSpecialTraning(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllSchoolTranings = catchAsync(async (req, res) => {
  const result = await traningService.getAllSchoolSpecialTraning();
  res.send(result);
});

const getSchoolTraning = catchAsync(async (req, res) => {
  const traning = await traningService.getSchoolSpecialTraningById(req.params.traningId);
  if (!traning) {
    throw new ApiError(httpStatus.NOT_FOUND, 'School Special traning not found');
  }
  res.send(traning);
});

const updateSchoolTraning = catchAsync(async (req, res) => {
  const traning = await traningService.updateSchoolSpecialTraningById(req.params.traningId, req.body);
  res.send(traning);
});

const deleteSchoolTraning = catchAsync(async (req, res) => {
  await traningService.deleteSchoolSpecialTraningById(req.params.traningId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSchoolTraning,
  getAllSchoolTranings,
  getSchoolTraning,
  updateSchoolTraning,
  deleteSchoolTraning,
};
