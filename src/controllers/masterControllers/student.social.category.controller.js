const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { studentSocialCategory } = require('../../services');

const createSocialCategory = catchAsync(async (req, res) => {
  const socialcategory = await studentSocialCategory.createStudentSocialCategory(req.body);
  res.status(httpStatus.CREATED).send(socialcategory);
});

const getAllSocialCategorys = catchAsync(async (req, res) => {
  const result = await studentSocialCategory.getAllStudentSocialCategory();
  res.send(result);
});

const getSocialCategory = catchAsync(async (req, res) => {
  const socialcategory = await studentSocialCategory.getStudentSocialCategoryById(req.params.socialcategoryId);
  if (!socialcategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Social category not found');
  }
  res.send(socialcategory);
});

const updateSocialCategory = catchAsync(async (req, res) => {
  const socialcategory = await studentSocialCategory.updateStudentSocialCategoryById(req.params.socialcategoryId, req.body);
  res.send(socialcategory);
});

const deleteSocialCategory = catchAsync(async (req, res) => {
  await studentSocialCategory.deleteStudentSocialCategoryById(req.params.socialcategoryId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSocialCategory,
  getAllSocialCategorys,
  getSocialCategory,
  updateSocialCategory,
  deleteSocialCategory,
};
