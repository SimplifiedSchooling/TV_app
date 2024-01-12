const httpStatus = require('http-status');
const { Typeofhostel } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Type of hostel
 * @param {Object} hostelType
 * @returns {Promise<Typeofhostel>}
 */
const createHostelType = async (hostelType) => {
  return Typeofhostel.create(hostelType);
};

/**
 * Query for Type of hostel
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllHostelType = async () => {
  const hostel = await Typeofhostel.find({});
  return hostel;
};

/**
 * Get Type of Hostel by id
 * @param {ObjectId} id
 * @returns {Promise<Typeofhostel>}
 */
const getHostelTypeById = async (id) => {
  return Typeofhostel.findById(id);
};

/**
 * Update Type of Hostel by id
 * @param {ObjectId} hostelId
 * @param {Object} updateBody
 * @returns {Promise<Typeofhostel>}
 */
const updateHostelTypeyId = async (hostelId, updateBody) => {
  const hostel = await getHostelTypeById(hostelId);
  if (!hostel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hostel not found');
  }
  Object.assign(hostel, updateBody);
  await hostel.save();
  return hostel;
};

/**
 * Delete Type of hostel by id
 * @param {ObjectId} internetTypeId
 * @returns {Promise<Typeofhostel>}
 */
const deleteHostelTypeById = async (hostelId) => {
  const hostel = await getHostelTypeById(hostelId);
  if (!hostel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hostel not found');
  }
  await hostel.remove();
  return hostel;
};

module.exports = {
  createHostelType,
  getAllHostelType,
  getHostelTypeById,
  updateHostelTypeyId,
  deleteHostelTypeById,
};
