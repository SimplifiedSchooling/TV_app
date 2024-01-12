const httpStatus = require('http-status');
const { Loan } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Apply Loan
 * @param {Object} loanBody
 * @returns {Promise<Loan>}
 */
const createLoan = async (loanBody) => {
  return Loan.create(loanBody);
};

/**
 * Query for Apply Loan
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllLoan = async (filter, options) => {
  const loan = await Loan.paginate(filter, options);
  return loan;
};

/**
 * Get Apply loan by id
 * @param {ObjectId} loanId
 * @returns {Promise<Loan>}
 */
const getLoanById = async (loanId) => {
  return Loan.findById(loanId);
};

/**
 * Update Apply Loan by id
 * @param {ObjectId} loanId
 * @param {Object} updateBody
 * @returns {Promise<Loan>}
 */
const updateLoanById = async (loanId, updateBody) => {
  const loan = await getLoanById(loanId);
  if (!loan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Apply Loan not found');
  }
  Object.assign(loan, updateBody);
  await loan.save();
  return loan;
};

/**
 * Delete Apply Loan by id
 * @param {ObjectId} loanId
 * @returns {Promise<Loan>}
 */
const deleteLoanById = async (loanId) => {
  const loan = await getLoanById(loanId);
  if (!loan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Apply Loan not found');
  }
  await loan.remove();
  return loan;
};

module.exports = {
  createLoan,
  getAllLoan,
  getLoanById,
  updateLoanById,
  deleteLoanById,
};
