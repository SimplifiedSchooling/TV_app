const httpStatus = require('http-status');
const Section2A21Schema = require('../../models/masterModels/section2A(2.1 to 2.21).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section2A21Schema
 * @param {Object} Section2A21SchemaBody
 * @returns {Promise<Section2A21Schema>}
 */
const createSection2A21 = async (Section2A21SchemaBody) => {
  return Section2A21Schema.create(Section2A21SchemaBody);
};

/**
 * Query for Section2A21
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection2A21 = async (filter, options) => {
  const Section2A21 = await Section2A21Schema.paginate(filter, options);
  return Section2A21;
};

/**
 * Get Section2A21Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section2A21Schema>}
 */
const getSection2A21ById = async (id) => {
  return Section2A21Schema.findById(id);
};

/**
 * Update Section2A21Schema by id
 * @param {ObjectId} Section2A21Id
 * @param {Object} updateBody
 * @returns {Promise<Section2A21Schema>}
 */
const updateSection2A21ById = async (Section2A21Id, updateBody) => {
  const typeSection2A21 = await getSection2A21ById(Section2A21Id);
  if (!typeSection2A21) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section2A21 not found');
  }
  Object.assign(typeSection2A21, updateBody);
  await typeSection2A21.save();
  return typeSection2A21;
};

/**
 * Delete Section2A21Schema by id
 * @param {ObjectId} Section2A21Id
 * @returns {Promise<Section2A21Schema>}
 */
const deleteSection2A21ById = async (Section2A21Id) => {
  const Section2A21 = await getSection2A21ById(Section2A21Id);
  if (!Section2A21) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section2A21 not found');
  }
  await Section2A21.remove();
  return Section2A21;
};

// const countSchoolsData = async () => {
//   try {
//     const schoolsWithBoysToilet = await Section2A21Schema.find({
//       schooltoilet: 'Yes',
//       nooftoiletseatsboystotalCWSN: { $exists: true, $ne: '' },
//     }).distinct('_id');

//     const schoolsWithGirlsToilet = await Section2A21Schema.find({
//       schooltoilet: 'Yes',
//       nooftoiletseatsgirlstotalCWSN: { $exists: true, $ne: '' },
//     }).distinct('_id');

//     const schoolsWithBoysToiletCount = schoolsWithBoysToilet.length;
//     const schoolsWithGirlsToiletCount = schoolsWithGirlsToilet.length;

//     const schoolsWithoutBoysToilet = await Section2A21Schema.find({
//       _id: { $nin: schoolsWithBoysToilet },
//     });

//     const schoolsWithoutGirlsToilet = await Section2A21Schema.find({
//       _id: { $nin: schoolsWithGirlsToilet },
//     });

//     const schoolsDataAggregate = await Section2A21Schema.aggregate([
//       {
//         $facet: {
//           totalSchoolsWithDrinkingWater: [
//             {
//               $match: {
//                 drinkingwater: 'Yes',
//               },
//             },
//             {
//               $count: 'count',
//             },
//           ],
//           totalSchoolsWithElectricalConnection: [
//             {
//               $match: {
//                 electricityavai: 'Yes',
//               },
//             },
//             {
//               $count: 'count',
//             },
//           ],
//           totalSchoolsWithLibrary: [
//             {
//               $match: {
//                 separateroomforlibrary: 'Yes',
//               },
//             },
//             {
//               $count: 'count',
//             },
//           ],
//           totalSchools: [
//             {
//               $count: 'count',
//             },
//           ],
//         },
//       },
//       {
//         $project: {
//           totalSchoolsWithDrinkingWater: {
//             $arrayElemAt: ['$totalSchoolsWithDrinkingWater.count', 0],
//           },
//           totalSchoolsWithElectricalConnection: {
//             $arrayElemAt: ['$totalSchoolsWithElectricalConnection.count', 0],
//           },
//           totalSchoolsWithLibrary: {
//             $arrayElemAt: ['$totalSchoolsWithLibrary.count', 0],
//           },
//           totalSchools: {
//             $arrayElemAt: ['$totalSchools.count', 0],
//           },
//         },
//       },
//     ]);

//     const schoolsData = {
//       schoolsWithBoysToiletCount,
//       schoolsWithGirlsToiletCount,
//       schoolsDataAggregate: {},
//     };

//     if (schoolsDataAggregate.length > 0) {
//       schoolsData.schoolsDataAggregate.totalSchoolsWithDrinkingWater = schoolsDataAggregate[0].totalSchoolsWithDrinkingWater || 0;
//       schoolsData.schoolsDataAggregate.totalSchoolsWithElectricalConnection = schoolsDataAggregate[0].totalSchoolsWithElectricalConnection || 0;
//       schoolsData.schoolsDataAggregate.totalSchoolsWithLibrary = schoolsDataAggregate[0].totalSchoolsWithLibrary || 0;
//       schoolsData.schoolsDataAggregate.totalSchools = schoolsDataAggregate[0].totalSchools || 0;
//     }
//     const schoolsWithoutDrinkingWater = await Section2A21Schema.find({
//       drinkingwater: 'No',
//     });

//     const schoolsWithoutElectricalConnection = await Section2A21Schema.find({
//       electricityavai: 'No',
//     });

//     const schoolsWithoutLibrary = await Section2A21Schema.find({
//       separateroomforlibrary: 'No',
//     });

//     schoolsData.schoolsWithoutDrinkingWater = schoolsWithoutDrinkingWater;
//     schoolsData.schoolsWithoutElectricalConnection = schoolsWithoutElectricalConnection;
//     schoolsData.schoolsWithoutLibrary = schoolsWithoutLibrary;
//     schoolsData.schoolsWithoutBoysToilet = schoolsWithoutBoysToilet;
//     schoolsData.schoolsWithoutGirlsToilet = schoolsWithoutGirlsToilet;

//     return schoolsData;
//   } catch (error) {
//     throw error;
//   }
// };

const countSchoolsData = async () => {
  const getSchoolsWithToilets = async () => {
    const [schoolsWithBoysToilet, schoolsWithGirlsToilet] = await Promise.all([
      Section2A21Schema.find({
        schooltoilet: 'Yes',
        nooftoiletseatsboystotalCWSN: { $exists: true, $ne: '' },
      }).distinct('_id'),
      Section2A21Schema.find({
        schooltoilet: 'Yes',
        nooftoiletseatsgirlstotalCWSN: { $exists: true, $ne: '' },
      }).distinct('_id'),
    ]);

    return [schoolsWithBoysToilet.length, schoolsWithGirlsToilet.length];
  };

  const getSchoolsDataAggregate = async () => {
    const schoolsDataAggregate = await Section2A21Schema.aggregate([
      {
        $facet: {
          totalSchoolsWithDrinkingWater: [
            {
              $match: {
                drinkingwater: 'Yes',
              },
            },
            {
              $count: 'count',
            },
          ],
          totalSchoolsWithElectricalConnection: [
            {
              $match: {
                electricityavai: 'Yes',
              },
            },
            {
              $count: 'count',
            },
          ],
          totalSchoolsWithLibrary: [
            {
              $match: {
                separateroomforlibrary: 'Yes',
              },
            },
            {
              $count: 'count',
            },
          ],
          totalSchools: [
            {
              $count: 'count',
            },
          ],
        },
      },
      {
        $project: {
          totalSchoolsWithDrinkingWater: {
            $arrayElemAt: ['$totalSchoolsWithDrinkingWater.count', 0],
          },
          totalSchoolsWithElectricalConnection: {
            $arrayElemAt: ['$totalSchoolsWithElectricalConnection.count', 0],
          },
          totalSchoolsWithLibrary: {
            $arrayElemAt: ['$totalSchoolsWithLibrary.count', 0],
          },
          totalSchools: {
            $arrayElemAt: ['$totalSchools.count', 0],
          },
        },
      },
    ]);

    return schoolsDataAggregate.length > 0
      ? schoolsDataAggregate[0]
      : {
          totalSchoolsWithDrinkingWater: 0,
          totalSchoolsWithElectricalConnection: 0,
          totalSchoolsWithLibrary: 0,
          totalSchools: 0,
        };
  };

  const [schoolsWithBoysToiletCount, schoolsWithGirlsToiletCount] = await getSchoolsWithToilets();
  const schoolsDataAggregate = await getSchoolsDataAggregate();

  return {
    schoolsWithBoysToiletCount,
    schoolsWithGirlsToiletCount,
    schoolsDataAggregate,
  };
};

// const countSchoolsData = async () => {
//   const schoolsWithBoysToiletPromise = Section2A21Schema.find({
//     schooltoilet: 'Yes',
//     nooftoiletseatsboystotalCWSN: { $exists: true, $ne: '' },
//   }).distinct('_id');

//   const schoolsWithGirlsToiletPromise = Section2A21Schema.find({
//     schooltoilet: 'Yes',
//     nooftoiletseatsgirlstotalCWSN: { $exists: true, $ne: '' },
//   }).distinct('_id');

//   const [
//     schoolsWithBoysToilet,
//     schoolsWithGirlsToilet,
//     schoolsWithoutDrinkingWater,
//     schoolsWithoutElectricalConnection,
//     schoolsWithoutLibrary,
//     schoolsDataAggregate,
//   ] = await Promise.all([
//     schoolsWithBoysToiletPromise.then((schools) => schools.length),
//     schoolsWithGirlsToiletPromise.then((schools) => schools.length),
//     Section2A21Schema.find({ drinkingwater: 'No' }),
//     Section2A21Schema.find({ electricityavai: 'No' }),
//     Section2A21Schema.find({ separateroomforlibrary: 'No' }),
//     getSchoolsDataAggregate(),
//   ]);

//   const schoolsWithoutBoysToilet = await Section2A21Schema.find({
//     _id: { $nin: schoolsWithBoysToiletPromise },
//   });

//   const schoolsWithoutGirlsToilet = await Section2A21Schema.find({
//     _id: { $nin: schoolsWithGirlsToiletPromise },
//   });

//   const schoolsData = {
//     schoolsWithBoysToiletCount: schoolsWithBoysToilet,
//     schoolsWithGirlsToiletCount: schoolsWithGirlsToilet,
//     schoolsDataAggregate,
//     schoolsWithoutDrinkingWater,
//     schoolsWithoutElectricalConnection,
//     schoolsWithoutLibrary,
//     schoolsWithoutBoysToilet,
//     schoolsWithoutGirlsToilet,
//   };

//   return schoolsData;
// };

// const getSchoolsDataAggregate = () => {
//   return Section2A21Schema.aggregate([
//     {
//       $facet: {
//         totalSchoolsWithDrinkingWater: [
//           {
//             $match: {
//               drinkingwater: 'Yes',
//             },
//           },
//           {
//             $count: 'count',
//           },
//         ],
//         totalSchoolsWithElectricalConnection: [
//           {
//             $match: {
//               electricityavai: 'Yes',
//             },
//           },
//           {
//             $count: 'count',
//           },
//         ],
//         totalSchoolsWithLibrary: [
//           {
//             $match: {
//               separateroomforlibrary: 'Yes',
//             },
//           },
//           {
//             $count: 'count',
//           },
//         ],
//         totalSchools: [
//           {
//             $count: 'count',
//           },
//         ],
//       },
//     },
//     {
//       $project: {
//         totalSchoolsWithDrinkingWater: {
//           $arrayElemAt: ['$totalSchoolsWithDrinkingWater.count', 0],
//         },
//         totalSchoolsWithElectricalConnection: {
//           $arrayElemAt: ['$totalSchoolsWithElectricalConnection.count', 0],
//         },
//         totalSchoolsWithLibrary: {
//           $arrayElemAt: ['$totalSchoolsWithLibrary.count', 0],
//         },
//         totalSchools: {
//           $arrayElemAt: ['$totalSchools.count', 0],
//         },
//       },
//     },
//   ]);
// };

module.exports = {
  createSection2A21,
  getAllSection2A21,
  getSection2A21ById,
  updateSection2A21ById,
  deleteSection2A21ById,
  countSchoolsData,
};
