const httpStatus = require('http-status');
const { StudentPromote, StudentSession, Student } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a StudentPromote
 * @param {Object} StudentPromoteData
 * @returns {Promise<StudentPromote>}
 */
const createStudentPromote = async (StudentPromoteData) => {
  return StudentPromote.create(StudentPromoteData);
};

/**
 * Query for StudentPromote
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentPromotes = async (filter, options) => {
  const StudentPromotes = await StudentPromote.paginate(filter, options);
  return StudentPromotes;
};

/**
 * Get StudentPromote by id
 * @param {ObjectId} id
 * @returns {Promise<StudentPromote>}
 */
const getStudentPromoteById = async (id) => {
  return StudentPromote.findById(id);
};

/**
 * Update StudentPromote by id
 * @param {ObjectId} StudentPromoteId
 * @param {Object} updateBody
 * @returns {Promise<StudentPromote>}
 */
const updateStudentPromoteById = async (StudentPromoteId, updateBody) => {
  const studentPromote = await getStudentPromoteById(StudentPromoteId);
  if (!studentPromote) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentPromote not found');
  }
  Object.assign(studentPromote, updateBody);
  await studentPromote.save();
  return studentPromote;
};

/**
 * Delete StudentPromote by id
 * @param {ObjectId} StudentPromoteId
 * @returns {Promise<StudentPromote>}
 */
const deleteStudentPromoteById = async (StudentPromoteId) => {
  const studentPromote = await getStudentPromoteById(StudentPromoteId);
  if (!studentPromote) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentPromote not found');
  }
  await studentPromote.remove();
  return studentPromote;
};

// /**
//  * Create a StudentPromote and StudentSession
//  * @param {Object} StudentPromoteData
//  * @returns {Promise<StudentPromote>}
//  * @returns {Promise<StudentSession>}
//  */
// const createStudentData = async ({ currentClassId, currentSectionId, nextSessionId, nextClassId, scode, studentData }) => {
//   const createdRecords = [];

//   await Promise.all(
//     studentData.map(async (data) => {
//       const { nextSessionStatus, currentResult, studentId } = data;

//       let studentSessionData = null;

//       if (nextSessionStatus === 'Continue') {
//         if (currentResult === 'Pass') {
//           studentSessionData = {
//             sessionId: nextSessionId,
//             studentId,
//             classId: nextClassId,
//             sectionId: data.nextSectionId,
//             scode,
//           };
//         } else if (currentResult === 'Fail') {
//           studentSessionData = {
//             sessionId: nextSessionId,
//             studentId,
//             classId: currentClassId,
//             sectionId: currentSectionId,
//             scode,
//           };
//         }
//       }

//       let createdStudentSession = null;
//       if (studentSessionData) {
//         createdStudentSession = await StudentSession.create(studentSessionData);
//       }

//       try {
//         const createdStudentPromote = await StudentPromote.create({
//           scode,
//           nextSessionStatus,
//           currentResult,
//           studentId,
//           classId: nextClassId,
//           sectionId: data.nextSectionId,
//           sessionId: nextSessionId,
//         });
//         createdRecords.push({ studentSession: createdStudentSession, studentPromote: createdStudentPromote });
//       } catch (promoteError) {
//         createdRecords.push({ studentSession: createdStudentSession, studentPromote: null });
//       }
//     })
//   );

//   return createdRecords;
// };
/**
 * Create a StudentPromote and StudentSession
 * @param {Object} StudentPromoteData
 * @returns {Promise<{ studentSession: StudentSession | null, studentPromote: StudentPromote | null }[]>}
 */
const createStudentData = async ({ currentClassId, currentSectionId, nextSessionId, nextClassId, scode, studentData }) => {
  const createdRecords = [];

  await Promise.all(
    studentData.map(async (data) => {
      const { nextSessionStatus, currentResult, studentId } = data;

      let studentSessionData = null;

      if (nextSessionStatus === 'Continue') {
        if (currentResult === 'Pass') {
          studentSessionData = {
            sessionId: nextSessionId,
            studentId,
            classId: nextClassId,
            sectionId: data.nextSectionId,
            scode,
          };
        } else if (currentResult === 'Fail') {
          studentSessionData = {
            sessionId: nextSessionId,
            studentId,
            classId: currentClassId,
            sectionId: currentSectionId,
            scode,
          };
        }
      }

      let createdStudentSession = null;
      if (studentSessionData) {
        // Check if the student session already exists
        const existingStudentSession = await StudentSession.findOne({
          sessionId: studentSessionData.sessionId,
          studentId: studentSessionData.studentId,
        });

        if (!existingStudentSession) {
          createdStudentSession = await StudentSession.create(studentSessionData);
        }
      }

      try {
        // Check if the student promote already exists
        const existingStudentPromote = await StudentPromote.findOne({
          sessionId: nextSessionId,
          studentId,
        });

        if (!existingStudentPromote) {
          const createdStudentPromote = await StudentPromote.create({
            scode,
            nextSessionStatus,
            currentResult,
            studentId,
            classId: nextClassId,
            sectionId: data.nextSectionId,
            sessionId: nextSessionId,
          });

          createdRecords.push({ studentSession: createdStudentSession, studentPromote: createdStudentPromote });
        } else {
          createdRecords.push({ studentSession: createdStudentSession, studentPromote: null });
        }
      } catch (promoteError) {
        createdRecords.push({ studentSession: createdStudentSession, studentPromote: null });
      }
    })
  );

  return createdRecords;
};

// Assuming you have a Student model, import it here
/**
 * Create a StudentPromote and StudentSession
 * @param {Object} classId
 * @param {Object} sessionId
 * @returns {Promise<StudentPromote>}
 * @returns {Promise<Student>}
 */
const getStudentPromoteData = async (classId, sessionId) => {
  // Fetch student promote data based on classId and sessionId
  const studentPromotes = await StudentPromote.find({
    classId,
    sessionId,
  })
    .populate('classId')
    .populate('sectionId');

  // Fetch student data for each studentPromote
  const studentData = await Promise.all(
    studentPromotes.map(async (promote) => {
      const student = await Student.findOne({ studentId: promote.studentId });
      return {
        student,
        sectionName: promote.sectionId.sectionName,
        ...promote.toJSON(),
      };
    })
  );

  return studentData;
};

module.exports = {
  createStudentPromote,
  getAllStudentPromotes,
  getStudentPromoteById,
  updateStudentPromoteById,
  deleteStudentPromoteById,
  createStudentData,
  getStudentPromoteData,
};
