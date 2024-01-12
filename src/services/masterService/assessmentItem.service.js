const httpStatus = require('http-status');
const { AssessmentItem } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a AssessmentItem
 * @param {Object} reqBody
 * @returns {Promise<AssessmentItem>}
 */
const createAssessmentItem = async (reqBody) => {
  return AssessmentItem.create(reqBody);
};

/**
 * Query for AssessmentItem
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllAssessmentItem = async () => {
  const assessmentItem = await AssessmentItem.find();
  return assessmentItem;
};

/**
 * Get AssessmentItem by id
 * @param {ObjectId} id
 * @returns {Promise<AssessmentItem>}
 */
const getAssessmentItemById = async (id) => {
  return AssessmentItem.findById(id);
};

/**
 * Update AssessmentItem by id
 * @param {ObjectId} assessmentitemId
 * @param {Object} updateBody
 * @returns {Promise<AssessmentItem>}
 */
const updateAssessmentItemById = async (assessmentitemId, updateBody) => {
  const assessmentitem = await getAssessmentItemById(assessmentitemId);
  if (!assessmentitem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Assessment item not found');
  }
  Object.assign(assessmentitem, updateBody);
  await assessmentitem.save();
  return assessmentitem;
};

/**
 * Delete AssessmentItem by id
 * @param {ObjectId} assessmentitemId
 * @returns {Promise<AssessmentItem>}
 */
const deleteAssessmentItemById = async (assessmentitemId) => {
  const assessmentitem = await getAssessmentItemById(assessmentitemId);
  if (!assessmentitem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Assessment item not found');
  }
  await assessmentitem.remove();
  return assessmentitem;
};

module.exports = {
  createAssessmentItem,
  getAllAssessmentItem,
  updateAssessmentItemById,
  deleteAssessmentItemById,
  getAssessmentItemById,
};
