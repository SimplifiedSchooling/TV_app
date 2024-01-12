/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-catch */
const httpStatus = require('http-status');
const crypto = require('crypto');
const randomstring = require('randomstring');
const { Student, User, StudentSession, Parent } = require('../models');
const ApiError = require('../utils/ApiError');
const parentService = require('./parent.service');

const generateUsernameFromName = (name) => {
  const sanitizedName = name.replace(/\s+/g, '').toLowerCase();
  const randomString = randomstring.generate({
    length: 4,
    charset: 'alphanumeric',
  });
  return `${sanitizedName}${randomString}`;
};

const generate8DigitNumericID = () => {
  const min = 10000000; // Smallest 8-digit number
  const max = 99999999; // Largest 8-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Create a Student
 * @param {Object} studentData
 * @returns {Promise<Object>}
 */
const createStudent = async (studentData) => {
  const studentId = await generate8DigitNumericID();
  const newStudent = await Student.create({
    ...studentData,
    studentId, // Assign the generated studentId
  });
  // Check if a parent with the same name and mobile number exists
  let existingParent = await Parent.findOne({ name: studentData.middlename, mobNumber: studentData.mobNumber });

  if (existingParent) {
    // Add the student to the existing parent's student list
    existingParent.students.push(studentId);
    await existingParent.save();
    existingParent = await User.findOne({ name: studentData.middlename, mobNumber: studentData.mobNumber });
  } else {
    // Create a new parent
    const parentData = {
      name: studentData.middlename,
      mobNumber: studentData.mobNumber,
      email: studentData.email,
      students: [studentId],
      role: 'parent',
    };
    existingParent = await parentService.createParent(parentData);
  }

  const username = generateUsernameFromName(studentData.firstname);
  const randomPass = crypto.randomBytes(16).toString('hex');
  const studentUser = await User.create({
    name: `${newStudent.firstname} ${newStudent.lastname}`,
    userId: studentId,
    scode: newStudent.scode,
    mobNumber: newStudent.mobNumber,
    userName: username,
    password: randomPass,
    role: 'student',
  });

  const studentSession = await StudentSession.create({
    sessionId: studentData.sessionId,
    studentId,
    classId: studentData.classId,
    sectionId: studentData.sectionId,
    scode: newStudent.scode,
  });
  return { existingParent, newStudent, studentUser, studentSession };
};

/**
 * Query for Classes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudents = async (filter, options) => {
  const students = await Student.paginate(filter, options);
  return students;
};

/**
 * Get students by id
 * @param {ObjectId} id
 * @returns {Promise<Student>}
 */
const getStudentById = async (studentId) => {
  return Student.findOne({ studentId });
};

/**
 * Get students by mobNumber
 * @param {ObjectId} mobNumber
 * @returns {Promise<Student>}
 */
const getStudentMobNumber = async (mobNumber) => {
  const student = await Student.findOne({ mobNumber });
  return student;
};

/**
 * Get students by scode
 * @param {ObjectId} scode
 * @returns {Promise<Student>}
 */
const getStudentScode = async (scode) => {
  const student = await Student.find({ scode });
  return student;
};

/**
 * Update Classes by id
 * @param {ObjectId} studentId
 * @param {Object} updateBody
 * @returns {Promise<Student>}
 */
const updateStudentById = async (studentId, updateBody) => {
  const student = await getStudentById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  Object.assign(student, updateBody);
  await student.save();
  return student;
};

/**
 * Delete Classes by id
 * @param {ObjectId} studentId
 * @returns {Promise<Student>}
 */
const deleteStudentById = async (studentId) => {
  const student = await getStudentById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  await student.remove();
  return student;
};

// const studentBulkFilter = (options) => {
//   return {
//     filter: options.filter || (options.saral_id ? { saral_id: options.saral_id } : {}),
//     getFilter() {
//       return this.filter;
//     },
//   };
// };

// const getStudentBySaral = async (filter) => {
//   const studentFilter = studentBulkFilter(filter).getFilter();
//   if (studentFilter) {
//     const record = await Student.findOne(studentFilter).exec();
//     return record;
//   }
//   return { message: 'Missing query params !!!' };
// };

// const bulkUpload = async (studentArray, csvFilePath = null) => {
//   let modifiedStudentsArray = studentArray;
//   if (csvFilePath) {
//     modifiedStudentsArray = { students: csvFilePath };
//   }
//   if (!modifiedStudentsArray.students || !modifiedStudentsArray.students.length)
//     return { error: true, message: 'missing array' };

//   const records = [];
//   const dups = [];

//   await Promise.all(
//     modifiedStudentsArray.students.map(async (student) => {
//       const studentFound = await getStudentBySaral({ saral_id: student.saral_id });
//       const generate8DigitNum = () => {
//         const min = 10000000; // Smallest 8-digit number
//         const max = 99999999; // Largest 8-digit number
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//       };
//       if (studentFound) {
//         dups.push(student);
//       } else {
//         let record = new Student(student);
//         record = await record.save();
//         if (record) {
//           records.push(student);
//           // Create the student user

//           const studentId = await generate8DigitNum();
//           const username = await generateUsernameFromName(student.firstname);
//           const randomPass = crypto.randomBytes(16).toString('hex');
//           await User.create({
//             name: `${student.firstname} ${student.lastname}`,
//             userId: studentId,
//             scode: student.scode,
//             mobNumber: student.mobNumber,
//             userName: username,
//             password: randomPass,
//             role: 'student',
//           });

//           const userName = await generateUsernameFromName(student.middlename);
//           const randomPassword = crypto.randomBytes(16).toString('hex');
//           await User.create({
//             name: student.middlename,
//             userId: studentId,
//             scode: student.scode,
//             mobNumber: student.mobNumber,
//             userName,
//             password: randomPassword,
//             role: 'parent',
//           });
//         }
//       }
//     })
//   );

//   const duplicates = {
//     totalDuplicates: dups.length ? dups.length : 0,
//     data: dups.length ? dups : [],
//   };
//   const nonduplicates = {
//     totalNonDuplicates: records.length ? records.length : 0,
//     data: records.length ? records : [],
//   };
//   return { nonduplicates, duplicates };
// };

const createStudentSession = async (sessionId, classId, sectionId, studentId, scode) => {
  await StudentSession.create({
    sessionId,
    studentId,
    classId,
    sectionId,
    scode,
  });
};

const studentBulkFilter = (options) => {
  return {
    filter: options.filter || (options.saral_id ? { saral_id: options.saral_id } : {}),
    getFilter() {
      return this.filter;
    },
  };
};

const getStudentBySaral = async (filter) => {
  const studentFilter = studentBulkFilter(filter).getFilter();
  if (studentFilter) {
    const record = await Student.findOne(studentFilter).exec();
    return record;
  }
  return { message: 'Missing query params !!!' };
};

const bulkUpload = async (studentArray, csvFilePath = null, sessionId, classId, sectionId) => {
  let modifiedStudentsArray = studentArray;
  if (csvFilePath) {
    modifiedStudentsArray = { students: csvFilePath };
  }
  if (!modifiedStudentsArray.students || !modifiedStudentsArray.students.length)
    return { error: true, message: 'missing array' };

  const records = [];
  const dups = [];

  await Promise.all(
    modifiedStudentsArray.students.map(async (student) => {
      const studentFound = await getStudentBySaral({ saral_id: student.saral_id });
      const generate8DigitNum = () => {
        const min = 10000000; // Smallest 8-digit number
        const max = 99999999; // Largest 8-digit number
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      if (studentFound) {
        dups.push(student);
      } else {
        let record = new Student(student);
        record = await record.save();
        if (record) {
          records.push(student);
          // Create the student user
          const studentId = await generate8DigitNum();
          const username = await generateUsernameFromName(student.firstname);
          const randomPass = crypto.randomBytes(16).toString('hex');
          await User.create({
            name: `${student.firstname} ${student.lastname}`,
            userId: studentId,
            scode: student.scode,
            mobNumber: student.mobNumber,
            userName: username,
            password: randomPass,
            role: 'student',
          });

          let existingParent = await Parent.findOne({ name: student.middlename, mobNumber: student.mobNumber });

          if (existingParent) {
            // Add the student to the existing parent's student list
            existingParent.students.push(studentId);
            await existingParent.save();
            existingParent = await User.findOne({ name: student.middlename, mobNumber: student.mobNumber });
          } else {
            // Create a new parent
            const parentData = {
              name: student.middlename,
              mobNumber: student.mobNumber,
              email: student.email,
              students: [studentId],
              role: 'parent',
            };
            existingParent = await parentService.createParent(parentData);
          }

          // Create the student session
          await createStudentSession(sessionId, classId, sectionId, studentId, student.scode);
        }
      }
    })
  );

  const duplicates = {
    totalDuplicates: dups.length ? dups.length : 0,
    data: dups.length ? dups : [],
  };
  const nonduplicates = {
    totalNonDuplicates: records.length ? records.length : 0,
    data: records.length ? records : [],
  };
  return { nonduplicates, duplicates };
};

// Existing helper functions...
/**
 * Query for Classes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentOfLeaveCert = async (filter, options) => {
  const students = await Student.paginate(filter, options);
  return students;
};
module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  getStudentMobNumber,
  bulkUpload,
  getStudentScode,
  getAllStudentOfLeaveCert,
};
