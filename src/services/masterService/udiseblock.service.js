const httpStatus = require('http-status');
const UdiseblockSchema = require('../../models/masterModels/udiseblock.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a UdiseblockSchema
 * @param {Object} UdiseblockSchemaBody
 * @returns {Promise<UdiseblockSchema>}
 */
const createUdiseblock = async (UdiseblockSchemaBody) => {
  return UdiseblockSchema.create(UdiseblockSchemaBody);
};

/**
 * Query for Udiseblock
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllUdiseblock = async (filter, options) => {
  const Udiseblock = await UdiseblockSchema.paginate(filter, options);
  return Udiseblock;
};

/**
 * Get UdiseblockSchema by id
 * @param {ObjectId} id
 * @returns {Promise<UdiseblockSchema>}
 */
const getUdiseblockById = async (id) => {
  return UdiseblockSchema.findById(id);
};

/**
 * Update UdiseblockSchema by id
 * @param {ObjectId} UdiseblockId
 * @param {Object} updateBody
 * @returns {Promise<UdiseblockSchema>}
 */
const updateUdiseblockById = async (UdiseblockId, updateBody) => {
  const typeUdiseblock = await getUdiseblockById(UdiseblockId);
  if (!typeUdiseblock) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Udiseblock not found');
  }
  Object.assign(typeUdiseblock, updateBody);
  await typeUdiseblock.save();
  return typeUdiseblock;
};

/**
 * Delete UdiseblockSchema by id
 * @param {ObjectId} UdiseblockId
 * @returns {Promise<UdiseblockSchema>}
 */
const deleteUdiseblockById = async (UdiseblockId) => {
  const Udiseblock = await getUdiseblockById(UdiseblockId);
  if (!Udiseblock) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Udiseblock not found');
  }
  await Udiseblock.remove();
  return Udiseblock;
};

module.exports = {
  createUdiseblock,
  getAllUdiseblock,
  getUdiseblockById,
  updateUdiseblockById,
  deleteUdiseblockById,
};
