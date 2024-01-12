const Joi = require('joi');
const { objectId } = require('./custom.validation');

const attendanceEntrySchema = Joi.object({
  studentId: Joi.number().required(),
  attendanceStatus: Joi.string().valid('present', 'absent', 'late').default('present'),
  remark: Joi.string().optional(),
});

const lectureAttendanceSchema = Joi.object({
  entries: Joi.array().items(attendanceEntrySchema).required(),
  date: Joi.string().required(),
  classId: Joi.string().required(),
  sectionId: Joi.string().required(),
  time: Joi.string().required(),
  scode: Joi.string().required(),
});

const getAllLectureAttendance = {
  query: Joi.object().keys({
    date: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const attendanceData = {
  query: Joi.object().keys({
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
    date: Joi.string().required(),
    scode: Joi.string().required(),
  }),
};
const todaysAttendanceForSchool = {
  query: Joi.object().keys({
    scode: Joi.string().required(),
    date: Joi.string().required(),
  }),
};

const getLectureAttendance = {
  params: Joi.object().keys({
    LectureAttendanceId: Joi.string().custom(objectId),
  }),
};

const updateLectureAttendance = {
  params: Joi.object().keys({
    LectureAttendanceId: Joi.custom(objectId),
  }),
  body: Joi.object()
    .keys({
      attendancetype: Joi.string().valid('present', 'absent', 'halfday', 'holiday'),
      remark: Joi.string().allow(''),
    })
    .min(1),
};

const deleteLectureAttendance = {
  params: Joi.object().keys({
    LectureAttendanceId: Joi.string().custom(objectId),
  }),
};
const getAllStudentByclassAndsection = {
  body: Joi.object().keys({
    scode: Joi.string().required(),
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
    date: Joi.string().required(),
  }),
};
module.exports = {
  lectureAttendanceSchema,
  getAllLectureAttendance,
  getLectureAttendance,
  updateLectureAttendance,
  deleteLectureAttendance,
  attendanceData,
  todaysAttendanceForSchool,
  getAllStudentByclassAndsection,
};
