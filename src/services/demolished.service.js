const httpStatus = require('http-status');
const { Demolished } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Demolished
 * @param {Object} reqBody
 * @returns {Promise<Demolished>}
 */
const createDemolished = async (reqBody) => {
  return Demolished.create(reqBody);
};

/**
 * Query for Demolished
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDemolished = async (filter, options) => {
  const demolished = await Demolished.paginate(filter, options);
  return demolished;
};

/**
 * Get demolished by id
 * @param {ObjectId} id
 * @returns {Promise<Demolished>}
 */
const getDemolishedById = async (id) => {
  return Demolished.findById(id);
};

/**
 * Update Demolished by id
 * @param {ObjectId} demolishedId
 * @param {Object} updateBody
 * @returns {Promise<Demolished>}
 */
const updateDemolishedById = async (demolishedId, updateBody) => {
  const demolished = await getDemolishedById(demolishedId);
  if (!demolished) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Demolished not found');
  }
  Object.assign(demolished, updateBody);
  await demolished.save();
  return demolished;
};

/**
 * Delete demolished by id
 * @param {ObjectId} demolishedId
 * @returns {Promise<Demolished>}
 */
const deleteDemolishedById = async (demolishedId) => {
  const demolished = await getDemolishedById(demolishedId);
  if (!demolished) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Demolished not found');
  }
  await demolished.remove();
  return demolished;
};

module.exports = {
  createDemolished,
  queryDemolished,
  getDemolishedById,
  updateDemolishedById,
  deleteDemolishedById,
};
