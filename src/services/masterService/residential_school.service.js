const httpStatus = require('http-status');
const Residentialschool = require('../../models/masterModels/Residential_school.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a residentialschool
 * @param {Object} residentialschoolBody
 * @returns {Promise<Residentialschool>}
 */
const createresidential = async (residentialschoolBody) => {
  return Residentialschool.create(residentialschoolBody);
};

/**
 * Query for residential
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllresidential = async (filter, options) => {
  const residential = await Residentialschool.paginate(filter, options);
  return residential;
};

/**
 * Get Residentialschool by id
 * @param {ObjectId} id
 * @returns {Promise<Residentialschool>}
 */
const getresidentialById = async (id) => {
  return Residentialschool.findById(id);
};

/**
 * Update Residentialschool by id
 * @param {ObjectId} residentialId
 * @param {Object} updateBody
 * @returns {Promise<Residentialschool>}
 */
const updateresidentialById = async (residentialId, updateBody) => {
  const residential = await getresidentialById(residentialId);
  if (!residential) {
    throw new ApiError(httpStatus.NOT_FOUND, 'residential school not found');
  }
  Object.assign(residential, updateBody);
  await residential.save();
  return residential;
};

/**
 * Delete Residentialschool by id
 * @param {ObjectId} residentialId
 * @returns {Promise<Residentialschool>}
 */
const deleteresidentialById = async (residentialId) => {
  const residential = await getresidentialById(residentialId);
  if (!residential) {
    throw new ApiError(httpStatus.NOT_FOUND, 'residential not found');
  }
  await residential.remove();
  return residential;
};

module.exports = {
  createresidential,
  getAllresidential,
  getresidentialById,
  updateresidentialById,
  deleteresidentialById,
};
