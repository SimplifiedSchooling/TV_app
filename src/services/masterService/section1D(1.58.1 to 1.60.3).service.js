const httpStatus = require('http-status');
const Section1D60Schema = require('../../models/masterModels/section1D(1.58.1 to 1.60.3).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section1D60Schema
 * @param {Object} Section1D60SchemaBody
 * @returns {Promise<Section1D60Schema>}
 */
const createSection1D60 = async (Section1D60SchemaBody) => {
  return Section1D60Schema.create(Section1D60SchemaBody);
};

/**
 * Query for Section1D60
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection1D60 = async (filter, options) => {
  const Section1D60 = await Section1D60Schema.paginate(filter, options);
  return Section1D60;
};

/**
 * Get Section1D60Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section1D60Schema>}
 */
const getSection1D60ById = async (id) => {
  return Section1D60Schema.findById(id);
};

/**
 * Update Section1D60Schema by id
 * @param {ObjectId} Section1D60Id
 * @param {Object} updateBody
 * @returns {Promise<Section1D60Schema>}
 */
const updateSection1D60ById = async (Section1D60Id, updateBody) => {
  const typeSection1D60 = await getSection1D60ById(Section1D60Id);
  if (!typeSection1D60) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1D60 not found');
  }
  Object.assign(typeSection1D60, updateBody);
  await typeSection1D60.save();
  return typeSection1D60;
};

/**
 * Delete Section1D60Schema by id
 * @param {ObjectId} Section1D60Id
 * @returns {Promise<Section1D60Schema>}
 */
const deleteSection1D60ById = async (Section1D60Id) => {
  const Section1D60 = await getSection1D60ById(Section1D60Id);
  if (!Section1D60) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section1D60 not found');
  }
  await Section1D60.remove();
  return Section1D60;
};

module.exports = {
  createSection1D60,
  getAllSection1D60,
  getSection1D60ById,
  updateSection1D60ById,
  deleteSection1D60ById,
};
