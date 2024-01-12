const httpStatus = require('http-status');
const { Respondent } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Respondent
 * @param {Object} respondent
 * @returns {Promise<Respondent>}
 */
const createRespondent = async (respondent) => {
  return Respondent.create(respondent);
};

/**
 * Query for Classes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const getAllRespondent = async () => {
  const respondent = await Respondent.find();
  return respondent;
};

/**
 * Get Respondent by id
 * @param {ObjectId} id
 * @returns {Promise<Respondent>}
 */
const getRespondentById = async (id) => {
  return Respondent.findById(id);
};

/**
 * Update Respondent by id
 * @param {ObjectId} respondentId
 * @param {Object} updateBody
 * @returns {Promise<Respondent>}
 */
const updateRespondentById = async (respondentId, updateBody) => {
  const respondent = await getRespondentById(respondentId);
  if (!respondent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Respondent not found');
  }
  Object.assign(respondent, updateBody);
  await respondent.save();
  return respondent;
};

/**
 * Delete Respondent by id
 * @param {ObjectId} respondentId
 * @returns {Promise<Respondent>}
 */
const deleteRespondentById = async (respondentId) => {
  const respondent = await getRespondentById(respondentId);
  if (!respondent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Respondent not found');
  }
  await respondent.remove();
  return respondent;
};

module.exports = {
  createRespondent,
  getAllRespondent,
  getRespondentById,
  updateRespondentById,
  deleteRespondentById,
};
