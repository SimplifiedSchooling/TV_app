const express = require('express');

const validate = require('../../../middlewares/validate');
const studentTypeValidation = require('../../../validations/masterValidations/student.type.validation');
const studentTypeController = require('../../../controllers/masterControllers/student.type.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(studentTypeValidation.createStudent), studentTypeController.createStudentType)
  .get(validate(studentTypeValidation.getAllStudents), studentTypeController.getAllStudentTypes);

router
  .route('/:studentId')
  .get(validate(studentTypeValidation.getStudent), studentTypeController.getStudentType)
  .patch(validate(studentTypeValidation.updateStudent), studentTypeController.updateStudentType)
  .delete(validate(studentTypeValidation.deleteStudent), studentTypeController.deleteStudentType);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StudentType
 *   description: Student Type
 */

/**
 * @swagger
 * /studentType:
 *   post:
 *     summary: Create a Student Type
 *     tags: [StudentType]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *             properties:
 *               type:
 *                 type: string *
 *             example:
 *               type: New
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentType'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Student Type
 *     tags: [StudentType]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           type: string
 *         description: Student type *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentType'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /studentType/{studentId}:
 *   get:
 *     summary: Get a Student type
 *     tags: [StudentType]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentType'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Student type
 *     tags: [StudentType]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *             example:
 *               type: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentType'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Student type
 *     tags: [StudentType]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: studentId
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
