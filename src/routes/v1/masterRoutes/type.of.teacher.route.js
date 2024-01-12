const express = require('express');

const validate = require('../../../middlewares/validate');
const teacherValidation = require('../../../validations/masterValidations/type.of.teacher.validation');
const teacherController = require('../../../controllers/masterControllers/type.of.teacher.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(teacherValidation.createTeacherType), teacherController.createTypeOfTeacher)
  .get(validate(teacherValidation.getAllTeacherType), teacherController.getAllTypeOfTeacher);

router
  .route('/:teacherId')
  .get(validate(teacherValidation.getTeacherTypeById), teacherController.getTypeOfTeacher)
  .patch(validate(teacherValidation.updateTeacherTypeId), teacherController.updateTypeOfTeacher)
  .delete(validate(teacherValidation.deleteTeacherTypeById), teacherController.deleteTypeOfTeacher);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Teachertype
 *   description: Type of Teacher
 */

/**
 * @swagger
 * /teachertype:
 *   post:
 *     summary: Create a Type of Teacher
 *     tags: [Teachertype]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - teacherType
 *             properties:
 *               teacherType:
 *                 type: string *
 *             example:
 *               teacherType: Head Teacher
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Teachertype'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all type of Teacher
 *     tags: [Teachertype]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: build
 *         schema:
 *           teacherType: string
 *         description: Teacher type *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Teachertype'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /teachertype/{teacherId}:
 *   get:
 *     summary: Get a Type of Teacher
 *     tags: [Teachertype]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Teachertype'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Type of Teacher
 *     tags: [Teachertype]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: teacherId
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
 *               teacherType:
 *                 type: string
 *             example:
 *               teacherType: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Teachertype'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Type of Teacher
 *     tags: [Teachertype]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         required: true
 *         schema:
 *           type: string
 *         description: teacher
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
