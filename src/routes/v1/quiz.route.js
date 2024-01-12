const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('node-uuid');
const validate = require('../../middlewares/validate');
const quizeController = require('../../controllers/quiz.controller');
const quizeValidation = require('../../validations/quiz.validation');

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, callback) => {
    const uniqueFileName = `${uuidv4()}${path.extname(file.originalname)}`;
    callback(null, uniqueFileName);
  },
});

const upload = multer({ storage });

router
  .route('/')
  .post(validate(quizeValidation.createQuize), quizeController.createQuize)
  .get(validate(quizeValidation.getQuizes), quizeController.getAllQuize);

router.route('/checkexist').post(validate(quizeValidation.getQuizeByQuizName), quizeController.getQuizeByQuizName);
router.route('/NotSelect').get(validate(quizeValidation.NotSelectQuize), quizeController.getAllNotSelected);

router
  .route('/:quizeId')
  .get(validate(quizeValidation.getQuize), quizeController.getQuizeById)
  .patch(validate(quizeValidation.updateQuize), quizeController.updateQuizeById)
  .delete(validate(quizeValidation.deleteQuize), quizeController.deleteQuizeById);

// router.route('/:quizeId/submit').post(validate(quizeValidation.submitQuize), quizeController.QuizeByIdSubmit);

router.post('/upload_files', upload.single('files'), quizeController.uploadFiles);

router
  .route('/getquiz-by-chapter/:chapterId')
  .get(validate(quizeValidation.getQuizeByChapterId), quizeController.getQuizeByChapterId);

router
  .route('/getquizByDayWise/:classId')
  .get(validate(quizeValidation.getQuizDayWise), quizeController.getQuizByClassIdAndDayWise);

router.route('/get/quiz/filter/section').get(validate(quizeValidation.getQuizFilter), quizeController.getQuizeByFilter);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: Quize management and retrieval
 */

/**
 * @swagger
 * /quizes:
 *   post:
 *     summary: Create a quize
 *     tags: [Quiz]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quizName
 *               - options
 *               - correctOptions
 *               - explain
 *               - hint
 *               - types
 *               - isVerified
 *               - userAnswers
 *               - marks
 *               - boardId
 *               - mediumId
 *               - classId
 *               - bookId
 *               - subjectId
 *               - chapterId
 *             example:
 *               quizName: Which of the following colors are primary colors?
 *               options: ["Red", "Green", "Blue", "Yellow" ]
 *               correctOptions: [0, 2 ]
 *               explain: Explanation for the correct option
 *               hint: Hint for solving the quiz
 *               types: easy
 *               isVerified: false
 *               userAnswers: []
 *               marks: 00
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               bookId: 64d9d7143ac675796cdcd433
 *               subjectId: 64d9d4666205c371563fcadb
 *               chapterId: 64d327811128844220f0cce0
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all quize
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         queName: fake quetion
 *         schema:
 *           type: string
 *         description: Quize name *
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
 * /quizes/{id}:
 *   get:
 *     summary: Get a Quize
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quize
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Quize
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuizeId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - quizName
 *               - options
 *               - correctOptions
 *               - explain
 *               - hint
 *               - types
 *               - isVerified
 *               - userAnswers
 *               - marks
 *               - boardId
 *               - mediumId
 *               - classId
 *               - bookId
 *               - subjectId
 *               - chapterId
 *             example:
 *               quizName: Which of the following colors are primary colors?
 *               options: ["Red", "Green", "Blue", "Yellow" ]
 *               correctOptions: [0, 2]
 *               explain: Explanation for the correct option
 *               hint: Hint for solving the quiz
 *               types: easy
 *               isVerified: false
 *               userAnswers: []
 *               marks: 00
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               bookId: 64d9d7143ac675796cdcd433
 *               subjectId: 64d9d4666205c371563fcadb
 *               chapterId: 64d327811128844220f0cce0
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Quize
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuizeId
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
 * /quizes/checkexist:
 *   post:
 *     summary: Check if a quiz with the given name exists
 *     tags: [Quiz]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quizName:
 *                 type: string
 *                 description: The name of the quiz to check
 *     responses:
 *       "200":
 *         description: A quiz with the given name exists
 *       "404":
 *         description: No quiz with the given name found
 */

// /**
//  *  @swagger
//  *  /quizes/{quizeId}/submit:
//  *   post:
//  *     summary: Submit a quiz answer
//  *     tags: [Quiz]
//  *     parameters:
//  *       - in: path
//  *         name: quizeId
//  *         required: true
//  *         description: ID of the quiz to submit an answer for
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - userAnswers
//  *             properties:
//  *               userAnswers:
//  *                 type: array
//  *                 items:
//  *                   type: number
//  *             example:
//  *               answer: ["0", "2"]
//  *     responses:
//  *       "200":
//  *         description: Quiz answer submitted successfully
//  *       "400":
//  *         $ref: '#/components/responses/BadRequest'
//  *       "401":
//  *         $ref: '#/components/responses/Unauthorized'
//  *       "403":
//  *         $ref: '#/components/responses/Forbidden'
//  */

/**
 * @swagger
 * /quizes/NotSelect:
 *   get:
 *     summary: Get Not selected quize
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         queName: fake quetion
 *         schema:
 *           type: string
 *         description: Quize name *
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

// /**
//  * @swagger
//  * /quizes/upload_files:
//  *   post:
//  *     summary: Upload a quiz.
//  *     tags:
//  *       - Quiz
//  *     requestBody:
//  *       required: true
//  *       content:
//  *          multipart/form-data:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               files:
//  *                 type: array
//  *                 items:
//  *                   type: string
//  *                   format: binary
//  *               quizname:
//  *                 type: string
//  *                 example: "Which of the following colors are primary colors?"
//  *               options:
//  *                 type: array
//  *                 items:
//  *                   type: string
//  *                 example: ["Red", "Green", "Blue", "Yellow"]
//  *               correctOptions:
//  *                 type: array
//  *                 items:
//  *                   type: number
//  *                 example: [2]
//  *               explain:
//  *                 type: string
//  *                 example: "Explanation for the correct option"
//  *               hint:
//  *                 type: string
//  *                 example: "Hint for solving the quiz"
//  *               types:
//  *                 type: string
//  *                 example: "easy"
//  *               isVerified:
//  *                 type: boolean
//  *                 example: false
//  *               userAnswers:
//  *                 type: array
//  *                 items:
//  *                   type: string
//  *                 example: []
//  *               marks:
//  *                 type: integer
//  *                 example: 00
//  *               boardId:
//  *                 type: string
//  *                 example: "64d9ceaef49e9f5dc06502c6"
//  *               mediumId:
//  *                 type: string
//  *                 example: "64d327a41128844220f0cce4"
//  *               classId:
//  *                 type: string
//  *                 example: "64d327811128844220f0cce0"
//  *               bookId:
//  *                 type: string
//  *                 example: "64d9d7143ac675796cdcd433"
//  *               subjectId:
//  *                 type: string
//  *                 example: "64d9d4666205c371563fcadb"
//  *               chapterId:
//  *                 type: string
//  *                 example: "64d327811128844220f0cce0"
// //  *               lessonId:
// //  *                 type: string
// //  *                 example: "64d9d83711b20e7b83affceb"
//  *     responses:
//  *       201:
//  *         description: Quiz uploaded successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 message:
//  *                   type: string
//  *                   example: "Successfully uploaded quiz."
//  *       400:
//  *         description: Bad request. Check your request data.
//  */

/**
 * @swagger
 * /quizes/upload_files:
 *   post:
 *     summary: Upload a quiz.
 *     tags:
 *       - Quiz
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               quizname:
 *                 type: string
 *                 example: "Which of the following colors are primary colors?"
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Red", "Green", "Blue", "Yellow"]
 *               correctOptions:
 *                 type: array
 *                 items:
 *                   type: number
 *                 example: [2]
 *               explain:
 *                 type: string
 *                 example: "Explanation for the correct option"
 *               hint:
 *                 type: string
 *                 example: "Hint for solving the quiz"
 *               types:
 *                 type: string
 *                 example: "easy"
 *               isVerified:
 *                 type: boolean
 *                 example: false
 *               userAnswers:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: []
 *               marks:
 *                 type: integer
 *                 example: 00
 *               boardId:
 *                 type: string
 *                 example: "64d9ceaef49e9f5dc06502c6"
 *               mediumId:
 *                 type: string
 *                 example: "64d327a41128844220f0cce4"
 *               classId:
 *                 type: string
 *                 example: "64d327811128844220f0cce0"
 *               bookId:
 *                 type: string
 *                 example: "64d9d7143ac675796cdcd433"
 *               subjectId:
 *                 type: string
 *                 example: "64d9d4666205c371563fcadb"
 *               chapterId:
 *                 type: string
 *                 example: "64d327811128844220f0cce0"
 *     responses:
 *       201:
 *         description: Quiz uploaded successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Successfully uploaded quiz."
 *       400:
 *         description: Bad request. Check your request data.
 */
/**
 * @swagger
 * /quizes/getquizByDayWise/{classId}:
 *   get:
 *     summary: Get a Quize
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *         description: classId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /quizes/getquiz-by-chapter/{chapterId}:
 *   get:
 *     summary: Get a Quize By chapterId
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *         description: Quize
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /quizes/get/quiz/filter/section:
 *   get:
 *     summary: Get quizzes based on filters
 *     tags: [Quiz]
 *     parameters:
 *       - in: query
 *         name: boardId
 *         schema:
 *           type: string
 *         description: ID of the board
 *       - in: query
 *         name: mediumId
 *         schema:
 *           type: string
 *         description: ID of the medium
 *       - in: query
 *         name: classId
 *         schema:
 *           type: string
 *         description: ID of the class
 *       - in: query
 *         name: bookId
 *         schema:
 *           type: string
 *         description: ID of the book
 *       - in: query
 *         name: subjectId
 *         schema:
 *           type: string
 *         description: ID of the subject
 *       - in: query
 *         name: chapterId
 *         schema:
 *           type: string
 *         description: ID of the chapter
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               quizzes:
 *                 - quizName: Sample Quiz 1
 *                   options:
 *                     - Option 1
 *                     - Option 2
 *                     - Option 3
 *                     - Option 4
 *                   correctOptions:
 *                     - 1
 *                   explain: Explanation for Sample Quiz 1
 *                   hint: Hint for Sample Quiz 1
 *                   types: easy
 *                   isVerified: true
 *                   marks: 10
 *                   boardId: Board1
 *                   mediumId: Medium1
 *                   classId: Class1
 *                   bookId: Book1
 *                   subjectId: Subject1
 *                   chapterId: Chapter1
 *                 - quizName: Sample Quiz 2
 *                   options:
 *                     - Option A
 *                     - Option B
 *                     - Option C
 *                     - Option D
 *                   correctOptions:
 *                     - 2
 *                   explain: Explanation for Sample Quiz 2
 *                   hint: Hint for Sample Quiz 2
 *                   types: medium
 *                   isVerified: false
 *                   marks: 15
 *                   boardId: Board2
 *                   mediumId: Medium2
 *                   classId: Class2
 *                   bookId: Book2
 *                   subjectId: Subject2
 *                   chapterId: Chapter2
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
