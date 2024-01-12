const httpStatus = require('http-status');
const SaralInformation4 = require('../../models/saral/saral.information4.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Saral Information4
 * @param {Object} saralInfo4
 * @returns {Promise<SaralInformation4>}
 */
const createSaralInfo4 = async (saralInfo4) => {
  return SaralInformation4.create(saralInfo4);
};

/**
 * Query for Saral information4
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSaralInfo4s = async (filter, options) => {
  const result = await SaralInformation4.paginate(filter, options);
  return result;
};

/**
 * Get Saral information4 by id
 * @param {ObjectId} id
 * @returns {Promise<SaralInformation4>}
 */
const getSaralInfo4ById = async (id) => {
  return SaralInformation4.findById(id);
};

/**
 * Get Saral Information1 by saralId
 * @param {string} saralId - The ID of the Saral Information1.
 * @returns {Promise<SaralInformation4>}
 */
const getSaralInfo1BySaralId = async (saralId) => {
  return SaralInformation4.findOne({ saralId });
};

/**
 * Update Saral Information4 by id
 * @param {ObjectId} saralInfo4Id
 * @param {Object} updateBody
 * @returns {Promise<SaralInformation4>}
 */
const updateSaralInfo4ById = async (saralInfo4Id, updateBody) => {
  const saral = await getSaralInfo1BySaralId(saralInfo4Id);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral Information4 not found');
  }
  Object.assign(saral, updateBody);
  await saral.save();
  return saral;
};

/**
 * Delete Saral Information4 by id
 * @param {ObjectId} saralInfo4Id
 * @returns {Promise<SaralInformation4>}
 */
const deleteSaralInfo4ById = async (saralInfo4Id) => {
  const saral = await getSaralInfo1BySaralId(saralInfo4Id);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Saral Information4 not found');
  }
  await saral.remove();
  return saral;
};

module.exports = {
  createSaralInfo4,
  getAllSaralInfo4s,
  getSaralInfo4ById,
  updateSaralInfo4ById,
  deleteSaralInfo4ById,
  getSaralInfo1BySaralId,
};
