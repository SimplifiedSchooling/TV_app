const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isUserNameTaken(userBody.userName)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User Name already taken');
  }
  return User.create(userBody);
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
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by userName
 * @param {string} userName
 * @returns {Promise<User>}
 */
const getUserByUserName = async (userName) => {
  return User.findOne({ userName });
};
/**
 * Get user by userName
 * @param {string} userName
 * @param {string} mobNumber
 * @returns {Promise<User>}
 */
const getUserByUserNameAndMob = async (userName, mobNumber) => {
  return User.findOne({ userName, mobNumber });
};

/**
 * Get student user by role and scode by perticular shcool
 * @param {string} role
 * @param {string} scode
 * @returns {Promise<User>}
 */
const getUserByRoleAndScode = async (role, scode) => {
  return User.find({ role, scode });
};
/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.userName && (await User.isUserNameTaken(updateBody.userName, userId))) {
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
 * @returns {Promise<User>}
 */
const updateUserPasswordById = async (userId, newPassword) => {
  const user = await getUserById(userId);
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
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByUserName,
  updateUserById,
  deleteUserById,
  updateUserPasswordById,
  getUserByUserNameAndMob,
  getUserByRoleAndScode,
};
