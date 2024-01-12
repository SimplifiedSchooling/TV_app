const httpStatus = require('http-status');
const { Ebook } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Ebook
 * @param {Object} ebookBody
 * @returns {Promise<Ebook>}
 */
const createEbook = async (ebookBody) => {
  return Ebook.create(ebookBody);
};

/**
 * Query for ebook
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryEbook = async (filter, options) => {
  const ebook = await Ebook.paginate(filter, options);
  return ebook;
};

/**
 * Get ebook by id
 * @param {ObjectId} id
 * @returns {Promise<Ebook>}
 */
const getEbookById = async (id) => {
  return Ebook.findById(id);
};

/**
 * Get Ebook by Filter
 * @param {ObjectId} boardId
 *  @param {ObjectId} mediumId
 *  @param {ObjectId} classId
 *  @param {ObjectId} subjectId
 *  @param {ObjectId} bookId
 * @returns {Promise<Multimedia>}
 */
const getEbookByFilter = async (boardId, mediumId, classId, subjectId, bookId) => {
  return Ebook.find({ boardId, mediumId, classId, subjectId, bookId }).sort('order');
};

/**
 * Update Ebook by id
 * @param {ObjectId} ebookId
 * @param {Object} updateBody
 * @returns {Promise<Ebook>}
 */
const updateEbookById = async (ebookId, updateBody) => {
  const ebook = await getEbookById(ebookId);
  if (!ebook) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Ebook not found');
  }
  Object.assign(ebook, updateBody);
  await ebook.save();
  return ebook;
};

/**
 * Delete Ebook by id
 * @param {ObjectId} ebookId
 * @returns {Promise<Ebook>}
 */
const deleteEbookById = async (ebookId) => {
  const ebook = await getEbookById(ebookId);
  if (!ebook) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Ebook not found');
  }
  await ebook.remove();
  return ebook;
};

module.exports = {
  createEbook,
  queryEbook,
  getEbookByFilter,
  updateEbookById,
  deleteEbookById,
  getEbookById,
};
