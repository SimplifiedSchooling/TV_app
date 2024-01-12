const httpStatus = require('http-status');
const { Traning } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a School Special Traning
 * @param {Object} schooltraning
 * @returns {Promise<Traning>}
 */
const createSchoolSpecialTraning = async (schooltraning) => {
  return Traning.create(schooltraning);
};

/**
 * Query for School Special Traning
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSchoolSpecialTraning = async () => {
  const traning = await Traning.find({});
  return traning;
};

/**
 * Get School Special Traning by id
 * @param {ObjectId} id
 * @returns {Promise<Traning>}
 */
const getSchoolSpecialTraningById = async (id) => {
  return Traning.findById(id);
};

/**
 * Update School Special Traning by id
 * @param {ObjectId} traningId
 * @param {Object} updateBody
 * @returns {Promise<Traning>}
 */
const updateSchoolSpecialTraningById = async (traningId, updateBody) => {
  const traning = await getSchoolSpecialTraningById(traningId);
  if (!traning) {
    throw new ApiError(httpStatus.NOT_FOUND, 'School Special Traning not found');
  }
  Object.assign(traning, updateBody);
  await traning.save();
  return traning;
};

/**
 * Delete School Special Traning by id
 * @param {ObjectId} traningId
 * @returns {Promise<Traning>}
 */
const deleteSchoolSpecialTraningById = async (traningId) => {
  const traning = await getSchoolSpecialTraningById(traningId);
  if (!traning) {
    throw new ApiError(httpStatus.NOT_FOUND, 'School Special Traning not found');
  }
  await traning.remove();
  return traning;
};

module.exports = {
  createSchoolSpecialTraning,
  getAllSchoolSpecialTraning,
  getSchoolSpecialTraningById,
  updateSchoolSpecialTraningById,
  deleteSchoolSpecialTraningById,
};
