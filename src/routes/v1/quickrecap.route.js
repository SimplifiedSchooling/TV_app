const express = require('express');
const validate = require('../../middlewares/validate');
const quickRecapController = require('../../controllers/quickrecap.controller');
const { quickRecapValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(quickRecapValidation.createQuickRecap), quickRecapController.createQuickRecap)
  .get(validate(quickRecapValidation.getAllQuickRecap), quickRecapController.getAllQuickRecap);

router
  .route('/:quickRecapId')
  .get(validate(quickRecapValidation.getQuickRecapById), quickRecapController.getByQuickRecapId)
  .patch(validate(quickRecapValidation.updateQuickRecap), quickRecapController.updateQuickRecap)
  .delete(validate(quickRecapValidation.deleteQuickRecap), quickRecapController.deleteQuickRecap);

router
  .route('/filter/:boardId/:mediumId/:classId/:subjectId/:bookId/:chapterId')
  .get(validate(quickRecapValidation.getQuickRecapByFilter), quickRecapController.getQuickRecapByFilter);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: QuickRecap
 *   description: QuickRecap management and retrieval
 */
/**
 * @swagger
 * /quickrecaps:
 *   post:
 *     summary: Create a QuickRecap
 *     tags: [QuickRecap]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - boardId
 *               - mediumId
 *               - classId
 *               - subjectId
 *               - bookId
 *               - chapterId
 *               - chapterName
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
 *               description:
 *                 type: string
 *               chapterName:
 *                 type: string
 *             example:
 *               description: English gfklgj   hbhb
 *               boardId: 64ca45e050227f21d906d83c
 *               mediumId: 64d0bc1d18f7609763d21063
 *               classId: 64b122401b4cf04c356b8fc2
 *               subjectId: 64b122d49ddf324d2a8d12d3
 *               bookId: 64b8f019ba89c333de42f169
 *               chapterId: 64b8f094050c643582b80481
 *               chapterName: fundamentals
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/QuickRecap'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all QuickRecap
 *     description: all QuickRecap.
 *     tags: [QuickRecap]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: chapterName
 *         schema:
 *           type: string
 *         description: QuickRecap description *
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
 *                     $ref: '#/components/schemas/QuickRecap'
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
 * /quickrecaps/{quickRecapId}:
 *   get:
 *     summary: Get a QuickRecap
 *     tags: [QuickRecap]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: quickRecapId
 *         required: true
 *         schema:
 *           type: string
 *         description: quickRecap id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/QuickRecap'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a QuickRecap
 *     tags: [QuickRecap]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: quickRecaId
 *         required: true
 *         schema:
 *           type: string
 *         description: quickRecap id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
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
 *               description:
 *                 type: string
 *               chapterName:
 *                 type: string
 *             example:
 *               description: English gfklgj   hbhb
 *               boardId: 64ca45e050227f21d906d83c
 *               mediumId: 64d0bc1d18f7609763d21063
 *               classId: 64b122401b4cf04c356b8fc2
 *               subjectId: 64b122d49ddf324d2a8d12d3
 *               bookId: 64b8f019ba89c333de42f169
 *               chapterId: 64b8f094050c643582b80481
 *               chapterName: fundamentals
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/QuickRecap'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a QuickRecap
 *     tags: [QuickRecap]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: quickRecapId
 *         required: true
 *         schema:
 *           type: string
 *         description: quickRecap id
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
 * /quickrecaps/filter/{boardId}/{mediumId}/{classId}/{subjectId}/{bookId}/{chapterId}:
 *   get:
 *     summary: Get a QuickRecap
 *     tags: [QuickRecap]
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
 *               $ref: '#/components/schemas/QuickRecap'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
