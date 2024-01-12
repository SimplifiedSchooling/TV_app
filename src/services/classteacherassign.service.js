const httpStatus = require('http-status');
const { ClassTeacher, Student, StudentSession } = require('../models');
const { getStudentsByClassAndSection } = require('./student.session.service');
const { getAttendanceData } = require('./studentattendance.service');
const ApiError = require('../utils/ApiError');

/**
 * Create a ClassTeacher
 * @param {Object} classTeacherBody
 * @returns {Promise<ClassTeacher>}
 */
const createClassTeacher = async (classTeacherBody) => {
  return ClassTeacher.create(classTeacherBody);
};

/**
 * Query for ClassTeacher
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<ClassTeacher>}
 */
const getAllClassTeacher = async (filter, options) => {
  const AllClassTeacher = await ClassTeacher.paginate(filter, options);
  return AllClassTeacher;
};
/**
 * Get ClassTeacher by classTeacherId
 * @param {ObjectId} classTeacherId
 * @returns {Promise<ClassTeacher>}
 */
const getClassTeacherById = async (classTeacherId) => {
  return ClassTeacher.findById(classTeacherId);
};

/**
 * Get Class teacher by teacherId by id
 * @param {ObjectId} teacherId
 * @returns {Promise<ClassTeacher>}
 */
const getClassByTecherId = async (teacherId) => {
  return ClassTeacher.find({ teacherId });
};

/**
 * Get students for the logged-in teacher
 * @param {string} teacherId - The ID of the logged-in teacher.
 * @returns {Promise<ClassTeacher>} - An array of student data.
 * @throws {Error} - If there is an error while querying the database.
 */
const getStudentsForTeacher = async (teacherId) => {
  const teacherData = await ClassTeacher.findOne({ teacherId });
  if (!teacherData) {
    throw new Error('Teacher not found');
  }
  const { classId, sectionId } = teacherData;
  const students = await getStudentsByClassAndSection(classId, sectionId);
  return students;
};

/**
 * Get students for the logged-in teacher
 * @param {string} teacherId - The ID of the logged-in teacher.
 * @param {string} date - The date for filter
 * @returns {Promise<ClassTeacher>} - An array of student data.
 * @throws {Error} - If there is an error while querying the database.
 */
const getAttendanceListForTeacher = async (teacherId, date) => {
  const teacherData = await ClassTeacher.findOne({ teacherId });
  if (!teacherData) {
    throw new Error('Teacher not found');
  }
  const { classId, sectionId } = teacherData;
  const studentattendanceList = await getAttendanceData(classId, sectionId, date);
  return studentattendanceList;
};

/**
 * Update ClassTeacher by classTeacherId
 * @param {ObjectId} classTeacherId
 * @param {Object} updateBody
 * @returns {Promise<ClassTeacher>}
 */
const updateClassTeacherById = async (classTeacherId, updateBody) => {
  const singleClassTeacher = await getClassTeacherById(classTeacherId);
  if (!singleClassTeacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ClassTeacher not found');
  }
  Object.assign(singleClassTeacher, updateBody);
  await singleClassTeacher.save();
  return singleClassTeacher;
};

/**
 * Delete ClassTeacher by classTeacherId
 * @param {ObjectId} classTeacherId
 * @returns {Promise<ClassTeacher>}
 */
const deleteClassTeacherById = async (classTeacherId) => {
  const singleClassTeacher = await getClassTeacherById(classTeacherId);
  if (!singleClassTeacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ClassTeacher not found');
  }
  await singleClassTeacher.remove();
  return singleClassTeacher;
};
/**
 * Get total counts for students based on classId and sectionId.
 * @param {string} classId- The ID of the class.
 * @param {string} sectionId- The ID of the section.
 */
const getTotalCounts = async (classId, sectionId) => {
  const studentSessions = await StudentSession.find({ classId, sectionId });
  const studentIds = studentSessions.map((session) => session.studentId);
  const students = await Student.find({ studentId: { $in: studentIds } });
  const totalStudentCount = students.length;
  const totalMaleStudentCount = students.filter((student) => student.gender === 'Male').length;
  const totalFemaleStudentCount = students.filter((student) => student.gender === 'Female').length;
  return {
    totalStudentCount,
    totalMaleStudentCount,
    totalFemaleStudentCount,
  };
};

module.exports = {
  createClassTeacher,
  getAllClassTeacher,
  getClassTeacherById,
  updateClassTeacherById,
  deleteClassTeacherById,
  getStudentsForTeacher,
  getAttendanceListForTeacher,
  getClassByTecherId,
  getTotalCounts,
};
