const express = require('express');
const validate = require('../../../middlewares/validate');
const Section3AController = require('../../../controllers/masterControllers/section3A(3.1 to 3.4).controller');
const Section3AValidation = require('../../../validations/masterValidations/section3A(3.1 to 3.4).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section3AValidation.createSection3A), Section3AController.createSection3A)
  .get(validate(Section3AValidation.getAllSection3A), Section3AController.getAllSection3A);

router
  .route('/:Section3AId')
  .get(validate(Section3AValidation.getSection3A), Section3AController.getSection3AById)
  .patch(validate(Section3AValidation.updateSection3A), Section3AController.updateSection3A)
  .delete(validate(Section3AValidation.deleteSection3A), Section3AController.deleteSection3A);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section3A
 *   description: section3A(3.1 to 3.4)  form - 13
 */

/**
 * @swagger
 * /Section3A:
 *   post:
 *     summary: Create a Section3A
 *     tags: [Section3A]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - nofoaccountant
 *               - nofolibassitant
 *               - nofoheadclerk
 *               - nofoLDC
 *               - nofopeon
 *               - nofonightwatchman
 *               - nofolabassitant
 *               - noforegularteacher
 *               - nofononregularstaff
 *               - totalnoofteachingstaff
 *               - noofgusetteacher
 *               - nooftransgenderstaff
 *               - scode
 *             example:
 *               nofoaccountant: "3"
 *               nofolibassitant: "2"
 *               nofoheadclerk: "2"
 *               nofoLDC: "1"
 *               nofopeon: "3"
 *               nofonightwatchman: "4"
 *               nofolabassitant: "1"
 *               noforegularteacher: "2"
 *               nofononregularstaff: "2"
 *               totalnoofteachingstaff: "2"
 *               noofgusetteacher: "2"
 *               nooftransgenderstaff: "0"
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section3A'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section3A
 *     tags: [Section3A]
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
 *                     $ref: '#/components/schemas/Section3A'
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
 * /Section3A/{Section3AId}:
 *   get:
 *     summary: Get a Section3A
 *     tags: [Section3A]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section3AId
 *         required: true
 *         schema:
 *           type: string
 *         description: Section3AId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section3A'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section3A
 *     tags: [Section3A]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section3AId
 *         required: true
 *         schema:
 *           type: string
 *         description: Section3AId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - nofoaccountant
 *               - nofolibassitant
 *               - nofoheadclerk
 *               - nofoLDC
 *               - nofopeon
 *               - nofonightwatchman
 *               - nofolabassitant
 *               - noforegularteacher
 *               - nofononregularstaff
 *               - totalnoofteachingstaff
 *               - noofgusetteacher
 *               - nooftransgenderstaff
 *             example:
 *               nofoaccountant: "3"
 *               nofolibassitant: "2"
 *               nofoheadclerk: "2"
 *               nofoLDC: "1"
 *               nofopeon: "3"
 *               nofonightwatchman: "4"
 *               nofolabassitant: "1"
 *               noforegularteacher: "2"
 *               nofononregularstaff: "2"
 *               totalnoofteachingstaff: "2"
 *               noofgusetteacher: "2"
 *               nooftransgenderstaff: "0"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section3A'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section3A
 *     tags: [Section3A]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section3AId
 *         required: true
 *         schema:
 *           type: string
 *         description: Section3AId
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
