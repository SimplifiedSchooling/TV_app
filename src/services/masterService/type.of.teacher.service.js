const httpStatus = require('http-status');
const { Teacher } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Type of Teacher
 * @param {Object} teacher
 * @returns {Promise<Teacher>}
 */
const createTeacherType = async (teacher) => {
  return Teacher.create(teacher);
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
const getAllTeacherType = async () => {
  const teacher = await Teacher.find({});
  return teacher;
};

/**
 * Get Type of Teacher by id
 * @param {ObjectId} id
 * @returns {Promise<Teacher>}
 */
const getTeacherTypeById = async (id) => {
  return Teacher.findById(id);
};

/**
 * Update Type of Teacher by id
 * @param {ObjectId} teacherId
 * @param {Object} updateBody
 * @returns {Promise<Teacher>}
 */
const updateTeacherTypeById = async (teacherId, updateBody) => {
  const teacher = await getTeacherTypeById(teacherId);
  if (!teacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'teacher not found');
  }
  Object.assign(teacher, updateBody);
  await teacher.save();
  return teacher;
};

/**
 * Delete Type of Teacher  by id
 * @param {ObjectId} teacherId
 * @returns {Promise<Teacher>}
 */
const deleteTeacherTypeById = async (teacherId) => {
  const teacher = await getTeacherTypeById(teacherId);
  if (!teacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'teacher not found');
  }
  await teacher.remove();
  return teacher;
};

module.exports = {
  createTeacherType,
  getAllTeacherType,
  getTeacherTypeById,
  updateTeacherTypeById,
  deleteTeacherTypeById,
};
