const httpStatus = require('http-status');
const { Presentator } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Classes
 * @param {Object} presentatorData
 * @returns {Promise<Presentator>}
 */
const createPresentator = async (presentatorData) => {
  return Presentator.create(presentatorData);
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
const getAllPresentator = async (filter, options) => {
  const presentators = await Presentator.paginate(filter, options);
  return presentators;
};

/**
 * Get Classes by id
 * @param {ObjectId} id
 * @returns {Promise<Presentator>}
 */
const getPresentatorById = async (id) => {
  return Presentator.findById(id);
};

/**
 * Update Classes by id
 * @param {ObjectId} presentatorId
 * @param {Object} updateBody
 * @returns {Promise<Presentator>}
 */
const updatePresentatorById = async (presentatorId, updateBody) => {
  const presentator = await getPresentatorById(presentatorId);
  if (!presentator) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Presentator not found');
  }
  Object.assign(presentator, updateBody);
  await presentator.save();
  return presentator;
};

/**
 * Delete Classes by id
 * @param {ObjectId} presentatorId
 * @returns {Promise<Presentator>}
 */
const deletePresentatorById = async (presentatorId) => {
  const presentator = await getPresentatorById(presentatorId);
  if (!presentator) {
    throw new ApiError(httpStatus.NOT_FOUND, 'presentator not found');
  }
  await presentator.remove();
  return presentator;
};

module.exports = {
  createPresentator,
  getAllPresentator,
  getPresentatorById,
  updatePresentatorById,
  deletePresentatorById,
};
