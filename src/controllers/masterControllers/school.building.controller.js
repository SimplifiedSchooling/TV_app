const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { SchoolBuilding } = require('../../services');

const createSchoolBuilding = catchAsync(async (req, res) => {
  const building = await SchoolBuilding.createBuilding(req.body);
  res.status(httpStatus.CREATED).send(building);
});

const getAllSchoolBuilding = catchAsync(async (req, res) => {
  const result = await SchoolBuilding.getAllBuilding();
  res.send(result);
});

const getSchoolBuilding = catchAsync(async (req, res) => {
  const building = await SchoolBuilding.getBuildingById(req.params.buildingId);
  if (!building) {
    throw new ApiError(httpStatus.NOT_FOUND, 'School Building not found');
  }
  res.send(building);
});

const updateSchoolBuilding = catchAsync(async (req, res) => {
  const building = await SchoolBuilding.updateBuildingById(req.params.buildingId, req.body);
  res.send(building);
});

const deleteSchoolBuilding = catchAsync(async (req, res) => {
  await SchoolBuilding.deleteBuildingById(req.params.buildingId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSchoolBuilding,
  getAllSchoolBuilding,
  getSchoolBuilding,
  updateSchoolBuilding,
  deleteSchoolBuilding,
};
