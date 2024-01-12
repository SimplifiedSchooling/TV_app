const httpStatus = require('http-status');
const crypto = require('crypto');
const randomstring = require('randomstring');
const { Campus, User } = require('../models');
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
 * Create a Campus
 * @param {Object} campusBody
 * @returns {Promise<Campus>}
 */
const createCampus = async (campusBody) => {
  // if (await Campus.isUserNameTaken(campusBody.userName)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'User Name already taken');
  // }
  const campus = await Campus.create(campusBody);
  const userName = await generateUsernameFromName(campusBody.name);
  const randomPassword = await crypto.randomBytes(16).toString('hex');
  const schoolUser = await User.create({
    name: campus.name,
    userId: campus.id,
    mobNumber: campus.mobNumber,
    userName,
    password: randomPassword,
    role: 'school',
  });
  return { schoolUser, campus };
};

/**
 * Query for Campus
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCampus = async (filter, options) => {
  const campus = await Campus.paginate(filter, options);
  return campus;
};

/**
 * Get Campus by id
 * @param {ObjectId} id
 * @returns {Promise<Campus>}
 */
const getCampusById = async (id) => {
  return Campus.findById(id);
};

/**
 * Get Campus by schoolName
 * @param {ObjectId} schoolName
 * @returns {Promise<Campus>}
 */
const getCampusBySchoolName = async (schoolName) => {
  return Campus.findOne({ schoolName });
};

/**
 * Update Campus by id
 * @param {ObjectId} campusId
 * @param {Object} updateBody
 * @returns {Promise<Campus>}
 */
const updateCampusById = async (campusId, updateBody) => {
  const campus = await getCampusById(campusId);
  if (!campus) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campus not found');
  }
  Object.assign(campus, updateBody);
  await campus.save();
  return campus;
};

/**
 * Delete campus by id
 * @param {ObjectId} campusId
 * @returns {Promise<Campus>}
 */
const deleteCampusById = async (campusId) => {
  const campus = await getCampusById(campusId);
  if (!campus) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campus not found');
  }
  await campus.remove();
  return campus;
};

module.exports = {
  createCampus,
  getCampusById,
  queryCampus,
  updateCampusById,
  deleteCampusById,
  getCampusBySchoolName,
};
