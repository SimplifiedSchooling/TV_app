const express = require('express');
const validate = require('../../../middlewares/validate');
const attendanceValidation = require('../../../validations/staff/staffAttendance.validation');
const { staffAttendaceController } = require('../../../controllers');

const router = express.Router();
router
  .route('/')
  .post(validate(attendanceValidation.createAttendance), staffAttendaceController.createAttendance)
  .get(validate(attendanceValidation.getAllAttendance), staffAttendaceController.getAttendance);

router
  .route('/:attendanceId')
  .get(validate(attendanceValidation.getAttendance), staffAttendaceController.getSingleAttendance)
  .patch(validate(attendanceValidation.updateAttendanceById), staffAttendaceController.updateSingleAttendance)
  .delete(validate(attendanceValidation.deleteAttendanceById), staffAttendaceController.deleteSingleAttendance);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: StaffAttendance
 *   description:   StaffAttendance Management System
 */

/**
 * @swagger
 * /staffAttendance:
 *   post:
 *     summary: Create a new attendance
 *     tags: [StaffAttendance]
 *     requestBody:
 *       description: Attendance object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AttendanceInput'
 *     responses:
 *       200:
 *         description: Attendance created successfully
 *   get:
 *     summary: Get all attendances
 *     tags: [StaffAttendance]
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: date
 *         description: attendance date
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of attendances
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
 *                     $ref: '#/components/schemas/AttendanceInput'
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
 * /staffAttendance/{attendanceId}:
 *   patch:
 *     summary: Update a single attendance by ID
 *     tags: [StaffAttendance]
 *     parameters:
 *       - in: path
 *         name: attendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the attendance
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AttendanceUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Attendance not found
 *   delete:
 *     summary: Delete a single attendance by ID
 *     tags: [StaffAttendance]
 *     parameters:
 *       - in: path
 *         name: attendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the attendance
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Attendance not found
 *   get:
 *     summary: Get a single attendance by ID
 *     tags: [StaffAttendance]
 *     parameters:
 *       - in: path
 *         name: attendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the attendance
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Attendance not found
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AttendanceInput:
 *       type: object
 *       properties:
 *         staffId:
 *           type: string
 *           description: ID of the staffId
 *         date:
 *           type: string
 *           description: date
 *         attedance_type:
 *           type: string
 *           enum: [ holiday,late,present,absent,halfday ]
 *         remark:
 *           type: string
 *           description: remark
 *       example:
 *         staffId: 614a7e7d7f1d813bbf8e89a9
 *         date: 2023-09-13
 *         attedance_type: holiday
 *         remark: due to ill , bus got late
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AttendanceUpdateInput:
 *       type: object
 *       properties:
 *         staffId:
 *           type: string
 *           description: ID of the staffId
 *         date:
 *           type: string
 *           description: date
 *         attedance_type:
 *           type: string
 *           enum: [ holiday,late,present,absent,halfday ]
 *         remark:
 *           type: string
 *           description: remark
 *       example:
 *         staffId: 614a7e7d7f1d813bbf8e89a9
 *         date: 2023-09-13
 *         attedance_type:  holiday
 *         remark: due to ill , bus got late
 */
