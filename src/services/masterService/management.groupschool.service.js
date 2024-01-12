const httpStatus = require('http-status');
const { Managmentgroupschool } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a managmentgroupschool
 * @param {Object} managmentgroupschool
 * @returns {Promise<Managmentgroupschool>}
 */
const createManagmentGroupSchool = async (managmentgroupschool) => {
  return Managmentgroupschool.create(managmentgroupschool);
};

/**
 * Query for Classes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const getAllmanagGroupSchool = async () => {
  const groupSchool = await Managmentgroupschool.find();
  return groupSchool;
};

/**
 * Get Managmentgroupschool by id
 * @param {ObjectId} id
 * @returns {Promise<Managmentgroupschool>}
 */
const getManagementById = async (id) => {
  return Managmentgroupschool.findById(id);
};

/**
 * Update Managmentgroupschool by id
 * @param {ObjectId} managementId
 * @param {Object} updateBody
 * @returns {Promise<Managmentgroupschool>}
 */
const updateManamentById = async (managementId, updateBody) => {
  const groupSchool = await getManagementById(managementId);
  if (!groupSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Managment group School not found');
  }
  Object.assign(groupSchool, updateBody);
  await groupSchool.save();
  return groupSchool;
};

/**
 * Delete Managmentgroupschool by id
 * @param {ObjectId} managementId
 * @returns {Promise<Managmentgroupschool>}
 */
const deleteManagmentById = async (managementId) => {
  const groupSchool = await getManagementById(managementId);
  if (!groupSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Managment group School not found');
  }
  await groupSchool.remove();
  return groupSchool;
};

module.exports = {
  createManagmentGroupSchool,
  getAllmanagGroupSchool,
  getManagementById,
  updateManamentById,
  deleteManagmentById,
};
