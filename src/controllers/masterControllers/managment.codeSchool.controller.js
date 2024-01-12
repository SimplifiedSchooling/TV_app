const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { managmentCodeschool } = require('../../services');

const createManagmentCodeSchool = catchAsync(async (req, res) => {
  const codeSchool = await managmentCodeschool.createManagmentCodeSchool(req.body);
  res.status(httpStatus.CREATED).send(codeSchool);
});

const getManagmentCodeSchools = catchAsync(async (req, res) => {
  const result = await managmentCodeschool.getAllmanagCodeSchool();
  res.send(result);
});

const getManagmentCodeSchool = catchAsync(async (req, res) => {
  const codeSchool = await managmentCodeschool.getManagementCodeById(req.params.managementCodeId);
  if (!codeSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Managment code School not found');
  }
  res.send(codeSchool);
});

const updateManagmentCodeSchool = catchAsync(async (req, res) => {
  const codeSchool = await managmentCodeschool.updateManamentCodeById(req.params.managementCodeId, req.body);
  res.send(codeSchool);
});

const deleteManagmentCodeSchool = catchAsync(async (req, res) => {
  await managmentCodeschool.deleteManagmentCodeById(req.params.managementCodeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createManagmentCodeSchool,
  getManagmentCodeSchools,
  getManagmentCodeSchool,
  updateManagmentCodeSchool,
  deleteManagmentCodeSchool,
};
