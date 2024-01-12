const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const AdmitServices = require('../../services/masterService/admitted.service');
const ApiError = require('../../utils/ApiError');

const createAdmit = catchAsync(async (req, res) => {
  const admit = await AdmitServices.createAdmit(req.body);
  res.status(httpStatus.CREATED).send(admit);
});

const getAllAdmit = catchAsync(async (req, res) => {
  const getAllAdmits = await AdmitServices.getAllAdmit();
  res.send(getAllAdmits);
});

const getAdmitById = catchAsync(async (req, res) => {
  const singleAdmit = await AdmitServices.getAdmitById(req.params.admitId);
  if (!singleAdmit) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Admit not found');
  }
  res.send(singleAdmit);
});

const updateAdmitById = catchAsync(async (req, res) => {
  const updateAdmit = await AdmitServices.updateAdmityId(req.params.admitId, req.body);
  res.send(updateAdmit);
});

const deleteadmitById = catchAsync(async (req, res) => {
  const deleteAdmit = await AdmitServices.deleteAdmitById(req.params.admitId);
  res.status(httpStatus.NO_CONTENT).send(deleteAdmit);
});

module.exports = {
  createAdmit,
  getAllAdmit,
  getAdmitById,
  updateAdmitById,
  deleteadmitById,
};
