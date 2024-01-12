const httpStatus = require('http-status');
const AppliedForPlacement = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a AppliedForPlacement
 * @param {Object} reqBody
 * @returns {Promise<AppliedForPlacement>}
 */
const createAppliedForPlacement = async (reqBody) => {
  return AppliedForPlacement.create(reqBody);
};

/**
 * Query for AppliedForPlacement
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllAppliedForPlacement = async () => {
  const appliedForPlacement = await AppliedForPlacement.find();
  return appliedForPlacement;
};

/**
 * Get AppliedForPlacement by id
 * @param {ObjectId} id
 * @returns {Promise<AppliedForPlacement>}
 */
const getAppliedForPlacementById = async (id) => {
  return AppliedForPlacement.findById(id);
};

/**
 * Update AppliedForPlacement by id
 * @param {ObjectId} placementId
 * @param {Object} updateBody
 * @returns {Promise<AppliedForPlacement>}
 */
const updateAppliedForPlacementById = async (placementId, updateBody) => {
  const placement = await getAppliedForPlacementById(placementId);
  if (!placement) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applied for placement not found');
  }
  Object.assign(placement, updateBody);
  await placement.save();
  return placement;
};

/**
 * Delete AppliedForPlacement by id
 * @param {ObjectId} placementId
 * @returns {Promise<AppliedForPlacement>}
 */
const deleteAppliedForPlacementById = async (placementId) => {
  const placement = await getAppliedForPlacementById(placementId);
  if (!placement) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applied for placement not found');
  }
  await placement.remove();
  return placement;
};

module.exports = {
  createAppliedForPlacement,
  getAllAppliedForPlacement,
  updateAppliedForPlacementById,
  deleteAppliedForPlacementById,
  getAppliedForPlacementById,
};
