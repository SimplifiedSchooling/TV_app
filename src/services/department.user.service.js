const httpStatus = require('http-status');
const crypto = require('crypto');
const randomstring = require('randomstring');
const { DepartmentUser } = require('../models');
const ApiError = require('../utils/ApiError');

// Generate a random username
function generateUsernameFromName(name) {
  const sanitizedName = name.replace(/\s+/g, '').toLowerCase();
  const randomString = randomstring.generate({
    length: 4,
    charset: 'alphanumeric',
  });
  return `${sanitizedName}${randomString}`;
}
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<DepartmentUser>}
 */
const createDepUser = async (userBody) => {
  const userData = userBody;
  const userName = await generateUsernameFromName(userData.name);
  const randomPassword = crypto.randomBytes(16).toString('hex');
  userData.userName = userName;
  userData.password = randomPassword;
  return DepartmentUser.create(userBody);
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
const queryDepUsers = async (filter, options) => {
  const users = await DepartmentUser.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<DepartmentUser>}
 */
const getDepUserById = async (id) => {
  return DepartmentUser.findById(id);
};

/**
 * Get user by userName
 * @param {string} userName
 * @returns {Promise<DepartmentUser>}
 */
const getDepUserByUserName = async (userName) => {
  return DepartmentUser.findOne({ userName });
};
/**
 * Get user by userName
 * @param {string} userName
 * @param {string} mobNumber
 * @returns {Promise<DepartmentUser>}
 */
const getDepByUserNameAndMob = async (userName, mobNumber) => {
  const department = DepartmentUser.findOne({ userName, mobNumber });
  if (!department) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect userName or mobile number');
  }
  return department;
};
/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<DepartmentUser>}
 */
const updateDepUserById = async (userId, updateBody) => {
  const user = await getDepUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.userName && (await DepartmentUser.isUserNameTaken(updateBody.userName, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User Name already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Update auto generated  password only for admin
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<DepartmentUser>}
 */
const updateDepUserPasswordById = async (userId, newPassword) => {
  const user = await getDepUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  Object.assign(user, { password: newPassword });
  await user.save();
  return user;
};
/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteDepUserById = async (userId) => {
  const user = await getDepUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createDepUser,
  queryDepUsers,
  getDepUserById,
  getDepUserByUserName,
  updateDepUserById,
  deleteDepUserById,
  updateDepUserPasswordById,
  getDepByUserNameAndMob,
};
