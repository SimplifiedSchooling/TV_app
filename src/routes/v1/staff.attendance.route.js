const express = require('express');
const validate = require('../../middlewares/validate');
const staffAttendanceValidation = require('../../validations/staff.attendance.validation');
const staffAttendanceController = require('../../controllers/staff.attendance.controller');

const router = express.Router();
// router
//   .route('/classwise-student-attendancelist')
//   .get(
//     validate(lectureAttendanceValidation.todaysAttendanceForSchool),
//     lectureAttendanceController.getClasswiseAttendanceStudentList
//   );
// router
//   .route('/get-todays-attendancecount-school')
//   .get(
//     validate(lectureAttendanceValidation.todaysAttendanceForSchool),
//     lectureAttendanceController.todaysAttendanceForSchool
//   );
// router.route('/get-weekstatus').get(lectureAttendanceController.getWeekStatus);
// router
//   .route('/getattendancecounts-classid-sectionid-scode-date')
//   .get(validate(lectureAttendanceValidation.attendanceData), lectureAttendanceController.getAttendanceByclassSectionDate);
router
  .route('/')
  .post(validate(staffAttendanceValidation.staffAttendanceSchema), staffAttendanceController.newStaffAttendance)
  .get(validate(staffAttendanceValidation.getAllStaffAttendance), staffAttendanceController.getAllStaffAttendanceData);

router
  .route('/:StaffAttendanceId')
  .get(validate(staffAttendanceValidation.getStaffAttendance), staffAttendanceController.getSingleStaffAttendance)
  .patch(validate(staffAttendanceValidation.updateStaffAttendance), staffAttendanceController.updateStaffAttendance)
  .delete(validate(staffAttendanceValidation.deleteStaffAttendance), staffAttendanceController.deleteStaffAttendance);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StaffAttendanceNew
 *   description: StaffAttendanceNew
 */

// /**
//  * @swagger
//  * /StaffAttendanceNew/getattendancecounts-classid-sectionid-scode-date:
//  *   get:
//  *     summary:  A list of students attendence matching the specified class, section , scode and date
//  *     tags: [StaffAttendanceNew]
//  *     parameters:
//  *       - in: query
//  *         name: scode
//  *         schema:
//  *           type: string
//  *         description: The ID of the scode to filter by.
//  *       - in: query
//  *         name: classId
//  *         schema:
//  *           type: string
//  *         description: The ID of the class to filter by.
//  *       - in: query
//  *         name: sectionId
//  *         schema:
//  *           type: string
//  *         description: The ID of the section to filter by.
//  *       - in: query
//  *         name: date
//  *         schema:
//  *           type: string
//  *         description: The date to filter by.
//  *     responses:
//  *       '200':
//  *         description: A list of students attendence matching the specified class, section and date
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Student'  # Replace with the actual schema for a student
//  *       '400':
//  *         description: Bad request. Invalid parameters provided.
//  *       '500':
//  *         description: Internal server error. An error occurred while processing the request.
//  */

// /**
//  * @swagger
//  * /lectureattendance/get-todays-attendancecount-school:
//  *   get:
//  *     summary:  A list of students todays attendence list for school matching the specified scode and date
//  *     tags: [LectureAttendance]
//  *     parameters:
//  *       - in: query
//  *         name: scode
//  *         schema:
//  *           type: string
//  *         description: The scode to filter by.
//  *       - in: query
//  *         name: date
//  *         schema:
//  *           type: string
//  *         description: The date to filter by.
//  *     responses:
//  *       '200':
//  *         description:  A list of students todays attendence list for school matching the specified scode and date
//  *         content:
//  *           application/json:
//  *             example:
//  *               totalStudents: 100
//  *               presentStudents: 50
//  *               absentStudents: 30
//  *       '400':
//  *         description: Attendance summary not found.
//  *       '500':
//  *         description: Internal server error. An error occurred while processing the request.
//  */

// /**
//  * @swagger
//  * /lectureattendance/get-weekstatus:
//  *   get:
//  *     summary:  get week status of attendance
//  *     tags: [LectureAttendance]
//  *     parameters:
//  *       - in: query
//  *         name: scode
//  *         schema:
//  *           type: string
//  *         description: The scode to filter by.
//  *       - in: classId
//  *         name: classId
//  *         schema:
//  *           type: string
//  *         description: The classId to filter by.
//  *       - in: sectionId
//  *         name: sectionId
//  *         schema:
//  *           type: string
//  *         description: The sectionId to filter by.
//  *       - in: query
//  *         name: date
//  *         schema:
//  *           type: string
//  *         description: The date to filter by.
//  *     responses:
//  *       '200':
//  *         description: A list of students attendence matching the specified class, section and date
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Student'  # Replace with the actual schema for a student
//  *       '400':
//  *         description: Bad request. Invalid parameters provided.
//  *       '500':
//  *         description: Internal server error. An error occurred while processing the request.
//  */

/**
 * @swagger
 * /staffattendancenew:
 *   post:
 *     summary: Create a StaffAttendanceNew
 *     tags: [StaffAttendanceNew]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 example: "2023-10-25"
 *               time:
 *                 type: string
 *                 example: "10:30am"
 *               scode:
 *                 type: string
 *                 example: 222e6ae0-61e0-11ee-8482-6f09799e735c
 *               entries:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     attendanceStatus:
 *                       type: string
 *                       enum: ["present", "absent", "late"]
 *                       example: "present"
 *                     remark:
 *                       type: string
 *                       example: "present in class"
 *                     employee_id:
 *                       type: number
 *                       example: 12345
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentAttendance'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all StaffAttendanceNew
 *     tags: [StaffAttendanceNew]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: date
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
 *                     $ref: '#/components/schemas/StudentAttendance'
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
 * /staffattendancenew/{StaffAttendanceId}:
 *   get:
 *     summary: Get a StaffAttendance by Id
 *     tags: [StaffAttendanceNew]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: StaffAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: StaffAttendanceId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentAttendance'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a StaffAttendance by Id
 *     tags: [StaffAttendanceNew]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: StaffAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: StaffAttendanceId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - attendancetype
 *               - remark
 *             example:
 *               attendancetype: present
 *               remark: Attended class
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentAttendance'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type StaffAttendance by ID
 *     tags: [StaffAttendanceNew]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: StaffAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: StaffAttendanceId
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
