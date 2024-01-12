const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { typeOfICTSchool } = require('../../services');

const createTypeOfICTGovSchool = catchAsync(async (req, res) => {
  const ictGovSchool = await typeOfICTSchool.createTypeOfICTGovSchool(req.body);
  res.status(httpStatus.CREATED).send(ictGovSchool);
});

const getAllTypeOfICTGovSchool = catchAsync(async (req, res) => {
  const result = await typeOfICTSchool.getAllTypeOfICTGovSchool();
  res.send(result);
});

const getTypeOfICTGovSchool = catchAsync(async (req, res) => {
  const ictGovSchool = await typeOfICTSchool.getTypeOfICTGovSchoolById(req.params.typeOfICTId);
  if (!ictGovSchool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type Of ICT Gov Schoolnot found');
  }
  res.send(ictGovSchool);
});

const updateTypeOfICTGovSchool = catchAsync(async (req, res) => {
  const ictGovSchool = await typeOfICTSchool.updateTypeOfICTGovSchoolById(req.params.typeOfICTId, req.body);
  res.send(ictGovSchool);
});

const deleteTypeOfICTGovSchool = catchAsync(async (req, res) => {
  await typeOfICTSchool.deleteTypeOfICTGovSchoolById(req.params.typeOfICTId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTypeOfICTGovSchool,
  getAllTypeOfICTGovSchool,
  getTypeOfICTGovSchool,
  updateTypeOfICTGovSchool,
  deleteTypeOfICTGovSchool,
};
