const httpStatus = require('http-status');
const { SafetyAndSecurity } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a SafetyAndSecurity
 * @param {Object} safetyAndSecurity
 * @returns {Promise<SafetyAndSecurity>}
 */
const createSafetyAndSecurity = async (safetyAndSecurity) => {
  return SafetyAndSecurity.create(safetyAndSecurity);
};

/**
 * Query for safetyAndSecurity
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSafetyAndSecurity = async () => {
  const safetyAndSecurity = await SafetyAndSecurity.find({});
  return safetyAndSecurity;
};

/**
 * Get SafetyAndSecurity by id
 * @param {ObjectId} id
 * @returns {Promise<SafetyAndSecurity>}
 */
const getSafetyAndSecurityById = async (id) => {
  return SafetyAndSecurity.findById(id);
};

/**
 * Update SafetyAndSecurity by id
 * @param {ObjectId} safetyAndSecurityId
 * @param {Object} updateBody
 * @returns {Promise<SafetyAndSecurity>}
 */
const updateSafetyAndSecurityyId = async (safetyAndSecurityId, updateBody) => {
  const safetyAndSecurity = await getSafetyAndSecurityById(safetyAndSecurityId);
  if (!safetyAndSecurity) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SafetyAndSecurity not found');
  }
  Object.assign(safetyAndSecurity, updateBody);
  await safetyAndSecurity.save();
  return safetyAndSecurity;
};

/**
 * Delete SafetyAndSecurity by id
 * @param {ObjectId} safetyAndSecurityId
 * @returns {Promise<SafetyAndSecurity>}
 */
const deleteSafetyAndSecurityById = async (safetyAndSecurityId) => {
  const safetyAndSecurity = await getSafetyAndSecurityById(safetyAndSecurityId);
  if (!safetyAndSecurity) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SafetyAndSecurity not found');
  }
  await safetyAndSecurity.remove();
  return safetyAndSecurity;
};

module.exports = {
  createSafetyAndSecurity,
  getAllSafetyAndSecurity,
  getSafetyAndSecurityById,
  updateSafetyAndSecurityyId,
  deleteSafetyAndSecurityById,
};
