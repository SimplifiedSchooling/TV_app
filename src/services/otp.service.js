const httpStatus = require('http-status');
const { Sansthan, Otp } = require('../models');
const ApiError = require('../utils/ApiError');

const createOtp = async (mobNumber, otp) => {
  const otpDoc = {
    mobNumber,
    otp,
  };
  Otp.create(otpDoc);
};

const generateOTP = () => {
  const chars = '0123456789';
  let otp = '';
  for (let i = 0; i < 6; i += 1) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    otp += chars[randomIndex];
  }
  return otp;
};

const sendSMSToVerifyNo = async (to, otp) => {
  if (await Sansthan.isMobNumberTaken(to)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Mobile number  already taken');
  }
  await createOtp(to, otp);
};

const verifyOtp = async (mobNumber, otp) => {
  const otpDoc = await Otp.find({ mobNumber, otp });
  if (!otpDoc[0] || !otpDoc[0].otp) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Otp does not match');
  }
  await Otp.deleteMany({ mobNumber });
};

module.exports = {
  createOtp,
  sendSMSToVerifyNo,
  generateOTP,
  verifyOtp,
};
