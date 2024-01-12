const httpStatus = require('http-status');
const mongoose = require('mongoose');
const { Chapter } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a chapter
 * @param {Object} Chapter
 * @returns {Promise<Chapter>}
 */
const createChapter = async (chapter) => {
  return Chapter.create(chapter);
};

/**
 * Query for Chapter
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllChapter = async (filter, options) => {
  const chapters = await Chapter.paginate(filter, options);
  return chapters;
};

/**
 * Get Chapter by id
 * @param {ObjectId} chapterId
 * @returns {Promise<Chapter>}
 */
const getChapterById = async (chapterId) => {
  return Chapter.findById(chapterId);
};

const getByBookIdChapter = async (bookId) => {
  const result = await Chapter.aggregate([
    {
      $match: {
        bookId: mongoose.Types.ObjectId(bookId),
      },
    },
    {
      $lookup: {
        from: 'multimedias', // The name of your multimedia collection
        localField: '_id', // Use chapter's _id as the local field
        foreignField: 'chapterId', // Matching multimedia's chapterId
        as: 'multimedia',
      },
    },
    {
      $project: {
        chapterName: 1,
        chapterId: 1,
        order: 1,
        thumbnail: 1,
        multimedia: 1,
        name: 1,
      },
    },
    {
      $unwind: '$multimedia', // Unwind the multimedia array
    },
    {
      $group: {
        _id: null,
        multimedias: {
          $push: '$multimedia',
        },
        chapterName: {
          $first: '$chapterName',
        },
        order: {
          $first: '$order',
        },
        thumbnail: {
          $first: '$thumbnail',
        },
      },
    },
  ]);

  return result;
};

/**
 * Get Chapter by id
 * @param {ObjectId} bookId
 * @returns {Promise<Chapter>}
 */
const getChaptersByBookId = async (bookId) => {
  return Chapter.find({ bookId });
};

/**
 * Get Chapter by filter
 * @param {ObjectId} boardId
 * @param {ObjectId} mediumId
 * @param {ObjectId} classId
 * @param {ObjectId} subjectId
 * @param {ObjectId} bookId
 * @returns {Promise<Chapter>}
 */
const getChaptersByFilter = async (boardId, mediumId, classId, subjectId, bookId) => {
  return Chapter.find({ boardId, mediumId, classId, subjectId, bookId }).sort('order');
};

/**
 * Update Chapter by id
 * @param {ObjectId} chapterId
 * @param {Object} updateBody
 * @returns {Promise<Chapter>}
 */
const updateChapterById = async (chapterId, updateBody) => {
  const singleChapter = await getChapterById(chapterId);
  if (!singleChapter) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapter not found');
  }
  Object.assign(singleChapter, updateBody);
  await singleChapter.save();
  return singleChapter;
};

/**
 * Delete Chapter by id
 * @param {ObjectId} chapterId
 * @returns {Promise<Chapter>}
 */
const deleteChapterById = async (chapterId) => {
  const chapter = await getChapterById(chapterId);
  if (!chapter) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapter not found');
  }
  await chapter.remove();
  return chapter;
};

module.exports = {
  createChapter,
  getChapterById,
  getAllChapter,
  updateChapterById,
  deleteChapterById,
  getChaptersByBookId,
  getChaptersByFilter,
  getByBookIdChapter,
};
