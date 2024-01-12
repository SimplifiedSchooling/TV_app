const httpStatus = require('http-status');

const { SpecialEducator } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a SpecialEducator
 * @param {Object} specialEducator
 * @returns {Promise<SpecialEducator>}
 */
const createSpecialEducator = async (specialEducator) => {
  return SpecialEducator.create(specialEducator);
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
const getAllSpecialEducator = async () => {
  const specialEducator = await SpecialEducator.find({});
  return specialEducator;
};

/**
 * Get SpecialEducator by id
 * @param {ObjectId} id
 * @returns {Promise<SpecialEducator>}
 */
const getSpecialEducatorById = async (id) => {
  return SpecialEducator.findById(id);
};

/**
 * Update SpecialEducator by id
 * @param {ObjectId} specialEducatorId
 * @param {Object} updateBody
 * @returns {Promise<SpecialEducator>}
 */
const updateSpecialEducatoryId = async (specialEducatorId, updateBody) => {
  const specialEducator = await getSpecialEducatorById(specialEducatorId);
  if (!specialEducator) {
    throw new ApiError(httpStatus.NOT_FOUND, 'specialEducator not found');
  }
  Object.assign(specialEducator, updateBody);
  await specialEducator.save();
  return specialEducator;
};

/**
 * Delete SpecialEducator by id
 * @param {ObjectId} specialEducatorId
 * @returns {Promise<SpecialEducator>}
 */
const deleteSpecialEducatorById = async (specialEducatorId) => {
  const specialEducator = await getSpecialEducatorById(specialEducatorId);
  if (!specialEducator) {
    throw new ApiError(httpStatus.NOT_FOUND, 'specialEducator not found');
  }
  await specialEducator.remove();
  return specialEducator;
};

module.exports = {
  createSpecialEducator,
  getAllSpecialEducator,
  getSpecialEducatorById,
  updateSpecialEducatoryId,
  deleteSpecialEducatorById,
};
