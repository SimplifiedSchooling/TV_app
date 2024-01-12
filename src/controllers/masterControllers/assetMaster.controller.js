const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { assetMasterService } = require('../../services');
const ApiError = require('../../utils/ApiError');

const createAssetMaster = catchAsync(async (req, res) => {
  const Academics = await assetMasterService.createAssetMaster(req.body);
  res.status(httpStatus.CREATED).send(Academics);
});

const getAllAssetMaster = catchAsync(async (req, res) => {
  const getAllAcademicss = await assetMasterService.getAllAssetMaster();
  res.send(getAllAcademicss);
});

const getAssetMasterById = catchAsync(async (req, res) => {
  const singleAcademics = await assetMasterService.getAssetMasterById(req.params.id);
  if (!singleAcademics) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Academicsnot found');
  }
  res.send(singleAcademics);
});

const updateAssetMasterById = catchAsync(async (req, res) => {
  const updateAcademics = await assetMasterService.updateAssetMasterById(req.params.id, req.body);
  res.send(updateAcademics);
});

const deleteAssetMasterById = catchAsync(async (req, res) => {
  const deleteAcademics = await assetMasterService.deleteAssetMasterById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send(deleteAcademics);
});

module.exports = {
  createAssetMaster,
  getAllAssetMaster,
  getAssetMasterById,
  updateAssetMasterById,
  deleteAssetMasterById,
};
