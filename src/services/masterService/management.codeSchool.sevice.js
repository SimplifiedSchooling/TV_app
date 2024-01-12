const httpStatus = require('http-status');
const { ManagmentCodeSchool } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a managmentCodeschool
 * @param {Object} managmentCodechool
 * @returns {Promise<ManagmentCodeSchool>}
 */
const createManagmentCodeSchool = async (managmentCodeschool) => {
  return ManagmentCodeSchool.create(managmentCodeschool);
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

const getAllmanagCodeSchool = async () => {
  const CodeSchool = await ManagmentCodeSchool.find();
  return CodeSchool;
};

/**
 * Get ManagmentCodeschool by id
 * @param {ObjectId} id
 * @returns {Promise<ManagmentCodeSchool>}
 */
const getManagementCodeById = async (id) => {
  return ManagmentCodeSchool.findById(id);
};

/**
 * Update Managmentgroupschool by id
 * @param {ObjectId} managementCodeId
 * @param {Object} updateBody
 * @returns {Promise<ManagmentCodeSchool>}
 */
const updateManamentCodeById = async (managementCodeId, updateBody) => {
  const codeSchool = await getManagementCodeById(managementCodeId);
  if (!codeSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Managment Code School not found');
  }
  Object.assign(codeSchool, updateBody);
  await codeSchool.save();
  return codeSchool;
};

/**
 * Delete Managmentcodeschool by id
 * @param {ObjectId} managementCodeId
 * @returns {Promise<ManagmentCodeSchool>}
 */
const deleteManagmentCodeById = async (managementCodeId) => {
  const codeSchool = await getManagementCodeById(managementCodeId);
  if (!codeSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Managment Code School not found');
  }
  await codeSchool.remove();
  return codeSchool;
};

module.exports = {
  createManagmentCodeSchool,
  getAllmanagCodeSchool,
  getManagementCodeById,
  updateManamentCodeById,
  deleteManagmentCodeById,
};
