const httpStatus = require('http-status');
const { Tranningstaff } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Staff Traning
 * @param {Object} traning
 * @returns {Promise<Tranningstaff>}
 */
const createStaffTraning = async (traning) => {
  return Tranningstaff.create(traning);
};

/**
 * Query for Staff Traning
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStaffTranings = async () => {
  const traning = await Tranningstaff.find({});
  return traning;
};

/**
 * Get Staff Traning by id
 * @param {ObjectId} id
 * @returns {Promise<Tranningstaff>}
 */
const getStaffTraningById = async (id) => {
  return Tranningstaff.findById(id);
};

/**
 * Update Staff Traning by id
 * @param {ObjectId} traningId
 * @param {Object} updateBody
 * @returns {Promise<Tranningstaff>}
 */
const updateStaffTraningById = async (traningId, updateBody) => {
  const traning = await getStaffTraningById(traningId);
  if (!traning) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff traning not found');
  }
  Object.assign(traning, updateBody);
  await traning.save();
  return traning;
};

/**
 * Delete Staff Traning by id
 * @param {ObjectId} traningId
 * @returns {Promise<Traning>}
 */
const deleteStaffTraningById = async (traningId) => {
  const traning = await getStaffTraningById(traningId);
  if (!traning) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff traning not found');
  }
  await traning.remove();
  return traning;
};

module.exports = {
  createStaffTraning,
  getAllStaffTranings,
  getStaffTraningById,
  updateStaffTraningById,
  deleteStaffTraningById,
};
