const httpStatus = require('http-status');
const { StudentSocialCategory } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Student Social Category
 * @param {Object} socialcategory
 * @returns {Promise<StudentSocialCategory>}
 */
const createStudentSocialCategory = async (socialcategory) => {
  return StudentSocialCategory.create(socialcategory);
};

/**
 * Query for Classes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const getAllStudentSocialCategory = async () => {
  const socialcategory = await StudentSocialCategory.find();
  return socialcategory;
};

/**
 * Get Student Social Category by id
 * @param {ObjectId} id
 * @returns {Promise<StudentSocialCategory>}
 */
const getStudentSocialCategoryById = async (id) => {
  return StudentSocialCategory.findById(id);
};

/**
 * Update Student Social Category by id
 * @param {ObjectId} socialcategoryId
 * @param {Object} updateBody
 * @returns {Promise<StudentSocialCategory>}
 */
const updateStudentSocialCategoryById = async (socialcategoryId, updateBody) => {
  const socialcategory = await getStudentSocialCategoryById(socialcategoryId);
  if (!socialcategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Social Category not found');
  }
  Object.assign(socialcategory, updateBody);
  await socialcategory.save();
  return socialcategory;
};

/**
 * Delete Student Social Category by id
 * @param {ObjectId} socialcategoryId
 * @returns {Promise<StudentSocialCategory>}
 */
const deleteStudentSocialCategoryById = async (socialcategoryId) => {
  const socialcategory = await getStudentSocialCategoryById(socialcategoryId);
  if (!socialcategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Social Category not found');
  }
  await socialcategory.remove();
  return socialcategory;
};

module.exports = {
  createStudentSocialCategory,
  getAllStudentSocialCategory,
  getStudentSocialCategoryById,
  updateStudentSocialCategoryById,
  deleteStudentSocialCategoryById,
};
