const express = require('express');
const validate = require('../../middlewares/validate');
const { studentPromoteValidation } = require('../../validations');
const { studentPromoteController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(validate(studentPromoteValidation.createStudentPromote), studentPromoteController.createStudentPromote)
  .get(validate(studentPromoteValidation.getAllStudentPromote), studentPromoteController.getStudentPromotes);
router.route('/studentpromotes-studentessions').post(studentPromoteController.createStudentData);
router
  .route('/:studentPromoteId')
  .get(validate(studentPromoteValidation.getStudentPromote), studentPromoteController.getStudentPromote)
  .patch(validate(studentPromoteValidation.updateStudentPromoteById), studentPromoteController.updateStudentPromote)
  .delete(validate(studentPromoteValidation.deleteStudentPromoteById), studentPromoteController.deleteStudentPromote);
router
  .route('/getstudentpromotereport/:classId/:sessionId')
  .get(validate(studentPromoteValidation.getStudentPromoteReports), studentPromoteController.getStudentPromoteData);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StudentPromote
 *   description:   StudentPromote Management System
 */

/**
 * @swagger
 * /studentpromote:
 *   post:
 *     summary: Create a new StudentPromote
 *     tags: [StudentPromote]
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
 *               - currentResult
 *               - nextSessionStatus
 *             properties:
 *               sessionId:
 *                 type: string
 *               studentId:
 *                 type: number
 *               classId:
 *                 type: string
 *               sectionId:
 *                 type: string
 *               scode:
 *                 type:string
 *               currentResult:
 *                 type:string
 *               nextSessionStatus:
 *                 type:string
 *             example:
 *               sessionId: 650d6ee360838756a214b446
 *               studentId: 55409766
 *               classId: 650d6e6660838756a214b43c
 *               sectionId: 650d6dfa60838756a214b436
 *               scode: 5896c340-6828-11ee-a348-e9de56c6f44e
 *               currentResult: Pass or Fail
 *               nextSessionStatus: Continue or Leave
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentPromoteInput'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all StudentPromote
 *     tags: [StudentPromote]
 *     parameters:
 *       - in: query
 *         name: StudentPromote
 *         schema:
 *           type: string
 *         description: StudentPromote name
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
 *         description: Maximum number of StudentPromote
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
 *                     $ref: '#/components/schemas/StudentPromoteInput'
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
 * /studentpromote/{studentPromoteId}:
 *   patch:
 *     summary: Update a single StudentPromote by ID
 *     tags: [StudentPromote]
 *     parameters:
 *       - in: path
 *         name: studentPromoteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the StudentPromote
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentPromoteUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: StudentPromote not found
 *   delete:
 *     summary: Delete a single StudentPromote by ID
 *     tags: [StudentPromote]
 *     parameters:
 *       - in: path
 *         name: studentPromoteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the StudentPromote
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: studentPromote not found
 *   get:
 *     summary: Get a single StudentPromote by ID
 *     tags: [StudentPromote]
 *     parameters:
 *       - in: path
 *         name: studentPromoteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the StudentPromote
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: StudentPromote not found
 *
 */

/**
 * @swagger
 * /studentpromote/studentpromotes-studentessions:
 *   post:
 *     summary: Create multiple student promote and session entries
 *     tags: [StudentPromote]
 *     description: Create multiple student entries for both StudentSession and StudentPromote models
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentClassId:
 *                 type: string
 *               currentSectionId:
 *                 type: string
 *               nextSessionId:
 *                 type: string
 *               nextClassId:
 *                 type: string
 *               scode:
 *                 type: string
 *               studentData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     currentResult:
 *                       type: string
 *                     nextSessionStatus:
 *                       type: string
 *                     studentId:
 *                       type: number
 *                     nextSectionId:
 *                       type: string
 *     responses:
 *       201:
 *         description: Student Promote and Student Session entries created successfully
 *       500:
 *         description: Internal Server Error
 */
/**
 * @swagger
 * /studentpromote/getstudentpromotereport/{classId}/{sessionId}:
 *   get:
 *     summary: Get student promote data with student information and sectionName
 *     tags: [StudentPromote]
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         description: The ID of the class.
 *         schema:
 *           type: string
 *       - in: path
 *         name: sessionId
 *         required: true
 *         description: The ID of the session.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     StudentPromoteInput:
 *       type: object
 *       properties:
 *         session_Id:
 *           type: string
 *           description: ID of the session_Id
 *         student_Id:
 *           type: number
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
 *         currentResult:
 *           type: string
 *           description: the current_result
 *         nextSessionStatus:
 *           type: string
 *           description: the next_session_status
 *       example:
 *         session_Id: 614a7e7d7f1d813bbf8e89a9
 *         student_Id: 55409766
 *         class_Id: 614a7e7d7f1d813bbf8e89a9
 *         section_Id: 614a7e7d7f1d813bbf8e89a9
 *         scode: 5896c340-6828-11ee-a348-e9de56c6f44e
 *         currentResult: Pass or Fail
 *         nextSessionStatus: Continue or Leave
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentPromoteUpdateInput:
 *       type: object
 *       properties:
 *         session_Id:
 *           type: string
 *           description: ID of the session_Id
 *         student_Id:
 *           type: number
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
 *         currentResult:
 *           type: string
 *           description: the current_result
 *         nextSessionStatus:
 *           type: string
 *           description: the next_session_status
 *       example:
 *         session_Id: 614a7e7d7f1d813bbf8e89a9
 *         student_Id: 55409766
 *         class_Id: 614a7e7d7f1d813bbf8e89a9
 *         section_Id: 614a7e7d7f1d813bbf8e89a9
 *         scode: 5896c340-6828-11ee-a348-e9de56c6f44e
 *         currentResult: Pass or Fail
 *         nextSessionStatus: Continue or Leave
 *
 */
