const httpStatus = require('http-status');
const { InternetType } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a InternetType
 * @param {Object} internetType
 * @returns {Promise<InternetType>}
 */
const createInternetType = async (internetType) => {
  return InternetType.create(internetType);
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
const getAllInternetType = async () => {
  const internetTypes = await InternetType.find({});
  return internetTypes;
};

/**
 * Get InternetType by id
 * @param {ObjectId} id
 * @returns {Promise<InternetType>}
 */
const getInternetTypeById = async (id) => {
  return InternetType.findById(id);
};

/**
 * Update InternetType by id
 * @param {ObjectId} internetTypeId
 * @param {Object} updateBody
 * @returns {Promise<InternetType>}
 */
const updateInternetTypeyId = async (internetTypeId, updateBody) => {
  const internetType = await getInternetTypeById(internetTypeId);
  if (!internetType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'internetType not found');
  }
  Object.assign(internetType, updateBody);
  await internetType.save();
  return internetType;
};

/**
 * Delete InternetType by id
 * @param {ObjectId} internetTypeId
 * @returns {Promise<InternetType>}
 */
const deleteInternetTypeById = async (internetTypeId) => {
  const internetType = await getInternetTypeById(internetTypeId);
  if (!internetType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'internetType not found');
  }
  await internetType.remove();
  return internetType;
};

module.exports = {
  createInternetType,
  getAllInternetType,
  getInternetTypeById,
  updateInternetTypeyId,
  deleteInternetTypeById,
};
