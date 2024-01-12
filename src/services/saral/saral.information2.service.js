const httpStatus = require('http-status');
const SaralInformation2 = require('../../models/saral/saral.information2.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Saral Information2
 * @param {Object} saralInfo2
 * @returns {Promise<SaralInformation2>}
 */
const createSaralInfo2 = async (saralInfo2) => {
  return SaralInformation2.create(saralInfo2);
};

/**
 * Query for Saral information2
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSaralInfo2s = async (filter, options) => {
  const result = await SaralInformation2.paginate(filter, options);
  return result;
};

/**
 * Get Saral information2 by id
 * @param {ObjectId} id
 * @returns {Promise<SaralInformation2>}
 */
const getSaralInfo2ById = async (id) => {
  return SaralInformation2.findById(id);
};

/**
 * Get Saral Information1 by saralId
 * @param {string} saralId - The ID of the Saral Information1.
 * @returns {Promise<SaralInformation2>}
 */
const getSaralInfo1BySaralId = async (saralId) => {
  return SaralInformation2.findOne({ saralId });
};

/**
 * Update Saral Information2 by id
 * @param {ObjectId} saralInfo2Id
 * @param {Object} updateBody
 * @returns {Promise<SaralInformation2>}
 */
const updateSaralInfo2ById = async (saralInfo2Id, updateBody) => {
  const saral = await getSaralInfo1BySaralId(saralInfo2Id);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral Information2 not found');
  }
  Object.assign(saral, updateBody);
  await saral.save();
  return saral;
};

/**
 * Delete Saral Information2 by id
 * @param {ObjectId} saralInfo2Id
 * @returns {Promise<SaralInformation2>}
 */
const deleteSaralInfo2ById = async (saralInfo2Id) => {
  const saral = await getSaralInfo1BySaralId(saralInfo2Id);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Saral Information2 not found');
  }
  await saral.remove();
  return saral;
};

module.exports = {
  createSaralInfo2,
  getAllSaralInfo2s,
  getSaralInfo2ById,
  updateSaralInfo2ById,
  deleteSaralInfo2ById,
  getSaralInfo1BySaralId,
};
