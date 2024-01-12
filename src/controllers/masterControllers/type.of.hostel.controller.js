const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { hostelService } = require('../../services');

const createTypeOfHostel = catchAsync(async (req, res) => {
  const data = await hostelService.createHostelType(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllTypeOfHostel = catchAsync(async (req, res) => {
  const result = await hostelService.getAllHostelType();
  res.send(result);
});

const getTypeOfHostelById = catchAsync(async (req, res) => {
  const result = await hostelService.getHostelTypeById(req.params.hostelId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hostel not found');
  }
  res.send(result);
});

const updateTypeOfHostelById = catchAsync(async (req, res) => {
  const result = await hostelService.updateHostelTypeyId(req.params.hostelId, req.body);
  res.send(result);
});

const deleteTypeOfHostelById = catchAsync(async (req, res) => {
  await hostelService.deleteHostelTypeById(req.params.hostelId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTypeOfHostel,
  getAllTypeOfHostel,
  getTypeOfHostelById,
  updateTypeOfHostelById,
  deleteTypeOfHostelById,
};
