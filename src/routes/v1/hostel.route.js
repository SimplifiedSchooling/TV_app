const express = require('express');
const validate = require('../../middlewares/validate');
const hostelController = require('../../controllers/hostel.controller');
const hostelValidation = require('../../validations/hostel.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(hostelValidation.createHostel), hostelController.createHostel)
  .get(validate(hostelValidation.queryHostel), hostelController.queryHostel);

router
  .route('/:hostelId')
  .get(validate(hostelValidation.getHostel), hostelController.getHostel)
  .patch(validate(hostelValidation.updateHostel), hostelController.updateHostel)
  .delete(validate(hostelValidation.deleteHostel), hostelController.deleteHostel);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Hostel
 *   description: Hostel management
 */

/**
 * @swagger
 * /hostel:
 *   post:
 *     summary: Create a Hostel
 *     tags: [Hostel]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - hostelName
 *               - type
 *               - address
 *               - intake
 *             properties:
 *               hostelName:
 *                 type: string *
 *               type:
 *                 type: string
 *               address:
 *                 type: string
 *               intake:
 *                 type: string
 *             example:
 *               name: CBSC
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Hostel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get query Hostel
 *     tags: [Hostel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: hostelName
 *         schema:
 *           type: string
 *         description: Hostel name *
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
 *         description: Maximum number of Hostel
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
 *                     $ref: '#/components/schemas/Hostel'
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
 * /hostel/{hostelId}:
 *   get:
 *     summary: Get a Hostel
 *     tags: [Hostel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: hostelId
 *         required: true
 *         schema:
 *           type: string
 *         description: hostelId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Hostel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Hostel
 *     tags: [Hostel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: hostelId
 *         required: true
 *         schema:
 *           type: string
 *         description: hostelId
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
 *                $ref: '#/components/schemas/Hostel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Hostel
 *     tags: [Hostel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: hostelId
 *         required: true
 *         schema:
 *           type: string
 *         description: hostelId
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
