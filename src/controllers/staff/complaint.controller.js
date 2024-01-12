const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { complaintService } = require('../../services');

const createComplaint = catchAsync(async (req, res) => {
  const complaint = await complaintService.createComplaint(req.body);
  res.status(httpStatus.CREATED).send(complaint);
});

const getAllComplaints = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['subject']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const complaint = await complaintService.getAllComplaint(filter, options);
  res.send(complaint);
});

const getComplaintById = catchAsync(async (req, res) => {
  const complaint = await complaintService.getComplaintById(req.params.complaintId);
  if (!complaint) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Complaint not found');
  }
  res.send(complaint);
});

const updateComplaint = catchAsync(async (req, res) => {
  const complaint = await complaintService.updateComplaintById(req.params.complaintId, req.body);
  res.send(complaint);
});

const deleteComplaint = catchAsync(async (req, res) => {
  const complaint = await complaintService.deleteComplaintById(req.params.complaintId);
  res.status(httpStatus.NO_CONTENT).send(complaint);
});

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
};
