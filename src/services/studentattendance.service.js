const httpStatus = require('http-status');
const mongoose = require('mongoose');
const moment = require('moment');
const { Student, StudentAttendanceSchema, StudentSession } = require('../models');
const ApiError = require('../utils/ApiError');
// /**
//  * Create a StudentAttendanceSchema
//  * @param {Object} StudentAttendanceSchemaBody
//  * @returns {Promise<StudentAttendanceSchema>}
//  */
// const createStudentAttendance = async (StudentAttendanceSchemaBody) => {
//   return StudentAttendanceSchema.create(StudentAttendanceSchemaBody);
// };
/**
 * Create a StudentAttendanceSchema
 * @param {Object} StudentAttendanceSchemaBody
 * @returns {Promise<StudentAttendanceSchema>}
 */
const createStudentAttendance = async (StudentAttendanceSchemaBody) => {
  const { scode, classId, sectionId, date } = StudentAttendanceSchemaBody;

  // Check if data with the same scode, classId, sectionId, and date already exists
  const existingEntry = await StudentAttendanceSchema.findOne({ scode, classId, sectionId, date });

  if (existingEntry) {
    // If entry already exists, you can handle this case accordingly (throw an error, update the existing entry, etc.)
    throw new Error('Attendance entry already exists for the given scode, classId, sectionId, and date.');
  }

  // If entry doesn't exist, create a new one
  return StudentAttendanceSchema.create(StudentAttendanceSchemaBody);
};
// const createStudentAttendance = async (StudentAttendanceSchemaBody) => {
//   let { AttendenceStatus } = StudentAttendanceSchemaBody;
//   if (!AttendenceStatus) {
//     const match = StudentAttendanceSchemaBody.time.match(/(\d{1,2}:\d{2}:\d{2})(am|pm)?/i);
//     const extractedTime = match ? match[1] : '';

//     const attendanceTime = new Date(`${StudentAttendanceSchemaBody.date}T${extractedTime}`);
//     const lateCutoffTime = new Date(`${StudentAttendanceSchemaBody.date}T11:00:00`);
//     AttendenceStatus = attendanceTime > lateCutoffTime ? 'absent' : 'present';
//     const remark = AttendenceStatus === 'absent' ? 'Came late to class' : '';
//     const updatedAttendanceData = {
//       ...StudentAttendanceSchemaBody,
//       AttendenceStatus,
//       remark,
//     };
//     return StudentAttendanceSchema.create(updatedAttendanceData);
//   }
//   return StudentAttendanceSchema.create({ ...StudentAttendanceSchemaBody });
// };

/**
 * Query for StudentAttendance
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentAttendance = async (filter, options) => {
  const StudentAttendance = await StudentAttendanceSchema.paginate(filter, options);
  return StudentAttendance;
};

/**
 * Get StudentAttendanceSchema by id
 * @param {ObjectId} id
 * @returns {Promise<StudentAttendanceSchema>}
 */
const getStudentAttendanceById = async (id) => {
  return StudentAttendanceSchema.findById(id);
};

/**
 * Update StudentAttendanceSchema by id
 * @param {ObjectId} StudentAttendanceId
 * @param {Object} updateBody
 * @returns {Promise<StudentAttendanceSchema>}
 */
const updateStudentAttendanceById = async (StudentAttendanceId, updateBody) => {
  const typeStudentAttendance = await getStudentAttendanceById(StudentAttendanceId);
  if (!typeStudentAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentAttendance not found');
  }
  Object.assign(typeStudentAttendance, updateBody);
  await typeStudentAttendance.save();
  return typeStudentAttendance;
};

// /**
//  * Get total, present, and absent students based on campusId.
//  * @param {string} campusId - The ID of the campus.
//  * @returns {Promise<StudentAttendanceSchema>} - Object containing total, present, and absent students.
//  */
// const getStudentAttendanceSummary = async (campusId) => {
//   const totalStudentsCount = await Student.countDocuments({ campusId });
//   const presentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     campusId,
//     attendancetype: 'present',
//   });
//   const absentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     campusId,
//     attendancetype: 'absent',
//   });

//   const halfdayStudentsCount = await StudentAttendanceSchema.countDocuments({
//     campusId,
//     attendancetype: 'halfday',
//   });
//   return {
//     totalStudents: totalStudentsCount,
//     presentStudents: presentStudentsCount,
//     absentStudents: absentStudentsCount,
//     halfdayStudents: halfdayStudentsCount,
//   };
// };

/**
 * Get total, present, and absent students based on campusId and date.
 * @param {string} scode - The scode property.
 * @param {string} date - The date in 'YYYY-MM-DD' format.
 * @returns {Promise<StudentAttendanceSchema>} - Object containing total, present, and absent students.
 */
// const getStudentAttendanceSummary = async (scode, date) => {
//   const totalStudentsCount = await Student.countDocuments({ scode });
//   const presentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     scode,
//     attendancetype: 'present',
//     date,
//   });
//   const absentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     scode,
//     attendancetype: 'absent',
//     date,
//   });

//   const halfdayStudentsCount = await StudentAttendanceSchema.countDocuments({
//     scode,
//     attendancetype: 'halfday',
//     date,
//   });

//   return {
//     totalStudents: totalStudentsCount,
//     presentStudents: presentStudentsCount,
//     absentStudents: absentStudentsCount,
//     halfdayStudents: halfdayStudentsCount,
//   };
// };

const getStudentAttendanceSummary = async (scode, date) => {
  const totalStudentsCount = await Student.countDocuments({ scode });
  const studentIds = await Student.find({ scode }, 'studentId').lean();
  const studentIdValues = studentIds.map((student) => student.studentId);

  const attendanceData = await StudentAttendanceSchema.find({
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
 * Delete StudentAttendanceSchema by id
 * @param {ObjectId} StudentAttendanceId
 * @returns {Promise<StudentAttendanceSchema>}
 */
const deleteStudentAttendanceById = async (StudentAttendanceId) => {
  const StudentAttendance = await getStudentAttendanceById(StudentAttendanceId);
  if (!StudentAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentAttendance not found');
  }
  await StudentAttendance.remove();
  return StudentAttendance;
};

/**
 * Get studentsAttendence by class, section, date
 * @param {string} classId - The ID of the class to filter by.
 * @param {string} sectionId - The ID of the section to filter by.
 * @param {string} date - The date to filter by.
 * @param {string} scode - The scode to filter by.
 * @returns {Promise<StudentAttendanceSchema>} - An array of StudentAttendanceSchema objects.
 * @throws {Error} - If there is an error while querying the database.
 */

const getAttendanceData = async (classId, sectionId, date) => {
  const attendanceData = await StudentAttendanceSchema.aggregate([
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

// const getAttendanceData = async (scode, classId, sectionId, date) => {
//   const attendanceData = await StudentAttendanceSchema.aggregate([
//     {
//       $match: {
//         scode,
//         date,
//       },
//     },
//     {
//       $lookup: {
//         from: 'students',
//         localField: 'studentId',
//         foreignField: 'studentId',
//         as: 'studentInfo',
//       },
//     },
//     {
//       $unwind: '$studentInfo',
//     },
//     {
//       $lookup: {
//         from: 'studentsessions',
//         localField: 'studentId',
//         foreignField: 'studentId',
//         as: 'sessionInfo',
//       },
//     },
//     {
//       $unwind: '$sessionInfo',
//     },
//     {
//       $match: {
//         'sessionInfo.classId': mongoose.Types.ObjectId(classId),
//         'sessionInfo.sectionId': mongoose.Types.ObjectId(sectionId),
//       },
//     },
//     {
//       $project: {
//         _id: 1,
//         studentId: 1,
//         AttendenceStatus: 1,
//         remark: 1,
//         'studentInfo._id': 1,
//         'studentInfo.role': 1,
//         'studentInfo.name': 1,
//         'studentInfo.mobNumber': 1,
//         'studentInfo.age': 1,
//         'studentInfo.email': 1,
//         'studentInfo.admission_date': 1,
//         'studentInfo.department': 1,
//         'studentInfo.campusId': 1,
//         'studentInfo.lastname': 1,
//         'studentInfo.class': 1,
//         'studentInfo.section': 1,
//         'studentInfo.gender': 1,
//         'studentInfo.studentId': 1,
//         'studentInfo.saral_id': 1,
//         'studentInfo.scode': 1,
//         'studentInfo.userName': 1,
//         'studentInfo.parent_id': 1,
//         'studentInfo.admission_no': 1,
//         'studentInfo.roll_no': 1,
//         'studentInfo.firstname': 1,
//         'studentInfo.middlename': 1,
//         'studentInfo.rte': 1,
//         'studentInfo.image': 1,
//         'studentInfo.state': 1,
//         'studentInfo.city': 1,
//         'studentInfo.pincode': 1,
//         'studentInfo.religion': 1,
//         'studentInfo.cast': 1,
//         'studentInfo.dob': 1,
//         'studentInfo.current_address': 1,
//         'studentInfo.permanent_address': 1,
//         'studentInfo.category_id': 1,
//         'studentInfo.route_id': 1,
//         'studentInfo.school_house_id': 1,
//         'studentInfo.blood_group': 1,
//         'studentInfo.vehroute_id': 1,
//         'studentInfo.hostel_room_id': 1,
//         'studentInfo.adhar_no': 1,
//         'studentInfo.nameadhar_no': 1,
//         'studentInfo.samagra_id': 1,
//         'studentInfo.aadhar_back': 1,
//         'studentInfo.bank_account_no': 1,
//         'studentInfo.bank_name': 1,
//         'studentInfo.ifsc_code': 1,
//         'studentInfo.guardian_is': 1,
//         'studentInfo.father_name': 1,
//         'studentInfo.father_phone': 1,
//         'studentInfo.father_occupation': 1,
//         'studentInfo.mother_name': 1,
//         'studentInfo.mother_phone': 1,
//         'studentInfo.mother_occupation': 1,
//         'studentInfo.guardian_name': 1,
//         'studentInfo.guardian_relation': 1,
//         'studentInfo.guardian_phone': 1,
//         'studentInfo.guardian_occupation': 1,
//         'studentInfo.guardian_address': 1,
//         'studentInfo.guardian_email': 1,
//         'studentInfo.father_pic': 1,
//         'studentInfo.mother_pic': 1,
//         'studentInfo.guardian_pic': 1,
//         'studentInfo.is_active': 1,
//         'studentInfo.previous_school': 1,
//         'studentInfo.height': 1,
//         'studentInfo.weight': 1,
//         'studentInfo.student_health_check1': 1,
//         'studentInfo.student_health_check2': 1,
//         'studentInfo.disability': 1,
//         'studentInfo.certifi_disability_avai': 1,
//         'studentInfo.disability1': 1,
//         'studentInfo.disability_type': 1,
//         'studentInfo.percentage': 1,
//         'studentInfo.certifi_number': 1,
//         'studentInfo.certifi_date': 1,
//         'studentInfo.certifi_auth': 1,
//         'studentInfo.certificate_up': 1,
//         'studentInfo.orphan': 1,
//         'studentInfo.orphanname': 1,
//         'studentInfo.bpl': 1,
//         'studentInfo.bplyear': 1,
//         'studentInfo.bplnumber': 1,
//         'studentInfo.stdincome': 1,
//         'studentInfo.initialadmistand': 1,
//         'studentInfo.admissiontype': 1,
//         'studentInfo.mothertongue': 1,
//         'studentInfo.hivparent': 1,
//         'studentInfo.childinfected': 1,
//         'studentInfo.studtype': 1,
//         'studentInfo.mirc_code': 1,
//         'studentInfo.measurement_date': 1,
//         'studentInfo.dis_reason': 1,
//         'studentInfo.note': 1,
//         'studentInfo.dis_note': 1,
//         'studentInfo.app_key': 1,
//         'studentInfo.parent_app_key': 1,
//         'studentInfo.disable_at': 1,
//       },
//     },
//   ]);
//   return attendanceData.map((item) => ({
//     attendanceObjectId: item._id,
//     attendancetype: item.AttendenceStatus,
//     remark: item.remark,
//     studentInfo: item.studentInfo,
//   }));
// };

/**
 * Get the week report for a user.
 * @param {string} scode - The ID of the scode.
 * @param {string} classId - The ID of the classId.
 * @param {string} sectionId - The ID of the sectionId.
 * @param {string} date - The date.
 * @returns {Promise<StudentAttendanceSchema>} - An array containing the week report.
 */
const getWeekReport = async (scode, classId, sectionId, date) => {
  // const dayAttendance = await StudentAttendanceSchema.findOne({ date, scode, classId, sectionId });
  const startOfWeek = moment(date).startOf('isoWeek');
  const daysOfWeek = Array.from({ length: 6 }, (_, i) => startOfWeek.clone().add(i, 'days'));
  const attendancePromises = daysOfWeek.map(async (day) => {
    const formattedDate = day.format('YYYY-MM-DD');
    const dayAttendance = await StudentAttendanceSchema.findOne({ date: formattedDate, scode, classId, sectionId });
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
// const getWeekReport = async (scode, classId, sectionId, date) => {
//   const startOfWeek = moment(date).startOf('isoWeek');
//   const daysOfWeek = Array.from({ length: 6 }, (_, i) => startOfWeek.clone().add(i, 'days'));
//   console.log(daysOfWeek);
//   const attendancePromises = daysOfWeek.map(async (day) => {
//     const formattedDate = day.format('YYYY-MM-DD');
//     const dayAttendance = await StudentAttendanceSchema.findOne({ date: formattedDate, scode, classId, sectionId });
//     return { day, dayAttendance };
//   });

//   const dayAttendances = await Promise.all(attendancePromises);
//   console.log(dayAttendances);
//   const weekReport = dayAttendances.map(({ day, dayAttendance }) => {
//     const isToday = moment(date).isSame(day, 'day');
//     const status = dayAttendance ? 'Done' : isToday ? 'Done' : 'Pending';

//     return {
//       day: day.format('dddd'),
//       date: day.format('YYYY-MM-DD'),
//       status,
//     };
//   });

//   return weekReport;
// };
// /**
//  * Get classwise student list with present and absent counts based on gender.
//  * @param {string} campusId - The ID of the campus.
//  * @param {string} date - The date in 'YYYY-MM-DD' format.
//  * @returns {Promise<Object[]>} - Array of objects containing class name, present male/female, and absent male/female counts.
//  */
// const getClasswiseStudentAttendanceList = async (campusId, date) => {
//   const classList2 = await StudentAttendanceSchema.find({ campusId });
//   const classId = classList2.classId;

//   const classList = await Classes.find({ classId });
//   console.log(classList);

//   const result = [];
//   for (const classInfo of classList) {
//     const classId = classInfo._id;
//     const { className } = classInfo;

//     const presentMaleCount = await StudentAttendanceSchema.countDocuments({
//       classId,
//       attendancetype: 'present',
//       date,
//       'studentId.gender': 'Male',
//     });
//     const presentFemaleCount = await StudentAttendanceSchema.countDocuments({
//       classId,
//       attendancetype: 'present',
//       date,
//       'studentId.gender': 'Female',
//     });

//     const absentMaleCount = await StudentAttendanceSchema.countDocuments({
//       classId,
//       attendancetype: 'absent',
//       date,
//       'studentId.gender': 'Male',
//     });

//     const absentFemaleCount = await StudentAttendanceSchema.countDocuments({
//       classId,
//       attendancetype: 'absent',
//       date,
//       'studentId.gender': 'Female',
//     });

//     result.push({
//       className,
//       present: {
//         male: presentMaleCount,
//         female: presentFemaleCount,
//       },
//       absent: {
//         male: absentMaleCount,
//         female: absentFemaleCount,
//       },
//     });
//   }

//   return result;
// };

// /**
//  * Get the number of students in the school.
//  * @param {string} scode - The school code.
//  * @returns {Promise<Student>} - The total number of students in the school.
//  */
// const getTotalStudentsCount = async (scode) => {

//   return totalStudentsCount;
// };

// /**
//  * Get the number of students present on a specific date.
//  * @param {string} scode - The school code.
//  * @param {string} date - The date in 'YYYY-MM-DD' format.
//  * @returns {Promise<StudentAttendanceSchema>} - The number of students present on the specified date.
//  */
// const getPresentStudentsCount = async (scode, date) => {
//   const totalStudentsCount = await Student.countDocuments({ scode });
//   console.log(totalStudentsCount);
//   const studentIds = await Student.find({ scode }, 'studentId');
//   console.log(studentIds);
//   const presentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     studentId: { $in: studentIds },
//     date,
//   });
//   const absentStudentsCount = totalStudentsCount - presentStudentsCount;
//   const data = {
//     totalStudentsCount,
//     presentStudentsCount,
//     absentStudentsCount,
//   };
//   return data;
// };

const getPresentStudentsCount = async (scode, date) => {
  const totalStudentsCount = await Student.countDocuments({ scode });
  const studentIds = await Student.find({ scode }, 'studentId').lean();
  const studentIdValues = studentIds.map((student) => student.studentId);
  const presentStudentsCount = await StudentAttendanceSchema.countDocuments({
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
  const result = await StudentAttendanceSchema.findOne({
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

/**
 * Update student attendance status and remark
 * @param {string} scode - The ID of the scode.
 * @param {string} classId - The ID of the class.
 * @param {string} sectionId - The ID of the section.
 * @param {string} date - The date of the attendance.
 * @param {Array} entryUpdates - An array of attendance updates containing studentId, attendanceStatus, and remark.
 * @returns {Promise<boolean>} - Returns true if the update is successful.
 * @throws {Error} - If there is an error while updating the database.
 */
const updateStudentAttendance = async (scode, classId, sectionId, date, entryUpdates) => {
  const filter = {
    scode,
    classId: mongoose.Types.ObjectId(classId),
    sectionId: mongoose.Types.ObjectId(sectionId),
    date,
  };
  const update = {
    $set: {},
  };
  entryUpdates.forEach((entry) => {
    const { studentId } = entry;
    update.$set[`entries.$[elem${studentId}].attendanceStatus`] = entry.attendanceStatus || 'present';
    update.$set[`entries.$[elem${studentId}].remark`] = entry.remark || null;
  });
  const options = {
    arrayFilters: entryUpdates.map((entry) => ({ [`elem${entry.studentId}.studentId`]: entry.studentId })),
  };
  const result = await StudentAttendanceSchema.updateOne(filter, update, options);
  return result.nModified > 0;
};

module.exports = {
  createStudentAttendance,
  getAllStudentAttendance,
  getStudentAttendanceById,
  updateStudentAttendanceById,
  deleteStudentAttendanceById,
  getAttendanceData,
  getWeekReport,
  getStudentAttendanceSummary,
  getPresentStudentsCount,
  getAttendanceStats,
  // getClasswiseStudentAttendanceList,
  updateStudentAttendance,
};
