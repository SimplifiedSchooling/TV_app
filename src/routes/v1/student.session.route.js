const express = require('express');
const validate = require('../../middlewares/validate');
const StudentSessionValidation = require('../../validations/student.session.validation');
const studentSessionController = require('../../controllers/student.session.controller');

const router = express.Router();
router
  .route('/studentsbyclassandsection')
  .get(
    validate(StudentSessionValidation.getAllStudentByclassAndsection),
    studentSessionController.getStudentsByClassAndSection
  );

router
  .route('/studentslistbyclassandsection')
  .get(
    validate(StudentSessionValidation.getAllStudentListByclassAndsection),
    studentSessionController.getStudentsListByClassAndSection
  );
router
  .route('/')
  .post(validate(StudentSessionValidation.createStudentSession), studentSessionController.createStudentSession)
  .get(validate(StudentSessionValidation.getAllStudentSession), studentSessionController.getStudentSession);

router
  .route('/:studentSessionId')
  .get(validate(StudentSessionValidation.getStudentSession), studentSessionController.updateSingleStudentSession)
  .patch(validate(StudentSessionValidation.updateStudentSessionById), studentSessionController.updateSingleStudentSession)
  .delete(validate(StudentSessionValidation.deleteStudentSessionById), studentSessionController.deleteSingleStudentSession);

router
  .route('/getstudent/bystudentid/:studentId')
  .get(validate(StudentSessionValidation.getStudentByStudentId), studentSessionController.getStudentByStudentId);

router
  .route('/students/byscodeandclassId/:scode/:classId')
  .get(
    validate(StudentSessionValidation.getAllStudentByclassIdAndScode),
    studentSessionController.getStudentByScodeAndClassId
  );
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StudentSession
 *   description:   studentSession Management System
 */

/**
 * @swagger
 * /studentSession/studentsbyclassandsection:
 *   get:
 *     summary: Get students by scode, class and section or check attendance for matching date
 *     tags: [StudentSession]
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
 *         description: The attendance date to filter by.
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
/**
 * @swagger
 * /studentSession/studentslistbyclassandsection:
 *   get:
 *     summary: Get students list by scode, class and section
 *     tags: [StudentSession]
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
/**
 * @swagger
 * /studentSession:
 *   post:
 *     summary: Create a new studentSession
 *     tags: [StudentSession]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sessionId
 *               - studentId
 *               - classId
 *               - sectionId
 *               - scode
 *             properties:
 *               sessionId:
 *                 type: string
 *               studentId:
 *                 type: string
 *               classId:
 *                 type: string
 *               sectionId:
 *                 type: string
 *               scode:
 *                 type:string
 *             example:
 *               sessionId: 650d6ee360838756a214b446
 *               studentId: 650d6f1660838756a214b449
 *               classId: 650d6e6660838756a214b43c
 *               sectionId: 650d6dfa60838756a214b436
 *               scode: 5896c340-6828-11ee-a348-e9de56c6f44e
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentSessionInput'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all studentSessions
 *     tags: [StudentSession]
 *     parameters:
 *       - in: query
 *         name: studentSessionName
 *         schema:
 *           type: string
 *         description: studentSession name
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
 *         description: Maximum number of studentSessions
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
 *                     $ref: '#/components/schemas/StudentSessionInput'
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
 * /studentSession/{studentSessionId}:
 *   patch:
 *     summary: Update a single studentSession by ID
 *     tags: [StudentSession]
 *     parameters:
 *       - in: path
 *         name: studentSessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studentSession
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentSessionUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: StudentSession not found
 *   delete:
 *     summary: Delete a single studentSession by ID
 *     tags: [StudentSession]
 *     parameters:
 *       - in: path
 *         name: studentSessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studentSession
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: StudentSession not found
 *   get:
 *     summary: Get a single studentSession by ID
 *     tags: [StudentSession]
 *     parameters:
 *       - in: path
 *         name: studentSessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studentSession
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: StudentSession not found
 *
 */

/**
 * @swagger
 * /studentSession/getstudent/bystudentid/{studentId}:
 *   get:
 *     summary: Get a class
 *     tags: [StudentSession]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *               schema:
 *                $ref: '#/components/schemas/StudentSessionUpdateInput'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
/**
 * @swagger
 * /studentSession/students/byscodeandclassId/{scode}/{classId}:
 *   get:
 *     summary: Get a class
 *     tags: [StudentSession]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: scode
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *               schema:
 *                $ref: '#/components/schemas/StudentSessionUpdateInput'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentSessionInput:
 *       type: object
 *       properties:
 *         session_Id:
 *           type: string
 *           description: ID of the session_Id
 *         student_Id:
 *           type: string
 *           description: ID of the student_Id
 *         class_Id:
 *           type: string
 *           description: ID of the class_Id
 *         section_Id:
 *           type: string
 *           description: ID of the section_Id
 *         scode:
 *           type: string
 *           description: ID of the scode
 *       example:
 *         session_Id: 614a7e7d7f1d813bbf8e89a9
 *         student_Id: 614a7e7d7f1d813bbf8e89a9
 *         class_Id: 614a7e7d7f1d813bbf8e89a9
 *         section_Id: 614a7e7d7f1d813bbf8e89a9
 *         scode: 5896c340-6828-11ee-a348-e9de56c6f44e
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentSessionUpdateInput:
 *       type: object
 *       properties:
 *         classId:
 *           type: string
 *           description: ID of the class_Id
 *         sectionId:
 *           type: string
 *           description: ID of the section_Id
 *       example:
 *         classId: 614a7e7d7f1d813bbf8e89a9
 *         sectionId: 614a7e7d7f1d813bbf8e89a9
 */

// /**
//  * @swagger
//  * /studentSession/studentsByscodeandclassId/{scode}/{classId}:
//  *   get:
//  *     summary: Get a single studentSession by ID
//  *     tags: [StudentSession]
//  *     parameters:
//  *       - in: path
//  *         name: scode
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: scode
//  *       - in: path
//  *         name: classId
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: clasId
//  *     responses:
//  *       200:
//  *         description: Successful response
//  *       404:
//  *         description: StudentSession not found
//  *
//  */
