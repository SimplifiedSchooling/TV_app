const httpStatus = require('http-status');
const { Disability } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Staff Type of Disability
 * @param {Object} disability
 * @returns {Promise<Disability>}
 */
const createStaffDisability = async (disability) => {
  return Disability.create(disability);
};

/**
 * Query for Staff type of Disability
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStaffDisabilitys = async () => {
  const disability = await Disability.find({});
  return disability;
};

/**
 * Get Staff Type of Disability by id
 * @param {ObjectId} id
 * @returns {Promise<Disability>}
 */
const getStaffDisabilityById = async (id) => {
  return Disability.findById(id);
};

/**
 * Update Staff Type of Disability by id
 * @param {ObjectId} disabilityId
 * @param {Object} updateBody
 * @returns {Promise<Disability>}
 */
const updateStaffDisabilityById = async (disabilityId, updateBody) => {
  const disability = await getStaffDisabilityById(disabilityId);
  if (!disability) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff Type of Disability not found');
  }
  Object.assign(disability, updateBody);
  await disability.save();
  return disability;
};

/**
 * Delete Staff type of Disability by id
 * @param {ObjectId} disabilityId
 * @returns {Promise<Disability>}
 */
const deleteStaffDisabilityById = async (disabilityId) => {
  const disability = await getStaffDisabilityById(disabilityId);
  if (!disability) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff Type of Dsability not found');
  }
  await disability.remove();
  return disability;
};

module.exports = {
  createStaffDisability,
  getAllStaffDisabilitys,
  getStaffDisabilityById,
  updateStaffDisabilityById,
  deleteStaffDisabilityById,
};
