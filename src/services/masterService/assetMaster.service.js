const httpStatus = require('http-status');
const { AssetMaster } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Academics
 * @param {Object} AssetMasterBody
 * @returns {Promise<AssetMaster>}
 */
const createAssetMaster = async (AssetMasterBody) => {
  return AssetMaster.create(AssetMasterBody);
};

/**
 * Query for AssetMaster
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllAssetMaster = async () => {
  const academics = await AssetMaster.find({});
  return academics;
};

/**
 * Get AssetMaster by id
 * @param {ObjectId} id
 * @returns {Promise<Academics>}
 */
const getAssetMasterById = async (id) => {
  return AssetMaster.findById(id);
};

/**
 * Update AssetMaster by id
 * @param {ObjectId} assetMasterId
 * @param {Object} updateBody
 * @returns {Promise<AssetMaster>}
 */
const updateAssetMasterById = async (assetMasterId, updateBody) => {
  const academics = await getAssetMasterById(assetMasterId);
  if (!academics) {
    throw new ApiError(httpStatus.NOT_FOUND, 'AssetMaster not found');
  }
  Object.assign(academics, updateBody);
  await academics.save();
  return academics;
};

/**
 * Delete Academics by id
 * @param {ObjectId} assetMasterId
 * @returns {Promise<AssetMaster>}
 */
const deleteAssetMasterById = async (assetMasterId) => {
  const academics = await getAssetMasterById(assetMasterId);
  if (!academics) {
    throw new ApiError(httpStatus.NOT_FOUND, 'AssetMaster not found');
  }
  await academics.remove();
  return academics;
};

module.exports = {
  createAssetMaster,
  getAllAssetMaster,
  getAssetMasterById,
  updateAssetMasterById,
  deleteAssetMasterById,
};
