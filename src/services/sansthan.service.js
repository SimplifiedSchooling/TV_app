const httpStatus = require('http-status');
const { Sansthan } = require('../models');
const ApiError = require('../utils/ApiError');
// const otpService = require('./otp.service');

/**
 * Create a sansthan
 * @param {Object} sansthanBody
 * @returns {Promise<Sansthan, User>}
 */
const createSansthan = async (sansthanBody) => {
  const { userID } = sansthanBody;
  if (await Sansthan.isUserIDTaken(userID)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'UserID  already taken');
  }
  // await otpService.verifyOtp(mobNumber, otp);
  return Sansthan.create(sansthanBody);
};

// TO check userID alredy exist or not
const checkUserIdExist = async (userID) => {
  if (await Sansthan.isUserIDTaken(userID)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'UserID  already taken');
  }
};

/**
 * Query for sansthan
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySansthan = async (filter, options) => {
  const sansthans = await Sansthan.paginate(filter, options);
  return sansthans;
};

const getSansthanById = async (id) => {
  return Sansthan.findById(id);
};

const getSansthanByUserID = async (userID) => {
  return Sansthan.findOne({ userID });
};

/**
 * Update user by id
 * @param {ObjectId} sansthanId
 * @param {Object} updateBody
 * @returns {Promise<Sansthan>}
 */
const updateSansthanById = async (sansthanId, updateBody) => {
  const sansthan = await getSansthanById(sansthanId);
  if (!sansthan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sansthan not found');
  }
  Object.assign(sansthan, updateBody);
  await sansthan.save();
  return sansthan;
};

module.exports = {
  createSansthan,
  updateSansthanById,
  getSansthanById,
  querySansthan,
  getSansthanByUserID,
  checkUserIdExist,
};
