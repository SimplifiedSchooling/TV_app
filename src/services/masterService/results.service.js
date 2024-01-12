const httpStatus = require('http-status');
const { Result } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a ResultType
 * @param {Object} resultType
 * @returns {Promise<Result>}
 */
const createResult = async (resultType) => {
  return Result.create(resultType);
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
const getAllResultType = async () => {
  const resultTypes = await Result.find({});
  return resultTypes;
};

/**
 * Get ResultType by id
 * @param {ObjectId} id
 * @returns {Promise<Result>}
 */
const getResultTypeById = async (id) => {
  return Result.findById(id);
};

/**
 * Update ResultType by id
 * @param {ObjectId} resultTypeId
 * @param {Object} updateBody
 * @returns {Promise<Result>}
 */
const updateResultTypeyId = async (resultTypeId, updateBody) => {
  const resultType = await getResultTypeById(resultTypeId);
  if (!resultType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ResultType not found');
  }
  Object.assign(resultType, updateBody);
  await resultType.save();
  return resultType;
};

/**
 * Delete ResultType by id
 * @param {ObjectId} resultTypeId
 * @returns {Promise<Result>}
 */
const deleteResultTypeById = async (resultTypeId) => {
  const resultType = await getResultTypeById(resultTypeId);
  if (!resultType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ResultType not found');
  }
  await resultType.remove();
  return resultType;
};

module.exports = {
  createResult,
  getAllResultType,
  getResultTypeById,
  updateResultTypeyId,
  deleteResultTypeById,
};
