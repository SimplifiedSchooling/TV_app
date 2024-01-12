const httpStatus = require('http-status');
const SaralInformation3 = require('../../models/saral/saral.information3.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Saral Information3
 * @param {Object} saralInfo3
 * @returns {Promise<SaralInformation3>}
 */
const createSaralInfo3 = async (saralInfo3) => {
  return SaralInformation3.create(saralInfo3);
};

/**
 * Query for Saral information3
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSaralInfo3s = async (filter, options) => {
  const result = await SaralInformation3.paginate(filter, options);
  return result;
};

/**
 * Get Saral information3 by id
 * @param {ObjectId} id
 * @returns {Promise<SaralInformation3>}
 */
const getSaralInfo3ById = async (id) => {
  return SaralInformation3.findById(id);
};

/**
 * Get Saral Information1 by saralId
 * @param {string} saralId - The ID of the Saral Information1.
 * @returns {Promise<SaralInformation3>}
 */
const getSaralInfo1BySaralId = async (saralId) => {
  return SaralInformation3.findOne({ saralId });
};
/**
 * Update Saral Information3 by id
 * @param {ObjectId} saralInfo3Id
 * @param {Object} updateBody
 * @returns {Promise<SaralInformation3>}
 */
const updateSaralInfo3ById = async (saralInfo3Id, updateBody) => {
  const saral = await getSaralInfo1BySaralId(saralInfo3Id);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral Information3 not found');
  }
  Object.assign(saral, updateBody);
  await saral.save();
  return saral;
};

/**
 * Delete Saral Information3 by id
 * @param {ObjectId} saralInfo3Id
 * @returns {Promise<SaralInformation3>}
 */
const deleteSaralInfo3ById = async (saralInfo3Id) => {
  const saral = await getSaralInfo1BySaralId(saralInfo3Id);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Saral Information3 not found');
  }
  await saral.remove();
  return saral;
};

module.exports = {
  createSaralInfo3,
  getAllSaralInfo3s,
  getSaralInfo3ById,
  updateSaralInfo3ById,
  deleteSaralInfo3ById,
  getSaralInfo1BySaralId,
};
