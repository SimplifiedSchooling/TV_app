const httpStatus = require('http-status');
const { typeOfICTSchool } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a ICT Gov School
 * @param {Object} ictGovSchool
 * @returns {Promise<typeOfICTSchool>}
 */
const createTypeOfICTGovSchool = async (ictGovSchool) => {
  return typeOfICTSchool.create(ictGovSchool);
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

const getAllTypeOfICTGovSchool = async () => {
  const ictGovSchool = await typeOfICTSchool.find();
  return ictGovSchool;
};

/**
 * Get Type of ICT Gov School by id
 * @param {ObjectId} id
 * @returns {Promise<typeOfICTSchool>}
 */
const getTypeOfICTGovSchoolById = async (id) => {
  return typeOfICTSchool.findById(id);
};

/**
 * Update Type Of ICT Gov School by id
 * @param {ObjectId} typeOfICTId
 * @param {Object} updateBody
 * @returns {Promise<typeOfICTSchool>}
 */
const updateTypeOfICTGovSchoolById = async (typeOfICTId, updateBody) => {
  const ictGovSchool = await getTypeOfICTGovSchoolById(typeOfICTId);
  if (!ictGovSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type Of ICT Gov School not found');
  }
  Object.assign(ictGovSchool, updateBody);
  await ictGovSchool.save();
  return ictGovSchool;
};

/**
 * Delete ICT Gov School by id
 * @param {ObjectId} typeOfICTId
 * @returns {Promise<typeOfICTSchool>}
 */
const deleteTypeOfICTGovSchoolById = async (typeOfICTId) => {
  const ictGovSchool = await getTypeOfICTGovSchoolById(typeOfICTId);
  if (!ictGovSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type of ICT Gov School not found');
  }
  await ictGovSchool.remove();
  return ictGovSchool;
};

module.exports = {
  createTypeOfICTGovSchool,
  getAllTypeOfICTGovSchool,
  getTypeOfICTGovSchoolById,
  updateTypeOfICTGovSchoolById,
  deleteTypeOfICTGovSchoolById,
};
