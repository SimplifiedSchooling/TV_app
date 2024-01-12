const express = require('express');
const validate = require('../../../middlewares/validate');
const complaintValidation = require('../../../validations/staff/complaint.validation');
const complaintController = require('../../../controllers/staff/complaint.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(complaintValidation.createComplaint), complaintController.createComplaint)
  .get(validate(complaintValidation.getAllComplaints), complaintController.getAllComplaints);

router
  .route('/:complaintId')
  .get(validate(complaintValidation.getComplaintById), complaintController.getComplaintById)
  .patch(validate(complaintValidation.updateComplaintbyId), complaintController.updateComplaint)
  .delete(validate(complaintValidation.deleteComplaintById), complaintController.deleteComplaint);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Complaint
 *   description: Complaint Management
 */

/**
 * @swagger
 * /complaints:
 *   post:
 *     summary: Create a Complaint
 *     tags: [Complaint]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - subject
 *               - description
 *             properties:
 *               subject:
 *                 type: string *
 *               description:
 *                 type: string *
 *             example:
 *               subject: English
 *               description: English subject
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Complaint'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Complaint
 *     tags: [Complaint]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         subject: name
 *         schema:
 *           subject: string
 *         description: Complaint *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Complaint'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /complaints/{complaintId}:
 *   get:
 *     summary: Get a Complaint
 *     tags: [Complaint]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: complaintId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Complaint'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a complaint
 *     tags: [Complaint]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: complaintId
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
 *               subject:
 *                 type: string
 *               description:
 *                 type: string
 *             example:
 *               subject: fake name*
 *               description: Update the subject
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Complaint'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a complaint
 *     tags: [Complaint]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: complaintId
 *         required: true
 *         schema:
 *           type: string
 *         description: complaintId
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
