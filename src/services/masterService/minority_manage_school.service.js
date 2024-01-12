const httpStatus = require('http-status');
const minorityschoolSchema = require('../../models/masterModels/minority_managed_school.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a minorityschoolSchema
 * @param {Object} minorityschoolSchemaBody
 * @returns {Promise<minorityschoolSchema>}
 */
const createminority = async (minorityschoolSchemaBody) => {
  return minorityschoolSchema.create(minorityschoolSchemaBody);
};

/**
 * Query for minority
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllminority = async (filter, options) => {
  const minority = await minorityschoolSchema.paginate(filter, options);
  return minority;
};

/**
 * Get minorityschoolSchema by id
 * @param {ObjectId} id
 * @returns {Promise<minorityschoolSchema>}
 */
const getminorityById = async (id) => {
  return minorityschoolSchema.findById(id);
};

/**
 * Update minorityschoolSchema by id
 * @param {ObjectId} minorityId
 * @param {Object} updateBody
 * @returns {Promise<minorityschoolSchema>}
 */
const updateminorityById = async (minorityId, updateBody) => {
  const typeminority = await getminorityById(minorityId);
  if (!typeminority) {
    throw new ApiError(httpStatus.NOT_FOUND, 'minority school not found');
  }
  Object.assign(typeminority, updateBody);
  await typeminority.save();
  return typeminority;
};

/**
 * Delete minorityschoolSchema by id
 * @param {ObjectId} minorityId
 * @returns {Promise<minorityschoolSchema>}
 */
const deleteminorityById = async (minorityId) => {
  const minority = await getminorityById(minorityId);
  if (!minority) {
    throw new ApiError(httpStatus.NOT_FOUND, 'minority school not found');
  }
  await minority.remove();
  return minority;
};

module.exports = {
  createminority,
  getAllminority,
  getminorityById,
  updateminorityById,
  deleteminorityById,
};
