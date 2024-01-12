const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { roleService } = require('../services');

const createRole = catchAsync(async (req, res) => {
  const role = await roleService.createRole(req.body);
  res.status(httpStatus.CREATED).send(role);
});

const getAllRole = catchAsync(async (req, res) => {
  const result = await roleService.getAllRole();
  res.send(result);
});

const getRole = catchAsync(async (req, res) => {
  const role = await roleService.getRoleById(req.params.roleId);
  if (!role) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Role not found');
  }
  res.send(role);
});

const updateRoleById = catchAsync(async (req, res) => {
  const role = await roleService.updateRoleById(req.params.roleId, req.body);
  res.send(role);
});

const deleteRoleById = catchAsync(async (req, res) => {
  await roleService.deleteRoleById(req.params.roleId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createRole,
  getAllRole,
  getRole,
  updateRoleById,
  deleteRoleById,
};
