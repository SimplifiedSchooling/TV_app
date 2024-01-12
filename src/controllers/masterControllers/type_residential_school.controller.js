const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const TypeResidentialSchoolService = require('../../services/masterService/type_residential_School.service');

const createTypeResidential = catchAsync(async (req, res) => {
  const TypeResidential = await TypeResidentialSchoolService.createresidential(req.body);
  res.status(httpStatus.CREATED).send(TypeResidential);
});

const getAllTypeResidential = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await TypeResidentialSchoolService.getAlltyperesidential(filter, options);
  res.send(result);
});

const getTypeResidentialById = catchAsync(async (req, res) => {
  const Residential = await TypeResidentialSchoolService.gettyperesidentialById(req.params.ResidentialId);
  if (!Residential) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Residential not found');
  }
  res.send(Residential);
});

const updateTypeResidential = catchAsync(async (req, res) => {
  const Residential = await TypeResidentialSchoolService.updatetyperesidentialById(req.params.ResidentialId, req.body);
  res.send(Residential);
});

const deleteTypeResidential = catchAsync(async (req, res) => {
  await TypeResidentialSchoolService.deletetyperesidentialById(req.params.ResidentialId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTypeResidential,
  getAllTypeResidential,
  getTypeResidentialById,
  updateTypeResidential,
  deleteTypeResidential,
};
