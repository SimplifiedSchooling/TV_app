const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const SchoolCategoryServices = require('../../services/masterService/school.category.service');
const ApiError = require('../../utils/ApiError');

const createSchoolCategoryType = catchAsync(async (req, res) => {
  const newSchoolCategory = await SchoolCategoryServices.createSchoolCategory(req.body);
  res.status(httpStatus.CREATED).send(newSchoolCategory);
});

const getAllSchoolCategory = catchAsync(async (req, res) => {
  const getAllSchoolCategories = await SchoolCategoryServices.getAllSchoolCategory();
  res.send(getAllSchoolCategories);
});

const getSchoolCategoryById = catchAsync(async (req, res) => {
  const singleSchoolCategoryType = await SchoolCategoryServices.getSchoolCategoryById(req.params.SchoolCategoryTypeId);
  if (!singleSchoolCategoryType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SchoolCategoryType not found');
  }
  res.send(singleSchoolCategoryType);
});

const updateSchoolCategoryTypeyId = catchAsync(async (req, res) => {
  const updateLocationType = await SchoolCategoryServices.updateSchoolCategoryyId(req.params.SchoolCategoryTypeId, req.body);
  res.send(updateLocationType);
});

const deleteSchoolCategoryTypeById = catchAsync(async (req, res) => {
  const deleteLocationType = await SchoolCategoryServices.deleteSchoolCategoryById(req.params.SchoolCategoryTypeId);
  res.status(httpStatus.NO_CONTENT).send(deleteLocationType);
});

module.exports = {
  createSchoolCategoryType,
  getAllSchoolCategory,
  getSchoolCategoryById,
  updateSchoolCategoryTypeyId,
  deleteSchoolCategoryTypeById,
};
