const express = require('express');
const validate = require('../../middlewares/validate');
const lessionController = require('../../controllers/lession.controller');
const lessionValidation = require('../../validations/lession.validation');
const { upload } = require('../../utils/cdn');

const router = express.Router();

router
  .route('/')
  .post(upload.array('files', 2), validate(lessionValidation.createLession), lessionController.createLession)
  .get(validate(lessionValidation.getLessions), lessionController.queryLessions);

router
  .route('/:lessionId')
  .get(validate(lessionValidation.getLession), lessionController.getLession)
  .patch(upload.array('files', 2), validate(lessionValidation.updateLession), lessionController.updateLession)
  .delete(validate(lessionValidation.deleteLession), lessionController.deleteLession);

router
  .route('/getallLession/:chapterId')
  .get(validate(lessionValidation.getLessionbychapterId), lessionController.getLessionbychapId);

router
  .route('/filter/:boardId/:mediumId/:classId/:subjectId/:bookId/:chapterId')
  .get(validate(lessionValidation.getLessionByFilter), lessionController.getLessionByFilter);

module.exports = router;

/**
 * @swagger
 * /lession:
 *   post:
 *     summary: Create a lesson
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               boardId:
 *                 type: string
 *               mediumId:
 *                 type: string
 *               classId:
 *                 type: string
 *               subjectId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               chapterId:
 *                 type: string
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               order:
 *                 type: number
 *             example:
 *               name: English
 *               type: "https://www.youtube.com/watch?v=D52_BL9sVMU"
 *               order: 2
 *               thumbnail: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
 *               poster: "https://ionicframework.com/docs/img/demos"
 *               boardId: 64ca45e050227f21d906d83c
 *               mediumId: 64d0bc1d18f7609763d21063
 *               classId: 64b122401b4cf04c356b8fc2
 *               subjectId: 64b122d49ddf324d2a8d12d3
 *               bookId: 64b8f019ba89c333de42f169
 *               chapterId: 64b8f094050c643582b80481
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Lession'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all lession
 *     description: all lession.
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: lession name *
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
 *         description: Maximum number of lession
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
 *                     $ref: '#/components/schemas/Lession'
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
 * /lession/{id}:
 *   get:
 *     summary: Get a lession
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: lession id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Lession'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Lession
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: lession id
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               boardId:
 *                 type: string
 *               mediumId:
 *                 type: string
 *               classId:
 *                 type: string
 *               subjectId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               chapterId:
 *                 type: string
 *               name:
 *                 type: string *
 *               type:
 *                 type: string
 *               order:
 *                 type: number
 *               thumbnail:
 *                 type: string
 *                 format: binary
 *               poster:
 *                 type: string
 *                 format: binary
 *             example:
 *               name: English
 *               type: "https://www.youtube.com/watch?v=D52_BL9sVMU"
 *               order: 2
 *               thumbnail: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
 *               poster: "https://ionicframework.com/docs/img/demos"
 *               boardId: 64ca45e050227f21d906d83c
 *               mediumId: 64d0bc1d18f7609763d21063
 *               classId: 64b122401b4cf04c356b8fc2
 *               subjectId: 64b122d49ddf324d2a8d12d3
 *               bookId: 64b8f019ba89c333de42f169
 *               chapterId: 64b8f094050c643582b80481
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Lession'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a lession
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: lession id
 *     responses:
 *       "200":
 *         description: No content
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
 * /lession/getallLession/{chapterId}:
 *   get:
 *     summary: Get a lesson
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Lession'
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
 * /lession/filter/{boardId}/{mediumId}/{classId}/{subjectId}/{bookId}/{chapterId}:
 *   get:
 *     summary: Get a chapter
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boardId
 *         required: true
 *         description: The ID of the board
 *         schema:
 *           type: string
 *       - in: path
 *         name: mediumId
 *         required: true
 *         description: The ID of the medium
 *         schema:
 *           type: string
 *       - in: path
 *         name: classId
 *         required: true
 *         description: The ID of the class
 *       - in: path
 *         name: subjectId
 *         required: true
 *         description: The ID of the subject
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: The ID of the book
 *       - in: path
 *         name: chapterId
 *         required: true
 *         description: The ID of the chapter
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lession'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
