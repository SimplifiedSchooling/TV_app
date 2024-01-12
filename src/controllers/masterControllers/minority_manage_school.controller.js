const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const MinoritySchoolService = require('../../services/masterService/minority_manage_school.service');

const createminority = catchAsync(async (req, res) => {
  const Minority = await MinoritySchoolService.createminority(req.body);
  res.status(httpStatus.CREATED).send(Minority);
});

const getAllminority = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await MinoritySchoolService.getAllminority(filter, options);
  res.send(result);
});

const getminorityById = catchAsync(async (req, res) => {
  const minority = await MinoritySchoolService.getminorityById(req.params.minorityId);
  if (!minority) {
    throw new ApiError(httpStatus.NOT_FOUND, 'minority not found');
  }
  res.send(minority);
});

const updateminority = catchAsync(async (req, res) => {
  const minority = await MinoritySchoolService.updateminorityById(req.params.minorityId, req.body);
  res.send(minority);
});

const deleteminority = catchAsync(async (req, res) => {
  await MinoritySchoolService.deleteminorityById(req.params.minorityId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createminority,
  getAllminority,
  getminorityById,
  updateminority,
  deleteminority,
};
