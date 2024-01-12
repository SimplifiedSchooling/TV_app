const httpStatus = require('http-status');
const { ICTGovSchool } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a ICT Gov School
 * @param {Object} ictGovSchool
 * @returns {Promise<ICTGovSchool>}
 */
const createICTGovSchool = async (ictGovSchool) => {
  return ICTGovSchool.create(ictGovSchool);
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

const getAllICTGovSchool = async () => {
  const ictGovSchool = await ICTGovSchool.find();
  return ictGovSchool;
};

/**
 * Get ICT Gov School by id
 * @param {ObjectId} id
 * @returns {Promise<ICTGovSchool>}
 */
const getICTGovSchoolById = async (id) => {
  return ICTGovSchool.findById(id);
};

/**
 * Update ICT Gov School by id
 * @param {ObjectId} ictGovSchoolId
 * @param {Object} updateBody
 * @returns {Promise<ICTGovSchool>}
 */
const updateICTGovSchoolById = async (ictGovSchoolId, updateBody) => {
  const ictGovSchool = await getICTGovSchoolById(ictGovSchoolId);
  if (!ictGovSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ICT Gov School not found');
  }
  Object.assign(ictGovSchool, updateBody);
  await ictGovSchool.save();
  return ictGovSchool;
};

/**
 * Delete ICT Gov School by id
 * @param {ObjectId} ictGovSchoolId
 * @returns {Promise<ICTGovSchool>}
 */
const deleteICTGovSchoolById = async (ictGovSchoolId) => {
  const ictGovSchool = await getICTGovSchoolById(ictGovSchoolId);
  if (!ictGovSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ICT Gov School not found');
  }
  await ictGovSchool.remove();
  return ictGovSchool;
};

module.exports = {
  createICTGovSchool,
  getAllICTGovSchool,
  getICTGovSchoolById,
  updateICTGovSchoolById,
  deleteICTGovSchoolById,
};
