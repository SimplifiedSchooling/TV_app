const express = require('express');
const validate = require('../../middlewares/validate');
const lectureAttendanceValidation = require('../../validations/lecture.attendance.validation');
const lectureAttendanceController = require('../../controllers/lecture.attendance.controller');

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
  .post(validate(lectureAttendanceValidation.lectureAttendanceSchema), lectureAttendanceController.newLectureAttendance)
  .get(
    validate(lectureAttendanceValidation.getAllLectureAttendance),
    lectureAttendanceController.getAllLectureAttendanceData
  );

router
  .route('/:LectureAttendanceId')
  .get(validate(lectureAttendanceValidation.getLectureAttendance), lectureAttendanceController.getSingleLectureAttendance)
  .patch(validate(lectureAttendanceValidation.updateLectureAttendance), lectureAttendanceController.updateLectureAttendance)
  .delete(
    validate(lectureAttendanceValidation.deleteLectureAttendance),
    lectureAttendanceController.deleteLectureAttendance
  );
router.post('/create-or-update', lectureAttendanceController.createOrUpdateLectureAttendance);
router
  .route('/studentsbyclassandsection')
  .post(
    validate(lectureAttendanceValidation.getAllStudentByclassAndsection),
    lectureAttendanceController.getStudentsByClassAndSection
  );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: LectureAttendance
 *   description: LectureAttendance
 */

// /**
//  * @swagger
//  * /lectureattendance/studentsbyclassandsection:
//  *   get:
//  *     summary: Get students by scode, class and section or check attendance for matching date
//  *     tags: [LectureAttendance]
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
//  *         description: The attendance date to filter by.
//  *     responses:
//  *       '200':
//  *         description: A list of students matching the specified class and section.
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
 * /lectureattendance/studentsbyclassandsection:
 *   post:
 *     summary: Get students by scode, class and section or check attendance for matching date
 *     tags: [LectureAttendance]
 *     requestBody:
 *       description: Request body for filtering students by scode, class, section, and date.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               scode:
 *                 type: string
 *                 description: The ID of the scode to filter by.
 *               classId:
 *                 type: string
 *                 description: The ID of the class to filter by.
 *               sectionId:
 *                 type: string
 *                 description: The ID of the section to filter by.
 *               date:
 *                 type: string
 *                 description: The attendance date to filter by.
 *     responses:
 *       '200':
 *         description: A list of students matching the specified class and section.
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

// /**
//  * @swagger
//  * /lectureattendance/getattendancecounts-classid-sectionid-scode-date:
//  *   get:
//  *     summary:  A list of students attendence matching the specified class, section , scode and date
//  *     tags: [LectureAttendance]
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
 * /lectureattendance:
 *   post:
 *     summary: Create a LectureAttendance
 *     tags: [LectureAttendance]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lectureId:
 *                 type: string
 *                 example: 6516761d9cee04ae5df9fb6f
 *               classId:
 *                 type: string
 *                 example: 6516761d9cee04ae5df9fb6f
 *               sectionId:
 *                 type: string
 *                 example: 650d6dfa60838756a214b436
 *               teacherName:
 *                 type: string
 *                 example: Anand Mishra
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
 *     summary: Get all LectureAttendance
 *     tags: [LectureAttendance]
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
 * /lectureattendance/{LectureAttendanceId}:
 *   get:
 *     summary: Get a LectureAttendance by Id
 *     tags: [LectureAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: LectureAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: LectureAttendanceId
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
 *     summary: Update a LectureAttendanceId
 *     tags: [LectureAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: LectureAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: LectureAttendanceId
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
 *     summary: Delete a type LectureAttendanceId
 *     tags: [LectureAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: LectureAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: LectureAttendanceId
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
 * /lectureattendance/create-or-update:
 *   post:
 *     summary: Create or update lecture attendance
 *     tags: [LectureAttendance]
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
 *               lectureId:
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
 *               teacherName:
 *                 type: string
 *                 example: Anand Mishra
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
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */
