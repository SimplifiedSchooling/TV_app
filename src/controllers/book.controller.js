const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { bookService } = require('../services');
const { filterPath } = require('../utils/s3middleware');

const createBook = catchAsync(async (req, res) => {
  const { file } = req;
  req.body.thumbnail = await filterPath(file.location);
  const book = await bookService.createBook(req.body);
  res.status(httpStatus.CREATED).send(book);
});

const queryBook = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['board']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await bookService.queryBook(filter, options);
  res.send(result);
});

const getBookById = catchAsync(async (req, res) => {
  const book = await bookService.getBookById(req.params.bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'book not found');
  }
  res.send(book);
});

const getBookBySubjectId = catchAsync(async (req, res) => {
  const book = await bookService.getBookBysubjectId(req.params.subjectId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }
  res.send(book);
});

const getBookByFilter = catchAsync(async (req, res) => {
  const { boardId, mediumId, classId, subjectId } = req.params;
  const book = await bookService.getBookByFilter(boardId, mediumId, classId, subjectId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }
  res.send(book);
});

const updateBook = catchAsync(async (req, res) => {
  const { file } = req;
  if (file) {
    req.body.thumbnail = await filterPath(file.location);
  }
  const book = await bookService.updatBookById(req.params.bookId, req.body);
  res.send(book);
});

const deleteBook = catchAsync(async (req, res) => {
  await bookService.deleteBookById(req.params.bookId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBook,
  getBookById,
  queryBook,
  updateBook,
  deleteBook,
  getBookByFilter,
  getBookBySubjectId,
};
