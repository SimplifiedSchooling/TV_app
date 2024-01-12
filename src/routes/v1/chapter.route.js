const express = require('express');
const validate = require('../../middlewares/validate');
const chapterValidation = require('../../validations/chapter.validation');
const chaterController = require('../../controllers/chapter.controller');
const { createS3Middleware } = require('../../utils/s3middleware');

const router = express.Router();

router
  .route('/')
  .post(createS3Middleware('lmscontent'), validate(chapterValidation.createChapter), chaterController.createChapter)
  .get(validate(chapterValidation.getAllChapter), chaterController.getChapter);

router
  .route('/getChaptersByBookid/:bookId')
  .get(validate(chapterValidation.getChaptersByBookId), chaterController.getChaptersByBookId);

router
  .route('/:chapterId')
  .get(validate(chapterValidation.getChapter), chaterController.getSingleChapter)
  .patch(createS3Middleware('lmscontent'), validate(chapterValidation.updateChapterById), chaterController.updateSingleClass)
  .delete(validate(chapterValidation.deleteChapterById), chaterController.deleteSingleChapter);

router
  .route('/filter/:boardId/:mediumId/:classId/:subjectId/:bookId')
  .get(validate(chapterValidation.getChaptersByFilter), chaterController.getChapterByFilter);

router.route('/mobile/getbybookId/:bookId').get(chaterController.getByBookIdChapter);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Chapter
 *   description: Chapter management and retrieval
 */
/**
 * @swagger
 * /chapter:
 *   post:
 *     summary: Create a Chapter
 *     description: Create another Chapter.
 *     tags: [Chapter]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               chapterName:
 *                 type: string
 *               file:
 *                 type: file
 *                 format: binary
 *               order:
 *                 type: number
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
 *             example:
 *               chapterName: English
 *               order: 1
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               subjectId: 64d9d4666205c371563fcadb
 *               bookId: 64d9d7143ac675796cdcd433
 *               file: e892f517-c5a4-4b04-b62c-1054ca09e61c32580.jpg
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chapter'
 *       "401":
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Forbidden'
 *
 *
 *   get:
 *     summary: Get all chapter
 *     description: all chapter.
 *     tags: [Chapter]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: chapterName
 *         schema:
 *           type: string
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
 *         description: Maximum number of Chapter
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
 *                     $ref: '#/components/schemas/Chapter'
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
 * /chapter/{chapterId}:
 *   get:
 *     summary: Get a Chapter
 *     tags: [Chapter]
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
 *                $ref: '#/components/schemas/Chapter'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Chapter
 *     tags: [Chapter]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               chapterName:
 *                 type: string
 *               file:
 *                 type: file
 *                 format: binary
 *               order:
 *                 type: number
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
 *             example:
 *               chapterName: English
 *               order: 1
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               subjectId: 64d9d4666205c371563fcadb
 *               bookId: 64d9d7143ac675796cdcd433
 *               file: e892f517-c5a4-4b04-b62c-1054ca09e61c32580.jpg
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Chapter'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Chapter
 *     tags: [Chapter]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *         description: chapterId
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
 * /chapter/getChaptersByBookid/{bookId}:
 *   get:
 *     summary: Get a Chapter by book
 *     tags: [Chapter]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Chapter'
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
 * /chapter/filter/{boardId}/{mediumId}/{classId}/{subjectId}/{bookId}:
 *   get:
 *     summary: Get a Chapter from Filter
 *     tags: [Chapter]
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
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chapter'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
/**
 * @swagger
 * /chapter/mobile/getbybookId/{bookId}:
 *   get:
 *     summary: Get chapter and lesson multimedia by book
 *     tags: [Chapter]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   chapterName:
 *                     type: string
 *                   order:
 *                     type: integer
 *                   thumbnail:
 *                     type: string
 *                   multimedia:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         lessionName:
 *                           type: string
 *                         icon1:
 *                           type: string
 *                         icon2:
 *                           type: string
 *                         path:
 *                           type: string
 *                         multimediaType:
 *                           type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '#/components/responses/Forbidden'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /chapter/demolished:
 *   post:
 *     summary: Create a Demolished
 *     description: Create other Demolished.
 *     tags: [Chapter]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               asset:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *               totalAsset:
 *                 type: number
 *               totalDestroyed:
 *                 type: string
 *               reason:
 *                 type: string
 *               date:
 *                 type: string
 *             example:
 *               asset: Test
 *               file: [binary data]
 *               totalAsset: 12
 *               totalDestroyed: test123
 *               reason: 2
 *               date: 2/01/2023
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Demolished'
 *       "401":
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Forbidden'
 */
