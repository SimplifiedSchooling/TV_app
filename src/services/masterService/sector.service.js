const httpStatus = require('http-status');
const { Sector } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Sector
 * @param {Object} sector
 * @returns {Promise<Sector>}
 */
const createSector = async (sector) => {
  return Sector.create(sector);
};

/**
 * Query for Sector
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSectors = async () => {
  const sector = await Sector.find({});
  return sector;
};

/**
 * Get Sector by id
 * @param {ObjectId} id
 * @returns {Promise<Sector>}
 */
const getSectorById = async (id) => {
  return Sector.findById(id);
};

/**
 * Update Sector by id
 * @param {ObjectId} sectorId
 * @param {Object} updateBody
 * @returns {Promise<Sector>}
 */
const updateSectorById = async (sectorId, updateBody) => {
  const sector = await getSectorById(sectorId);
  if (!sector) {
    throw new ApiError(httpStatus.NOT_FOUND, 'sector not found');
  }
  Object.assign(sector, updateBody);
  await sector.save();
  return sector;
};

/**
 * Delete Sector by id
 * @param {ObjectId} sectorId
 * @returns {Promise<Sector>}
 */
const deleteSectorById = async (sectorId) => {
  const sector = await getSectorById(sectorId);
  if (!sector) {
    throw new ApiError(httpStatus.NOT_FOUND, 'sector not found');
  }
  await sector.remove();
  return sector;
};

module.exports = {
  createSector,
  getAllSectors,
  getSectorById,
  updateSectorById,
  deleteSectorById,
};
