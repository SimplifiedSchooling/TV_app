// const httpStatus = require('http-status');
const { LeavingCert, Student } = require('../models');
// const ApiError = require('../utils/ApiError');

/**
 * Create a LeavingCert
 * @param {Object} reqBody
 * @returns {Promise<LeavingCert>}
 */
const createLeaveCert = async (reqBody) => {
  return LeavingCert.create(reqBody);
};

/**
 * Query for board
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLeavingcert = async (filter, options) => {
  const leavingcert = await LeavingCert.paginate(filter, options);
  return leavingcert;
};

/**
 * Get leavingcert by id
 * @param {ObjectId} scode
 * @param {ObjectId} classId
 * @param {ObjectId} sectionId
 * @param {ObjectId} certificate
 * @returns {Promise<studentIds>}
 */
const getStudentIds = async (scode, classId, sectionId, certificate) => {
  const query = {
    scode,
    classId,
    sectionId,
    certificate,
  };

  const studentIds = await LeavingCert.find(query).distinct('StudentId').exec();
  return studentIds;
};

/**
 * Get leavingcert by id
 * @param {ObjectId} studentIds
 * @returns {Promise<Student>}
 */
const getStudentsByIds = async (studentIds) => {
  const students = await Student.find({ studentId: { $in: studentIds } }).exec();
  return students;
};

// Function to escape special characters in a string for RegExp
function escapeRegExp(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const searchStudents = async (scode, searchQuery) => {
  const query = {
    scode,
    $or: [
      // eslint-disable-next-line security/detect-non-literal-regexp
      { apllyedName: new RegExp(`^${escapeRegExp(searchQuery)}`, 'i') },
      { StudentId: searchQuery },
      { admissionNo: searchQuery },
    ],
  };
  const students = await LeavingCert.find(query).exec();
  return students;
};

// /**
//  * Update leavingcert by id
//  * @param {ObjectId} userId
//  * @param {Object} updateBody
//  * @returns {Promise<Board>}
//  */
// const updateLeavingcertById = async (leavingcertId, updateBody) => {
//   const board = await getLeavingcertById(leavingcertId);
//   if (!board) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Board not found');
//   }
//   Object.assign(board, updateBody);
//   await board.save();
//   return board;
// };

// /**
//  * Delete leavingcert by id
//  * @param {ObjectId} boardId
//  * @returns {Promise<Board>}
//  */
// const deleteLeavingcertById = async (boardId) => {
//   const board = await getLeavingcertById(boardId);
//   if (!board) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Board not found');
//   }
//   await board.remove();
//   return board;
// };

module.exports = {
  createLeaveCert,
  queryLeavingcert,
  getStudentIds,
  searchStudents,
  getStudentsByIds,
  // updateLeavingcertById,
  // deleteLeavingcertById,
};
