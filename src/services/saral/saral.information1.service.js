const httpStatus = require('http-status');
const SaralInformation1 = require('../../models/saral/saral.information1.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Saral Information1
 * @param {Object} saralInfo1
 * @returns {Promise<SaralInformation1>}
 */
const createSaralInfo1 = async (saralInfo1) => {
  return SaralInformation1.create(saralInfo1);
};

/**
 * Query for Saral information1
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSaralInfo1s = async (filter, options) => {
  const result = await SaralInformation1.paginate(filter, options);
  return result;
};

/**
 * Get Saral information1 by id
 * @param {Object} id
 * @returns {Promise<SaralInformation1>}
 */
const getSaralInfo1ById = async (id) => {
  return SaralInformation1.find(id);
};

/**
 * Get Saral Information1 by saralId
 * @param {string} saralId - The ID of the Saral Information1.
 * @returns {Promise<SaralInformation1>}
 */
const getSaralInfo1BySaralId = async (saralId) => {
  return SaralInformation1.findOne({ saralId });
};
/**
 * Update Saral Information1 by id
 * @param {ObjectId} saralId
 * @param {Object} updateBody
 * @returns {Promise<SaralInformation1>}
 */
const updateSaralInfo1ById = async (saralId, updateBody) => {
  const saral = await getSaralInfo1BySaralId(saralId);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral Information1 not found');
  }
  Object.assign(saral, updateBody);
  await saral.save();
  return saral;
};

/**
 * Delete Saral Information1 by id
 * @param {ObjectId} saralId
 * @returns {Promise<SaralInformation1>}
 */
const deleteSaralInfo1ById = async (saralId) => {
  const saral = await getSaralInfo1BySaralId(saralId);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Saral Information1 not found');
  }
  await saral.remove();
  return saral;
};

module.exports = {
  createSaralInfo1,
  getAllSaralInfo1s,
  getSaralInfo1ById,
  updateSaralInfo1ById,
  deleteSaralInfo1ById,
  getSaralInfo1BySaralId,
};
