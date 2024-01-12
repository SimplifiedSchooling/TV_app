const Joi = require('joi');
const { password } = require('./custom.validation');

// User register
const register = {
  body: Joi.object().keys({
    userName: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    status: Joi.string(),
  }),
};

// Sansthan register
const sansthanRegister = {
  body: Joi.object().keys({
    userID: Joi.string().required(),
    password: Joi.string().required().custom(password),
    sansthanName: Joi.string().required(),
    state: Joi.string().required(),
    registrationDist: Joi.string().required(),
    mobNumber: Joi.number().required(),
    otp: Joi.number().required(),
  }),
};

// user login
const login = {
  body: Joi.object().keys({
    userName: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
// user loginfirst time and verify mobile number
const resetPassVerifyNo = {
  body: Joi.object().keys({
    userName: Joi.string().required(),
    mobNumber: Joi.number().required(),
  }),
};
// student login
const studentLogin = {
  body: Joi.object().keys({
    mobNumber: Joi.number().required(),
  }),
};

// Staff login
const loginStaff = {
  body: Joi.object().keys({
    userName: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

// Sansthan login
const sansthanLogin = {
  body: Joi.object().keys({
    userID: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

// user login
const schoolLogin = {
  body: Joi.object().keys({
    schoolName: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const forgotPassword = {
  body: Joi.object().keys({
    userName: Joi.string().required(),
  }),
};

const setPassword = {
  body: Joi.object().keys({
    password: Joi.string().required(),
    userId: Joi.string().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

const verifyMobNumber = {
  body: Joi.object().keys({
    mobNumber: Joi.string().required(),
  }),
};
const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

const checkUserIdExist = {
  body: Joi.object().keys({
    userID: Joi.string(),
  }),
};
module.exports = {
  register,
  sansthanRegister,
  login,
  sansthanLogin,
  loginStaff,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  verifyMobNumber,
  checkUserIdExist,
  schoolLogin,
  studentLogin,
  resetPassVerifyNo,
  setPassword,
};
