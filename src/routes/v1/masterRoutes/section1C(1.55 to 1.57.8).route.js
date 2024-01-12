const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1C57Controller = require('../../../controllers/masterControllers/section1C(1.55 to 1.57.8).controller');
const Section1C57Validation = require('../../../validations/masterValidations/section1C(1.55 to 1.57.8).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1C57Validation.createSection1C57), Section1C57Controller.createSection1C57)
  .get(validate(Section1C57Validation.getAllSection1C57), Section1C57Controller.getAllSection1C57);

router
  .route('/:Section1C57Id')
  .get(validate(Section1C57Validation.getSection1C57), Section1C57Controller.getSection1C57ById)
  .patch(validate(Section1C57Validation.updateSection1C57), Section1C57Controller.updateSection1C57)
  .delete(validate(Section1C57Validation.deleteSection1C57), Section1C57Controller.deleteSection1C57);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section1C57
 *   description: section1A(1.55 to 1.57.8)  form - 8
 */

/**
 * @swagger
 * /Section1C57:
 *   post:
 *     summary: Create a Section1C57
 *     tags: [Section1C57]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - middayMeal
 *               - NoOfDayMidDayMeal
 *               - NoofteacherAadharindatabase
 *               - schoolevaluation
 *               - schoolcertifiedFIT
 *               - schoolprovHolisticReportCard
 *               - exemplerschool
 *               - dispphotoofteacher
 *               - schooladoptedVidyaPraveshModule
 *               - studentAttendanceEle
 *               - teacherattendanceEle
 *               - teachergrantcounselor
 *               - consYouthClub
 *               - constEcoClub
 *               - teacherIdcard
 *               - SSSAcertiobtain
 *               - scode
 *             example:
 *               middayMeal: Provided
 *               NoOfDayMidDayMeal: "5"
 *               NoofteacherAadharindatabase: "10"
 *               schoolevaluation: Good
 *               schoolcertifiedFIT: Yes
 *               schoolprovHolisticReportCard: Available
 *               exemplerschool: Yes
 *               dispphotoofteacher: On Display
 *               schooladoptedVidyaPraveshModule: Completed
 *               studentAttendanceEle: Recorded
 *               teacherattendanceEle: Recorded
 *               consYouthClub: Active
 *               constEcoClub: Active
 *               teacherIdcard: Issued
 *               SSSAcertiobtain: Not Available
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1C57'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section1C57
 *     tags: [Section1C57]
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
 *                     $ref: '#/components/schemas/Section1C57'
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
 * /Section1C57/{Section1C57Id}:
 *   get:
 *     summary: Get a Section1C57
 *     tags: [Section1C57]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1C57Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1C57Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1C57'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section1C57
 *     tags: [Section1C57]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1C57Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1C57Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - middayMeal
 *               - NoOfDayMidDayMeal
 *               - NoofteacherAadharindatabase
 *               - schoolevaluation
 *               - schoolcertifiedFIT
 *               - schoolprovHolisticReportCard
 *               - exemplerschool
 *               - dispphotoofteacher
 *               - schooladoptedVidyaPraveshModule
 *               - studentAttendanceEle
 *               - teacherattendanceEle
 *               - teachergrantcounselor
 *               - consYouthClub
 *               - constEcoClub
 *               - teacherIdcard
 *               - SSSAcertiobtain
 *             example:
 *               middayMeal: Provided
 *               NoOfDayMidDayMeal: "5"
 *               NoofteacherAadharindatabase: "10"
 *               schoolevaluation: Good
 *               schoolcertifiedFIT: Yes
 *               schoolprovHolisticReportCard: Available
 *               exemplerschool: Yes
 *               dispphotoofteacher: On Display
 *               schooladoptedVidyaPraveshModule: Completed
 *               studentAttendanceEle: Recorded
 *               teacherattendanceEle: Recorded
 *               consYouthClub: Active
 *               constEcoClub: Active
 *               teacherIdcard: Issued
 *               SSSAcertiobtain: Not Available
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1C57'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section1C57
 *     tags: [Section1C57]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1C57Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1C57Id
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
