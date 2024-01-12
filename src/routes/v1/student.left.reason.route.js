const express = require('express');
const validate = require('../../middlewares/validate');
const studentleftController = require('../../controllers/student.left.reason.controller');
const studentleftValidation = require('../../validations/student.left.reason.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(studentleftValidation.createStudentLeftReason), studentleftController.createStudentLeft)
  .get(validate(studentleftValidation.queryStudentLeftReason), studentleftController.getAllStudentLeft);

router
  .route('/:studentleftId')
  .get(validate(studentleftValidation.getStudentLeftReason), studentleftController.getStudentLeft)
  .patch(validate(studentleftValidation.updateStudentLeftReason), studentleftController.updateStudentLeft)
  .delete(validate(studentleftValidation.deleteStudentLeftReason), studentleftController.deleteStudentLeft);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Studentleft
 *   description: Student left reason
 */

/**
 * @swagger
 * /studentleft:
 *   post:
 *     summary: Create a Student left reason
 *     tags: [Studentleft]
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
 *                 type: string *
 *             example:
 *               name: Absent
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Studentleft'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Student left reason
 *     tags: [Studentleft]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: build
 *         schema:
 *           name: string
 *         description: Student left reason *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Studentleft'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /studentleft/{studentleftId}:
 *   get:
 *     summary: Get a Student Left Reason
 *     tags: [Studentleft]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: studentleftId
 *         required: true
 *         schema:
 *           type: string
 *         description: studentleftId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Studentleft'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Student Left Reason
 *     tags: [Studentleft]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: studentleftId
 *         required: true
 *         schema:
 *           type: string
 *         description: studentleftId
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
 *                $ref: '#/components/schemas/Studentleft'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Student Left Reason
 *     tags: [Studentleft]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: studentleftId
 *         required: true
 *         schema:
 *           type: string
 *         description: studentleftId
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
