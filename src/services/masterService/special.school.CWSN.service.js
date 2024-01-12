const httpStatus = require('http-status');
const { Special } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Type of Special School CWSN
 * @param {Object} special
 * @returns {Promise<Special>}
 */
const createSpecial = async (special) => {
  return Special.create(special);
};

/**
 * Query for Type of Special School CWSN
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSpecials = async () => {
  const special = await Special.find({});
  return special;
};

/**
 * Get Type of Special School CWSN by id
 * @param {ObjectId} id
 * @returns {Promise<Special>}
 */
const getSpecialById = async (id) => {
  return Special.findById(id);
};

/**
 * Update Type of Special School CWSN by id
 * @param {ObjectId} specialId
 * @param {Object} updateBody
 * @returns {Promise<Special>}
 */
const updateSpecialById = async (specialId, updateBody) => {
  const special = await getSpecialById(specialId);
  if (!special) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type of Special School CWSN not found');
  }
  Object.assign(special, updateBody);
  await special.save();
  return special;
};

/**
 * Delete Type of Special School CWSN by id
 * @param {ObjectId} specialId
 * @returns {Promise<Special>}
 */
const deleteSpecialById = async (specialId) => {
  const special = await getSpecialById(specialId);
  if (!special) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type of Special School CWSN not found');
  }
  await special.remove();
  return special;
};

module.exports = {
  createSpecial,
  getAllSpecials,
  getSpecialById,
  updateSpecialById,
  deleteSpecialById,
};
