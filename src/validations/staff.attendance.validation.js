const Joi = require('joi');
const { objectId } = require('./custom.validation');

const attendanceEntrySchema = Joi.object({
  employee_id: Joi.number().required(),
  attendanceStatus: Joi.string().valid('present', 'absent', 'late').default('present'),
  remark: Joi.string().optional(),
});

const staffAttendanceSchema = Joi.object({
  entries: Joi.array().items(attendanceEntrySchema).required(),
  date: Joi.string().required(),
  time: Joi.string().required(),
  scode: Joi.string().required(),
});

const getAllStaffAttendance = {
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

const getStaffAttendance = {
  params: Joi.object().keys({
    StaffAttendanceId: Joi.string().custom(objectId),
  }),
};

const updateStaffAttendance = {
  params: Joi.object().keys({
    StaffAttendanceId: Joi.custom(objectId),
  }),
  body: Joi.object()
    .keys({
      attendancetype: Joi.string().valid('present', 'absent', 'halfday', 'holiday'),
      remark: Joi.string().allow(''),
    })
    .min(1),
};

const deleteStaffAttendance = {
  params: Joi.object().keys({
    StaffAttendanceId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  staffAttendanceSchema,
  getAllStaffAttendance,
  getStaffAttendance,
  updateStaffAttendance,
  deleteStaffAttendance,
  attendanceData,
  todaysAttendanceForSchool,
};
