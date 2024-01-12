const httpStatus = require('http-status');
const { InchargeType } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a InchargeType
 * @param {Object} inchargeTypeData
 * @returns {Promise<InchargeType>}
 */
const createInchargeType = async (inchargeTypeData) => {
  return InchargeType.create(inchargeTypeData);
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
const getAllInchargeType = async () => {
  const AllInchargeTypes = await InchargeType.find({});
  return AllInchargeTypes;
};

/**
 * Get InchargeType by id
 * @param {ObjectId} id
 * @returns {Promise<InchargeType>}
 */
const getInchargeTypeById = async (id) => {
  return InchargeType.findById(id);
};

/**
 * Update InchargeType by id
 * @param {ObjectId} inChargeTypeId
 * @param {Object} updateBody
 * @returns {Promise<InchargeType>}
 */
const updateInchargeTypeyId = async (inChargeTypeId, updateBody) => {
  const inchargeType = await getInchargeTypeById(inChargeTypeId);
  if (!inchargeType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'InchargeType not found');
  }
  Object.assign(inchargeType, updateBody);
  await inchargeType.save();
  return inchargeType;
};

/**
 * Delete InchargeType by id
 * @param {ObjectId} inChargeTypeId
 * @returns {Promise<InchargeType>}
 */
const deleteInchargeTypeById = async (inChargeTypeId) => {
  const inchargeType = await getInchargeTypeById(inChargeTypeId);
  if (!inchargeType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'InchargeType not found');
  }
  await inchargeType.remove();
  return inchargeType;
};

module.exports = {
  createInchargeType,
  getAllInchargeType,
  getInchargeTypeById,
  updateInchargeTypeyId,
  deleteInchargeTypeById,
};
