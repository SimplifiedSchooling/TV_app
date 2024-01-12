const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { LeavingcertService } = require('../services');

const createLeaveVert = catchAsync(async (req, res) => {
  const leavingCert = await LeavingcertService.createLeaveCert(req.body);
  res.status(httpStatus.CREATED).send(leavingCert);
});

const queryLeavingcert = catchAsync(async (req, res) => {
  const { scode } = req.query;
  const filter = { status: true, scode }; // Filter for status true only
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await LeavingcertService.queryLeavingcert(filter, options);
  res.send(result);
});

const getStudentsByFilter = catchAsync(async (req, res) => {
  const { scode, classId, sectionId, certificate } = req.query;

  const studentIds = await LeavingcertService.getStudentIds(scode, classId, sectionId, certificate);
  const students = await LeavingcertService.getStudentsByIds(studentIds);
  if (!students) {
    throw new ApiError(httpStatus.NOT_FOUND, 'students not found');
  }
  res.send(students);
});

const searchStudents = catchAsync(async (req, res) => {
  const { scode, searchQuery } = req.body;
  const leavingCert = await LeavingcertService.searchStudents(scode, searchQuery);
  if (!leavingCert) {
    throw new ApiError(httpStatus.NOT_FOUND, 'leaving Cert not found');
  }
  res.send(leavingCert);
});

module.exports = {
  createLeaveVert,
  queryLeavingcert,
  getStudentsByFilter,
  searchStudents,
};
