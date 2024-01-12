const httpStatus = require('http-status');
const Section1A30Schema = require('../../models/masterModels/section1A(1.21 to 1.30).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section1A30Schema
 * @param {Object} Section1A30SchemaBody
 * @returns {Promise<Section1A30Schema>}
 */
const createSection1A30 = async (Section1A30SchemaBody) => {
  return Section1A30Schema.create(Section1A30SchemaBody);
};

/**
 * Query for Section1A30
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection1A30 = async (filter, options) => {
  const Section1A30 = await Section1A30Schema.paginate(filter, options);
  return Section1A30;
};

/**
 * Get Section1A30Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section1A30Schema>}
 */
const getSection1A30ById = async (id) => {
  return Section1A30Schema.findById(id);
};

/**
 * Update Section1A30Schema by id
 * @param {ObjectId} Section1A30Id
 * @param {Object} updateBody
 * @returns {Promise<Section1A30Schema>}
 */
const updateSection1A30ById = async (Section1A30Id, updateBody) => {
  const typeSection1A30 = await getSection1A30ById(Section1A30Id);
  if (!typeSection1A30) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A30 not found');
  }
  Object.assign(typeSection1A30, updateBody);
  await typeSection1A30.save();
  return typeSection1A30;
};

/**
 * Delete Section1A30Schema by id
 * @param {ObjectId} Section1A30Id
 * @returns {Promise<Section1A30Schema>}
 */
const deleteSection1A30ById = async (Section1A30Id) => {
  const Section1A30 = await getSection1A30ById(Section1A30Id);
  if (!Section1A30) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1A30 not found');
  }
  await Section1A30.remove();
  return Section1A30;
};

module.exports = {
  createSection1A30,
  getAllSection1A30,
  getSection1A30ById,
  updateSection1A30ById,
  deleteSection1A30ById,
};
