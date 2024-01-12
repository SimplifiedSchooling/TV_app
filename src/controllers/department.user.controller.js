const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { departmentUserService } = require('../services');

const createDepUser = catchAsync(async (req, res) => {
  const depUser = await departmentUserService.createDepUser(req.body);
  res.status(httpStatus.CREATED).send(depUser);
});

const getDepUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await departmentUserService.queryDepUsers(filter, options);
  res.send(result);
});

const getDepUserById = catchAsync(async (req, res) => {
  const depUser = await departmentUserService.getDepUserById(req.params.userId);
  if (!depUser) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(depUser);
});

const updateDepUser = catchAsync(async (req, res) => {
  const depUser = await departmentUserService.updateDepUserById(req.params.userId, req.body);
  res.send(depUser);
});

const deleteDepUser = catchAsync(async (req, res) => {
  await departmentUserService.deleteDepUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDepUser,
  getDepUsers,
  getDepUserById,
  updateDepUser,
  deleteDepUser,
};
