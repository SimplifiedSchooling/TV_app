const httpStatus = require('http-status');
const { staffAttendance } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a staff atttendance
 * @param {Object} attendanceBody
 * @returns {Promise<staffAttendance>}
 */
const createAttendance = async (attendanceBody) => {
  return staffAttendance.create(attendanceBody);
};

/**
 * Query for staff attendace
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllAttendance = async (filter, options) => {
  const allAttendance = await staffAttendance.paginate(filter, options);
  return allAttendance;
};

/**
 * Get staff Attendance by id
 * @param {ObjectId} attendanceId
 * @returns {Promise<staffAttendance>}
 */
const getAttendanceById = async (attendanceId) => {
  return staffAttendance.findById(attendanceId);
};

/**
 * Update Staff Attendance by id
 * @param {ObjectId} attendanceId
 * @param {Object} updateBody
 * @returns {Promise<staffAttendance>}
 */
const updateAttendanceById = async (attendanceId, updateBody) => {
  const singleAttendance = await getAttendanceById(attendanceId);
  if (!singleAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance not found');
  }
  Object.assign(singleAttendance, updateBody);
  await singleAttendance.save();
  return singleAttendance;
};

/**
 * Delete Staff Attendance by id
 * @param {ObjectId} attendanceId
 * @returns {Promise<staffAttendance>}
 */
const deleteAttendanceById = async (attendanceId) => {
  const attendance = await getAttendanceById(attendanceId);
  if (!attendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance not found');
  }
  await attendance.remove();
  return attendance;
};

module.exports = {
  createAttendance,
  getAttendanceById,
  getAllAttendance,
  updateAttendanceById,
  deleteAttendanceById,
};
