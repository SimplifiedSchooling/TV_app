const httpStatus = require('http-status');
const { Role } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a role
 * @param {Object} reqBody
 * @returns {Promise<Role>}
 */
const createRole = async (reqBody) => {
  return Role.create(reqBody);
};

/**
 * get all  role
 * @returns {Promise<Role>}
 */
const getAllRole = async () => {
  const role = await Role.find();
  return role;
};

/**
 * Get role by id
 * @param {ObjectId} id
 * @returns {Promise<Role>}
 */
const getRoleById = async (id) => {
  return Role.findById(id);
};

/**
 * Update role by id
 * @param {ObjectId} roleId
 * @param {Object} updateBody
 * @returns {Promise<Role>}
 */
const updateRoleById = async (roleId, updateBody) => {
  const role = await getRoleById(roleId);
  if (!role) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Role not found');
  }
  Object.assign(role, updateBody);
  await role.save();
  return role;
};

/**
 * Delete role by id
 * @param {ObjectId} roleId
 * @returns {Promise<Role>}
 */
const deleteRoleById = async (roleId) => {
  const role = await getRoleById(roleId);
  if (!role) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Role not found');
  }
  await role.remove();
  return role;
};

module.exports = {
  createRole,
  getAllRole,
  getRoleById,
  updateRoleById,
  deleteRoleById,
};
