const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const BoardingResidentialSchoolService = require('../../services/masterService/boarding_residential_school.service');

const createBoardResidential = catchAsync(async (req, res) => {
  const BoardResidential = await BoardingResidentialSchoolService.createresidential(req.body);
  res.status(httpStatus.CREATED).send(BoardResidential);
});

const getAllBoardResidential = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await BoardingResidentialSchoolService.getAllboardresidential(filter, options);
  res.send(result);
});

const getBoardResidentialById = catchAsync(async (req, res) => {
  const Residential = await BoardingResidentialSchoolService.getboardresidentialById(req.params.ResidentialId);
  if (!Residential) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Residential not found');
  }
  res.send(Residential);
});

const updateBoardResidential = catchAsync(async (req, res) => {
  const Residential = await BoardingResidentialSchoolService.updateboardresidentialById(req.params.ResidentialId, req.body);
  res.send(Residential);
});

const deleteBoardResidential = catchAsync(async (req, res) => {
  await BoardingResidentialSchoolService.deleteboardresidentialById(req.params.ResidentialId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBoardResidential,
  getAllBoardResidential,
  getBoardResidentialById,
  updateBoardResidential,
  deleteBoardResidential,
};
