const httpStatus = require('http-status');
const { Laboratories } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Laboratories
 * @param {Object} reqBody
 * @returns {Promise<Laboratories>}
 */
const createLaboratories = async (reqBody) => {
  return Laboratories.create(reqBody);
};

/**
 * Query for Laboratories
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAlllaboratory = async () => {
  const laboratory = await Laboratories.find();
  return laboratory;
};

/**
 * Get Laboratories by id
 * @param {ObjectId} id
 * @returns {Promise<Laboratories>}
 */
const getLaboratoryById = async (id) => {
  return Laboratories.findById(id);
};

/**
 * Update Laboratories by id
 * @param {ObjectId} laboratoryId
 * @param {Object} updateBody
 * @returns {Promise<Laboratories>}
 */
const updateLaboratoryById = async (laboratoryId, updateBody) => {
  const laboratory = await getLaboratoryById(laboratoryId);
  if (!laboratory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Laboratory not found');
  }
  Object.assign(laboratory, updateBody);
  await laboratory.save();
  return laboratory;
};

/**
 * Delete laboratory by id
 * @param {ObjectId} laboratoryId
 * @returns {Promise<Laboratories>}
 */
const deleteLaboratoryById = async (laboratoryId) => {
  const laboratory = await getLaboratoryById(laboratoryId);
  if (!laboratory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Laboratory not found');
  }
  await laboratory.remove();
  return laboratory;
};

module.exports = {
  createLaboratories,
  getAlllaboratory,
  updateLaboratoryById,
  deleteLaboratoryById,
  getLaboratoryById,
};
