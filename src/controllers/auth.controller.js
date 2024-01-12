const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userTypes } = require('../config/tokens');
const {
  authService,
  userService,
  tokenService,
  emailService,
  otpService,
  sansthanService,
  departmentUserService,
} = require('../services');

// User register
const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});
// Sansthan register
const sansthanRegister = catchAsync(async (req, res) => {
  const sansthan = await sansthanService.createSansthan(req.body);
  res.status(httpStatus.CREATED).send({ sansthan });
});

// Department register
const createDepUser = catchAsync(async (req, res) => {
  const depUser = await departmentUserService.createDepUser(req.body);
  res.status(httpStatus.CREATED).send(depUser);
});

// TO check userId exist in sansthan
const checkUserIdExist = catchAsync(async (req, res) => {
  await sansthanService.checkUserIdExist(req.body.userID);
  res.send('UserID not exist');
});
// Verify  phone number
const verifyNumber = catchAsync(async (req, res) => {
  const otp = await otpService.generateOTP();
  await otpService.sendSMSToVerifyNo(req.body.mobNumber, otp);
  res.status(httpStatus.CREATED).send();
});

// User login
const login = catchAsync(async (req, res) => {
  const { userName, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(userName, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

// Login for Sansthans
const loginSansthan = catchAsync(async (req, res) => {
  const { userID, password } = req.body;
  const sansthan = await authService.loginSansthanWithUserIDAndPassword(userID, password);
  const tokens = await tokenService.generateAuthTokens(sansthan, userTypes.SANSTHAN);
  res.send({ sansthan, tokens });
});

// Login for Department
const loginDepUser = catchAsync(async (req, res) => {
  const { userName, password } = req.body;
  const depUser = await authService.loginDepUserWithUserNameAndPassword(userName, password);
  const tokens = await tokenService.generateAuthTokens(depUser, userTypes.DEPARTMENT);
  res.send({ depUser, tokens });
});

// Staff login
// const loginStaff = catchAsync(async (req, res) => {
//   const { userName, password } = req.body;
//   const userData = await authService.loginStaff(userName, password);
//   const tokens = await tokenService.generateAuthTokens(userData);
//   const user = {
//     name: userData.name,
//     lastName: userData.lastName,
//     role: userData.role,
//     userName: userData.userName,
//   };
//   res.send({ user, tokens });
// });

// Student and Parent staff school login
const resetPassFirtsTime = catchAsync(async (req, res) => {
  const { userName, mobNumber } = req.body;
  const user = await authService.getUserByUserNameAndMob(userName, mobNumber);
  // const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user });
});

// Department first resepassword login
const resetPassFirtsTimeForDeparrtment = catchAsync(async (req, res) => {
  const { userName, mobNumber } = req.body;
  const department = await departmentUserService.getDepByUserNameAndMob(userName, mobNumber);
  // const tokens = await tokenService.generateAuthTokens(user);
  res.send({ department });
});

// // School logins
// const loginSchool = catchAsync(async (req, res) => {
//   const { schoolName, password } = req.body;
//   const school = await authService.loginSchool(schoolName, password);
//   const tokens = await tokenService.generateAuthTokens(school);
//   res.send({ school, tokens });
// });

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});
//  not in use
const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.userName);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

// const setPassword = catchAsync(async (req, res) => {
//   const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.userName);
// // await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
//   res.status(httpStatus.NO_CONTENT).send();
// });

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

// Set password for school users
const setPassword = catchAsync(async (req, res) => {
  const user = await authService.setPassword(req.body.userId, req.body.password);
  res.send(user);
});

// Set password for department users
const setPasswordForDepartment = catchAsync(async (req, res) => {
  await departmentUserService.updateDepUserPasswordById(req.body.userId, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = catchAsync(async (req, res) => {
  await authService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  sansthanRegister,
  checkUserIdExist,
  verifyNumber,
  login,
  loginSansthan,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
  // loginStaff,
  // loginStudentAndParent,
  // loginSchool,
  resetPassFirtsTime,
  setPassword,
  createDepUser,
  loginDepUser,
  resetPassFirtsTimeForDeparrtment,
  setPasswordForDepartment,
};
