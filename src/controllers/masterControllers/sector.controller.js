const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { sectorService } = require('../../services');

const createSector = catchAsync(async (req, res) => {
  const data = await sectorService.createSector(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllSector = catchAsync(async (req, res) => {
  const result = await sectorService.getAllSectors();
  res.send(result);
});

const getSectorById = catchAsync(async (req, res) => {
  const result = await sectorService.getSectorById(req.params.sectorId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sector not found');
  }
  res.send(result);
});

const updateSectorById = catchAsync(async (req, res) => {
  const result = await sectorService.updateSectorById(req.params.sectorId, req.body);
  res.send(result);
});

const deleteSectorById = catchAsync(async (req, res) => {
  await sectorService.deleteSectorById(req.params.sectorId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSector,
  getAllSector,
  getSectorById,
  updateSectorById,
  deleteSectorById,
};
