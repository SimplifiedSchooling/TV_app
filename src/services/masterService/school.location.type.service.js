const httpStatus = require('http-status');

const { SchoolLocationType } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a SchoolLocationType
 * @param {Object} schoolLocation
 * @returns {Promise<SchoolLocationType>}
 */
const createSchoolLocation = async (schoolLocation) => {
  return SchoolLocationType.create(schoolLocation);
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
const getAllSchoolLocation = async () => {
  const SchoolLocation = await SchoolLocationType.find({});
  return SchoolLocation;
};

/**
 * Get SchoolLocationType by id
 * @param {ObjectId} id
 * @returns {Promise<SchoolLocationType>}
 */
const getSchoolLocationById = async (id) => {
  return SchoolLocationType.findById(id);
};

/**
 * Update SchoolLocationType by id
 * @param {ObjectId} schoolLocationId
 * @param {Object} updateBody
 * @returns {Promise<SchoolLocationType>}
 */
const updateSchoolLocationTypeyId = async (schoolLocationId, updateBody) => {
  const schoolLocation = await getSchoolLocationById(schoolLocationId);
  if (!schoolLocation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'schoolLocationType not found');
  }
  Object.assign(schoolLocation, updateBody);
  await schoolLocation.save();
  return schoolLocation;
};

/**
 * Delete SchoolLocationType by id
 * @param {ObjectId} schoolLocationId
 * @returns {Promise<SchoolLocationType>}
 */
const deleteSchoolLocationTypeById = async (schoolLocationId) => {
  const schoolLocation = await getSchoolLocationById(schoolLocationId);
  if (!schoolLocation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'schoolLocationType not found');
  }
  await schoolLocation.remove();
  return schoolLocation;
};

module.exports = {
  createSchoolLocation,
  getAllSchoolLocation,
  getSchoolLocationById,
  updateSchoolLocationTypeyId,
  deleteSchoolLocationTypeById,
};
