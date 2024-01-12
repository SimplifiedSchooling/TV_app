const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1A20Controller = require('../../../controllers/masterControllers/section1A(1.1 to 1.20).controller');
const Section1A20Validation = require('../../../validations/masterValidations/section1A(1.1 to 1.20).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1A20Validation.createSection1A20), Section1A20Controller.createSection1A20)
  .get(validate(Section1A20Validation.getAllSection1A20), Section1A20Controller.getAllSection1A20);

router
  .route('/:Section1A20Id')
  .get(validate(Section1A20Validation.getSection1A20), Section1A20Controller.getSection1A20ById)
  .patch(validate(Section1A20Validation.updateSection1A20), Section1A20Controller.updateSection1A20)
  .delete(validate(Section1A20Validation.deleteSection1A20), Section1A20Controller.deleteSection1A20);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section1A20
 *   description: section1A(1.1 to 1.20)  form -2
 */

/**
 * @swagger
 * /Section1A20:
 *   post:
 *     summary: Create a Section1A20
 *     tags: [Section1A20]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - hoschool
 *               - hosname
 *               - hosmobileno
 *               - schoolcategory
 *               - htlclass
 *               - htlclasshigher
 *               - schoolcwsn
 *               - noclasses
 *               - arts
 *               - science
 *               - commerce
 *               - Vocational
 *               - Streams
 *               - typeschool
 *               - manggroup
 *               - code101
 *               - admintype
 *               - affilationBoard
 *               - affilationNo
 *               - nameofotherboard
 *               - affilationBoardHigherSecondary
 *               - affilationNoHigherSecondary
 *               - nameofotherboardHigherSecondary
 *               - respodentType
 *               - respodentName
 *               - respodentMobileNo
 *               - yearofestablishment
 *               - PrimaryClass
 *               - upperprimary
 *               - Secondary
 *               - higherSecondary
 *               - scode
 *             example:
 *               hoschool: School Name
 *               hosname: School Owner Name
 *               hosmobileno: "0011223355"
 *               schoolcategory: 64d327a41128844220f0cce4
 *               htlclass: Lowest Class
 *               htlclasshigher: Highest Class
 *               schoolcwsn: Pre-Primary Classes
 *               noclasses: noclasses
 *               arts: arts
 *               science: science
 *               commerce: commerce
 *               Vocational: Vocational
 *               Streams: Streams
 *               typeschool: Type of School
 *               manggroup: Management Group
 *               mangcode: 64d327a41128844220f0cce4
 *               code101: Management Code School
 *               admintype: Admin Type
 *               affilationBoard: Affiliation Board
 *               affilationNo: Affiliation No
 *               nameofotherboard: Name of Other Board
 *               affilationBoardHigherSecondary: Higher Secondary Affiliation Board
 *               affilationNoHigherSecondary: Higher Secondary Affiliation No
 *               nameofotherboardHigherSecondary: Higher Secondary Other Board Name
 *               respodentType: Respondent Type
 *               respodentName: Respondent Name
 *               respodentMobileNo: Respondent Mobile Number
 *               yearofestablishment: Year of Establishment
 *               PrimaryClass: Primary Class
 *               upperprimary: upper Secondary Class
 *               Secondary: Secondary Class
 *               higherSecondary: Higher Secondary Class
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A20'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section1A20
 *     tags: [Section1A20]
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
 *                     $ref: '#/components/schemas/Section1A20'
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
 * /Section1A20/{Section1A20Id}:
 *   get:
 *     summary: Get a Section1A20
 *     tags: [Section1A20]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A20Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A20Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A20'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section1A20
 *     tags: [Section1A20]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A20Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A20Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - hoschool
 *               - hosname
 *               - hosmobileno
 *               - schoolcategory
 *               - htlclass
 *               - htlclasshigher
 *               - schoolcwsn
 *               - noclasses
 *               - arts
 *               - science
 *               - commerce
 *               - Vocational
 *               - Streams
 *               - typeschool
 *               - manggroup
 *               - code101
 *               - admintype
 *               - affilationBoard
 *               - affilationNo
 *               - nameofotherboard
 *               - affilationBoardHigherSecondary
 *               - affilationNoHigherSecondary
 *               - nameofotherboardHigherSecondary
 *               - respodentType
 *               - respodentName
 *               - respodentMobileNo
 *               - yearofestablishment
 *               - PrimaryClass
 *               - upperprimary
 *               - Secondary
 *               - higherSecondary
 *             example:
 *               hoschool: School Name
 *               hosname: School Owner Name
 *               hosmobileno: "0011223355"
 *               schoolcategory: 64d327a41128844220f0cce4
 *               htlclass: Lowest Class
 *               htlclasshigher: Highest Class
 *               schoolcwsn: Pre-Primary Classes
 *               noclasses: noclasses
 *               arts: arts
 *               science: science
 *               commerce: commerce
 *               Vocational: Vocational
 *               Streams: Streams
 *               typeschool: Type of School
 *               manggroup: Management Group
 *               mangcode: 64d327a41128844220f0cce4
 *               code101: Management Code School
 *               admintype: Admin Type
 *               affilationBoard: Affiliation Board
 *               affilationNo: Affiliation No
 *               nameofotherboard: Name of Other Board
 *               affilationBoardHigherSecondary: Higher Secondary Affiliation Board
 *               affilationNoHigherSecondary: Higher Secondary Affiliation No
 *               nameofotherboardHigherSecondary: Higher Secondary Other Board Name
 *               respodentType: Respondent Type
 *               respodentName: Respondent Name
 *               respodentMobileNo: Respondent Mobile Number
 *               yearofestablishment: Year of Establishment
 *               PrimaryClass: Primary Class
 *               upperprimary: upper Secondary Class
 *               Secondary: Secondary Class
 *               higherSecondary: Higher Secondary Class
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A20'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section1A20
 *     tags: [Section1A20]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A20Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A20Id
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
