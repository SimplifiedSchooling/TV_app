const httpStatus = require('http-status');
const mongoose = require('mongoose');
const moment = require('moment');
const { Student, StaffAttendanceSchema, StudentSession } = require('../models');
const ApiError = require('../utils/ApiError');
/**
 * Create a StaffAttendanceSchema
 * @param {Object} StaffAttendanceSchemaBody
 * @returns {Promise<StaffAttendanceSchema>}
 */
const createStaffAttendance = async (StaffAttendanceSchemaBody) => {
  return StaffAttendanceSchema.create(StaffAttendanceSchemaBody);
};

/**
 * Query for StaffAttendanceSchema
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStaffAttendance = async (filter, options) => {
  const StaffAttendanceSchemaData = await StaffAttendanceSchema.paginate(filter, options);
  return StaffAttendanceSchemaData;
};

/**
 * Get StaffAttendanceSchema by id
 * @param {ObjectId} id
 * @returns {Promise<StaffAttendanceSchema>}
 */
const getStaffAttendanceById = async (id) => {
  return StaffAttendanceSchema.findById(id);
};

/**
 * Update StaffAttendanceSchema by id
 * @param {ObjectId} StaffAttendanceId
 * @param {Object} updateBody
 * @returns {Promise<StaffAttendanceSchema>}
 */
const updateStaffAttendanceById = async (StaffAttendanceId, updateBody) => {
  const typeStaffAttendanceSchema = await getStaffAttendanceById(StaffAttendanceId);
  if (!typeStaffAttendanceSchema) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StaffAttendanceSchema not found');
  }
  Object.assign(typeStaffAttendanceSchema, updateBody);
  await typeStaffAttendanceSchema.save();
  return typeStaffAttendanceSchema;
};

/**
 * Get total, present, and absent students based on campusId and date.
 * @param {string} scode - The scode property.
 * @param {string} date - The date in 'YYYY-MM-DD' format.
 * @returns {Promise<StaffAttendanceSchema>} - Object containing total, present, and absent students.
 */

const getStaffAttendanceSummary = async (scode, date) => {
  const totalStudentsCount = await Student.countDocuments({ scode });
  const studentIds = await Student.find({ scode }, 'studentId').lean();
  const studentIdValues = studentIds.map((student) => student.studentId);

  const attendanceData = await StaffAttendanceSchema.find({
    'entries.studentId': { $in: studentIdValues },
    date,
  });

  let presentStudentsCount = 0;
  let absentStudentsCount = 0;

  attendanceData.forEach((entry) => {
    entry.entries.forEach((e) => {
      if (e.attendanceStatus === 'present') {
        /* eslint-disable-next-line no-plusplus */
        presentStudentsCount++;
      } else if (e.attendanceStatus === 'absent') {
        /* eslint-disable-next-line no-plusplus */
        absentStudentsCount++;
      }
    });
  });

  const data = {
    totalStudentsCount,
    presentStudentsCount,
    absentStudentsCount,
  };

  return data;
};

/**
 * Delete StaffAttendanceSchema by id
 * @param {ObjectId} StaffAttendanceId
 * @returns {Promise<StaffAttendanceSchema>}
 */
const deleteStaffAttendanceById = async (StaffAttendanceId) => {
  const StaffAttendanceSchemaData = await getStaffAttendanceById(StaffAttendanceId);
  if (!StaffAttendanceSchemaData) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StaffAttendanceSchema not found');
  }
  await StaffAttendanceSchemaData.remove();
  return StaffAttendanceSchemaData;
};

/**
 * Get studentsAttendence by class, section, date
 * @param {string} classId - The ID of the class to filter by.
 * @param {string} sectionId - The ID of the section to filter by.
 * @param {string} date - The date to filter by.
 * @param {string} scode - The scode to filter by.
 * @returns {Promise<StaffAttendanceSchema>} - An array of StaffAttendanceSchema objects.
 * @throws {Error} - If there is an error while querying the database.
 */

const getAttendanceData = async (classId, sectionId, date) => {
  const attendanceData = await StaffAttendanceSchema.aggregate([
    {
      $match: {
        classId: mongoose.Types.ObjectId(classId),
        sectionId: mongoose.Types.ObjectId(sectionId),
        date,
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
        entries: 1,
        date: 1,
        time: 1,
        scode: 1,
        classId: 1,
        sectionId: 1,
        // attendancetype: 1,
        // attedanceTakenBy: 1,
        // remark: 1,
        studentId: '$entries.studentId',
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
  return attendanceData.map((item) => ({
    // attendanceObjectId: item._id,
    // attedanceTakenBy: item.attedanceTakenBy,
    // studentId: item.studentId,
    // attendanceType: item.attendancetype,
    // remark: item.remark,
    // studentInfo: item.studentInfo,
    attendanceObjectId: item._id,
    date: item.date,
    time: item.time,
    scode: item.scode,
    classId: item.classId,
    sectionId: item.sectionId,
    entries: item.entries,
    studentInfo: item.studentInfo,
  }));
};

/**
 * Get the week report for a user.
 * @param {string} scode - The ID of the scode.
 * @param {string} classId - The ID of the classId.
 * @param {string} sectionId - The ID of the sectionId.
 * @param {string} date - The date.
 * @returns {Promise<StaffAttendanceSchema>} - An array containing the week report.
 */
const getWeekReport = async (scode, classId, sectionId, date) => {
  // const dayAttendance = await StaffAttendanceSchema.findOne({ date, scode, classId, sectionId });
  const startOfWeek = moment(date).startOf('isoWeek');
  const daysOfWeek = Array.from({ length: 6 }, (_, i) => startOfWeek.clone().add(i, 'days'));
  const attendancePromises = daysOfWeek.map(async (day) => {
    const formattedDate = day.format('YYYY-MM-DD');
    const dayAttendance = await StaffAttendanceSchema.findOne({ date: formattedDate, scode, classId, sectionId });
    return { day, dayAttendance };
  });
  const dayAttendances = await Promise.all(attendancePromises);
  const weekReport = daysOfWeek.map((day, index) => {
    const isToday = day.isSame(moment(), 'day');
    let status = 'Pending';
    if (isToday) {
      status = 'Done';
    } else if (dayAttendances[index].dayAttendance) {
      status = 'Done';
    }
    return {
      day: day.format('dddd'),
      date: day.format('YYYY-MM-DD'),
      status,
    };
  });
  return weekReport;
};

const getPresentStudentsCount = async (scode, date) => {
  const totalStudentsCount = await Student.countDocuments({ scode });
  const studentIds = await Student.find({ scode }, 'studentId').lean();
  const studentIdValues = studentIds.map((student) => student.studentId);
  const presentStudentsCount = await StaffAttendanceSchema.countDocuments({
    studentId: { $in: studentIdValues },
    date,
  });
  const absentStudentsCount = totalStudentsCount - presentStudentsCount;
  const data = {
    totalStudentsCount,
    presentStudentsCount,
    absentStudentsCount,
  };

  return data;
};

const getAttendanceStats = async (classId, sectionId, date, scode) => {
  const totalStudents = await StudentSession.countDocuments({ classId, sectionId });
  const result = await StaffAttendanceSchema.findOne({
    classId,
    sectionId,
    scode,
    date,
  });
  if (!result) {
    return { error: 'Attendance not found' };
  }
  let presentCount = 0;
  let absentCount = 0;

  result.entries.forEach((entry) => {
    if (entry.attendanceStatus === 'present') {
      /* eslint-disable-next-line no-plusplus */
      presentCount++;
    } else if (entry.attendanceStatus === 'absent') {
      /* eslint-disable-next-line no-plusplus */
      absentCount++;
    }
  });
  const absentStudentIds = result.entries
    .filter((entry) => entry.attendanceStatus === 'absent')
    .map((entry) => entry.studentId);

  const absentStudents = await Student.find({ studentId: { $in: absentStudentIds } });
  let totalMaleCount = 0;
  let totalFemaleCount = 0;
  let totalMalePresent = 0;
  let totalFemalePresent = 0;
  let totalMaleAbsent = 0;
  let totalFemaleAbsent = 0;

  const studentIds = result.entries.map((entry) => entry.studentId);

  const students = await Student.find({ studentId: { $in: studentIds } });

  result.entries.forEach((entry) => {
    const student = students.find((data) => data.studentId === entry.studentId);
    if (student) {
      if (student.gender === 'Male') {
        /* eslint-disable-next-line no-plusplus */
        totalMaleCount++;
        if (entry.attendanceStatus === 'present') {
          /* eslint-disable-next-line no-plusplus */
          totalMalePresent++;
        } else if (entry.attendanceStatus === 'absent') {
          /* eslint-disable-next-line no-plusplus */
          totalMaleAbsent++;
        }
      } else if (student.gender === 'Female') {
        /* eslint-disable-next-line no-plusplus */
        totalFemaleCount++;
        if (entry.attendanceStatus === 'present') {
          /* eslint-disable-next-line no-plusplus */
          totalFemalePresent++;
        } else if (entry.attendanceStatus === 'absent') {
          /* eslint-disable-next-line no-plusplus */
          totalFemaleAbsent++;
        }
      }
    }
  });

  return {
    totalStudents,
    presentCount,
    absentCount,
    totalMaleCount,
    totalFemaleCount,
    totalMalePresent,
    totalFemalePresent,
    totalMaleAbsent,
    totalFemaleAbsent,
    absentStudents,
  };
};

module.exports = {
  createStaffAttendance,
  getAllStaffAttendance,
  getStaffAttendanceById,
  updateStaffAttendanceById,
  deleteStaffAttendanceById,
  getAttendanceData,
  getWeekReport,
  getStaffAttendanceSummary,
  getPresentStudentsCount,
  getAttendanceStats,
};
