const httpStatus = require('http-status');
const { Studio } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Classes
 * @param {Object} studioData
 * @returns {Promise<Studio>}
 */
const createStudio = async (studioData) => {
  return Studio.create(studioData);
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
const getAllStudios = async (filter, options) => {
  const studios = await Studio.paginate(filter, options);
  return studios;
};

/**
 * Get Classes by id
 * @param {ObjectId} id
 * @returns {Promise<Classes>}
 */
const getStudioById = async (id) => {
  return Studio.findById(id);
};

/**
 * Update Classes by id
 * @param {ObjectId} studioId
 * @param {Object} updateBody
 * @returns {Promise<Studio>}
 */
const updateStudioById = async (studioId, updateBody) => {
  const studio = await getStudioById(studioId);
  if (!studio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Studio not found');
  }
  Object.assign(studio, updateBody);
  await studio.save();
  return studio;
};

/**
 * Delete Classes by id
 * @param {ObjectId} studioId
 * @returns {Promise<Studio>}
 */
const deleteStudioById = async (studioId) => {
  const studio = await getStudioById(studioId);
  if (!studio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Studio not found');
  }
  await studio.remove();
  return studio;
};

module.exports = {
  createStudio,
  getAllStudios,
  getStudioById,
  updateStudioById,
  deleteStudioById,
};
