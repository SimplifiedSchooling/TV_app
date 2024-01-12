const express = require('express');
const validate = require('../../middlewares/validate');
const ebookController = require('../../controllers/ebook.controller');
const ebookValidation = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(ebookValidation.createEbook), ebookController.createEbook)
  .get(validate(ebookValidation.getAllEbook), ebookController.getEbook);

router
  .route('/:ebookId')
  .get(validate(ebookValidation.getEbookById), ebookController.getEbookById)
  .patch(validate(ebookValidation.updateEbook), ebookController.updateEbook)
  .delete(validate(ebookValidation), ebookController.deleteEbook);

router
  .route('/filter/:boardId/:mediumId/:classId/:subjectId/:bookId')
  .get(validate(ebookValidation.getEbookByFilter), ebookController.getEbookByFilter);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Ebook
 *   description: Ebook management and retrieval
 */

/**
 * @swagger
 * /ebooks:
 *   post:
 *     summary: Create a ebook
 *     description: Create other ebook.
 *     tags: [Ebook]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - boardId
 *               - mediumId
 *               - subjectId
 *               - bookId
 *               - chapterId
 *             properties:
 *               path:
 *                 type: string
 *               order:
 *                 type: number
 *               chapterName:
 *                 type: string
 *               boardId:
 *                 type: string
 *               mediumId:
 *                 type: string
 *               subjectId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               chapterId:
 *                 type: string
 *             example:
 *               path: multimedia/path
 *               order: 1
 *               chapterName: topic
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               subjectId: 64d9d4666205c371563fcadb
 *               bookId: 64d9d7143ac675796cdcd433
 *               chapterId: 64d327811128844220f0cce0
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ebook'
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
 *     summary: Get all Ebook
 *     description: all Ebook.
 *     tags: [Ebook]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
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
 *         description: Maximum number of ebook
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
 *                     $ref: '#/components/schemas/Ebook'
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
 * /ebooks/{ebookId}:
 *   get:
 *     summary: Get a ebook
 *     tags: [Ebook]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ebookId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Ebook'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a ebook
 *     tags: [Ebook]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ebookId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               path:
 *                 type: string
 *               order:
 *                 type: string
 *               chapterName:
 *                 type: string
 *               boardId:
 *                 type: string
 *               mediumId:
 *                 type: string
 *               subjectId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               chapterId:
 *                 type: string
 *             example:
 *               path: multimedia/path
 *               order: 1
 *               chapterName: topic
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               subjectId: 64d9d4666205c371563fcadb
 *               bookId: 64d9d7143ac675796cdcd433
 *               chapterId: 64d327811128844220f0cce0
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Ebook'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a ebook
 *     tags: [Ebook]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ebookId
 *         required: true
 *         schema:
 *           type: string
 *         description: ebookId
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
 * /ebooks/filter/{boardId}/{mediumId}/{classId}/{subjectId}/{bookId}:
 *   get:
 *     summary: Get a ebook
 *     tags: [Ebook]
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
 *               $ref: '#/components/schemas/Ebook'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
