const express = require('express');
const validate = require('../../middlewares/validate');
const classValidation = require('../../validations/class.validation');
const classesController = require('../../controllers/classes.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(classValidation.createClass), classesController.createClasses)
  .get(validate(classValidation.getAllClass), classesController.getClasses);

router
  .route('/:classId')
  .get(validate(classValidation.getClass), classesController.getSingleClass)
  .patch(validate(classValidation.updateClassById), classesController.updateSingleClass)
  .delete(validate(classValidation.deleteClassById), classesController.deleteSingleClass);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: API endpoints for managing classes
 */

/**
 * @swagger
 * /classes:
 *   post:
 *     summary: Create a new class
 *     tags: [Classes]
 *     requestBody:
 *       description: Class object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassInput'
 *     responses:
 *       200:
 *         description: Class created successfully
 *
 *   get:
 *     summary: Get all classes
 *     tags: [Classes]
 *     parameters:
 *       - in: query
 *         name: className
 *         schema:
 *           type: string
 *         description: class name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort by query in the form of field:desc/asc (ex. order:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of classes
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
 *                     $ref: '#/components/schemas/ClassInput'
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
 *
 * /classes/{classId}:
 *   get:
 *     summary: Get a single class by ID
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the class
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: "123"
 *               className: "10 A"
 *               mediumId: "614a7e7d7f1d813bbf8e89b0"
 *               order: 1
 *       404:
 *         description: Class not found
 *
 *
 *   patch:
 *     summary: Update a single class by ID
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the class
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Class not found
 *
 *   delete:
 *     summary: Delete a single class by ID
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the class
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Class not found
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ClassInput:
 *       type: object
 *       properties:
 *         className:
 *           type: string
 *           description: Name of the class
 *         order:
 *           type: number
 *           description: order number
 *       example:
 *         className: Math 101
 *         order: 1
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ClassUpdateInput:
 *       type: object
 *       properties:
 *         className:
 *           type: string
 *           description: Name of the class
 *         order:
 *           type: number
 *           description: order number
 *       example:
 *         className: Math 101
 *         order: 1
 */
