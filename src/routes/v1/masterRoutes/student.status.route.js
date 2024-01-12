const express = require('express');
const validate = require('../../../middlewares/validate');
const studentStatusValidation = require('../../../validations/masterValidations/student.status.validation');
const studentStatusController = require('../../../controllers/masterControllers/student.status.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(studentStatusValidation.createStudentStatus), studentStatusController.createStudentStatus)
  .get(validate(studentStatusValidation.getAllStudentStatus), studentStatusController.getAllStudentStatus);

router
  .route('/:studentStatusId')
  .get(validate(studentStatusValidation.getStudentStatusById), studentStatusController.getStudentStatusById)
  .patch(validate(studentStatusValidation.updateStudentStatusById), studentStatusController.updateStudentStatusById)
  .delete(validate(studentStatusValidation.deleteStudentStatusById), studentStatusController.deleteistudentStatusById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: StudentStatus
 *   description:   studentStatus Management System
 */

/**
 * @swagger
 * /studentStatus:
 *   post:
 *     summary: Create a new studentStatus
 *     tags: [StudentStatus]
 *     requestBody:
 *       description: studentStatus object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/studentStatusInput'
 *     responses:
 *       200:
 *         description: studentStatus created successfully
 *   get:
 *     summary: Get list of studentStatus
 *     tags: [StudentStatus]
 *     responses:
 *       200:
 *         description: List of studentStatus retrieved successfully
 *
 * /studentStatus/{studentStatusId}:
 *   patch:
 *     summary: Update a single studentStatus by ID
 *     tags: [StudentStatus]
 *     parameters:
 *       - in: path
 *         name: studentStatusId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studentStatus
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/studentStatusUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: studentStatus not found
 *   delete:
 *     summary: Delete a single studentStatus by ID
 *     tags: [StudentStatus]
 *     parameters:
 *       - in: path
 *         name: studentStatusId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studentStatus
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: studentStatus not found
 *   get:
 *     summary: Get a single studentStatus by ID
 *     tags: [StudentStatus]
 *     parameters:
 *       - in: path
 *         name: studentStatusId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studentStatus
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: studentStatus not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     studentStatusInput:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *       example:
 *         status: 1- Studied at Current/Same School, 2-Studied at Other School,
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    studentStatusUpdateInput:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *       example:
 *         status: 1- Studied at Current/Same School, 2-Studied at Other School,
 */
