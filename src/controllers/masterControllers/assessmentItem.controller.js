const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { AssessmentItem } = require('../../services');

const createAssessmentItem = catchAsync(async (req, res) => {
  const data = await AssessmentItem.createAssessmentItem(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllAssessmentItem = catchAsync(async (req, res) => {
  const result = await AssessmentItem.getAllAssessmentItem();
  res.send(result);
});

const getAssessmentItemById = catchAsync(async (req, res) => {
  const result = await AssessmentItem.getAssessmentItemById(req.params.assessmentitemId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Assessment item not found');
  }
  res.send(result);
});

const updateAssessmentItemById = catchAsync(async (req, res) => {
  const result = await AssessmentItem.updateAssessmentItemById(req.params.assessmentitemId, req.body);
  res.send(result);
});

const deleteAssessmentItemById = catchAsync(async (req, res) => {
  await AssessmentItem.deleteAssessmentItemById(req.params.assessmentitemId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAssessmentItem,
  getAllAssessmentItem,
  getAssessmentItemById,
  updateAssessmentItemById,
  deleteAssessmentItemById,
};
