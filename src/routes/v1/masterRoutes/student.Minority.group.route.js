const express = require('express');

const validate = require('../../../middlewares/validate');
const studentValidation = require('../../../validations/masterValidations/student.Minority.group.validation');
const studentController = require('../../../controllers/masterControllers/student.Minority.group.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(studentValidation.createStudent), studentController.createStudentMinorityGroup)
  .get(validate(studentValidation.getAllStudents), studentController.getAllStudentMinorityGroups);

router
  .route('/:studentId')
  .get(validate(studentValidation.getStudent), studentController.getStudentMinorityGroup)
  .patch(validate(studentValidation.updateStudent), studentController.updateStudentMinorityGroup)
  .delete(validate(studentValidation.deleteStudent), studentController.deleteStudentMinorityGroup);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StudentMinority
 *   description: Student Minority Group
 */

/**
 * @swagger
 * /studentMinorityGroup:
 *   post:
 *     summary: Create a Student Minority Group
 *     tags: [StudentMinority]
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
 *               name:
 *                 type: string *
 *             example:
 *               name: Muslim
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentMinority'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Student Minority Group
 *     tags: [StudentMinority]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           type: string
 *         description: Student Minority Group *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentMinority'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /studentMinorityGroup/{studentId}:
 *   get:
 *     summary: Get a Student Minority Group
 *     tags: [StudentMinority]
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
 *                $ref: '#/components/schemas/StudentMinority'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Student Minority Group
 *     tags: [StudentMinority]
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
 *                $ref: '#/components/schemas/StudentMinority'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Student Minority Group
 *     tags: [StudentMinority]
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
