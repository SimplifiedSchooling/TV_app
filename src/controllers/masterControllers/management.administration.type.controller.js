const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { managmentAdministrationType } = require('../../services');

const createManagementAdministrationType = catchAsync(async (req, res) => {
  const administrationType = await managmentAdministrationType.createManagementAdministrationType(req.body);
  res.status(httpStatus.CREATED).send(administrationType);
});

const getManagementAdministrationTypes = catchAsync(async (req, res) => {
  const result = await managmentAdministrationType.getAllManagementAdministrationTypes();
  res.send(result);
});

const getManagementAdministrationType = catchAsync(async (req, res) => {
  const administrationType = await managmentAdministrationType.getManagementAdministrationTypeById(
    req.params.managementAdmTypeId
  );
  if (!administrationType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Management AdministrationcType not found');
  }
  res.send(administrationType);
});

const updateManagementAdministrationType = catchAsync(async (req, res) => {
  const administrationType = await managmentAdministrationType.updateManagementAdministrationTypeById(
    req.params.managementAdmTypeId,
    req.body
  );
  res.send(administrationType);
});

const deleteManagementAdministrationType = catchAsync(async (req, res) => {
  await managmentAdministrationType.deleteManagementAdministrationTypeById(req.params.managementAdmTypeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createManagementAdministrationType,
  getManagementAdministrationTypes,
  getManagementAdministrationType,
  updateManagementAdministrationType,
  deleteManagementAdministrationType,
};
