const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const academicsServices = require('../../services/masterService/academics.service');
const ApiError = require('../../utils/ApiError');

const createAcademics = catchAsync(async (req, res) => {
  const Academics = await academicsServices.createAcademics(req.body);
  res.status(httpStatus.CREATED).send(Academics);
});

const getAllAcademics = catchAsync(async (req, res) => {
  const getAllAcademicss = await academicsServices.getAllAcademics();
  res.send(getAllAcademicss);
});

const getAcademicsById = catchAsync(async (req, res) => {
  const singleAcademics = await academicsServices.getAcademicsById(req.params.academicsId);
  if (!singleAcademics) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Academicsnot found');
  }
  res.send(singleAcademics);
});

const updateAcademicsById = catchAsync(async (req, res) => {
  const updateAcademics = await academicsServices.updateAcademicsyId(req.params.academicsId, req.body);
  res.send(updateAcademics);
});

const deleteistrictById = catchAsync(async (req, res) => {
  const deleteAcademics = await academicsServices.deleteAcademicsById(req.params.academicsId);
  res.status(httpStatus.NO_CONTENT).send(deleteAcademics);
});

module.exports = {
  createAcademics,
  getAllAcademics,
  getAcademicsById,
  updateAcademicsById,
  deleteistrictById,
};
