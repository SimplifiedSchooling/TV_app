const httpStatus = require('http-status');
const { Admit } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Admit
 * @param {Object} admit
 * @returns {Promise<Admit>}
 */
const createAdmit = async (admit) => {
  return Admit.create(admit);
};

/**
 * Query for Admit
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllAdmit = async () => {
  const admits = await Admit.find({});
  return admits;
};

/**
 * Get Admit by id
 * @param {ObjectId} id
 * @returns {Promise<Admit>}
 */
const getAdmitById = async (id) => {
  return Admit.findById(id);
};

/**
 * Update Admit by id
 * @param {ObjectId} admitId
 * @param {Object} updateBody
 * @returns {Promise<Admit>}
 */
const updateAdmityId = async (admitId, updateBody) => {
  const admit = await getAdmitById(admitId);
  if (!admit) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Admit not found');
  }
  Object.assign(admit, updateBody);
  await admit.save();
  return admit;
};

/**
 * Delete Admit by id
 * @param {ObjectId} admitId
 * @returns {Promise<Admit>}
 */
const deleteAdmitById = async (admitId) => {
  const admit = await getAdmitById(admitId);
  if (!admit) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Admit not found');
  }
  await admit.remove();
  return admit;
};

module.exports = {
  createAdmit,
  getAllAdmit,
  getAdmitById,
  updateAdmityId,
  deleteAdmitById,
};
