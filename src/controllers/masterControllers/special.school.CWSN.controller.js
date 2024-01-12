const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { specialService } = require('../../services');

const createSpecial = catchAsync(async (req, res) => {
  const data = await specialService.createSpecial(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllSpecial = catchAsync(async (req, res) => {
  const result = await specialService.getAllSpecials();
  res.send(result);
});

const getSpecialById = catchAsync(async (req, res) => {
  const result = await specialService.getSpecialById(req.params.specialId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Special not found');
  }
  res.send(result);
});

const updateSpecialById = catchAsync(async (req, res) => {
  const result = await specialService.updateSpecialById(req.params.specialId, req.body);
  res.send(result);
});

const deleteSpecialById = catchAsync(async (req, res) => {
  await specialService.deleteSpecialById(req.params.specialId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSpecial,
  getAllSpecial,
  getSpecialById,
  updateSpecialById,
  deleteSpecialById,
};
