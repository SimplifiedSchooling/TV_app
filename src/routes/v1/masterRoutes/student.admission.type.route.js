const express = require('express');

const validate = require('../../../middlewares/validate');
const studentAdmissionValidation = require('../../../validations/masterValidations/student.admission.type.validation');
const studentAdmissionController = require('../../../controllers/masterControllers/student.admission.type.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(studentAdmissionValidation.createStudent), studentAdmissionController.createStudentAdmission)
  .get(validate(studentAdmissionValidation.getAllStudents), studentAdmissionController.getAllStudentAdmissions);

router
  .route('/:studentId')
  .get(validate(studentAdmissionValidation.getStudent), studentAdmissionController.getStudentAdmission)
  .patch(validate(studentAdmissionValidation.updateStudent), studentAdmissionController.updateStudentAdmission)
  .delete(validate(studentAdmissionValidation.deleteStudent), studentAdmissionController.deleteStudentAdmission);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StudentAdmission
 *   description: Student Admission Group
 */

/**
 * @swagger
 * /studentAdmissionGroup:
 *   post:
 *     summary: Create a Student Admission Type
 *     tags: [StudentAdmission]
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
 *                $ref: '#/components/schemas/StudentAdmission'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Student Admission Types
 *     tags: [StudentAdmission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           type: string
 *         description: Student Admission *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentAdmission'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /studentAdmissionGroup/{studentId}:
 *   get:
 *     summary: Get a Student Admission type
 *     tags: [StudentAdmission]
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
 *                $ref: '#/components/schemas/StudentAdmission'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Student Admission Type
 *     tags: [StudentAdmission]
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
 *                $ref: '#/components/schemas/StudentAdmission'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Student Admission type
 *     tags: [StudentAdmission]
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
