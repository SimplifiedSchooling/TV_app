const express = require('express');
const validate = require('../../../middlewares/validate');
const ClassroomAvailableController = require('../../../controllers/masterControllers/classroom_available.controller');
const classroomAvailableValidation = require('../../../validations/masterValidations/classroom_available.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(classroomAvailableValidation.createclassroom), ClassroomAvailableController.createclassroom)
  .get(validate(classroomAvailableValidation.getAllclassroom), ClassroomAvailableController.getAllclassroom);

router
  .route('/:classroomId')
  .get(validate(classroomAvailableValidation.getclassroom), ClassroomAvailableController.getclassroomById)
  .patch(validate(classroomAvailableValidation.updateclassroom), ClassroomAvailableController.updateclassroom)
  .delete(validate(classroomAvailableValidation.deleteclassroom), ClassroomAvailableController.deleteclassroom);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: classroomavailable
 *   description: classroomavailable management
 */

/**
 * @swagger
 * /classroomavailable:
 *   post:
 *     summary: Create a classroomavailable
 *     tags: [classroomavailable]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - count
 *             properties:
 *               description:
 *                 type: string
 *               count:
 *                 type: string
 *             example:
 *               description: New insert school
 *               count: New insert school
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/classroomavailable'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all classroomavailable
 *     tags: [classroomavailable]
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
 *                     $ref: '#/components/schemas/classroomavailable'
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
 * /classroomavailable/{classroomId}:
 *   get:
 *     summary: Get a classroomavailable
 *     tags: [classroomavailable]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: classroomId
 *         required: true
 *         schema:
 *           type: string
 *         description: classroomId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/classroomavailable'
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
 *         name: classroomId
 *         required: true
 *         schema:
 *           type: string
 *         description: classroomId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               count:
 *                 type: string
 *             example:
 *               description: fake name*
 *               count: 3
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/classroomavailable'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a classroomavailable
 *     tags: [classroomavailable]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: classroomId
 *         required: true
 *         schema:
 *           type: string
 *         description: classroomId
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
