const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const ResidentialSchoolService = require('../../services/masterService/residential_school.service');

const createResidential = catchAsync(async (req, res) => {
  const Residential = await ResidentialSchoolService.createresidential(req.body);
  res.status(httpStatus.CREATED).send(Residential);
});

const getAllResidential = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await ResidentialSchoolService.getAllresidential(filter, options);
  res.send(result);
});

const getResidentialById = catchAsync(async (req, res) => {
  const Residential = await ResidentialSchoolService.getresidentialById(req.params.ResidentialId);
  if (!Residential) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Residential not found');
  }
  res.send(Residential);
});

const updateResidential = catchAsync(async (req, res) => {
  const Residential = await ResidentialSchoolService.updateresidentialById(req.params.ResidentialId, req.body);
  res.send(Residential);
});

const deleteResidential = catchAsync(async (req, res) => {
  await ResidentialSchoolService.deleteresidentialById(req.params.ResidentialId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createResidential,
  getAllResidential,
  getResidentialById,
  updateResidential,
  deleteResidential,
};
