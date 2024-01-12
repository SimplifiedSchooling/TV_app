const httpStatus = require('http-status');
const BoardingResidentialschool = require('../../models/masterModels/boarding_residential_school.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a BoardingResidentialschool
 * @param {Object} BoardingResidentialschoolBody
 * @returns {Promise<BoardingResidentialschool>}
 */
const createresidential = async (BoardingResidentialschoolBody) => {
  return BoardingResidentialschool.create(BoardingResidentialschoolBody);
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
const getAllboardresidential = async (filter, options) => {
  const residential = await BoardingResidentialschool.paginate(filter, options);
  return residential;
};

/**
 * Get BoardingResidentialschool by id
 * @param {ObjectId} id
 * @returns {Promise<BoardingResidentialschool>}
 */
const getboardresidentialById = async (id) => {
  return BoardingResidentialschool.findById(id);
};

/**
 * Update BoardingResidentialschool by id
 * @param {ObjectId} residentialId
 * @param {Object} updateBody
 * @returns {Promise<BoardingResidentialschool>}
 */
const updateboardresidentialById = async (residentialId, updateBody) => {
  const boardresidential = await getboardresidentialById(residentialId);
  if (!boardresidential) {
    throw new ApiError(httpStatus.NOT_FOUND, 'board residential school not found');
  }
  Object.assign(boardresidential, updateBody);
  await boardresidential.save();
  return boardresidential;
};

/**
 * Delete BoardingResidentialschool by id
 * @param {ObjectId} residentialId
 * @returns {Promise<BoardingResidentialschool>}
 */
const deleteboardresidentialById = async (residentialId) => {
  const residential = await getboardresidentialById(residentialId);
  if (!residential) {
    throw new ApiError(httpStatus.NOT_FOUND, 'board residential school not found');
  }
  await residential.remove();
  return residential;
};

module.exports = {
  createresidential,
  getAllboardresidential,
  getboardresidentialById,
  updateboardresidentialById,
  deleteboardresidentialById,
};
