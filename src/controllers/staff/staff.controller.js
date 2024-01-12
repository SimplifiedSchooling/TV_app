const httpStatus = require('http-status');
const { join } = require('path');
const csv = require('csvtojson');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { staffService } = require('../../services');

const staticFolder = join(__dirname, '../../../');
const uploadsFolder = join(staticFolder, 'uploads');

const bulkUpload = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await staffService.bulkUpload(payload);
  res.status(httpStatus.CREATED).send(result);
});

const bulkUploadFile = catchAsync(async (req, res) => {
  if (req.file) {
    const csvFilePath = join(uploadsFolder, req.file.filename);
    const csvJsonArray = await csv().fromFile(csvFilePath);
    const staff = await staffService.bulkUpload(null, csvJsonArray);
    res.status(httpStatus.CREATED).send(staff);
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Missing file');
  }
});

const createStaff = catchAsync(async (req, res) => {
  const staff = await staffService.createStaff(req.body);
  res.status(httpStatus.CREATED).send(staff);
});

const getAllStaff = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'userName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await staffService.queryStaff(filter, options);
  res.send(result);
});

const getStaff = catchAsync(async (req, res) => {
  const staff = await staffService.getStaffById(req.params.staffId);
  if (!staff) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff not found');
  }
  res.send(staff);
});

const getStaffByScode = catchAsync(async (req, res) => {
  const staff = await staffService.getStaffByScode(req.params.scode);
  if (!staff) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff not found');
  }
  res.send(staff);
});

const updateStaffById = catchAsync(async (req, res) => {
  const satff = await staffService.updateStaffById(req.params.staffId, req.body);
  res.send(satff);
});

const deleteStaffById = catchAsync(async (req, res) => {
  await staffService.deleteStaffById(req.params.staffId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStaff,
  getAllStaff,
  getStaff,
  updateStaffById,
  deleteStaffById,
  bulkUpload,
  bulkUploadFile,
  getStaffByScode,
};
