const httpStatus = require('http-status');
const { Designation } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Staff Designation
 * @param {Object} designation
 * @returns {Promise<Designation>}
 */
const createStaffDesignation = async (designation) => {
  return Designation.create(designation);
};

/**
 * Query for Staff Designation
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStaffDesignations = async () => {
  const designation = await Designation.find({});
  return designation;
};

/**
 * Get Staff Designation by id
 * @param {ObjectId} id
 * @returns {Promise<Designation>}
 */
const getStaffDesignationById = async (id) => {
  return Designation.findById(id);
};

/**
 * Update Staff Designation by id
 * @param {ObjectId} designationId
 * @param {Object} updateBody
 * @returns {Promise<Designation>}
 */
const updateStaffDesignationById = async (designationId, updateBody) => {
  const designation = await getStaffDesignationById(designationId);
  if (!designation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff Designation not found');
  }
  Object.assign(designation, updateBody);
  await designation.save();
  return designation;
};

/**
 * Delete Staff Designation by id
 * @param {ObjectId} designationId
 * @returns {Promise<Designation>}
 */
const deleteStaffDesignationById = async (designationId) => {
  const designation = await getStaffDesignationById(designationId);
  if (!designation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff Designation not found');
  }
  await designation.remove();
  return designation;
};

module.exports = {
  createStaffDesignation,
  getAllStaffDesignations,
  getStaffDesignationById,
  updateStaffDesignationById,
  deleteStaffDesignationById,
};
