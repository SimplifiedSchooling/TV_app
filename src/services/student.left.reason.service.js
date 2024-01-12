const httpStatus = require('http-status');
const { Studentleft } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Student Left Reason
 * @param {Object} reqBody
 * @returns {Promise<Studentleft>}
 */
const createStudentLeft = async (reqBody) => {
  return Studentleft.create(reqBody);
};

/**
 * Query for Student Left Reason
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentLeft = async (filter, options) => {
  const studentLeft = await Studentleft.paginate(filter, options);
  return studentLeft;
};

/**
 * Get Student Left Reason by id
 * @param {ObjectId} id
 * @returns {Promise<Studentleft>}
 */
const getStudentLeftById = async (id) => {
  return Studentleft.findById(id);
};

/**
 * Update Student Left Reason by id
 * @param {ObjectId} studentleftId
 * @param {Object} updateBody
 * @returns {Promise<Studentleft>}
 */
const updateStudentLeftById = async (studentleftId, updateBody) => {
  const studentLeft = await getStudentLeftById(studentleftId);
  if (!studentLeft) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Left Reason not found');
  }
  Object.assign(studentLeft, updateBody);
  await studentLeft.save();
  return studentLeft;
};

/**
 * Delete Student Left Reason by id
 * @param {ObjectId} studentleftId
 * @returns {Promise<Studio>}
 */
const deleteStudentLeftById = async (studentleftId) => {
  const studentLeft = await getStudentLeftById(studentleftId);
  if (!studentLeft) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Left Reason not found');
  }
  await studentLeft.remove();
  return studentLeft;
};

module.exports = {
  createStudentLeft,
  getAllStudentLeft,
  getStudentLeftById,
  updateStudentLeftById,
  deleteStudentLeftById,
};
