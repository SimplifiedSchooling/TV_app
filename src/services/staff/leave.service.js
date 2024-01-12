const httpStatus = require('http-status');
const LeaveSchema = require('../../models/staff/leave.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a LeaveSchema
 * @param {Object} LeaveSchemaBody
 * @returns {Promise<LeaveSchema>}
 */
const createLeave = async (LeaveSchemaBody) => {
  return LeaveSchema.create(LeaveSchemaBody);
};

/**
 * Query for Leave
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllLeave = async (filter, options) => {
  const Leave = await LeaveSchema.paginate(filter, options);
  return Leave;
};

/**
 * Get LeaveSchema by id
 * @param {ObjectId} id
 * @returns {Promise<LeaveSchema>}
 */
const getLeaveById = async (id) => {
  return LeaveSchema.findById(id);
};

/**
 * Update LeaveSchema by id
 * @param {ObjectId} LeaveId
 * @param {Object} updateBody
 * @returns {Promise<LeaveSchema>}
 */
const updateLeaveById = async (LeaveId, updateBody) => {
  const typeLeave = await getLeaveById(LeaveId);
  if (!typeLeave) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Leave not found');
  }
  Object.assign(typeLeave, updateBody);
  await typeLeave.save();
  return typeLeave;
};

/**
 * Delete LeaveSchema by id
 * @param {ObjectId} LeaveId
 * @returns {Promise<LeaveSchema>}
 */
const deleteLeaveById = async (LeaveId) => {
  const Leave = await getLeaveById(LeaveId);
  if (!Leave) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Leave not found');
  }
  await Leave.remove();
  return Leave;
};

module.exports = {
  createLeave,
  getAllLeave,
  getLeaveById,
  updateLeaveById,
  deleteLeaveById,
};
