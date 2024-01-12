const httpStatus = require('http-status');
const { RecordedBroadcast } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a RecordedBroadcast
 * @param {Object} recordedBroadcast
 * @returns {Promise<RecordedBroadcast>}
 */
const createRecordedBroadcast = async (recordedBroadcast) => {
  return RecordedBroadcast.create(recordedBroadcast);
};

/**
 * Get RecordedBroadcast by filter
 * @param {ObjectId} classId
 * @param {ObjectId} subjectId
 * @returns {Promise<Chapter>}
 */
const getRecordedBroadcastByFilter = async (classId, subjectId) => {
  return RecordedBroadcast.find({ classId, subjectId });
};

/**
 * Query for RecordedBroadcast
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllRecordedBroadcast = async (filter, options) => {
  const studios = await RecordedBroadcast.paginate(filter, options);
  return studios;
};

/**
 * Get RecordedBroadcast by id
 * @param {ObjectId} id
 * @returns {Promise<RecordedBroadcast>}
 */
const getRecordedBroadcastById = async (id) => {
  return RecordedBroadcast.findById(id);
};

/**
 * Update RecordedBroadcast by id
 * @param {ObjectId} recordedBroadcastId
 * @param {Object} updateBody
 * @returns {Promise<RecordedBroadcast>}
 */
const updateRecordedBroadcastById = async (recordedBroadcastId, updateBody) => {
  const recordedBroadcast = await getRecordedBroadcastById(recordedBroadcastId);
  if (!recordedBroadcast) {
    throw new ApiError(httpStatus.NOT_FOUND, 'RecordedBroadcast not found');
  }
  Object.assign(recordedBroadcast, updateBody);
  await recordedBroadcast.save();
  return recordedBroadcast;
};

/**
 * Delete RecordedBroadcast by id
 * @param {ObjectId} recordedBroadcastId
 * @returns {Promise<RecordedBroadcast>}
 */
const deleteRecordedBroadcastById = async (recordedBroadcastId) => {
  const recordedBroadcast = await getRecordedBroadcastById(recordedBroadcastId);
  if (!recordedBroadcast) {
    throw new ApiError(httpStatus.NOT_FOUND, 'RecordedBroadcast not found');
  }
  await recordedBroadcast.remove();
  return recordedBroadcast;
};

module.exports = {
  createRecordedBroadcast,
  getAllRecordedBroadcast,
  getRecordedBroadcastById,
  updateRecordedBroadcastById,
  deleteRecordedBroadcastById,
  getRecordedBroadcastByFilter,
};
