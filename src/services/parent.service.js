const httpStatus = require('http-status');
const crypto = require('crypto');
const randomstring = require('randomstring');
const { Parent, User } = require('../models');
const ApiError = require('../utils/ApiError');

const generateUsernameFromName = (name) => {
  const sanitizedName = name.replace(/\s+/g, '').toLowerCase();
  const randomString = randomstring.generate({
    length: 4,
    charset: 'alphanumeric',
  });
  return `${sanitizedName}${randomString}`;
};

/**
 * Create a parent
 *  * @param {Object} reqBody
 * @returns {Promise<Parent>}
 */
const createParent = async (reqBody) => {
  const parent = await Parent.create(reqBody);
  const userName = await generateUsernameFromName(reqBody.name);
  const randomPassword = crypto.randomBytes(16).toString('hex');
  const parentData = await User.create({
    name: reqBody.name,
    userId: parent._id,
    scode: reqBody.scode,
    mobNumber: reqBody.mobNumber,
    userName,
    password: randomPassword,
    role: 'parent',
  });
  return parentData;
};

/**
 * get all  parent
 * @returns {Promise<Parent>}
 */
const getAllParent = async () => {
  const parent = await Parent.find();
  return parent;
};

/**
 * Get parent by id
 * @param {ObjectId} id
 * @returns {Promise<Parent>}
 */
const getParentById = async (id) => {
  return Parent.findById(id);
};

/**
 * Update parent by id
 * @param {ObjectId} parentId
 * @param {Object} updateBody
 * @returns {Promise<Parent>}
 */
const updateParentById = async (parentId, updateBody) => {
  const parent = await getParentById(parentId);
  if (!parent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Parent not found');
  }
  Object.assign(parent, updateBody);
  await parent.save();
  return parent;
};

/**
 * Delete role by id
 * @param {ObjectId} parentId
 * @returns {Promise<Role>}
 */
const deleteParentById = async (parentId) => {
  const parent = await getParentById(parentId);
  if (!parent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Parent not found');
  }
  await parent.remove();
  return parent;
};

module.exports = {
  createParent,
  getAllParent,
  getParentById,
  updateParentById,
  deleteParentById,
};
