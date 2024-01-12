const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1A50Controller = require('../../../controllers/masterControllers/section1A(1.41 to 1.50).controller');
const Section1A50Validation = require('../../../validations/masterValidations/section1A(1.41 to 1.50).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1A50Validation.createSection1A50), Section1A50Controller.createSection1A50)
  .get(validate(Section1A50Validation.getAllSection1A50), Section1A50Controller.getAllSection1A50);

router
  .route('/:Section1A50Id')
  .get(validate(Section1A50Validation.getSection1A50), Section1A50Controller.getSection1A50ById)
  .patch(validate(Section1A50Validation.updateSection1A50), Section1A50Controller.updateSection1A50)
  .delete(validate(Section1A50Validation.deleteSection1A50), Section1A50Controller.deleteSection1A50);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section1A50
 *   description: section1A(1.41 to 1.50)  form - 5
 */

/**
 * @swagger
 * /Section1A50:
 *   post:
 *     summary: Create a Section1A50
 *     tags: [Section1A50]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - specialtraining
 *               - CurrentAcademicYearNoofboys
 *               - CurrentAcademicYearNoofgirls
 *               - previousAcademicYearNoofboys
 *               - previousAcademicYearNoofgirls
 *               - PreviousYearCompletedNoofboys
 *               - PreviousYearCompletedNoofgirls
 *               - whospecialtraining
 *               - wherespecialtraining
 *               - typespecialtraining
 *               - NoofStudentRemedial
 *               - NoofStudentattendLearingEnh
 *               - NoofAcademicInspection
 *               - NoofVisitbyCRC
 *               - NoofVisitByBRC
 *               - NoofVisitByDistrictOfficer
 *               - NoofVisitByClusterOfficer
 *               - NoofVisitByRegionalOfficer
 *               - NoofVisitByHeadquarterOfficer
 *               - SMCconstitutedAsPerRTE
 *               - SMCconstitutedAsPerSamagraShiksha
 *               - NoSMCMeetingConPreYear
 *               - WeatherSMCPlanSchoolDev
 *               - SMCPlanDevYear
 *               - SBCConstituted
 *               - AcademicCommitteeConstituted
 *               - PTAConstituted
 *               - PTAMeetingLastAcademicYear
 *               - PFMSregistered
 *               - MutiClassSchool
 *               - classtogether1
 *               - muticlassnostudent1
 *               - classtogether2
 *               - muticlassnostudent2
 *               - classtogether3
 *               - muticlassnostudent3
 *               - SchoolPartofComplex
 *               - HubSchoolComplex
 *               - nopreprimaryschoolcomplex
 *               - noprimaryschoolcomplex
 *               - noupperprimaryschoolcomplex
 *               - nosecondaryschoolcomplex
 *               - nohigherseconadryschoolcomplex
 *               - totalschoolcomplex
 *               - scode
 *             example:
 *               specialtraining: Special Training Value
 *               CurrentAcademicYearNoofboys: "10"
 *               CurrentAcademicYearNoofgirls: "20"
 *               previousAcademicYearNoofboys: "23"
 *               previousAcademicYearNoofgirls: "57"
 *               PreviousYearCompletedNoofboys: "32"
 *               PreviousYearCompletedNoofgirls: "42"
 *               whospecialtraining: Who Special Training Value
 *               wherespecialtraining: Where Special Training Value
 *               typespecialtraining: Type Special Training Value
 *               NoofStudentRemedial: "43"
 *               NoofStudentattendLearingEnh: "54"
 *               NoofAcademicInspection: "45"
 *               NoofVisitbyCRC: "2"
 *               NoofVisitByBRC: "1"
 *               NoofVisitByDistrictOfficer: "4"
 *               NoofVisitByClusterOfficer: "1"
 *               NoofVisitByRegionalOfficer: "12"
 *               NoofVisitByHeadquarterOfficer: "16"
 *               SMCconstitutedAsPerRTE: Yes
 *               SMCconstitutedAsPerSamagraShiksha: Yes
 *               NoSMCMeetingConPreYear: Primary CCE No Assessment Value
 *               WeatherSMCPlanSchoolDev: Weather SMC Plan School Development Value
 *               SMCPlanDevYear: "2023"
 *               SBCConstituted: Yes
 *               AcademicCommitteeConstituted: Yes
 *               PTAConstituted: Yes
 *               PTAMeetingLastAcademicYear: "2023"
 *               PFMSregistered: Yes
 *               MutiClassSchool: Yes
 *               classtogether1: Class Together 1 Value
 *               muticlassnostudent1: "30"
 *               classtogether2: Class Together 2 Value
 *               muticlassnostudent2: "35"
 *               classtogether3: Class Together 3 Value
 *               muticlassnostudent3: "40"
 *               SchoolPartofComplex: Yes
 *               HubSchoolComplex: Yes
 *               nopreprimaryschoolcomplex: "2"
 *               noprimaryschoolcomplex: "3"
 *               noupperprimaryschoolcomplex: "1"
 *               nosecondaryschoolcomplex: "3"
 *               nohigherseconadryschoolcomplex: "2"
 *               totalschoolcomplex: "3"
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A50'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section1A50
 *     tags: [Section1A50]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Residential
 *         schema:
 *           type: string
 *         description: Residential name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Section1A50'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /Section1A50/{Section1A50Id}:
 *   get:
 *     summary: Get a Section1A50
 *     tags: [Section1A50]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A50Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A50Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A50'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section1A50
 *     tags: [Section1A50]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A50Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A50Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - specialtraining
 *               - CurrentAcademicYearNoofboys
 *               - CurrentAcademicYearNoofgirls
 *               - previousAcademicYearNoofboys
 *               - previousAcademicYearNoofgirls
 *               - PreviousYearCompletedNoofboys
 *               - PreviousYearCompletedNoofgirls
 *               - whospecialtraining
 *               - wherespecialtraining
 *               - typespecialtraining
 *               - NoofStudentRemedial
 *               - NoofStudentattendLearingEnh
 *               - NoofAcademicInspection
 *               - NoofVisitbyCRC
 *               - NoofVisitByBRC
 *               - NoofVisitByDistrictOfficer
 *               - NoofVisitByClusterOfficer
 *               - NoofVisitByRegionalOfficer
 *               - NoofVisitByHeadquarterOfficer
 *               - SMCconstitutedAsPerRTE
 *               - SMCconstitutedAsPerSamagraShiksha
 *               - NoSMCMeetingConPreYear
 *               - WeatherSMCPlanSchoolDev
 *               - SMCPlanDevYear
 *               - SBCConstituted
 *               - AcademicCommitteeConstituted
 *               - PTAConstituted
 *               - PTAMeetingLastAcademicYear
 *               - PFMSregistered
 *               - MutiClassSchool
 *               - classtogether1
 *               - muticlassnostudent1
 *               - classtogether2
 *               - muticlassnostudent2
 *               - classtogether3
 *               - muticlassnostudent3
 *               - SchoolPartofComplex
 *               - HubSchoolComplex
 *               - nopreprimaryschoolcomplex
 *               - noprimaryschoolcomplex
 *               - noupperprimaryschoolcomplex
 *               - nosecondaryschoolcomplex
 *               - nohigherseconadryschoolcomplex
 *               - totalschoolcomplex
 *             example:
 *               specialtraining: Special Training Value
 *               CurrentAcademicYearNoofboys: "10"
 *               CurrentAcademicYearNoofgirls: "20"
 *               previousAcademicYearNoofboys: "23"
 *               previousAcademicYearNoofgirls: "57"
 *               PreviousYearCompletedNoofboys: "32"
 *               PreviousYearCompletedNoofgirls: "42"
 *               whospecialtraining: Who Special Training Value
 *               wherespecialtraining: Where Special Training Value
 *               typespecialtraining: Type Special Training Value
 *               NoofStudentRemedial: "43"
 *               NoofStudentattendLearingEnh: "54"
 *               NoofAcademicInspection: "45"
 *               NoofVisitbyCRC: "2"
 *               NoofVisitByBRC: "1"
 *               NoofVisitByDistrictOfficer: "4"
 *               NoofVisitByClusterOfficer: "1"
 *               NoofVisitByRegionalOfficer: "12"
 *               NoofVisitByHeadquarterOfficer: "16"
 *               SMCconstitutedAsPerRTE: Yes
 *               SMCconstitutedAsPerSamagraShiksha: Yes
 *               NoSMCMeetingConPreYear: Primary CCE No Assessment Value
 *               WeatherSMCPlanSchoolDev: Weather SMC Plan School Development Value
 *               SMCPlanDevYear: "2023"
 *               SBCConstituted: Yes
 *               AcademicCommitteeConstituted: Yes
 *               PTAConstituted: Yes
 *               PTAMeetingLastAcademicYear: "2023"
 *               PFMSregistered: Yes
 *               MutiClassSchool: Yes
 *               classtogether1: Class Together 1 Value
 *               muticlassnostudent1: "30"
 *               classtogether2: Class Together 2 Value
 *               muticlassnostudent2: "35"
 *               classtogether3: Class Together 3 Value
 *               muticlassnostudent3: "40"
 *               SchoolPartofComplex: Yes
 *               HubSchoolComplex: Yes
 *               nopreprimaryschoolcomplex: "2"
 *               noprimaryschoolcomplex: "3"
 *               noupperprimaryschoolcomplex: "1"
 *               nosecondaryschoolcomplex: "3"
 *               nohigherseconadryschoolcomplex: "2"
 *               totalschoolcomplex: "3"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A50'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section1A50
 *     tags: [Section1A50]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A50Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A50Id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
