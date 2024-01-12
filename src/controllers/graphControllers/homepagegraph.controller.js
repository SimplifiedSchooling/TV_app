const catchAsync = require('../../utils/catchAsync');
const HomePageGraphService = require('../../services/graphService/homepagegraph.service');

const getHomePageGraphData = catchAsync(async (req, res) => {
  const homePageGraphData = await HomePageGraphService.countSchoolsData();
  res.status(200).send({ homePageGraphData });
});

const getSchoolDataManagementWise = catchAsync(async (req, res) => {
  const result = await HomePageGraphService.calculateSchoolDistribution();
  res.status(200).send({ result });
});

const getSchoolTypeData = catchAsync(async (req, res) => {
  const schoolType = await HomePageGraphService.calculateTypeSchoolDistribution();
  res.status(200).send({ schoolType });
});

const calculateSchoolsByCategory = catchAsync(async (req, res) => {
  const schoolCategoryStats = await HomePageGraphService.calculateSchoolsByCategory();
  res.status(200).send(schoolCategoryStats);
});

const calculateStaff = catchAsync(async (req, res) => {
  const result = await HomePageGraphService.calculateStaffCounts();
  res.status(200).send(result);
});

const calculateStudent = catchAsync(async (req, res) => {
  const result = await HomePageGraphService.calculateStudentCounts();
  res.status(200).send(result);
});

const getSchoolStatistics = async (req, res) => {
  const result = await HomePageGraphService.calculateSchoolStatistics();
  res.json(result);
};

const getSchoollevelOfEducation = async (req, res) => {
  const result = await HomePageGraphService.calculateSchoolsByLevelOfEducation();
  res.json(result);
};

const gettotalSchoollevelOfEducation = async (req, res) => {
  const result = await HomePageGraphService.calculateTotalLevelOfEducation();
  res.json(result);
};

module.exports = {
  getHomePageGraphData,
  getSchoolDataManagementWise,
  getSchoolTypeData,
  calculateSchoolsByCategory,
  calculateStaff,
  calculateStudent,
  getSchoolStatistics,
  getSchoollevelOfEducation,
  gettotalSchoollevelOfEducation,
};
