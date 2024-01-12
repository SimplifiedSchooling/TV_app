const httpStatus = require('http-status');
const { Sessions } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Sessions
 * @param {Object} reqBody
 * @returns {Promise<Sessions>}
 */
const createSessions = async (reqBody) => {
  return Sessions.create(reqBody);
};

/**
 * Query for Sessions
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSession = async () => {
  const session = await Sessions.find();
  return session;
};

/**
 * Get Sessions by id
 * @param {ObjectId} id
 * @returns {Promise<Sessions>}
 */
const getSessionsById = async (id) => {
  return Sessions.findById(id);
};

/**
 * Update Sessions by id
 * @param {ObjectId} sessionId
 * @param {Object} updateBody
 * @returns {Promise<Sessions>}
 */
const updateSessionById = async (sessionId, updateBody) => {
  const session = await getSessionsById(sessionId);
  if (!session) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Session not found');
  }
  Object.assign(session, updateBody);
  await session.save();
  return session;
};

/**
 * Delete session by id
 * @param {ObjectId} sessionId
 * @returns {Promise<Sessions>}
 */
const deleteSessionsById = async (sessionId) => {
  const session = await getSessionsById(sessionId);
  if (!session) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sessions not found');
  }
  await session.remove();
  return session;
};

module.exports = {
  createSessions,
  getAllSession,
  updateSessionById,
  deleteSessionsById,
  getSessionsById,
};
