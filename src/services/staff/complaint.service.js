const httpStatus = require('http-status');
const { Complaint } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Complaint
 * @param {Object} ComplaintBody
 * @returns {Promise<Complaint>}
 */
const createComplaint = async (ComplaintBody) => {
  return Complaint.create(ComplaintBody);
};

/**
 * Query for Complaint
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllComplaint = async (filter, options) => {
  const complaint = await Complaint.paginate(filter, options);
  return complaint;
};

/**
 * Get Complaint by id
 * @param {ObjectId} complaintId
 * @returns {Promise<Complaint>}
 */
const getComplaintById = async (complaintId) => {
  return Complaint.findById(complaintId);
};

/**
 * Update Complaint by id
 * @param {ObjectId} complaintId
 * @param {Object} updateBody
 * @returns {Promise<Complaint>}
 */
const updateComplaintById = async (complaintId, updateBody) => {
  const complaint = await getComplaintById(complaintId);
  if (!complaint) {
    throw new ApiError(httpStatus.NOT_FOUND, 'complaint not found');
  }
  Object.assign(complaint, updateBody);
  await complaint.save();
  return complaint;
};

/**
 * Delete Complaint by id
 * @param {ObjectId} complaintId
 * @returns {Promise<Complaint>}
 */
const deleteComplaintById = async (complaintId) => {
  const complaint = await getComplaintById(complaintId);
  if (!complaint) {
    throw new ApiError(httpStatus.NOT_FOUND, 'complaint not found');
  }
  await complaint.remove();
  return complaint;
};

module.exports = {
  createComplaint,
  getAllComplaint,
  getComplaintById,
  updateComplaintById,
  deleteComplaintById,
};
