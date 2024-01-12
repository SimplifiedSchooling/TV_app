const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const ResultTypeServices = require('../../services/masterService/results.service');
const ApiError = require('../../utils/ApiError');

const createResultType = catchAsync(async (req, res) => {
  const newResultType = await ResultTypeServices.createResult(req.body);
  res.status(httpStatus.CREATED).send(newResultType);
});

const getAllResultType = catchAsync(async (req, res) => {
  const getAllResultTypes = await ResultTypeServices.getAllResultType();
  res.send(getAllResultTypes);
});

const getResultTypeById = catchAsync(async (req, res) => {
  const singleResultType = await ResultTypeServices.getResultTypeById(req.params.resultTypeId);
  if (!singleResultType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ResultType not found');
  }
  res.send(singleResultType);
});

const updateResultTypeyId = catchAsync(async (req, res) => {
  const updateResultType = await ResultTypeServices.updateResultTypeyId(req.params.resultTypeId, req.body);
  res.send(updateResultType);
});

const deleteResultTypeById = catchAsync(async (req, res) => {
  const deleteResultType = await ResultTypeServices.deleteResultTypeById(req.params.resultTypeId);
  res.status(httpStatus.NO_CONTENT).send(deleteResultType);
});

module.exports = {
  createResultType,
  getAllResultType,
  getResultTypeById,
  updateResultTypeyId,
  deleteResultTypeById,
};
