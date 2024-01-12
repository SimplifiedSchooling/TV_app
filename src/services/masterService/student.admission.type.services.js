const httpStatus = require('http-status');
const { StudentAdmission } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Student Type
 * @param {Object} student
 * @returns {Promise<StudentAdmission>}
 */
const createStudentAdmissionType = async (student) => {
  return StudentAdmission.create(student);
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

const getAllStudentAdmissionType = async () => {
  const student = await StudentAdmission.find();
  return student;
};

/**
 * Get Studen Type by id
 * @param {ObjectId} id
 * @returns {Promise<StudentType>}
 */
const getStudentAdmissionTypeById = async (id) => {
  return StudentAdmission.findById(id);
};

/**
 * Update Student Type by id
 * @param {ObjectId} studentId
 * @param {Object} updateBody
 * @returns {Promise<StudentType>}
 */
const updateStudentAdmissionTypeById = async (studentId, updateBody) => {
  const student = await getStudentAdmissionTypeById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Admission type not found');
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
const deleteStudentAdmissionTypeById = async (studentId) => {
  const student = await getStudentAdmissionTypeById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student Admission type not found');
  }
  await student.remove();
  return student;
};

module.exports = {
  createStudentAdmissionType,
  getAllStudentAdmissionType,
  getStudentAdmissionTypeById,
  updateStudentAdmissionTypeById,
  deleteStudentAdmissionTypeById,
};
