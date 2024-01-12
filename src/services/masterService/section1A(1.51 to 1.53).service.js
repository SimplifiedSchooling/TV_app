const httpStatus = require('http-status');
const Section1A53Schema = require('../../models/masterModels/section1A(1.51 to 1.53).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section1A53Schema
 * @param {Object} Section1A53SchemaBody
 * @returns {Promise<Section1A53Schema>}
 */
const createSection1A53 = async (Section1A53SchemaBody) => {
  return Section1A53Schema.create(Section1A53SchemaBody);
};

/**
 * Query for Section1A53
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection1A53 = async (filter, options) => {
  const Section1A53 = await Section1A53Schema.paginate(filter, options);
  return Section1A53;
};

/**
 * Get Section1A53Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section1A53Schema>}
 */
const getSection1A53ById = async (id) => {
  return Section1A53Schema.findById(id);
};

/**
 * Update Section1A53Schema by id
 * @param {ObjectId} Section1A53Id
 * @param {Object} updateBody
 * @returns {Promise<Section1A53Schema>}
 */
const updateSection1A53ById = async (Section1A53Id, updateBody) => {
  const typeSection1A53 = await getSection1A53ById(Section1A53Id);
  if (!typeSection1A53) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A53 not found');
  }
  Object.assign(typeSection1A53, updateBody);
  await typeSection1A53.save();
  return typeSection1A53;
};

/**
 * Delete Section1A53Schema by id
 * @param {ObjectId} Section1A53Id
 * @returns {Promise<Section1A53Schema>}
 */
const deleteSection1A53ById = async (Section1A53Id) => {
  const Section1A53 = await getSection1A53ById(Section1A53Id);
  if (!Section1A53) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A53 not found');
  }
  await Section1A53.remove();
  return Section1A53;
};

module.exports = {
  createSection1A53,
  getAllSection1A53,
  getSection1A53ById,
  updateSection1A53ById,
  deleteSection1A53ById,
};
