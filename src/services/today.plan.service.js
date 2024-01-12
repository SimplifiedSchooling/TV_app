const httpStatus = require('http-status');
const { TodayPlan } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a todaysPlan
 * @param {Object} planBody
 * @returns {Promise<TodayPlan>}
 */
const createNewPlan = async (planBody) => {
  return TodayPlan.create(planBody);
};

/**
 * Query for TodayPlans
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllPlans = async (filter, options) => {
  const videos = await TodayPlan.paginate(filter, options);
  return videos;
};

/**
 * Query for TodayPlan
 * @param {Object} date
 * @returns {Promise<TodayPlan>}
 */
// const getTodayPlans = async (date) => {
//   const videos = await TodayPlan.find({ date });
//   return videos;
// };

// const getTodayPlans = async () => {
//   const today = new Date();
//   const todayDate = today.toLocaleDateString('en-GB'); // Format: 'DD/MM/YYYY'

//   const todayPlans = await TodayPlan.aggregate([
//     {
//       $match: { date: todayDate },
//     },
//     {
//       $group: {
//         _id: '$class',
//         plans: { $push: '$$ROOT' },
//       },
//     },
//   ]);
//   return todayPlans;
// };
const getTodayPlans = async () => {
  const today = new Date();
  const todayDate = today.toLocaleDateString('en-GB'); // Format: 'DD/MM/YYYY'

  const todayPlans = await TodayPlan.aggregate([
    {
      $match: { date: todayDate },
    },
    {
      $lookup: {
        from: 'classes', // Assuming the collection name is 'classes'. Change it accordingly.
        localField: 'class',
        foreignField: 'className',
        as: 'classDetails',
      },
    },
    {
      $unwind: '$classDetails', // Unwind to access fields of the 'classDetails' array
    },
    {
      $group: {
        _id: '$class',
        classID: { $first: '$classDetails._id' }, // Use the class name
        className: { $first: '$classDetails.className' }, // Use the class name
        plans: { $addToSet: '$$ROOT' },
      },
    },
  ]);
  return todayPlans;
};

/**
 * Get TodayPlan by id
 * @param {ObjectId} planId
 * @returns {Promise<TodayPlan>}
 */
const getPlanById = async (planId) => {
  return TodayPlan.findById(planId);
};

/**
 * Update TodayPlan by id
 * @param {ObjectId} planId
 * @param {Object} updateBody
 * @returns {Promise<TodayPlan>}
 */
const updatePlanById = async (planId, updateBody) => {
  const todaysPlan = await getPlanById(planId);
  if (!todaysPlan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plan not found');
  }
  Object.assign(todaysPlan, updateBody);
  await todaysPlan.save();
  return todaysPlan;
};

/**
 * Delete user by id
 * @param {ObjectId} planId
 * @returns {Promise<TodayPlan>}
 */

const deletePlanById = async (planId) => {
  const deletedPlan = await getPlanById(planId);
  if (!deletedPlan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plan not found');
  }
  await deletedPlan.remove();
  return deletedPlan;
};

module.exports = {
  createNewPlan,
  getAllPlans,
  getTodayPlans,
  getPlanById,
  updatePlanById,
  deletePlanById,
};
