const httpStatus = require('http-status');
const { StudentStatus } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a StudentStatus
 * @param {Object} studentStatus
 * @returns {Promise<StudentStatus>}
 */
const createStudentStatus = async (studentStatus) => {
  return StudentStatus.create(studentStatus);
};

/**
 * Query for Classes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentStatus = async () => {
  const StudentStatuss = await StudentStatus.find({});
  return StudentStatuss;
};

/**
 * Get StudentStatus by id
 * @param {ObjectId} id
 * @returns {Promise<StudentStatus>}
 */
const getStudentStatusById = async (id) => {
  return StudentStatus.findById(id);
};

/**
 * Update StudentStatus by id
 * @param {ObjectId} studentStatusId
 * @param {Object} updateBody
 * @returns {Promise<StudentStatus>}
 */
const updateStudentStatusyId = async (studentStatusId, updateBody) => {
  const studentStatus = await getStudentStatusById(studentStatusId);
  if (!studentStatus) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentStatus not found');
  }
  Object.assign(studentStatus, updateBody);
  await studentStatus.save();
  return studentStatus;
};

/**
 * Delete StudentStatus by id
 * @param {ObjectId} studentStatusId
 * @returns {Promise<StudentStatus>}
 */
const deleteStudentStatusById = async (studentStatusId) => {
  const studentStatus = await getStudentStatusById(studentStatusId);
  if (!studentStatus) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentStatus not found');
  }
  await studentStatus.remove();
  return studentStatus;
};

module.exports = {
  createStudentStatus,
  getAllStudentStatus,
  getStudentStatusById,
  updateStudentStatusyId,
  deleteStudentStatusById,
};
