const express = require('express');
const validate = require('../../../middlewares/validate');
const BoundaryWallController = require('../../../controllers/masterControllers/boundarywall.controller');
const boundarywallValidation = require('../../../validations/masterValidations/boundarywall.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(boundarywallValidation.createboundarywall), BoundaryWallController.createboundarywall)
  .get(validate(boundarywallValidation.getAllboundarywall), BoundaryWallController.getAllboundarywall);

router
  .route('/:boundarywallId')
  .get(validate(boundarywallValidation.getboundarywall), BoundaryWallController.getboundarywallById)
  .patch(validate(boundarywallValidation.updateboundarywall), BoundaryWallController.updateboundarywall)
  .delete(validate(boundarywallValidation.deleteboundarywall), BoundaryWallController.deleteboundarywall);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: boundarywall
 *   description: boundarywall management
 */

/**
 * @swagger
 * /boundarywall:
 *   post:
 *     summary: Create a boundarywall
 *     tags: [boundarywall]
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
 *                $ref: '#/components/schemas/boundarywall'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Type Residential School
 *     tags: [boundarywall]
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
 *                     $ref: '#/components/schemas/boundarywall'
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
 * /boundarywall/{boundarywallId}:
 *   get:
 *     summary: Get a Type Residential school
 *     tags: [boundarywall]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boundarywallId
 *         required: true
 *         schema:
 *           type: string
 *         description: boundarywallId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/boundarywall'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a type residential school
 *     tags: [boundarywall]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boundarywallId
 *         required: true
 *         schema:
 *           type: string
 *         description: boundarywallId
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
 *                $ref: '#/components/schemas/boundarywall'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type residential school
 *     tags: [boundarywall]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boundarywallId
 *         required: true
 *         schema:
 *           type: string
 *         description: boundarywallId
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
