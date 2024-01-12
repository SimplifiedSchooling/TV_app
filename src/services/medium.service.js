const httpStatus = require('http-status');
const { Medium } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a medium
 * @param {Object} mediumBody
 * @returns {Promise<Medium>}
 */

const createMedium = async (mediumBody) => {
  return Medium.create(mediumBody);
};

/**
 * Query for medium
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMedium = async (filter, options) => {
  const medium = await Medium.paginate(filter, options);
  return medium;
};

/**
 * Get medium by id
 * @param {ObjectId} id
 * @returns {Promise<Medium>}
 */
const getMediumById = async (id) => {
  return Medium.findById(id);
};

/**
 * Get medium by boardId
 * @param {ObjectId} boardId
 * @returns {Promise<Medium>}
 */
const getMediumByboardId = async (boardId) => {
  return Medium.find({ boardId });
};

/**
 * Update medium by id
 * @param {ObjectId} mediumId
 * @param {Object} updateBody
 * @returns {Promise<Medium>}
 */
const updateMediumById = async (mediumId, updateBody) => {
  const medium = await getMediumById(mediumId);
  if (!medium) {
    throw new ApiError(httpStatus.NOT_FOUND, 'medium not found');
  }
  Object.assign(medium, updateBody);
  await medium.save();
  return medium;
};

/**
 * Delete medium by id
 * @param {ObjectId} mediumId
 * @returns {Promise<Medium>}
 */
const deleteMediumById = async (mediumId) => {
  const medium = await getMediumById(mediumId);
  if (!medium) {
    throw new ApiError(httpStatus.NOT_FOUND, 'medium not found');
  }
  await medium.remove();
  return medium;
};

module.exports = {
  createMedium,
  queryMedium,
  getMediumById,
  updateMediumById,
  deleteMediumById,
  getMediumByboardId,
};
