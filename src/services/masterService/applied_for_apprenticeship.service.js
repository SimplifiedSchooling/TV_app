const httpStatus = require('http-status');
const { AppliedForApprenticeship } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a AppliedForApprenticeship
 * @param {Object} reqBody
 * @returns {Promise<AppliedForApprenticeship>}
 */
const createAppliedForApprenticeship = async (reqBody) => {
  return AppliedForApprenticeship.create(reqBody);
};

/**
 * Query for AppliedForApprenticeship
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllAppliedForApprenticeship = async () => {
  const appliedForApprenticeship = await AppliedForApprenticeship.find();
  return appliedForApprenticeship;
};

/**
 * Get AppliedForApprenticeship by id
 * @param {ObjectId} id
 * @returns {Promise<AppliedForApprenticeship>}
 */
const getAppliedForApprenticeshipById = async (id) => {
  return AppliedForApprenticeship.findById(id);
};

/**
 * Update AppliedForApprenticeship by id
 * @param {ObjectId} apprenticeshipId
 * @param {Object} updateBody
 * @returns {Promise<AppliedForApprenticeship>}
 */
const updateAppliedForApprenticeshipById = async (apprenticeshipId, updateBody) => {
  const apprenticeship = await getAppliedForApprenticeshipById(apprenticeshipId);
  if (!apprenticeship) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applied for apprenticeship not found');
  }
  Object.assign(apprenticeship, updateBody);
  await apprenticeship.save();
  return apprenticeship;
};

/**
 * Delete AppliedForApprenticeship by id
 * @param {ObjectId} apprenticeshipId
 * @returns {Promise<AppliedForApprenticeship>}
 */
const deleteAppliedForApprenticeshipById = async (apprenticeshipId) => {
  const apprenticeship = await getAppliedForApprenticeshipById(apprenticeshipId);
  if (!apprenticeship) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applied for apprenticeship not found');
  }
  await apprenticeship.remove();
  return apprenticeship;
};

module.exports = {
  createAppliedForApprenticeship,
  getAllAppliedForApprenticeship,
  updateAppliedForApprenticeshipById,
  deleteAppliedForApprenticeshipById,
  getAppliedForApprenticeshipById,
};
