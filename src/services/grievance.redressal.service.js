const httpStatus = require('http-status');
const { GrievanceRedressal } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Grievance Redressal
 * @param {Object} reqBody
 * @returns {Promise<GrievanceRedressal>}
 */
const createGrievanceRedressal = async (reqBody) => {
  return GrievanceRedressal.create(reqBody);
};

/**
 * Query for Grievance Redressal
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllGrievanceRedressal = async (filter, options) => {
  const studentLeft = await GrievanceRedressal.paginate(filter, options);
  return studentLeft;
};

/**
 * Get Grievance Redressal by id
 * @param {ObjectId} id
 * @returns {Promise<GrievanceRedressal>}
 */
const getGrievanceRedressalById = async (id) => {
  return GrievanceRedressal.findById(id);
};

/**
 * Update Grievance Redressal by id
 * @param {ObjectId} grievanceRedressalId
 * @param {Object} updateBody
 * @returns {Promise<GrievanceRedressal>}
 */
const updateGrievanceRedressalById = async (grievanceRedressalId, updateBody) => {
  const grievanceRedressal = await getGrievanceRedressalById(grievanceRedressalId);
  if (!grievanceRedressal) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Grievance Redressal not found');
  }
  Object.assign(grievanceRedressal, updateBody);
  await grievanceRedressal.save();
  return grievanceRedressal;
};

/**
 * Delete Grievance Redressal by id
 * @param {ObjectId} grievanceRedressalId
 * @returns {Promise<GrievanceRedressal>}
 */
const deleteGrievanceRedressalById = async (grievanceRedressalId) => {
  const grievanceRedressal = await getGrievanceRedressalById(grievanceRedressalId);
  if (!grievanceRedressal) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Grievance Redressal not found');
  }
  await grievanceRedressal.remove();
  return grievanceRedressal;
};

module.exports = {
  createGrievanceRedressal,
  getAllGrievanceRedressal,
  getGrievanceRedressalById,
  updateGrievanceRedressalById,
  deleteGrievanceRedressalById,
};
