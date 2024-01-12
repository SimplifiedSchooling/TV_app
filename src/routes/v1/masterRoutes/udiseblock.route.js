const express = require('express');
const validate = require('../../../middlewares/validate');
const UdiseblockController = require('../../../controllers/masterControllers/udiseblock.controller');
const UdiseblockValidation = require('../../../validations/masterValidations/udiseblock.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(UdiseblockValidation.createudiseblock), UdiseblockController.createudiseblock)
  .get(validate(UdiseblockValidation.getAlludiseblock), UdiseblockController.getAlludiseblock);

router
  .route('/:udiseblockId')
  .get(validate(UdiseblockValidation.getudiseblock), UdiseblockController.getudiseblockById)
  .patch(validate(UdiseblockValidation.updateudiseblock), UdiseblockController.updateudiseblock)
  .delete(validate(UdiseblockValidation.deleteudiseblock), UdiseblockController.deleteudiseblock);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Udiseblock
 *   description: Udiseblock management
 */

/**
 * @swagger
 * /udiseblock:
 *   post:
 *     summary: Create a Udiseblock
 *     tags: [Udiseblock]
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
 *               name: nagar
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Udiseblock'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Udiseblock
 *     tags: [Udiseblock]
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
 *                     $ref: '#/components/schemas/Udiseblock'
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
 * /udiseblock/{udiseblockId}:
 *   get:
 *     summary: Get a Type Residential school
 *     tags: [Udiseblock]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: udiseblockId
 *         required: true
 *         schema:
 *           type: string
 *         description: udiseblockId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Udiseblock'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Udiseblock
 *     tags: [Udiseblock]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: udiseblockId
 *         required: true
 *         schema:
 *           type: string
 *         description: udiseblockId
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
 *               name: fake name
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Udiseblock'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Udiseblock
 *     tags: [Udiseblock]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: udiseblockId
 *         required: true
 *         schema:
 *           type: string
 *         description: udiseblockId
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
