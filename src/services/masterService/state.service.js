const httpStatus = require('http-status');
const { State } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a State
 * @param {Object} state
 * @returns {Promise<State>}
 */
const createState = async (state) => {
  return State.create(state);
};

/**
 * Query for State
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStates = async () => {
  const state = await State.find({});
  return state;
};

/**
 * Get State by id
 * @param {ObjectId} id
 * @returns {Promise<State>}
 */
const getStateById = async (id) => {
  return State.findById(id);
};

/**
 * Update State by id
 * @param {ObjectId} stateId
 * @param {Object} updateBody
 * @returns {Promise<State>}
 */
const updateStateById = async (stateId, updateBody) => {
  const state = await getStateById(stateId);
  if (!state) {
    throw new ApiError(httpStatus.NOT_FOUND, 'State not found');
  }
  Object.assign(state, updateBody);
  await state.save();
  return state;
};

/**
 * Delete State by id
 * @param {ObjectId} stateId
 * @returns {Promise<State>}
 */
const deleteStateById = async (stateId) => {
  const state = await getStateById(stateId);
  if (!state) {
    throw new ApiError(httpStatus.NOT_FOUND, 'State not found');
  }
  await state.remove();
  return state;
};

module.exports = {
  createState,
  getAllStates,
  getStateById,
  updateStateById,
  deleteStateById,
};
