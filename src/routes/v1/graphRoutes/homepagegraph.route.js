const express = require('express');
// const validate = require('../../../middlewares/validate');
const HomePageGraphController = require('../../../controllers/graphControllers/homepagegraph.controller');
// const HomePageGraphValidation = require('../../../validations/graphValidations/homepagegraph.validation');

const router = express.Router();

router.route('/homepagegraphdata').get(HomePageGraphController.getHomePageGraphData);
router.route('/managementwise').get(HomePageGraphController.getSchoolDataManagementWise);
router.route('/schooltype').get(HomePageGraphController.getSchoolTypeData);
router.route('/calculate-schools-by-category').get(HomePageGraphController.calculateSchoolsByCategory);
router.route('/staff').get(HomePageGraphController.calculateStaff);
router.route('/student').get(HomePageGraphController.calculateStudent);
router.route('/school-statistics').get(HomePageGraphController.getSchoolStatistics);
router.route('/school-level').get(HomePageGraphController.getSchoollevelOfEducation);
router.route('/total-level').get(HomePageGraphController.gettotalSchoollevelOfEducation);

module.exports = router;
