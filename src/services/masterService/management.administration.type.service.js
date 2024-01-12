const httpStatus = require('http-status');
const { managementAdministrationType } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a managment Adminstration type
 * @param {Object} managmentAdministrationType
 * @returns {Promise<managementAdministrationType>}
 */
const createManagementAdministrationType = async (managmentAdministrationType) => {
  return managementAdministrationType.create(managmentAdministrationType);
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

const getAllManagementAdministrationTypes = async () => {
  const administrationType = await managementAdministrationType.find();
  return administrationType;
};

/**
 * Get Management Administration type by id
 * @param {ObjectId} id
 * @returns {Promise<managementAdministrationType>}
 */
const getManagementAdministrationTypeById = async (id) => {
  return managementAdministrationType.findById(id);
};

/**
 * Update Managment Administration type by id
 * @param {ObjectId} managementAdmTypeId
 * @param {Object} updateBody
 * @returns {Promise<managementAdministrationType>}
 */
const updateManagementAdministrationTypeById = async (managementAdmTypeId, updateBody) => {
  const administrationType = await getManagementAdministrationTypeById(managementAdmTypeId);
  if (!administrationType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Managment Administration Type not found');
  }
  Object.assign(administrationType, updateBody);
  await administrationType.save();
  return administrationType;
};

/**
 * Delete Managment Administration type by id
 * @param {ObjectId} managementAdmTypeId
 * @returns {Promise<managementAdministrationType>}
 */
const deleteManagementAdministrationTypeById = async (managementAdmTypeId) => {
  const administrationType = await getManagementAdministrationTypeById(managementAdmTypeId);
  if (!administrationType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Managment Administration type not found');
  }
  await administrationType.remove();
  return administrationType;
};

module.exports = {
  createManagementAdministrationType,
  getAllManagementAdministrationTypes,
  getManagementAdministrationTypeById,
  updateManagementAdministrationTypeById,
  deleteManagementAdministrationTypeById,
};
