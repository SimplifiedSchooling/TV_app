const httpStatus = require('http-status');
const Section3ASchema = require('../../models/masterModels/section3A(3.1 to 3.4).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section3ASchema
 * @param {Object} Section3ASchemaBody
 * @returns {Promise<Section3ASchema>}
 */
const createSection3A = async (Section3ASchemaBody) => {
  return Section3ASchema.create(Section3ASchemaBody);
};

/**
 * Query for Section3A
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection3A = async (filter, options) => {
  const Section3A = await Section3ASchema.paginate(filter, options);
  return Section3A;
};

/**
 * Get Section3ASchema by id
 * @param {ObjectId} id
 * @returns {Promise<Section3ASchema>}
 */
const getSection3AById = async (id) => {
  return Section3ASchema.findById(id);
};

/**
 * Update Section3ASchema by id
 * @param {ObjectId} Section3AId
 * @param {Object} updateBody
 * @returns {Promise<Section3ASchema>}
 */
const updateSection3AById = async (Section3AId, updateBody) => {
  const typeSection3A = await getSection3AById(Section3AId);
  if (!typeSection3A) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section3A not found');
  }
  Object.assign(typeSection3A, updateBody);
  await typeSection3A.save();
  return typeSection3A;
};

/**
 * Delete Section3ASchema by id
 * @param {ObjectId} Section3AId
 * @returns {Promise<Section3ASchema>}
 */
const deleteSection3AById = async (Section3AId) => {
  const Section3A = await getSection3AById(Section3AId);
  if (!Section3A) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section3A not found');
  }
  await Section3A.remove();
  return Section3A;
};

module.exports = {
  createSection3A,
  getAllSection3A,
  getSection3AById,
  updateSection3AById,
  deleteSection3AById,
};
