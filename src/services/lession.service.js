const httpStatus = require('http-status');
const { Lession } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a lession
 * @param {Object} lessionBody
 * @returns {Promise<Lession>}
 */

const createLession = async (lessionBody) => {
  return Lession.create(lessionBody);
};

/**
 * Query for lession
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLessions = async (filter, options) => {
  const lession = await Lession.paginate(filter, options);
  return lession;
};

/**
 * Get lession by id
 * @param {ObjectId} id
 * @returns {Promise<Lession>}
 */
const getLessionById = async (id) => {
  return Lession.findById(id);
};

/**
 * Get lession by id
 * @param {ObjectId} chapterId
 * @returns {Promise<Lession>}
 */
const getLessionbychapterId = async (chapterId) => {
  return Lession.find({ chapterId });
};

/**
 * Get Lession by filter
 * @param {ObjectId} boardId
 * @param {ObjectId} mediumId
 * @param {ObjectId} classId
 * @param {ObjectId} subjectId
 * @param {ObjectId} bookId
 * @returns {Promise<lesssion>}
 */

const getLessionByFilter = async (boardId, mediumId, classId, subjectId, bookId, chapterId) => {
  return Lession.find({ boardId, mediumId, classId, subjectId, bookId, chapterId }).sort('order');
};

/**
 * Update lession by id
 * @param {ObjectId} lessionId
 * @param {Object} updateBody
 * @returns {Promise<Lession>}
 */
const updateLessionById = async (lessionId, updateBody) => {
  const lession = await getLessionById(lessionId);
  if (!lession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'lession not found');
  }
  Object.assign(lession, updateBody);
  await lession.save();
  return lession;
};

/**
 * Delete lession by id
 * @param {ObjectId} lessionId
 * @returns {Promise<Lession>}
 */
const deleteLessionById = async (lessionId) => {
  const lession = await getLessionById(lessionId);
  if (!lession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'lession not found');
  }
  await lession.remove();
  return lession;
};

module.exports = {
  createLession,
  queryLessions,
  getLessionById,
  updateLessionById,
  deleteLessionById,
  getLessionbychapterId,
  getLessionByFilter,
};
