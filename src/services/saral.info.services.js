const httpStatus = require('http-status');
const { SaralInfo } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Saral Info
 * @param {Object} saralInfo
 * @returns {Promise<SaralInfo>}
 */
const createSaral = async (saralInfo) => {
  return SaralInfo.create(saralInfo);
};

/**
 * Query for Saral information
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSarals = async (filter, options) => {
  const sarals = await SaralInfo.paginate(filter, options);
  return sarals;
};

/**
 * Get Saral info by id
 * @param {ObjectId} id
 * @returns {Promise<SaralInfo>}
 */
const getSaralById = async (id) => {
  return SaralInfo.findById(id);
};

/**
 * Update Saral Info by id
 * @param {ObjectId} saralId
 * @param {Object} updateBody
 * @returns {Promise<SaralInfo>}
 */
const updateSaralById = async (saralId, updateBody) => {
  const saral = await getSaralById(saralId);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral Info not found');
  }
  Object.assign(saral, updateBody);
  await saral.save();
  return saral;
};

/**
 * Delete Saral Info by id
 * @param {ObjectId} saralId
 * @returns {Promise<SaralInfo>}
 */
const deleteSaralById = async (saralId) => {
  const saral = await getSaralById(saralId);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Saral Info not found');
  }
  await saral.remove();
  return saral;
};

module.exports = {
  createSaral,
  getAllSarals,
  getSaralById,
  updateSaralById,
  deleteSaralById,
};
