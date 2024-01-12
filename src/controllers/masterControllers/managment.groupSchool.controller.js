const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { managmentGroupschool } = require('../../services');

const createManagmentGroupSchool = catchAsync(async (req, res) => {
  const groupSchool = await managmentGroupschool.createManagmentGroupSchool(req.body);
  res.status(httpStatus.CREATED).send(groupSchool);
});

const getManagmentGroupSchools = catchAsync(async (req, res) => {
  const result = await managmentGroupschool.getAllmanagGroupSchool();
  res.send(result);
});

const getManagmentGroupSchool = catchAsync(async (req, res) => {
  const groupSchool = await managmentGroupschool.getManagementById(req.params.managementId);
  if (!groupSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Managment group School not found');
  }
  res.send(groupSchool);
});

const updateManagmentGroupSchool = catchAsync(async (req, res) => {
  const groupSchool = await managmentGroupschool.updateManamentById(req.params.managementId, req.body);
  res.send(groupSchool);
});

const deleteManagmentGroupSchool = catchAsync(async (req, res) => {
  await managmentGroupschool.deleteManagmentById(req.params.managementId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createManagmentGroupSchool,
  getManagmentGroupSchools,
  getManagmentGroupSchool,
  updateManagmentGroupSchool,
  deleteManagmentGroupSchool,
};
