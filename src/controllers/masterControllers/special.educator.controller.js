const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const SpecialEducatorervices = require('../../services/masterService/special.educator.service');
const ApiError = require('../../utils/ApiError');

const createSpecialEducatorType = catchAsync(async (req, res) => {
  const newSpecialEducatorType = await SpecialEducatorervices.createSpecialEducator(req.body);
  res.status(httpStatus.CREATED).send(newSpecialEducatorType);
});

const getAllSpecialEducator = catchAsync(async (req, res) => {
  const getAllSpecialEducators = await SpecialEducatorervices.getAllSpecialEducator();
  res.send(getAllSpecialEducators);
});

const getSpecialEducatorById = catchAsync(async (req, res) => {
  const singleSpecialEducatorType = await SpecialEducatorervices.getSpecialEducatorById(req.params.specialEducatorId);
  if (!singleSpecialEducatorType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SpecialEducatorType not found');
  }
  res.send(singleSpecialEducatorType);
});

const updateSpecialEducatorTypeyId = catchAsync(async (req, res) => {
  const updateLocationType = await SpecialEducatorervices.updateSpecialEducatoryId(req.params.specialEducatorId, req.body);
  res.send(updateLocationType);
});

const deleteSpecialEducatorTypeById = catchAsync(async (req, res) => {
  const deleteLocationType = await SpecialEducatorervices.deleteSpecialEducatorById(req.params.specialEducatorId);
  res.status(httpStatus.NO_CONTENT).send(deleteLocationType);
});

module.exports = {
  createSpecialEducatorType,
  getAllSpecialEducator,
  getSpecialEducatorById,
  updateSpecialEducatorTypeyId,
  deleteSpecialEducatorTypeById,
};
