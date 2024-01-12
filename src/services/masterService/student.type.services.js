const httpStatus = require('http-status');
const { StudentType } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Student Type
 * @param {Object} student
 * @returns {Promise<StudentType>}
 */
const createStudentType = async (student) => {
  return StudentType.create(student);
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

const getAllStudentType = async () => {
  const student = await StudentType.find();
  return student;
};

/**
 * Get Studen Type by id
 * @param {ObjectId} id
 * @returns {Promise<StudentType>}
 */
const getStudentTypeById = async (id) => {
  return StudentType.findById(id);
};

/**
 * Update Student Type by id
 * @param {ObjectId} studentId
 * @param {Object} updateBody
 * @returns {Promise<StudentType>}
 */
const updateStudentTypeById = async (studentId, updateBody) => {
  const student = await getStudentTypeById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student type not found');
  }
  Object.assign(student, updateBody);
  await student.save();
  return student;
};

/**
 * Delete Student Type by id
 * @param {ObjectId} studentId
 * @returns {Promise<StudentType>}
 */
const deleteStudentTypeById = async (studentId) => {
  const student = await getStudentTypeById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Type not found');
  }
  await student.remove();
  return student;
};

module.exports = {
  createStudentType,
  getAllStudentType,
  getStudentTypeById,
  updateStudentTypeById,
  deleteStudentTypeById,
};
