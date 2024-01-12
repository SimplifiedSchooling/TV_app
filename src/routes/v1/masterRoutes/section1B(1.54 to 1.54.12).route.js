const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1B54Controller = require('../../../controllers/masterControllers/section1B(1.54 to 1.54.12).controller');
const Section1B54Validation = require('../../../validations/masterValidations/section1B(1.54 to 1.54.12).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1B54Validation.createSection1B54), Section1B54Controller.createSection1B54)
  .get(validate(Section1B54Validation.getAllSection1B54), Section1B54Controller.getAllSection1B54);

router
  .route('/:Section1B54Id')
  .get(validate(Section1B54Validation.getSection1B54), Section1B54Controller.getSection1B54ById)
  .patch(validate(Section1B54Validation.updateSection1B54), Section1B54Controller.updateSection1B54)
  .delete(validate(Section1B54Validation.deleteSection1B54), Section1B54Controller.deleteSection1B54);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section1B54
 *   description: section1A(1.54 to 1.54.12)  form - 7
 */

/**
 * @swagger
 * /Section1B54:
 *   post:
 *     summary: Create a Section1B54
 *     tags: [Section1B54]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - sdmpdev
 *               - structuralaudit
 *               - nonstructuralaudit
 *               - CCTVavi
 *               - fireextinguisheravai
 *               - havenodalteacher
 *               - schoolsaftytraining
 *               - disastermangtaught
 *               - defensetrainingforgirls
 *               - noofgirlsproselfdefensetraining
 *               - displaysaftyguidondisboard
 *               - teachergrantcounselor
 *               - guidandcounseling
 *               - sanitizationofparent
 *               - awargenforstudent
 *               - provisionforfeedbackstudent
 *               - complaintbox
 *               - providecopiesofsaftyguid
 *               - frequecyofsaftyaudit
 *               - scode
 *             example:
 *               sdmpdev: Received
 *               structuralaudit: Completed
 *               nonstructuralaudit: Pending
 *               CCTVavi: Yes
 *               fireextinguisheravai: No
 *               havenodalteacher: Yes
 *               schoolsaftytraining: Scheduled
 *               disastermangtaught: Not Applicable
 *               defensetrainingforgirls: In Progress
 *               noofgirlsproselfdefensetraining: "23"
 *               displaysaftyguidondisboard: Yes
 *               teachergrantcounselor: Approved
 *               guidandcounseling: Ongoing
 *               sanitizationofparent: Completed
 *               awargenforstudent: Not Available
 *               provisionforfeedbackstudent: In Place
 *               complaintbox: Installed
 *               providecopiesofsaftyguid: Yes
 *               frequecyofsaftyaudit: Quarterly
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1B54'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section1B54
 *     tags: [Section1B54]
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
 *                     $ref: '#/components/schemas/Section1B54'
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
 * /Section1B54/{Section1B54Id}:
 *   get:
 *     summary: Get a Section1B54
 *     tags: [Section1B54]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1B54Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1B54Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1B54'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section1B54
 *     tags: [Section1B54]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1B54Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1B54Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - sdmpdev
 *               - structuralaudit
 *               - nonstructuralaudit
 *               - CCTVavi
 *               - fireextinguisheravai
 *               - havenodalteacher
 *               - schoolsaftytraining
 *               - disastermangtaught
 *               - defensetrainingforgirls
 *               - noofgirlsproselfdefensetraining
 *               - displaysaftyguidondisboard
 *               - teachergrantcounselor
 *               - guidandcounseling
 *               - sanitizationofparent
 *               - awargenforstudent
 *               - provisionforfeedbackstudent
 *               - complaintbox
 *               - providecopiesofsaftyguid
 *               - frequecyofsaftyaudit
 *             example:
 *               sdmpdev: Received
 *               structuralaudit: Completed
 *               nonstructuralaudit: Pending
 *               CCTVavi: Yes
 *               fireextinguisheravai: No
 *               havenodalteacher: Yes
 *               schoolsaftytraining: Scheduled
 *               disastermangtaught: Not Applicable
 *               defensetrainingforgirls: In Progress
 *               noofgirlsproselfdefensetraining: "23"
 *               displaysaftyguidondisboard: Yes
 *               teachergrantcounselor: Approved
 *               guidandcounseling: Ongoing
 *               sanitizationofparent: Completed
 *               awargenforstudent: Not Available
 *               provisionforfeedbackstudent: In Place
 *               complaintbox: Installed
 *               providecopiesofsaftyguid: Yes
 *               frequecyofsaftyaudit: Quarterly
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1B54'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section1B54
 *     tags: [Section1B54]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1B54Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1B54Id
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
