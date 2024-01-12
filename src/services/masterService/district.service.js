const httpStatus = require('http-status');
const { District } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a District
 * @param {Object} district
 * @returns {Promise<District>}
 */
const createDistrict = async (district) => {
  return District.create(district);
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
const getAllDistrict = async () => {
  const districts = await District.find({});
  return districts;
};

/**
 * Get District by id
 * @param {ObjectId} id
 * @returns {Promise<District>}
 */
const getDistrictById = async (id) => {
  return District.findById(id);
};

/**
 * Get Distict by stateId
 * @param {ObjectId} stateId
 * @returns {Promise<District>}
 */
const getDistrictByStateId = async (stateId) => {
  return District.find({ stateId });
};

/**
 * Update District by id
 * @param {ObjectId} DistrictId
 * @param {Object} updateBody
 * @returns {Promise<District>}
 */
const updateDistrictyId = async (DistrictId, updateBody) => {
  const district = await getDistrictById(DistrictId);
  if (!district) {
    throw new ApiError(httpStatus.NOT_FOUND, 'District not found');
  }
  Object.assign(district, updateBody);
  await district.save();
  return district;
};

/**
 * Delete District by id
 * @param {ObjectId} DistrictId
 * @returns {Promise<District>}
 */
const deleteDistrictById = async (DistrictId) => {
  const district = await getDistrictById(DistrictId);
  if (!district) {
    throw new ApiError(httpStatus.NOT_FOUND, 'District not found');
  }
  await district.remove();
  return district;
};

module.exports = {
  createDistrict,
  getAllDistrict,
  getDistrictById,
  updateDistrictyId,
  deleteDistrictById,
  getDistrictByStateId,
};
