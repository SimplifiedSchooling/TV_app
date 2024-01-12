const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { laboratoryService } = require('../../services');

const createLaboratory = catchAsync(async (req, res) => {
  const data = await laboratoryService.createLaboratories(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllLaboratory = catchAsync(async (req, res) => {
  const result = await laboratoryService.getAlllaboratory();
  res.send(result);
});

const getLaboratoryById = catchAsync(async (req, res) => {
  const result = await laboratoryService.getLaboratoryById(req.params.laboratoryId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Laboratory not found');
  }
  res.send(result);
});

const updateLaboratoryById = catchAsync(async (req, res) => {
  const result = await laboratoryService.updateLaboratoryById(req.params.laboratoryId, req.body);
  res.send(result);
});

const deleteLaboratoryById = catchAsync(async (req, res) => {
  await laboratoryService.deleteLaboratoryById(req.params.laboratoryId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLaboratory,
  getAllLaboratory,
  getLaboratoryById,
  updateLaboratoryById,
  deleteLaboratoryById,
};
