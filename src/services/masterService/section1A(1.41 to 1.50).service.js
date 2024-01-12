const httpStatus = require('http-status');
const Section1A50Schema = require('../../models/masterModels/section1A(1.41 to 1.50).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section1A50Schema
 * @param {Object} Section1A50SchemaBody
 * @returns {Promise<Section1A50Schema>}
 */
const createSection1A50 = async (Section1A50SchemaBody) => {
  return Section1A50Schema.create(Section1A50SchemaBody);
};

/**
 * Query for Section1A50
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection1A50 = async (filter, options) => {
  const Section1A50 = await Section1A50Schema.paginate(filter, options);
  return Section1A50;
};

/**
 * Get Section1A50Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section1A50Schema>}
 */
const getSection1A50ById = async (id) => {
  return Section1A50Schema.findById(id);
};

/**
 * Update Section1A50Schema by id
 * @param {ObjectId} Section1A50Id
 * @param {Object} updateBody
 * @returns {Promise<Section1A50Schema>}
 */
const updateSection1A50ById = async (Section1A50Id, updateBody) => {
  const typeSection1A50 = await getSection1A50ById(Section1A50Id);
  if (!typeSection1A50) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A50 not found');
  }
  Object.assign(typeSection1A50, updateBody);
  await typeSection1A50.save();
  return typeSection1A50;
};

/**
 * Delete Section1A50Schema by id
 * @param {ObjectId} Section1A50Id
 * @returns {Promise<Section1A50Schema>}
 */
const deleteSection1A50ById = async (Section1A50Id) => {
  const Section1A50 = await getSection1A50ById(Section1A50Id);
  if (!Section1A50) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A50 not found');
  }
  await Section1A50.remove();
  return Section1A50;
};

module.exports = {
  createSection1A50,
  getAllSection1A50,
  getSection1A50ById,
  updateSection1A50ById,
  deleteSection1A50ById,
};
