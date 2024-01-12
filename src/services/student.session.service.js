const httpStatus = require('http-status');
const mongoose = require('mongoose');
const { StudentSession, Student, StudentAttendanceSchema, LectureAttendance } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a chapter
 * @param {Object} studentSession
 * @returns {Promise<StudentSession>}
 */
const createStudentSession = async (studentSession) => {
  return StudentSession.create(studentSession);
};

/**
 * Query for StudentSession
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentSession = async (filter, options) => {
  const allStudentSession = await StudentSession.paginate(filter, options);
  return allStudentSession;
};

/**
 * Get StudentSession by id
 * @param {ObjectId} studentSessionId
 * @returns {Promise<StudentSession>}
 */
const getStudentSessionById = async (studentSessionId) => {
  return StudentSession.findById(studentSessionId);
};

/**
 * Get Student by id
 * @param {ObjectId} studentId
 * @returns {Promise<StudentSession>}
 */
const getStudentyId = async (studentId) => {
  return StudentSession.findOne({ studentId });
};

/**
 * Get students by class and section, scode
 * @param {string} classId - The ID of the class to filter by.
 * @param {string} sectionId - The ID of the section to filter by.
 * @param {string} scode - The ID of the scode to filter by.
 * @returns {Promise<StudentSession>} - An array of StudentSession objects.
 * @throws {Error} - If there is an error while querying the database.
 */

const getStudentsByClassAndSection = async (scode, classId, sectionId, date) => {
  const attendanceData = await StudentAttendanceSchema.findOne({
    scode,
    classId: mongoose.Types.ObjectId(classId),
    sectionId: mongoose.Types.ObjectId(sectionId),
    date,
  });

  if (!attendanceData) {
    const students = await StudentSession.aggregate([
      {
        $match: {
          scode,
          classId: mongoose.Types.ObjectId(classId),
          sectionId: mongoose.Types.ObjectId(sectionId),
        },
      },
      {
        $lookup: {
          from: 'students',
          localField: 'studentId',
          foreignField: 'studentId',
          as: 'studentInfo',
        },
      },
      {
        $unwind: '$studentInfo',
      },
      {
        $project: {
          _id: 1,
          'studentInfo._id': 1,
          'studentInfo.role': 1,
          'studentInfo.name': 1,
          'studentInfo.mobNumber': 1,
          'studentInfo.age': 1,
          'studentInfo.email': 1,
          'studentInfo.admission_date': 1,
          'studentInfo.department': 1,
          'studentInfo.campusId': 1,
          'studentInfo.lastname': 1,
          'studentInfo.class': 1,
          'studentInfo.section': 1,
          'studentInfo.gender': 1,
          'studentInfo.studentId': 1,
          'studentInfo.saral_id': 1,
          'studentInfo.scode': 1,
          'studentInfo.userName': 1,
          'studentInfo.parent_id': 1,
          'studentInfo.admission_no': 1,
          'studentInfo.roll_no': 1,
          'studentInfo.firstname': 1,
          'studentInfo.middlename': 1,
          'studentInfo.rte': 1,
          'studentInfo.image': 1,
          'studentInfo.state': 1,
          'studentInfo.city': 1,
          'studentInfo.pincode': 1,
          'studentInfo.religion': 1,
          'studentInfo.cast': 1,
          'studentInfo.dob': 1,
          'studentInfo.current_address': 1,
          'studentInfo.permanent_address': 1,
          'studentInfo.category_id': 1,
          'studentInfo.route_id': 1,
          'studentInfo.school_house_id': 1,
          'studentInfo.blood_group': 1,
          'studentInfo.vehroute_id': 1,
          'studentInfo.hostel_room_id': 1,
          'studentInfo.adhar_no': 1,
          'studentInfo.nameadhar_no': 1,
          'studentInfo.samagra_id': 1,
          'studentInfo.aadhar_back': 1,
          'studentInfo.bank_account_no': 1,
          'studentInfo.bank_name': 1,
          'studentInfo.ifsc_code': 1,
          'studentInfo.guardian_is': 1,
          'studentInfo.father_name': 1,
          'studentInfo.father_phone': 1,
          'studentInfo.father_occupation': 1,
          'studentInfo.mother_name': 1,
          'studentInfo.mother_phone': 1,
          'studentInfo.mother_occupation': 1,
          'studentInfo.guardian_name': 1,
          'studentInfo.guardian_relation': 1,
          'studentInfo.guardian_phone': 1,
          'studentInfo.guardian_occupation': 1,
          'studentInfo.guardian_address': 1,
          'studentInfo.guardian_email': 1,
          'studentInfo.father_pic': 1,
          'studentInfo.mother_pic': 1,
          'studentInfo.guardian_pic': 1,
          'studentInfo.is_active': 1,
          'studentInfo.previous_school': 1,
          'studentInfo.height': 1,
          'studentInfo.weight': 1,
          'studentInfo.student_health_check1': 1,
          'studentInfo.student_health_check2': 1,
          'studentInfo.disability': 1,
          'studentInfo.certifi_disability_avai': 1,
          'studentInfo.disability1': 1,
          'studentInfo.disability_type': 1,
          'studentInfo.percentage': 1,
          'studentInfo.certifi_number': 1,
          'studentInfo.certifi_date': 1,
          'studentInfo.certifi_auth': 1,
          'studentInfo.certificate_up': 1,
          'studentInfo.orphan': 1,
          'studentInfo.orphanname': 1,
          'studentInfo.bpl': 1,
          'studentInfo.bplyear': 1,
          'studentInfo.bplnumber': 1,
          'studentInfo.stdincome': 1,
          'studentInfo.initialadmistand': 1,
          'studentInfo.admissiontype': 1,
          'studentInfo.mothertongue': 1,
          'studentInfo.hivparent': 1,
          'studentInfo.childinfected': 1,
          'studentInfo.studtype': 1,
          'studentInfo.mirc_code': 1,
          'studentInfo.measurement_date': 1,
          'studentInfo.dis_reason': 1,
          'studentInfo.note': 1,
          'studentInfo.dis_note': 1,
          'studentInfo.app_key': 1,
          'studentInfo.parent_app_key': 1,
          'studentInfo.disable_at': 1,
        },
      },
    ]);

    return students.map((item) => ({
      studentSessionId: item._id,
      studentInfo: item.studentInfo,
    }));
  }

  const studentAttendanceMap = new Map();
  attendanceData.entries.forEach((entry) => {
    studentAttendanceMap.set(entry.studentId.toString(), {
      attendanceStatus: entry.attendanceStatus,
      remark: entry.remark || null,
    });
  });

  const studentIds = attendanceData.entries.map((entry) => entry.studentId);
  const students = await Student.find({ studentId: { $in: studentIds } });

  const result = students.map((student) => ({
    studentInfo: student,
    attendanceStatus: studentAttendanceMap.get(student.studentId.toString())
      ? studentAttendanceMap.get(student.studentId.toString()).attendanceStatus
      : 'Not Marked',
    remark: studentAttendanceMap.get(student.studentId.toString())
      ? studentAttendanceMap.get(student.studentId.toString()).remark
      : null,
  }));

  return result;
};

/**
 * Get students by class and section, scode
 * @param {string} classId - The ID of the class to filter by.
 * @param {string} sectionId - The ID of the section to filter by.
 * @param {string} scode - The ID of the scode to filter by.
 * @returns {Promise<StudentSession>} - An array of StudentSession objects.
 * @throws {Error} - If there is an error while querying the database.
 */

const getStudentsByClassAndSectionForLectureAttendance = async (scode, classId, sectionId, date) => {
  const attendanceData = await LectureAttendance.findOne({
    scode,
    classId: mongoose.Types.ObjectId(classId),
    sectionId: mongoose.Types.ObjectId(sectionId),
    date,
  });
  if (!attendanceData) {
    const students = await StudentSession.aggregate([
      {
        $match: {
          scode,
          classId: mongoose.Types.ObjectId(classId),
          sectionId: mongoose.Types.ObjectId(sectionId),
        },
      },
      {
        $lookup: {
          from: 'students',
          localField: 'studentId',
          foreignField: 'studentId',
          as: 'studentInfo',
        },
      },
      {
        $unwind: '$studentInfo',
      },
      {
        $project: {
          _id: 1,
          'studentInfo._id': 1,
          'studentInfo.role': 1,
          'studentInfo.name': 1,
          'studentInfo.mobNumber': 1,
          'studentInfo.age': 1,
          'studentInfo.email': 1,
          'studentInfo.admission_date': 1,
          'studentInfo.department': 1,
          'studentInfo.campusId': 1,
          'studentInfo.lastname': 1,
          'studentInfo.class': 1,
          'studentInfo.section': 1,
          'studentInfo.gender': 1,
          'studentInfo.studentId': 1,
          'studentInfo.saral_id': 1,
          'studentInfo.scode': 1,
          'studentInfo.userName': 1,
          'studentInfo.parent_id': 1,
          'studentInfo.admission_no': 1,
          'studentInfo.roll_no': 1,
          'studentInfo.firstname': 1,
          'studentInfo.middlename': 1,
          'studentInfo.rte': 1,
          'studentInfo.image': 1,
          'studentInfo.state': 1,
          'studentInfo.city': 1,
          'studentInfo.pincode': 1,
          'studentInfo.religion': 1,
          'studentInfo.cast': 1,
          'studentInfo.dob': 1,
          'studentInfo.current_address': 1,
          'studentInfo.permanent_address': 1,
          'studentInfo.category_id': 1,
          'studentInfo.route_id': 1,
          'studentInfo.school_house_id': 1,
          'studentInfo.blood_group': 1,
          'studentInfo.vehroute_id': 1,
          'studentInfo.hostel_room_id': 1,
          'studentInfo.adhar_no': 1,
          'studentInfo.nameadhar_no': 1,
          'studentInfo.samagra_id': 1,
          'studentInfo.aadhar_back': 1,
          'studentInfo.bank_account_no': 1,
          'studentInfo.bank_name': 1,
          'studentInfo.ifsc_code': 1,
          'studentInfo.guardian_is': 1,
          'studentInfo.father_name': 1,
          'studentInfo.father_phone': 1,
          'studentInfo.father_occupation': 1,
          'studentInfo.mother_name': 1,
          'studentInfo.mother_phone': 1,
          'studentInfo.mother_occupation': 1,
          'studentInfo.guardian_name': 1,
          'studentInfo.guardian_relation': 1,
          'studentInfo.guardian_phone': 1,
          'studentInfo.guardian_occupation': 1,
          'studentInfo.guardian_address': 1,
          'studentInfo.guardian_email': 1,
          'studentInfo.father_pic': 1,
          'studentInfo.mother_pic': 1,
          'studentInfo.guardian_pic': 1,
          'studentInfo.is_active': 1,
          'studentInfo.previous_school': 1,
          'studentInfo.height': 1,
          'studentInfo.weight': 1,
          'studentInfo.student_health_check1': 1,
          'studentInfo.student_health_check2': 1,
          'studentInfo.disability': 1,
          'studentInfo.certifi_disability_avai': 1,
          'studentInfo.disability1': 1,
          'studentInfo.disability_type': 1,
          'studentInfo.percentage': 1,
          'studentInfo.certifi_number': 1,
          'studentInfo.certifi_date': 1,
          'studentInfo.certifi_auth': 1,
          'studentInfo.certificate_up': 1,
          'studentInfo.orphan': 1,
          'studentInfo.orphanname': 1,
          'studentInfo.bpl': 1,
          'studentInfo.bplyear': 1,
          'studentInfo.bplnumber': 1,
          'studentInfo.stdincome': 1,
          'studentInfo.initialadmistand': 1,
          'studentInfo.admissiontype': 1,
          'studentInfo.mothertongue': 1,
          'studentInfo.hivparent': 1,
          'studentInfo.childinfected': 1,
          'studentInfo.studtype': 1,
          'studentInfo.mirc_code': 1,
          'studentInfo.measurement_date': 1,
          'studentInfo.dis_reason': 1,
          'studentInfo.note': 1,
          'studentInfo.dis_note': 1,
          'studentInfo.app_key': 1,
          'studentInfo.parent_app_key': 1,
          'studentInfo.disable_at': 1,
        },
      },
    ]);

    return students.map((item) => ({
      studentSessionId: item._id,
      studentInfo: item.studentInfo,
    }));
  }

  const studentAttendanceMap = new Map();
  attendanceData.entries.forEach((entry) => {
    studentAttendanceMap.set(entry.studentId.toString(), {
      attendanceStatus: entry.attendanceStatus,
      remark: entry.remark || null,
    });
  });

  const studentIds = attendanceData.entries.map((entry) => entry.studentId);
  const students = await Student.find({ studentId: { $in: studentIds } });

  const result = students.map((student) => ({
    studentInfo: student,
    attendanceStatus: studentAttendanceMap.get(student.studentId.toString())
      ? studentAttendanceMap.get(student.studentId.toString()).attendanceStatus
      : 'Not Marked',
    remark: studentAttendanceMap.get(student.studentId.toString())
      ? studentAttendanceMap.get(student.studentId.toString()).remark
      : null,
  }));

  return result;
};

/**
 * Get students list by class and section, scode
 * @param {string} classId - The ID of the class to filter by.
 * @param {string} sectionId - The ID of the section to filter by.
 * @param {string} scode - The ID of the scode to filter by.
 * @returns {Promise<StudentSession>} - An array of StudentSession objects.
 * @throws {Error} - If there is an error while querying the database.
 */

const getStudentsListByClassAndSection = async (scode, classId, sectionId) => {
  const students = await StudentSession.aggregate([
    {
      $match: {
        scode,
        classId: mongoose.Types.ObjectId(classId),
        sectionId: mongoose.Types.ObjectId(sectionId),
      },
    },
    {
      $lookup: {
        from: 'students',
        localField: 'studentId',
        foreignField: 'studentId',
        as: 'studentInfo',
      },
    },
    {
      $unwind: '$studentInfo',
    },
    {
      $project: {
        _id: 1,
        'studentInfo._id': 1,
        'studentInfo.role': 1,
        'studentInfo.name': 1,
        'studentInfo.mobNumber': 1,
        'studentInfo.age': 1,
        'studentInfo.email': 1,
        'studentInfo.admission_date': 1,
        'studentInfo.department': 1,
        'studentInfo.campusId': 1,
        'studentInfo.lastname': 1,
        'studentInfo.class': 1,
        'studentInfo.section': 1,
        'studentInfo.gender': 1,
        'studentInfo.studentId': 1,
        'studentInfo.saral_id': 1,
        'studentInfo.scode': 1,
        'studentInfo.userName': 1,
        'studentInfo.parent_id': 1,
        'studentInfo.admission_no': 1,
        'studentInfo.roll_no': 1,
        'studentInfo.firstname': 1,
        'studentInfo.middlename': 1,
        'studentInfo.rte': 1,
        'studentInfo.image': 1,
        'studentInfo.state': 1,
        'studentInfo.city': 1,
        'studentInfo.pincode': 1,
        'studentInfo.religion': 1,
        'studentInfo.cast': 1,
        'studentInfo.dob': 1,
        'studentInfo.current_address': 1,
        'studentInfo.permanent_address': 1,
        'studentInfo.category_id': 1,
        'studentInfo.route_id': 1,
        'studentInfo.school_house_id': 1,
        'studentInfo.blood_group': 1,
        'studentInfo.vehroute_id': 1,
        'studentInfo.hostel_room_id': 1,
        'studentInfo.adhar_no': 1,
        'studentInfo.nameadhar_no': 1,
        'studentInfo.samagra_id': 1,
        'studentInfo.aadhar_back': 1,
        'studentInfo.bank_account_no': 1,
        'studentInfo.bank_name': 1,
        'studentInfo.ifsc_code': 1,
        'studentInfo.guardian_is': 1,
        'studentInfo.father_name': 1,
        'studentInfo.father_phone': 1,
        'studentInfo.father_occupation': 1,
        'studentInfo.mother_name': 1,
        'studentInfo.mother_phone': 1,
        'studentInfo.mother_occupation': 1,
        'studentInfo.guardian_name': 1,
        'studentInfo.guardian_relation': 1,
        'studentInfo.guardian_phone': 1,
        'studentInfo.guardian_occupation': 1,
        'studentInfo.guardian_address': 1,
        'studentInfo.guardian_email': 1,
        'studentInfo.father_pic': 1,
        'studentInfo.mother_pic': 1,
        'studentInfo.guardian_pic': 1,
        'studentInfo.is_active': 1,
        'studentInfo.previous_school': 1,
        'studentInfo.height': 1,
        'studentInfo.weight': 1,
        'studentInfo.student_health_check1': 1,
        'studentInfo.student_health_check2': 1,
        'studentInfo.disability': 1,
        'studentInfo.certifi_disability_avai': 1,
        'studentInfo.disability1': 1,
        'studentInfo.disability_type': 1,
        'studentInfo.percentage': 1,
        'studentInfo.certifi_number': 1,
        'studentInfo.certifi_date': 1,
        'studentInfo.certifi_auth': 1,
        'studentInfo.certificate_up': 1,
        'studentInfo.orphan': 1,
        'studentInfo.orphanname': 1,
        'studentInfo.bpl': 1,
        'studentInfo.bplyear': 1,
        'studentInfo.bplnumber': 1,
        'studentInfo.stdincome': 1,
        'studentInfo.initialadmistand': 1,
        'studentInfo.admissiontype': 1,
        'studentInfo.mothertongue': 1,
        'studentInfo.hivparent': 1,
        'studentInfo.childinfected': 1,
        'studentInfo.studtype': 1,
        'studentInfo.mirc_code': 1,
        'studentInfo.measurement_date': 1,
        'studentInfo.dis_reason': 1,
        'studentInfo.note': 1,
        'studentInfo.dis_note': 1,
        'studentInfo.app_key': 1,
        'studentInfo.parent_app_key': 1,
        'studentInfo.disable_at': 1,
      },
    },
  ]);

  return students.map((item) => ({
    studentSessionId: item._id,
    studentInfo: item.studentInfo,
  }));
};

const getStudentByScodeAndClassId = async (scode, classId) => {
  // Find the class based on classId in the studentSession model
  const classData = await StudentSession.findOne({ classId, scode });
  if (!classData) {
    return new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  // Now that you have the class data, you can find students with the given scode
  const students = await Student.find({ scode, studentId: { $in: classData.studentId } });
  if (students.length === 0) {
    return new ApiError(httpStatus.NOT_FOUND, 'Students not found for the given scode and classId');
  }
  return students;
};

/**
 * Update StudentSession by id
 * @param {ObjectId} studentSessionId
 * @param {Object} updateBody
 * @returns {Promise<StudentSession>}
 */
const updateStudentSessionById = async (studentSessionId, updateBody) => {
  const singleStudentSession = await getStudentSessionById(studentSessionId);
  if (!singleStudentSession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentSession not found');
  }
  Object.assign(singleStudentSession, updateBody);
  await singleStudentSession.save();
  return singleStudentSession;
};

/**
 * Delete StudentSession by id
 * @param {ObjectId} studentSessionId
 * @returns {Promise<StudentSession>}
 */
const deleteStudentSessionById = async (studentSessionId) => {
  const singleStudentSession = await getStudentSessionById(studentSessionId);
  if (!singleStudentSession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentSession not found');
  }
  await singleStudentSession.remove();
  return singleStudentSession;
};

module.exports = {
  createStudentSession,
  getStudentSessionById,
  getAllStudentSession,
  updateStudentSessionById,
  deleteStudentSessionById,
  getStudentsByClassAndSection,
  getStudentByScodeAndClassId,
  getStudentyId,
  getStudentsListByClassAndSection,
  getStudentsByClassAndSectionForLectureAttendance,
};
