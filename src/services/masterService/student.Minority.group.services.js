const httpStatus = require('http-status');
const { StudentMinority } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Student Minority Group
 * @param {Object} student
 * @returns {Promise<StudentMinority>}
 */
const createStudentMinority = async (student) => {
  return StudentMinority.create(student);
};

/**
 * Query for Student group
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const getAllStudentMinority = async () => {
  const student = await StudentMinority.find();
  return student;
};

/**
 * Get Student Minority Group by id
 * @param {ObjectId} id
 * @returns {Promise<StudentMinority>}
 */
const getStudentMinorityById = async (id) => {
  return StudentMinority.findById(id);
};

/**
 * Update Student Minority Group by id
 * @param {ObjectId} studentId
 * @param {Object} updateBody
 * @returns {Promise<StudentMinority>}
 */
const updateStudentMinorityById = async (studentId, updateBody) => {
  const student = await getStudentMinorityById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Minority Group not found');
  }
  Object.assign(student, updateBody);
  await student.save();
  return student;
};

/**
 * Delete Student Monority Group by id
 * @param {ObjectId} studentId
 * @returns {Promise<StudentMinority>}
 */
const deleteStudentMinorityById = async (studentId) => {
  const student = await getStudentMinorityById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Minority not found');
  }
  await student.remove();
  return student;
};

module.exports = {
  createStudentMinority,
  getAllStudentMinority,
  getStudentMinorityById,
  updateStudentMinorityById,
  deleteStudentMinorityById,
};
