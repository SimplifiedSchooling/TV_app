const httpStatus = require('http-status');
const ClassroomAvailableSchema = require('../../models/masterModels/classroom_available.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a ClassroomAvailableSchema
 * @param {Object} ClassroomAvailableSchemaBody
 * @returns {Promise<ClassroomAvailableSchema>}
 */
const createclassroom = async (ClassroomAvailableSchemaBody) => {
  return ClassroomAvailableSchema.create(ClassroomAvailableSchemaBody);
};

/**
 * Query for classroom
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllclassroom = async (filter, options) => {
  const classroom = await ClassroomAvailableSchema.paginate(filter, options);
  return classroom;
};

/**
 * Get ClassroomAvailableSchema by id
 * @param {ObjectId} id
 * @returns {Promise<ClassroomAvailableSchema>}
 */
const getclassroomById = async (id) => {
  return ClassroomAvailableSchema.findById(id);
};

/**
 * Update ClassroomAvailableSchema by id
 * @param {ObjectId} classroomId
 * @param {Object} updateBody
 * @returns {Promise<ClassroomAvailableSchema>}
 */
const updateclassroomById = async (classroomId, updateBody) => {
  const typeclassroom = await getclassroomById(classroomId);
  if (!typeclassroom) {
    throw new ApiError(httpStatus.NOT_FOUND, 'classroom not found');
  }
  Object.assign(typeclassroom, updateBody);
  await typeclassroom.save();
  return typeclassroom;
};

/**
 * Delete ClassroomAvailableSchema by id
 * @param {ObjectId} classroomId
 * @returns {Promise<ClassroomAvailableSchema>}
 */
const deleteclassroomById = async (classroomId) => {
  const classroom = await getclassroomById(classroomId);
  if (!classroom) {
    throw new ApiError(httpStatus.NOT_FOUND, 'classroom not found');
  }
  await classroom.remove();
  return classroom;
};

module.exports = {
  createclassroom,
  getAllclassroom,
  getclassroomById,
  updateclassroomById,
  deleteclassroomById,
};
