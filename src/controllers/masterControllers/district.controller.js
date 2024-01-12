const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const districtServices = require('../../services/masterService/district.service');
const ApiError = require('../../utils/ApiError');

const createDistrict = catchAsync(async (req, res) => {
  const district = await districtServices.createDistrict(req.body);
  res.status(httpStatus.CREATED).send(district);
});

const getAllDistrict = catchAsync(async (req, res) => {
  const getAllDistricts = await districtServices.getAllDistrict();
  res.send(getAllDistricts);
});

const getAllDistrictByStateId = catchAsync(async (req, res) => {
  const result = await districtServices.getDistrictByStateId(req.params.stateId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'District not found by stateId');
  }
  res.send(result);
});

const getDistrictById = catchAsync(async (req, res) => {
  const singleDistrict = await districtServices.getDistrictById(req.params.DistrictId);
  if (!singleDistrict) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Districtnot found');
  }
  res.send(singleDistrict);
});

const updateDistrictById = catchAsync(async (req, res) => {
  const updateDistrict = await districtServices.updateDistrictyId(req.params.DistrictId, req.body);
  res.send(updateDistrict);
});

const deleteistrictById = catchAsync(async (req, res) => {
  const deleteDistrict = await districtServices.deleteDistrictById(req.params.DistrictId);
  res.status(httpStatus.NO_CONTENT).send(deleteDistrict);
});

module.exports = {
  createDistrict,
  getAllDistrict,
  getDistrictById,
  updateDistrictById,
  deleteistrictById,
  getAllDistrictByStateId,
};
