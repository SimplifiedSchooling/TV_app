const httpStatus = require('http-status');
const { Appointed } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Appointed For Level
 * @param {Object} reqBody
 * @returns {Promise<Appointed>}
 */
const createAppointedLevel = async (reqBody) => {
  return Appointed.create(reqBody);
};

/**
 * Query for Appointed For Level
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllAppointedLevel = async () => {
  const appointed = await Appointed.find();
  return appointed;
};

/**
 * Get Appointed For Level by id
 * @param {ObjectId} id
 * @returns {Promise<Appointed>}
 */
const getAppointedLevelById = async (id) => {
  return Appointed.findById(id);
};

/**
 * Update Appointed For Level by id
 * @param {ObjectId} appointedId
 * @param {Object} updateBody
 * @returns {Promise<Appointed>}
 */
const updateAppointedLevelById = async (appointedId, updateBody) => {
  const appointed = await getAppointedLevelById(appointedId);
  if (!appointed) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appointed For Level not found');
  }
  Object.assign(appointed, updateBody);
  await appointed.save();
  return appointed;
};

/**
 * Delete Appointed For Level by id
 * @param {ObjectId} appointedId
 * @returns {Promise<AppliedForPlacement>}
 */
const deleteAppointedLevelById = async (appointedId) => {
  const appointed = await getAppointedLevelById(appointedId);
  if (!appointed) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appointed For Level not found');
  }
  await appointed.remove();
  return appointed;
};

module.exports = {
  createAppointedLevel,
  getAllAppointedLevel,
  getAppointedLevelById,
  updateAppointedLevelById,
  deleteAppointedLevelById,
};
