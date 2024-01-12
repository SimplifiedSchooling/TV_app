const httpStatus = require('http-status');
const { Book } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a book
 * @param {Object} bookBody
 * @returns {Promise<Book>}
 */
const createBook = async (bookBody) => {
  return Book.create(bookBody);
};

/**
 * Query for subject
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryBook = async (filter, options) => {
  const book = await Book.paginate(filter, options);
  return book;
};

/**
 * Get book by filter
 * @param {ObjectId} boardId
 * @param {ObjectId} mediumId
 * @param {ObjectId} classId
 * @param {ObjectId} subjectId
 * @returns {Promise<Book>}
 */

const getBookByFilter = async (boardId, mediumId, classId, subjectId) => {
  return Book.find({ boardId, mediumId, classId, subjectId });
};

const getBookById = async (id) => {
  return Book.findById(id);
};

/**
 * Get book by subjectId
 * @param {ObjectId} subjectId
 * @returns {Promise<Book>}
 */

const getBookBysubjectId = async (subjectId) => {
  return Book.find({ subjectId });
};

/**
 * Update book by id
 * @param {ObjectId} bookId
 * @param {Object} updateBody
 * @returns {Promise<Book>}
 */
const updatBookById = async (bookId, updateBody) => {
  const book = await getBookById(bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }
  Object.assign(book, updateBody);
  await book.save();
  return book;
};

/**
 * Delete book by id
 * @param {ObjectId} booktId
 * @returns {Promise<Book>}
 */
const deleteBookById = async (bookId) => {
  const book = await getBookById(bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
  }
  await book.remove();
  return book;
};

module.exports = {
  createBook,
  queryBook,
  getBookById,
  updatBookById,
  deleteBookById,
  getBookByFilter,
  getBookBysubjectId,
};
