const httpStatus = require('http-status');
const Section1E62Schema = require('../../models/masterModels/section1E(1.62 to 1.62).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section1E62Schema
 * @param {Object} Section1E62SchemaBody
 * @returns {Promise<Section1E62Schema>}
 */
const createSection1E62 = async (Section1E62SchemaBody) => {
  return Section1E62Schema.create(Section1E62SchemaBody);
};

/**
 * Query for Section1E62
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection1E62 = async (filter, options) => {
  const Section1E62 = await Section1E62Schema.paginate(filter, options);
  return Section1E62;
};

/**
 * Get Section1E62Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section1E62Schema>}
 */
const getSection1E62ById = async (id) => {
  return Section1E62Schema.findById(id);
};

/**
 * Update Section1E62Schema by id
 * @param {ObjectId} Section1E62Id
 * @param {Object} updateBody
 * @returns {Promise<Section1E62Schema>}
 */
const updateSection1E62ById = async (Section1E62Id, updateBody) => {
  const typeSection1E62 = await getSection1E62ById(Section1E62Id);
  if (!typeSection1E62) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1E62 not found');
  }
  Object.assign(typeSection1E62, updateBody);
  await typeSection1E62.save();
  return typeSection1E62;
};

/**
 * Delete Section1E62Schema by id
 * @param {ObjectId} Section1E62Id
 * @returns {Promise<Section1E62Schema>}
 */
const deleteSection1E62ById = async (Section1E62Id) => {
  const Section1E62 = await getSection1E62ById(Section1E62Id);
  if (!Section1E62) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1E62 not found');
  }
  await Section1E62.remove();
  return Section1E62;
};

module.exports = {
  createSection1E62,
  getAllSection1E62,
  getSection1E62ById,
  updateSection1E62ById,
  deleteSection1E62ById,
};
