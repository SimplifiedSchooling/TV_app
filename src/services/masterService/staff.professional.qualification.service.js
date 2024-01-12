const httpStatus = require('http-status');
const { Qualification } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Staff Professional Qualification
 * @param {Object} qualification
 * @returns {Promise<Qualification>}
 */
const createStaffQualification = async (qualification) => {
  return Qualification.create(qualification);
};

/**
 * Query for Staff Professional Qualification
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStaffQualifications = async () => {
  const qualification = await Qualification.find({});
  return qualification;
};

/**
 * Get Staff Professional Qualification by id
 * @param {ObjectId} id
 * @returns {Promise<Qualification>}
 */
const getStaffQualificationById = async (id) => {
  return Qualification.findById(id);
};

/**
 * Update Staff Professional Qualification by id
 * @param {ObjectId} qualificationId
 * @param {Object} updateBody
 * @returns {Promise<Qualification>}
 */
const updateStaffQualificationById = async (qualificationId, updateBody) => {
  const qualification = await getStaffQualificationById(qualificationId);
  if (!qualification) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff Professional Qualification not found');
  }
  Object.assign(qualification, updateBody);
  await qualification.save();
  return qualification;
};

/**
 * Delete Staff Professional Qualification by id
 * @param {ObjectId} qualificationId
 * @returns {Promise<Qualification>}
 */
const deleteStaffQualificationById = async (qualificationId) => {
  const qualification = await getStaffQualificationById(qualificationId);
  if (!qualification) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff Professional Qualification not found');
  }
  await qualification.remove();
  return qualification;
};

module.exports = {
  createStaffQualification,
  getAllStaffQualifications,
  getStaffQualificationById,
  updateStaffQualificationById,
  deleteStaffQualificationById,
};
