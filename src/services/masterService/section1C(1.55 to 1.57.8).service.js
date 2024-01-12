const httpStatus = require('http-status');
const Section1C57Schema = require('../../models/masterModels/section1C(1.55.1 to 1.57.8).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section1C57Schema
 * @param {Object} Section1C57SchemaBody
 * @returns {Promise<Section1C57Schema>}
 */
const createSection1C57 = async (Section1C57SchemaBody) => {
  return Section1C57Schema.create(Section1C57SchemaBody);
};

/**
 * Query for Section1C57
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection1C57 = async (filter, options) => {
  const Section1C57 = await Section1C57Schema.paginate(filter, options);
  return Section1C57;
};

/**
 * Get Section1C57Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section1C57Schema>}
 */
const getSection1C57ById = async (id) => {
  return Section1C57Schema.findById(id);
};

/**
 * Update Section1C57Schema by id
 * @param {ObjectId} Section1C57Id
 * @param {Object} updateBody
 * @returns {Promise<Section1C57Schema>}
 */
const updateSection1C57ById = async (Section1C57Id, updateBody) => {
  const typeSection1C57 = await getSection1C57ById(Section1C57Id);
  if (!typeSection1C57) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1C57 not found');
  }
  Object.assign(typeSection1C57, updateBody);
  await typeSection1C57.save();
  return typeSection1C57;
};

/**
 * Delete Section1C57Schema by id
 * @param {ObjectId} Section1C57Id
 * @returns {Promise<Section1C57Schema>}
 */
const deleteSection1C57ById = async (Section1C57Id) => {
  const Section1C57 = await getSection1C57ById(Section1C57Id);
  if (!Section1C57) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1C57 not found');
  }
  await Section1C57.remove();
  return Section1C57;
};

module.exports = {
  createSection1C57,
  getAllSection1C57,
  getSection1C57ById,
  updateSection1C57ById,
  deleteSection1C57ById,
};
