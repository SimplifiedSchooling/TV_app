const httpStatus = require('http-status');
const BoundarywallSchema = require('../../models/masterModels/boundarywall.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a BoundarywallSchema
 * @param {Object} BoundarywallSchemaBody
 * @returns {Promise<BoundarywallSchema>}
 */
const createboundarywall = async (BoundarywallSchemaBody) => {
  return BoundarywallSchema.create(BoundarywallSchemaBody);
};

/**
 * Query for boundarywall
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllboundarywall = async (filter, options) => {
  const boundarywall = await BoundarywallSchema.paginate(filter, options);
  return boundarywall;
};

/**
 * Get BoundarywallSchema by id
 * @param {ObjectId} id
 * @returns {Promise<BoundarywallSchema>}
 */
const getboundarywallById = async (id) => {
  return BoundarywallSchema.findById(id);
};

/**
 * Update BoundarywallSchema by id
 * @param {ObjectId} boundarywallId
 * @param {Object} updateBody
 * @returns {Promise<BoundarywallSchema>}
 */
const updateboundarywallById = async (boundarywallId, updateBody) => {
  const typeboundarywall = await getboundarywallById(boundarywallId);
  if (!typeboundarywall) {
    throw new ApiError(httpStatus.NOT_FOUND, 'boundarywall not found');
  }
  Object.assign(typeboundarywall, updateBody);
  await typeboundarywall.save();
  return typeboundarywall;
};

/**
 * Delete BoundarywallSchema by id
 * @param {ObjectId} boundarywallId
 * @returns {Promise<BoundarywallSchema>}
 */
const deleteboundarywallById = async (boundarywallId) => {
  const boundarywall = await getboundarywallById(boundarywallId);
  if (!boundarywall) {
    throw new ApiError(httpStatus.NOT_FOUND, 'boundarywall not found');
  }
  await boundarywall.remove();
  return boundarywall;
};

module.exports = {
  createboundarywall,
  getAllboundarywall,
  getboundarywallById,
  updateboundarywallById,
  deleteboundarywallById,
};
