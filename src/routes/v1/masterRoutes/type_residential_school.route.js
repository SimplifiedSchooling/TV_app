const express = require('express');
const validate = require('../../../middlewares/validate');
const TypeResidentialSchoolController = require('../../../controllers/masterControllers/type_residential_school.controller');
const TypeResidentialSchoolValidation = require('../../../validations/masterValidations/type_residential_school.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(TypeResidentialSchoolValidation.createresidential), TypeResidentialSchoolController.createTypeResidential)
  .get(validate(TypeResidentialSchoolValidation.getAllresidential), TypeResidentialSchoolController.getAllTypeResidential);

router
  .route('/:ResidentialId')
  .get(validate(TypeResidentialSchoolValidation.getresidential), TypeResidentialSchoolController.getTypeResidentialById)
  .patch(validate(TypeResidentialSchoolValidation.updateresidential), TypeResidentialSchoolController.updateTypeResidential)
  .delete(
    validate(TypeResidentialSchoolValidation.deleteresidential),
    TypeResidentialSchoolController.deleteTypeResidential
  );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: typeresidentialschool
 *   description: typeresidentialschool management
 */

/**
 * @swagger
 * /typeresidentialschool:
 *   post:
 *     summary: Create a typeresidentialschool
 *     tags: [typeresidentialschool]
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
 *               name:
 *                 type: string
 *             example:
 *               name: New insert school
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/typeresidentialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Type Residential School
 *     tags: [typeresidentialschool]
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
 *                     $ref: '#/components/schemas/typeresidentialschool'
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
 * /typeresidentialschool/{ResidentialId}:
 *   get:
 *     summary: Get a Type Residential school
 *     tags: [typeresidentialschool]
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
 *                $ref: '#/components/schemas/typeresidentialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a type residential school
 *     tags: [typeresidentialschool]
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
 *                $ref: '#/components/schemas/typeresidentialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type residential school
 *     tags: [typeresidentialschool]
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
