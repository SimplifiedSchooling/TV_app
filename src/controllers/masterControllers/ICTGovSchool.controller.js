const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { ICTGovSchool } = require('../../services');

const createICTGovSchool = catchAsync(async (req, res) => {
  const ictGovSchool = await ICTGovSchool.createICTGovSchool(req.body);
  res.status(httpStatus.CREATED).send(ictGovSchool);
});

const getAllICTGovSchool = catchAsync(async (req, res) => {
  const result = await ICTGovSchool.getAllICTGovSchool();
  res.send(result);
});

const getICTGovSchool = catchAsync(async (req, res) => {
  const ictGovSchool = await ICTGovSchool.getICTGovSchoolById(req.params.ictGovSchoolId);
  if (!ictGovSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ICT Gov Schoolnot found');
  }
  res.send(ictGovSchool);
});

const updateICTGovSchool = catchAsync(async (req, res) => {
  const ictGovSchool = await ICTGovSchool.updateICTGovSchoolById(req.params.ictGovSchoolId, req.body);
  res.send(ictGovSchool);
});

const deleteICTGovSchool = catchAsync(async (req, res) => {
  await ICTGovSchool.deleteICTGovSchoolById(req.params.ictGovSchoolId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createICTGovSchool,
  getAllICTGovSchool,
  getICTGovSchool,
  updateICTGovSchool,
  deleteICTGovSchool,
};
