const express = require('express');
const validate = require('../../../middlewares/validate');
const ResidentialSchooolController = require('../../../controllers/masterControllers/residential_school.controller');
const residentialschoolValidation = require('../../../validations/masterValidations/residential_school.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(residentialschoolValidation.createresidential), ResidentialSchooolController.createResidential)
  .get(validate(residentialschoolValidation.getAllresidential), ResidentialSchooolController.getAllResidential);

router
  .route('/:ResidentialId')
  .get(validate(residentialschoolValidation.getresidential), ResidentialSchooolController.getResidentialById)
  .patch(validate(residentialschoolValidation.updateresidential), ResidentialSchooolController.updateResidential)
  .delete(validate(residentialschoolValidation.deleteresidential), ResidentialSchooolController.deleteResidential);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: residentialschool
 *   description: residentialschool management
 */

/**
 * @swagger
 * /residentialschool:
 *   post:
 *     summary: Create a residentialschool
 *     tags: [residentialschool]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               naboardme:
 *                 type: string *
 *             example:
 *               name: CBSC
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Board'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Residential
 *     tags: [residentialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Residential
 *         schema:
 *           type: string
 *         description: Residential name *
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
 *                     $ref: '#/components/schemas/Residential'
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
 * /residentialschool/{ResidentialId}:
 *   get:
 *     summary: Get a Residential
 *     tags: [residentialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ResidentialId
 *         required: true
 *         schema:
 *           type: string
 *         description: ResidentialId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/residentialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a residentialschool
 *     tags: [residentialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ResidentialId
 *         required: true
 *         schema:
 *           type: string
 *         description: ResidentialId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Board'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a residentialschool
 *     tags: [residentialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ResidentialId
 *         required: true
 *         schema:
 *           type: string
 *         description: ResidentialId
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
