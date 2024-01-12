const httpStatus = require('http-status');
const { Hostel } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Hostel
 * @param {Object} reqBody
 * @returns {Promise<Hostel>}
 */
const createHostel = async (reqBody) => {
  return Hostel.create(reqBody);
};

/**
 * Query for Hostel
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryHostel = async (filter, options) => {
  const hostel = await Hostel.paginate(filter, options);
  return hostel;
};

/**
 * Get Hostel by id
 * @param {ObjectId} id
 * @returns {Promise<Hostel>}
 */
const getHostelById = async (id) => {
  return Hostel.findById(id);
};

/**
 * Update Hostel by id
 * @param {ObjectId} hostelId
 * @param {Object} updateBody
 * @returns {Promise<Hostel>}
 */
const updateHostelById = async (hostelId, updateBody) => {
  const hostel = await getHostelById(hostelId);
  if (!hostel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hostel not found');
  }
  Object.assign(hostel, updateBody);
  await hostel.save();
  return hostel;
};

/**
 * Delete Hostel by id
 * @param {ObjectId} hostelId
 * @returns {Promise<Hostel>}
 */
const deleteHostelById = async (hostelId) => {
  const hostel = await getHostelById(hostelId);
  if (!hostel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hostel not found');
  }
  await hostel.remove();
  return hostel;
};

module.exports = {
  createHostel,
  queryHostel,
  getHostelById,
  updateHostelById,
  deleteHostelById,
};
