const httpStatus = require('http-status');
const Section2B27Schema = require('../../models/masterModels/section2B(2.2 to 2.27).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section2B27Schema
 * @param {Object} Section2B27SchemaBody
 * @returns {Promise<Section2B27Schema>}
 */
const createSection2B27 = async (Section2B27SchemaBody) => {
  return Section2B27Schema.create(Section2B27SchemaBody);
};

/**
 * Query for Section2B27
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection2B27 = async (filter, options) => {
  const Section2B27 = await Section2B27Schema.paginate(filter, options);
  return Section2B27;
};

/**
 * Get Section2B27Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section2B27Schema>}
 */
const getSection2B27ById = async (id) => {
  return Section2B27Schema.findById(id);
};

/**
 * Update Section2B27Schema by id
 * @param {ObjectId} Section2B27Id
 * @param {Object} updateBody
 * @returns {Promise<Section2B27Schema>}
 */
const updateSection2B27ById = async (Section2B27Id, updateBody) => {
  const typeSection2B27 = await getSection2B27ById(Section2B27Id);
  if (!typeSection2B27) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section2B27 not found');
  }
  Object.assign(typeSection2B27, updateBody);
  await typeSection2B27.save();
  return typeSection2B27;
};

/**
 * Delete Section2B27Schema by id
 * @param {ObjectId} Section2B27Id
 * @returns {Promise<Section2B27Schema>}
 */
const deleteSection2B27ById = async (Section2B27Id) => {
  const Section2B27 = await getSection2B27ById(Section2B27Id);
  if (!Section2B27) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section2B27 not found');
  }
  await Section2B27.remove();
  return Section2B27;
};

module.exports = {
  createSection2B27,
  getAllSection2B27,
  getSection2B27ById,
  updateSection2B27ById,
  deleteSection2B27ById,
};
