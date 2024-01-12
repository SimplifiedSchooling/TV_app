const httpStatus = require('http-status');
const { SchoolBuilding } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a School Building
 * @param {Object} building
 * @returns {Promise<SchoolBuilding>}
 */
const createBuilding = async (building) => {
  return SchoolBuilding.create(building);
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

const getAllBuilding = async () => {
  const building = await SchoolBuilding.find();
  return building;
};

/**
 * Get School Building by id
 * @param {ObjectId} id
 * @returns {Promise<SchoolBuilding>}
 */
const getBuildingById = async (id) => {
  return SchoolBuilding.findById(id);
};

/**
 * Update School Building by id
 * @param {ObjectId} buildingId
 * @param {Object} updateBody
 * @returns {Promise<SchoolBuilding>}
 */
const updateBuildingById = async (buildingId, updateBody) => {
  const building = await getBuildingById(buildingId);
  if (!building) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Building not found');
  }
  Object.assign(building, updateBody);
  await building.save();
  return building;
};

/**
 * Delete building by id
 * @param {ObjectId} buildingId
 * @returns {Promise<SchoolBuilding>}
 */
const deleteBuildingById = async (buildingId) => {
  const building = await getBuildingById(buildingId);
  if (!building) {
    throw new ApiError(httpStatus.NOT_FOUND, 'building not found');
  }
  await building.remove();
  return building;
};

module.exports = {
  createBuilding,
  getAllBuilding,
  getBuildingById,
  updateBuildingById,
  deleteBuildingById,
};
