const httpStatus = require('http-status');
const { Broadcast } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createBoardcast = async (userBody) => {
  return Broadcast.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllBoardcasts = async (filter, options) => {
  const boardcasts = await Broadcast.paginate(filter, options);
  return boardcasts;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getBoardcastById = async (id) => {
  return Broadcast.findById(id);
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateBoardcastById = async (broadcastId, updateBody) => {
  const singleBoardcast = await getBoardcastById(broadcastId);
  if (!singleBoardcast) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Boardcast not found');
  }
  Object.assign(singleBoardcast, updateBody);
  await singleBoardcast.save();
  return singleBoardcast;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteBoardcastById = async (broadcastId) => {
  const user = await getBoardcastById(broadcastId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Boardcast not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createBoardcast,
  getAllBoardcasts,
  getBoardcastById,
  updateBoardcastById,
  deleteBoardcastById,
};
