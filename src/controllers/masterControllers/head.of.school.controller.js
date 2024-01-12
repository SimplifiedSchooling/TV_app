const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const inchargeTypeService = require('../../services/masterService/head.of.school.service');
const ApiError = require('../../utils/ApiError');

const createInchargeType = catchAsync(async (req, res) => {
  const newInchargeType = await inchargeTypeService.createInchargeType(req.body);
  res.status(httpStatus.CREATED).send(newInchargeType);
});

const getAllInchargeType = catchAsync(async (req, res) => {
  const getAllIncharge = await inchargeTypeService.getAllInchargeType();
  res.send(getAllIncharge);
});

const getInchargeTypeById = catchAsync(async (req, res) => {
  const singleIncharge = await inchargeTypeService.getInchargeTypeById(req.params.inchargeId);
  if (!singleIncharge) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SchoolLocationType not found');
  }
  res.send(singleIncharge);
});

const updateInchargeTypeyId = catchAsync(async (req, res) => {
  const updateIncharge = await inchargeTypeService.updateInchargeTypeyId(req.params.inchargeId, req.body);
  res.send(updateIncharge);
});

const deleteInchargeTypeById = catchAsync(async (req, res) => {
  const deleteIncharge = await inchargeTypeService.deleteInchargeTypeById(req.params.inchargeId);
  res.status(httpStatus.NO_CONTENT).send(deleteIncharge);
});

module.exports = {
  createInchargeType,
  getAllInchargeType,
  getInchargeTypeById,
  updateInchargeTypeyId,
  deleteInchargeTypeById,
};
