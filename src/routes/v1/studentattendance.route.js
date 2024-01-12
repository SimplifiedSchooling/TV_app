const express = require('express');
const validate = require('../../middlewares/validate');
const StudentAttendanceValidation = require('../../validations/studentattendance.validation');
const StudentAttendanceController = require('../../controllers/studentattendance.controller');

const router = express.Router();
router
  .route('/classwise-student-attendancelist')
  .get(
    validate(StudentAttendanceValidation.todaysAttendanceForSchool),
    StudentAttendanceController.getClasswiseAttendanceStudentList
  );
router
  .route('/get-todays-attendancecount-school')
  .get(
    validate(StudentAttendanceValidation.todaysAttendanceForSchool),
    StudentAttendanceController.todaysAttendanceForSchool
  );
router.route('/get-weekstatus').get(StudentAttendanceController.getWeekStatus);
router
  .route('/getattendancecounts-classid-sectionid-scode-date')
  .get(validate(StudentAttendanceValidation.attendanceData), StudentAttendanceController.getAttendanceByclassSectionDate);
router
  .route('/')
  .post(validate(StudentAttendanceValidation.studentAttendanceSchema), StudentAttendanceController.createStudentAttendance)
  .get(validate(StudentAttendanceValidation.getAllStudentAttendance), StudentAttendanceController.getAllStudentAttendance);

router
  .route('/:StudentAttendanceId')
  .get(validate(StudentAttendanceValidation.getStudentAttendance), StudentAttendanceController.getStudentAttendanceById)
  .patch(validate(StudentAttendanceValidation.updateStudentAttendance), StudentAttendanceController.updateStudentAttendance)
  .delete(
    validate(StudentAttendanceValidation.deleteStudentAttendance),
    StudentAttendanceController.deleteStudentAttendance
  );

router.route('/update-attendance').post(StudentAttendanceController.updateAttendanceStatusAndRemark);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StudentAttendance
 *   description: StudentAttendance
 */
/**
 * @swagger
 * /StudentAttendance/getattendancecounts-classid-sectionid-scode-date:
 *   get:
 *     summary:  A list of students attendence matching the specified class, section , scode and date
 *     tags: [StudentAttendance]
 *     parameters:
 *       - in: query
 *         name: scode
 *         schema:
 *           type: string
 *         description: The ID of the scode to filter by.
 *       - in: query
 *         name: classId
 *         schema:
 *           type: string
 *         description: The ID of the class to filter by.
 *       - in: query
 *         name: sectionId
 *         schema:
 *           type: string
 *         description: The ID of the section to filter by.
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: The date to filter by.
 *     responses:
 *       '200':
 *         description: A list of students attendence matching the specified class, section and date
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'  # Replace with the actual schema for a student
 *       '400':
 *         description: Bad request. Invalid parameters provided.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */

/**
 * @swagger
 * /StudentAttendance/get-todays-attendancecount-school:
 *   get:
 *     summary:  A list of students todays attendence list for school matching the specified scode and date
 *     tags: [StudentAttendance]
 *     parameters:
 *       - in: query
 *         name: scode
 *         schema:
 *           type: string
 *         description: The scode to filter by.
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: The date to filter by.
 *     responses:
 *       '200':
 *         description:  A list of students todays attendence list for school matching the specified scode and date
 *         content:
 *           application/json:
 *             example:
 *               totalStudents: 100
 *               presentStudents: 50
 *               absentStudents: 30
 *       '400':
 *         description: Attendance summary not found.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */

/**
 * @swagger
 * /StudentAttendance/get-weekstatus:
 *   get:
 *     summary:  get week status of attendance
 *     tags: [StudentAttendance]
 *     parameters:
 *       - in: query
 *         name: scode
 *         schema:
 *           type: string
 *         description: The scode to filter by.
 *       - in: classId
 *         name: classId
 *         schema:
 *           type: string
 *         description: The classId to filter by.
 *       - in: sectionId
 *         name: sectionId
 *         schema:
 *           type: string
 *         description: The sectionId to filter by.
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: The date to filter by.
 *     responses:
 *       '200':
 *         description: A list of students attendence matching the specified class, section and date
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'  # Replace with the actual schema for a student
 *       '400':
 *         description: Bad request. Invalid parameters provided.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */

/**
 * @swagger
 * /StudentAttendance:
 *   post:
 *     summary: Create a StudentAttendance
 *     tags: [StudentAttendance]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               classId:
 *                 type: string
 *                 example: 6516761d9cee04ae5df9fb6f
 *               sectionId:
 *                 type: string
 *                 example: 650d6dfa60838756a214b436
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
 *                     studentId:
 *                       type: number
 *                       example: 74351449
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
 *     summary: Get all StudentAttendance
 *     tags: [StudentAttendance]
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
 * /StudentAttendance/{StudentAttendanceId}:
 *   get:
 *     summary: Get a StudentAttendance
 *     tags: [StudentAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: StudentAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: StudentAttendanceId
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
 *     summary: Update a StudentAttendance
 *     tags: [StudentAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: StudentAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: StudentAttendanceId
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
 *     summary: Delete a type StudentAttendance
 *     tags: [StudentAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: StudentAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: StudentAttendanceId
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

/**
 * @swagger
 * /StudentAttendance/update-attendance:
 *   post:
 *     summary: Update Student Attendance Entries
 *     tags: [StudentAttendance]
 *     requestBody:
 *       description: JSON object containing attendance entries update information.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               scode:
 *                 type: string
 *                 description: The ID of the scode.
 *               classId:
 *                 type: string
 *                 description: The ID of the class.
 *               sectionId:
 *                 type: string
 *                 description: The ID of the section.
 *               date:
 *                 type: string
 *                 description: The date of the attendance.
 *               entryUpdates:
 *                 type: array
 *                 description: An array of attendance updates.
 *                 items:
 *                   type: object
 *                   properties:
 *                     studentId:
 *                       type: number
 *                       description: The ID of the student.
 *                     attendanceStatus:
 *                       type: string
 *                       enum: ['present', 'absent', 'late']
 *                       description: The attendance status.
 *                     remark:
 *                       type: string
 *                       description: The remark for the attendance.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the update was successful.
 *                 message:
 *                   type: string
 *                   description: A message indicating the result of the update.
 *       '400':
 *         description: Bad request. Invalid parameters provided.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */
