const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { loanService } = require('../../services');

const createApplyLoan = catchAsync(async (req, res) => {
  const loan = await loanService.createLoan(req.body);
  res.status(httpStatus.CREATED).send(loan);
});

const getAllApplyLoans = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['subject']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const loan = await loanService.getAllLoan(filter, options);
  res.send(loan);
});

const getApplyLoanById = catchAsync(async (req, res) => {
  const loan = await loanService.getComplaintById(req.params.loanId);
  if (!loan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Apply Loan not found');
  }
  res.send(loan);
});

const updateApplyLoan = catchAsync(async (req, res) => {
  const loan = await loanService.updateLoanById(req.params.loanId, req.body);
  res.send(loan);
});

const deleteApplyLoan = catchAsync(async (req, res) => {
  const loan = await loanService.deleteLoanById(req.params.loanId);
  res.status(httpStatus.NO_CONTENT).send(loan);
});

module.exports = {
  createApplyLoan,
  getAllApplyLoans,
  getApplyLoanById,
  updateApplyLoan,
  deleteApplyLoan,
};
