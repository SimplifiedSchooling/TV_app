const httpStatus = require('http-status');
const { Academics } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Academics
 * @param {Object} academics
 * @returns {Promise<Academics>}
 */
const createAcademics = async (academics) => {
  return Academics.create(academics);
};

/**
 * Query for academics
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllAcademics = async () => {
  const academics = await Academics.find({});
  return academics;
};

/**
 * Get Academics by id
 * @param {ObjectId} id
 * @returns {Promise<Academics>}
 */
const getAcademicsById = async (id) => {
  return Academics.findById(id);
};

/**
 * Update Academics by id
 * @param {ObjectId} academicsId
 * @param {Object} updateBody
 * @returns {Promise<Academics>}
 */
const updateAcademicsyId = async (academicsId, updateBody) => {
  const academics = await getAcademicsById(academicsId);
  if (!academics) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Academics not found');
  }
  Object.assign(academics, updateBody);
  await academics.save();
  return academics;
};

/**
 * Delete Academics by id
 * @param {ObjectId} academicsId
 * @returns {Promise<Academics>}
 */
const deleteAcademicsById = async (academicsId) => {
  const academics = await getAcademicsById(academicsId);
  if (!academics) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Academics not found');
  }
  await academics.remove();
  return academics;
};

module.exports = {
  createAcademics,
  getAllAcademics,
  getAcademicsById,
  updateAcademicsyId,
  deleteAcademicsById,
};
