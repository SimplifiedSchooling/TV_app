const httpStatus = require('http-status');
const { Quickrecap } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a quickrecap
 * @param {Object} quickRecapBody
 * @returns {Promise<Quickrecap>}
 */

const createQuickRecap = async (quickRecapBody) => {
  return Quickrecap.create(quickRecapBody);
};

/**
 * Query for quickrecap
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryQuickRecap = async (filter, options) => {
  const quickrecap = await Quickrecap.paginate(filter, options);
  return quickrecap;
};

/**
 * Get quickRecap by id
 * @param {ObjectId} id
 * @returns {Promise<Quickrecap>}
 */
const getQuickRecapById = async (id) => {
  return Quickrecap.findById(id);
};

/**
 * Get QuickRecap by filter
 * @param {ObjectId} boardId
 * @param {ObjectId} mediumId
 * @param {ObjectId} classId
 * @param {ObjectId} subjectId
 * @param {ObjectId} bookId
 * @returns {Promise<Quickrecap>}
 */

const getQuickRecapByFilter = async (boardId, mediumId, classId, subjectId, bookId, chapterId) => {
  return Quickrecap.find({ boardId, mediumId, classId, subjectId, bookId, chapterId });
};

/**
 * Update quickRecap by id
 * @param {ObjectId} quickRecapId
 * @param {Object} updateBody
 * @returns {Promise<Quickrecap>}
 */
const updateQuickRecapById = async (quickRecapId, updateBody) => {
  const quickRecap = await getQuickRecapById(quickRecapId);
  if (!quickRecap) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quick recap not found');
  }
  Object.assign(quickRecap, updateBody);
  await quickRecap.save();
  return quickRecap;
};

/**
 * Delete lession by id
 * @param {ObjectId} quickRecapId
 * @returns {Promise<Quickrecap>}
 */
const deleteQuickRecapById = async (quickRecapId) => {
  const quickRecap = await getQuickRecapById(quickRecapId);
  if (!quickRecap) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quick recap not found');
  }
  await quickRecap.remove();
  return quickRecap;
};

module.exports = {
  createQuickRecap,
  queryQuickRecap,
  getQuickRecapById,
  updateQuickRecapById,
  deleteQuickRecapById,
  getQuickRecapByFilter,
};
