// const httpStatus = require('http-status');
const Section2A21Schema = require('../../models/masterModels/section2A(2.1 to 2.21).model');
// const ApiError = require('../../utils/ApiError');

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

//* *********************************************************************/

const Section1A20Schema = require('../../models/masterModels/section1A(1.11 to 1.20).model');
const Staffs = require('../../models/staff/staff.model');
const Students = require('../../models/student.model');

const calculateSchoolDistribution = async () => {
  const pipeline = [
    {
      $group: {
        _id: '$manggroup',
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        manggroup: '$_id',
        count: 1,
      },
    },
  ];

  const result = await Section1A20Schema.aggregate(pipeline);

  // Process the result to categorize the schools
  const schoolDistribution = {
    gov: 0,
    private: 0,
    aided: 0,
    others: 0,
  };

  result.forEach((group) => {
    const manggroup = group.manggroup.toLowerCase();
    if (manggroup.includes('gov')) {
      schoolDistribution.gov += group.count;
    } else if (manggroup.includes('private')) {
      schoolDistribution.private += group.count;
    } else if (manggroup.includes('aided')) {
      schoolDistribution.aided += group.count;
    } else {
      schoolDistribution.others += group.count;
    }
  });

  return schoolDistribution;
};

const calculateTypeSchoolDistribution = async () => {
  const pipeline = [
    {
      $group: {
        _id: '$typeschool',
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        typeschool: '$_id',
        count: 1,
      },
    },
  ];

  const result = await Section1A20Schema.aggregate(pipeline);

  // Process the result to categorize the schools
  const schoolDistribution = {
    girls: 0,
    boys: 0,
    coaided: 0,
  };

  result.forEach((group) => {
    const typeschool = group.typeschool.toLowerCase();
    if (typeschool.includes('girls')) {
      schoolDistribution.girls += group.count;
    } else if (typeschool.includes('boys')) {
      schoolDistribution.boys += group.count;
    } else if (typeschool.includes('coaided')) {
      schoolDistribution.coaided += group.count;
    }
  });

  return schoolDistribution;
};

const calculateSchoolsByCategory = async () => {
  // Use aggregation to group and count schools by the 'schoolcategory' field
  const schoolCategoryStats = await Section1A20Schema.aggregate([
    {
      $group: {
        _id: {
          schoolcategory: '$schoolcategory',
          typeschool: '$typeschool',
        },
        count: { $sum: 1 },
      },
    },
  ]);

  return schoolCategoryStats;
};

const calculateStaffCounts = async () => {
  const pipeline = [
    {
      $group: {
        _id: null,
        totalstaff: { $sum: 1 },
        totalmale: {
          $sum: {
            $cond: [{ $eq: ['$gender', 'male'] }, 1, 0],
          },
        },
        totalfemale: {
          $sum: {
            $cond: [{ $eq: ['$gender', 'female'] }, 1, 0],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalstaff: 1,
        totalmale: 1,
        totalfemale: 1,
      },
    },
  ];

  const result = await Staffs.aggregate(pipeline);
  return result[0]; // Return the first (and only) result since we group by null.
};

const calculateStudentCounts = async () => {
  const pipeline = [
    {
      $group: {
        _id: null,
        totalstudents: { $sum: 1 },
        boys: {
          $sum: {
            $cond: [{ $eq: ['$gender', 'boys'] }, 1, 0],
          },
        },
        girls: {
          $sum: {
            $cond: [{ $eq: ['$gender', 'girls'] }, 1, 0],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalstudents: 1,
        boys: 1,
        girls: 1,
      },
    },
  ];

  const result = await Students.aggregate(pipeline);
  return result[0]; // Return the first (and only) result since we group by null.
};

const calculateSchoolStatistics = async () => {
  const pipeline = [
    {
      $project: {
        _id: 0,
        schoolType: '$typeschool',
        schoolCategory: {
          $cond: {
            if: { $in: ['$schoolcategory', ['Primary', 'Upper Primary']] },
            then: 'Elementary',
            else: {
              $cond: {
                if: { $in: ['$schoolcategory', ['Secondary', 'Higher Secondary']] },
                then: 'Secondary',
                else: '$schoolcategory',
              },
            },
          },
        },
      },
    },
    {
      $group: {
        _id: {
          schoolType: '$schoolType',
          schoolCategory: '$schoolCategory',
        },
        totalCount: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        schoolType: '$_id.schoolType',
        schoolCategory: '$_id.schoolCategory',
        totalCount: 1,
      },
    },
  ];

  const result = await Section1A20Schema.aggregate(pipeline);

  return result;
};

const calculateSchoolsByLevelOfEducation = async () => {
  const pipeline = [
    {
      $project: {
        _id: 0,
        levelOfEducation: {
          $cond: {
            if: { $in: ['$schoolcategory', ['Primary', 'Upper Primary']] },
            then: 'Elementary',
            else: {
              $cond: {
                if: { $in: ['$schoolcategory', ['Secondary']] },
                then: 'Secondary',
                else: {
                  $cond: {
                    if: { $in: ['$schoolcategory', ['Higher Secondary']] },
                    then: 'Higher Secondary',
                    else: 'Other',
                  },
                },
              },
            },
          },
        },
      },
    },
    {
      $group: {
        _id: '$levelOfEducation',
        totalCount: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        levelOfEducation: '$_id',
        totalCount: 1,
      },
    },
  ];

  const result = await Section1A20Schema.aggregate(pipeline);

  return result;
};

const calculateTotalLevelOfEducation = async () => {
  const pipeline = [
    {
      $group: {
        _id: null,
        elementary: {
          $sum: {
            $cond: {
              if: { $in: ['$schoolcategory', ['Primary', 'Upper Primary']] },
              then: 1,
              else: 0,
            },
          },
        },
        secondary: {
          $sum: {
            $cond: {
              if: { $in: ['$schoolcategory', ['Secondary']] },
              then: 1,
              else: 0,
            },
          },
        },
        higherSecondary: {
          $sum: {
            $cond: {
              if: { $in: ['$schoolcategory', ['Higher Secondary']] },
              then: 1,
              else: 0,
            },
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalschool: { $add: ['$elementary', '$secondary', '$higherSecondary'] },
        elementary: 1,
        secondary: 1,
        higherSecondary: 1,
      },
    },
  ];

  const result = await Section1A20Schema.aggregate(pipeline);

  return result[0];
};

module.exports = {
  countSchoolsData,
  calculateSchoolDistribution,
  calculateTypeSchoolDistribution,
  calculateSchoolsByCategory,
  calculateStaffCounts,
  calculateStudentCounts,
  calculateSchoolStatistics,
  calculateSchoolsByLevelOfEducation,
  calculateTotalLevelOfEducation,
};
