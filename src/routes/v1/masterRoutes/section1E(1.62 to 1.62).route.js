const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1E62Controller = require('../../../controllers/masterControllers/section1E(1.62 to 1.62).controller');
const Section1E62Validation = require('../../../validations/masterValidations/section1E(1.62 to 1.62).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1E62Validation.createSection1E62), Section1E62Controller.createSection1E62)
  .get(validate(Section1E62Validation.getAllSection1E62), Section1E62Controller.getAllSection1E62);

router
  .route('/:Section1E62Id')
  .get(validate(Section1E62Validation.getSection1E62), Section1E62Controller.getSection1E62ById)
  .patch(validate(Section1E62Validation.updateSection1E62), Section1E62Controller.updateSection1E62)
  .delete(validate(Section1E62Validation.deleteSection1E62), Section1E62Controller.deleteSection1E62);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section1E62
 *   description: section1E(1.61-1.62) form-10
 */

/**
 * @swagger
 * /Section1E62:
 *   post:
 *     summary: Create a Section1E62
 *     tags: [Section1E62]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - vocationalNSQF
 *               - sector1
 *               - sector1year
 *               - sector2
 *               - sector2year
 *               - sector3
 *               - sector3year
 *               - sector4
 *               - sector4year
 *               - vocCourseunder
 *               - schoolsetoftextbook
 *               - sepratrroomforVT
 *               - noVocecontent
 *               - trainingduration
 *               - servicetrainingDuration
 *               - Noofcalss10studentselfemppreyaer
 *               - Noofcalss12studentselfemppreyaer
 *               - avaiwithpresentcodition1
 *               - avaiwithpresentcodition2
 *               - avaiwithpresentcodition3
 *               - avaiwithpresentcodition4
 *               - sepratrroomavai1
 *               - sepratrroomavai2
 *               - sepratrroomavai3
 *               - sepratrroomavai4
 *               - scode
 *             example:
 *               vocationalNSQF: Level 3
 *               sector1: 6507e6b492dbd7a5da3a0003
 *               sector1year: "2022"
 *               sector2: 6507e6b492dbd7a5da3a0003
 *               sector2year: "2022"
 *               sector3: 6507e6b492dbd7a5da3a0003
 *               sector3year: "2022"
 *               sector4: 6507e6b492dbd7a5da3a0003
 *               sector4year: "2022"
 *               vocCourseunder: Government
 *               schoolsetoftextbook: Yes
 *               sepratrroomforVT: Available
 *               noVocecontent: Digital Marketing
 *               trainingduration: "7"
 *               servicetrainingDuration: "3"
 *               Noofcalss10studentselfemppreyaer: "2"
 *               Noofcalss12studentselfemppreyaer: "50"
 *               avaiwithpresentcodition1: Good
 *               avaiwithpresentcodition2: Excellent
 *               avaiwithpresentcodition3: Fair
 *               avaiwithpresentcodition4: Poor
 *               sepratrroomavai1: Yes
 *               sepratrroomavai2: Yes
 *               sepratrroomavai3: No
 *               sepratrroomavai4: No
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1E62'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section1E62
 *     tags: [Section1E62]
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
 *                     $ref: '#/components/schemas/Section1E62'
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
 * /Section1E62/{Section1E62Id}:
 *   get:
 *     summary: Get a Section1E62
 *     tags: [Section1E62]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1E62Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1E62Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1E62'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section1E62
 *     tags: [Section1E62]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1E62Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1E62Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - vocationalNSQF
 *               - sector1
 *               - sector1year
 *               - sector2
 *               - sector2year
 *               - sector3
 *               - sector3year
 *               - sector4
 *               - sector4year
 *               - vocCourseunder
 *               - schoolsetoftextbook
 *               - sepratrroomforVT
 *               - noVocecontent
 *               - trainingduration
 *               - servicetrainingDuration
 *               - Noofcalss10studentselfemppreyaer
 *               - Noofcalss12studentselfemppreyaer
 *               - avaiwithpresentcodition1
 *               - avaiwithpresentcodition2
 *               - avaiwithpresentcodition3
 *               - avaiwithpresentcodition4
 *               - sepratrroomavai1
 *               - sepratrroomavai2
 *               - sepratrroomavai3
 *               - sepratrroomavai4
 *             example:
 *               vocationalNSQF: Level 3
 *               sector1: 6507e6b492dbd7a5da3a0003
 *               sector1year: "2022"
 *               sector2: 6507e6b492dbd7a5da3a0003
 *               sector2year: "2022"
 *               sector3: 6507e6b492dbd7a5da3a0003
 *               sector3year: "2022"
 *               sector4: 6507e6b492dbd7a5da3a0003
 *               sector4year: "2022"
 *               vocCourseunder: Government
 *               schoolsetoftextbook: Yes
 *               sepratrroomforVT: Available
 *               noVocecontent: Digital Marketing
 *               trainingduration: "7"
 *               servicetrainingDuration: "3"
 *               Noofcalss10studentselfemppreyaer: "2"
 *               Noofcalss12studentselfemppreyaer: "50"
 *               avaiwithpresentcodition1: Good
 *               avaiwithpresentcodition2: Excellent
 *               avaiwithpresentcodition3: Fair
 *               avaiwithpresentcodition4: Poor
 *               sepratrroomavai1: Yes
 *               sepratrroomavai2: Yes
 *               sepratrroomavai3: No
 *               sepratrroomavai4: No
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1E62'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section1E62
 *     tags: [Section1E62]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1E62Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1E62Id
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
