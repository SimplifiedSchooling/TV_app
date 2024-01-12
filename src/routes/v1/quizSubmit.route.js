const express = require('express');
const validate = require('../../middlewares/validate');
const { quizSubmitController } = require('../../controllers');
const { quizSubmitValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(quizSubmitValidation.quizSubmit), quizSubmitController.submitQuiz)
  .get(validate(quizSubmitValidation.getQuizSubmit), quizSubmitController.getAllQuizSubmit);

router
  .route('/student/:studentId/')
  .get(validate(quizSubmitValidation.getQuizResultByuser), quizSubmitController.getQuizSubmitById);
//   .patch(validate(boardValidation.updateBoard), boardController.updateBoard)
//   .delete(validate(boardValidation.deleteBoard), boardController.deleteBoard);
router.route('/report').get(validate(quizSubmitValidation.getQuizReport), quizSubmitController.getQuizByQuery);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: QuizSubmission
 *   description: Quiz submission management
 */

/**
 * @swagger
 * /quiz-submissions:
 *   post:
 *     summary: Submit a quiz
 *     tags: [QuizSubmission]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentId
 *               - scode
 *               - classId
 *               - subjectId
 *               - answers
 *             properties:
 *               studentId:
 *                 type: string
 *                 description: The ID of the student submitting the quiz.
 *               scode:
 *                 type: string
 *                 description: The scode.
 *               classId:
 *                 type: string
 *                 description: The class ID.
 *               subjectId:
 *                 type: string
 *                 description: The class ID.
 *               score:
 *                 type: number
 *               date:
 *                 type: string
 *               answers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     questionId:
 *                       type: string
 *                       description: The ID of the quiz question.
 *                     selectedOptions:
 *                       type: array
 *                       items:
 *                         type: integer
 *                       description: An array of indices (0 to 3) of selected options.
 *             example:
 *               studentId: 614a7e7d7f1d813bbf8e89b7
 *               scode: ABC123
 *               classId: 614a7e7d7f1d813bbf8e89b7
 *               score: 15
 *               date:  2023-10-17
 *               subjectId: 614a7e7d7f1d813bbf8e89b7
 *               answers:
 *                 - questionId: 614a7e7d7f1d813bbf8e89b7
 *                   selectedOptions: [1, 2]
 *
 *     responses:
 *       "201":
 *         description: Quiz submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizSubmission'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'

 *   get:
 *     summary: Get quiz submissions
 *     tags: [QuizSubmission]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizSubmission'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /quiz-submissions/student/{studentId}:
 *   get:
 *     summary: Get quiz submissions by student ID
 *     tags: [QuizSubmission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         description: ID of the student
 *         schema:
 *           type: string
 *         example: 123456123456789012
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/QuizSubmission'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /quiz-submissions/report:
 *   get:
 *     summary: Retrieve quiz submissions by various parameters
 *     tags: [QuizSubmission]
 *     parameters:
 *       - in: query
 *         name: scode
 *         schema:
 *           type: string
 *         description: The scode
 *       - in: query
 *         name: studentId
 *         schema:
 *           type: number
 *         description: The studentId
 *       - in: query
 *         name: subjectId
 *         schema:
 *           type: string
 *         description: The subject ID
 *       - in: query
 *         name: classId
 *         schema:
 *           type: string
 *         description: The class ID
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: The date (e.g., 2023-10-05)
 *     responses:
 *       '200':
 *         description: A list of quiz submissions
 *       '500':
 *         description: Internal Server Error
 */
