const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1D60ontroller = require('../../../controllers/masterControllers/section1D(1.58.1 to 1.60.3).controller');
const Section1D60Validation = require('../../../validations/masterValidations/section1D(1.58.1 to 1.60.3).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1D60Validation.createSection1D60), Section1D60ontroller.createSection1D60)
  .get(validate(Section1D60Validation.getAllSection1D60), Section1D60ontroller.getAllSection1D60);

router
  .route('/:Section1D60Id')
  .get(validate(Section1D60Validation.getSection1D60), Section1D60ontroller.getSection1D60ById)
  .patch(validate(Section1D60Validation.updateSection1D60), Section1D60ontroller.updateSection1D60)
  .delete(validate(Section1D60Validation.deleteSection1D60), Section1D60ontroller.deleteSection1D60);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section1D60
 *   description: section1A(1.58.1 to 1.60.3)  form - 9
 */

/**
 * @swagger
 * /Section1D60:
 *   post:
 *     summary: Create a Section1D60
 *     tags: [Section1D60]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - schoolgrantrecipt
 *               - schoolgrantexpen
 *               - librarygrantrecipt
 *               - librarygrantexpen
 *               - repairgrantreceipt
 *               - repairgrantexpen
 *               - phyedugrantreceipt
 *               - phyedugrantexpen
 *               - mediagrantreceipt
 *               - mediagrantexpen
 *               - traininggrantreceipt
 *               - traininggrantexpen
 *               - preschoolgrantreceipt
 *               - preschoolgrantexpen
 *               - ngo
 *               - ngoAmount
 *               - psu
 *               - psuName
 *               - psuAmount
 *               - Community
 *               - communityName
 *               - communityAmount
 *               - Other
 *               - otherName
 *               - otherAmount
 *               - ictItem
 *               - sportEqu
 *               - libraryBooks
 *               - scode
 *             example:
 *               schoolgrantrecipt: Received
 *               schoolgrantexpen: Spent
 *               librarygrantrecipt: Received
 *               librarygrantexpen: Spent
 *               repairgrantreceipt: Received
 *               repairgrantexpen: Spent
 *               phyedugrantreceipt: Yes
 *               phyedugrantexpen: Received
 *               mediagrantreceipt: Spent
 *               mediagrantexpen: Received
 *               traininggrantreceipt: Spent
 *               traininggrantexpen: Received
 *               preschoolgrantreceipt: Spent
 *               preschoolgrantexpen: Received
 *               ngo: Spent
 *               ngoName: John Doe
 *               ngoAmount: "5000"
 *               psu: "XYZ PSU"
 *               psuName: "Manish"
 *               psuAmount: "10000"
 *               Community: "Bob Johnson"
 *               communityAmount: "3000"
 *               Other: Other Grant
 *               otherName: "Alice Brown"
 *               otherAmount: "2000"
 *               ictItem: Laptop
 *               sportEqu: "Sports Equipment"
 *               libraryBooks: Books and Magazine
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1D60'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section1D60
 *     tags: [Section1D60]
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
 *                     $ref: '#/components/schemas/Section1D60'
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
 * /Section1D60/{Section1D60Id}:
 *   get:
 *     summary: Get a Section1D60
 *     tags: [Section1D60]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1D60Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1D60Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1D60'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section1D60
 *     tags: [Section1D60]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1D60Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1D60Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - schoolgrantrecipt
 *               - schoolgrantexpen
 *               - librarygrantrecipt
 *               - librarygrantexpen
 *               - repairgrantreceipt
 *               - repairgrantexpen
 *               - phyedugrantreceipt
 *               - phyedugrantexpen
 *               - mediagrantreceipt
 *               - mediagrantexpen
 *               - traininggrantreceipt
 *               - traininggrantexpen
 *               - preschoolgrantreceipt
 *               - preschoolgrantexpen
 *               - ngo
 *               - ngoAmount
 *               - psu
 *               - psuName
 *               - psuAmount
 *               - Community
 *               - communityName
 *               - communityAmount
 *               - Other
 *               - otherName
 *               - otherAmount
 *               - ictItem
 *               - sportEqu
 *               - libraryBooks
 *             example:
 *               schoolgrantrecipt: Received
 *               schoolgrantexpen: Spent
 *               librarygrantrecipt: Received
 *               librarygrantexpen: Spent
 *               repairgrantreceipt: Received
 *               repairgrantexpen: Spent
 *               phyedugrantreceipt: Yes
 *               phyedugrantexpen: Received
 *               mediagrantreceipt: Spent
 *               mediagrantexpen: Received
 *               traininggrantreceipt: Spent
 *               traininggrantexpen: Received
 *               preschoolgrantreceipt: Spent
 *               preschoolgrantexpen: Received
 *               ngo: Spent
 *               ngoName: John Doe
 *               ngoAmount: "5000"
 *               psu: "XYZ PSU"
 *               psuName: "Manish"
 *               psuAmount: "10000"
 *               Community: "Bob Johnson"
 *               communityAmount: "3000"
 *               Other: Other Grant
 *               otherName: "Alice Brown"
 *               otherAmount: "2000"
 *               ictItem: Laptop
 *               sportEqu: "Sports Equipment"
 *               libraryBooks: Books and Magazine
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1D60'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section1D60
 *     tags: [Section1D60]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1D60Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1D60Id
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
