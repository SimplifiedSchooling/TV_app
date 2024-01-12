const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const sansthanService = require('./sansthan.service');
const staffService = require('./staff/staff.service');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');
// const studentService = require('./student.service');
const campusService = require('./campus.service');
const departmentUserService = require('./department.user.service');

/**
 * Login with username and password
 * @param {string} userName
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (userName, password) => {
  const user = await userService.getUserByUserName(userName);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect userName or password');
  }
  return user;
};

/**
 * Login with userID and password
 * @param {string} userID
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginSansthanWithUserIDAndPassword = async (userID, password) => {
  const sansthan = await sansthanService.getSansthanByUserID(userID);
  if (!sansthan || !(await sansthan.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect userID or password');
  }
  return sansthan;
};

/**
 * Login with userName and password
 * @param {string} userName
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginDepUserWithUserNameAndPassword = async (userName, password) => {
  const depuser = await departmentUserService.getDepUserByUserName(userName);
  if (!depuser || !(await depuser.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect userName or password');
  }
  return depuser;
};
/**
 * Login with userID and password
 * @param {string} userID
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginStaff = async (userName, password) => {
  const staff = await staffService.getStaffByUserName(userName);
  if (!staff || !(await staff.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect userName or password');
  }
  return staff;
};

/**
 * Login with userID and password
 * @param {string} userID
 * @param {string} password
 * @returns {Promise<User>}
 */
const getUserByUserNameAndMob = async (userName, mobNumber) => {
  const user = await userService.getUserByUserNameAndMob(userName, mobNumber);
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect userName or mobile number');
  }
  return user;
};

/**
 * Login with schoolName and password
 * @param {string} schoolName
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginSchool = async (schoolName, password) => {
  const school = await campusService.getCampusBySchoolName(schoolName);
  if (!school || !(await school.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect school Name or password');
  }
  return school;
};

/**
 * Logout
 * @param {string} refreshToken
 * @returns {Promise}
 */
const logout = async (refreshToken) => {
  const refreshTokenDoc = await Token.findOne({ token: refreshToken, type: tokenTypes.REFRESH, blacklisted: false });
  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  await refreshTokenDoc.remove();
};

/**
 * Refresh auth tokens
 * @param {string} refreshToken
 * @returns {Promise<Object>}
 */
const refreshAuth = async (refreshToken) => {
  try {
    const refreshTokenDoc = await tokenService.verifyToken(refreshToken, tokenTypes.REFRESH);
    const user = await userService.getUserById(refreshTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await refreshTokenDoc.remove();
    return tokenService.generateAuthTokens(user);
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
  }
};

/**
 * Reset password
 * @param {string} resetPasswordToken
 * @param {string} newPassword
 * @returns {Promise}
 */
const resetPassword = async (resetPasswordToken, newPassword) => {
  try {
    const resetPasswordTokenDoc = await tokenService.verifyToken(resetPasswordToken, tokenTypes.RESET_PASSWORD);
    const user = await userService.getUserById(resetPasswordTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await userService.updateUserById(user.id, { password: newPassword });
    await Token.deleteMany({ user: user.id, type: tokenTypes.RESET_PASSWORD });
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password reset failed');
  }
};

/**
 * Reset password for school type of user
 * @param {string} resetPasswordToken
 * @param {string} newPassword
 * @returns {Promise}
 */
const setPassword = async (userId, newPassword) => {
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      throw new Error();
    }
    const updateUser = await userService.updateUserById(user.id, { password: newPassword });
    return updateUser;
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password reset failed');
  }
};

/**
 * Reset password for department type of user
 * @param {string} userId
 * @param {string} newPassword
 * @returns {Promise}
 */
const setPasswordForDepartment = async (userId, newPassword) => {
  try {
    const user = await departmentUserService.getDepUserById(userId);
    if (!user) {
      throw new Error();
    }
    await departmentUserService.updateDepUserPasswordById(user.id, { password: newPassword });
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password reset failed');
  }
};

/**
 * Verify email
 * @param {string} verifyEmailToken
 * @returns {Promise}
 */
const verifyEmail = async (verifyEmailToken) => {
  try {
    const verifyEmailTokenDoc = await tokenService.verifyToken(verifyEmailToken, tokenTypes.VERIFY_EMAIL);
    const user = await userService.getUserById(verifyEmailTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await Token.deleteMany({ user: user.id, type: tokenTypes.VERIFY_EMAIL });
    await userService.updateUserById(user.id, { isEmailVerified: true });
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Email verification failed');
  }
};
module.exports = {
  loginUserWithEmailAndPassword,
  loginSansthanWithUserIDAndPassword,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
  loginStaff,
  getUserByUserNameAndMob,
  loginSchool,
  setPassword,
  loginDepUserWithUserNameAndPassword,
  setPasswordForDepartment,
};
