const express = require('express');
const validate = require('../../middlewares/validate');
const broadcastController = require('../../controllers/broadcast.controller');
const broadcastValidation = require('../../validations/broadcast.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(broadcastValidation.createBroadcast), broadcastController.createboardcast)
  .get(validate(broadcastValidation.getBroadcasts), broadcastController.getAllboardcast);

router
  .route('/:broadcastId')
  .get(validate(broadcastValidation.getBroadcast), broadcastController.getboardcastById)
  .patch(validate(broadcastValidation.updateBroadcast), broadcastController.updateboardcast)
  .delete(validate(broadcastValidation.deleteBroadcast), broadcastController.deleteboardcast);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Boardcast
 *   description: Add  Boardcast Management System
 */

/**
 * @swagger
 * /broadcast:
 *   post:
 *     summary: Create a Boardcast
 *     tags: [Boardcast]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - path
 *             properties:
 *               title:
 *                 type: string
 *               path:
 *                 type: string
 *             example:
 *               title: CBSC 10 Class
 *               path: http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/path'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Boardcast
 *     tags: [Boardcast]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Boardcast
 *         schema:
 *           type: string
 *         description: Boardcast name *
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
 *         description: Maximum number of Boardcast
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
 *                     $ref: '#/components/schemas/boardcast'
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
 * /broadcast/{id}:
 *   get:
 *     summary: Get a Boardcast
 *     tags: [Boardcast]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Boardcast
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/boardcast'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Boardcast
 *     tags: [Boardcast]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: boardcastId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               path:
 *                 type: string
 *             example:
 *               title: fake name
 *               path: "54867567"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/boardcast'
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
 *     summary: Delete a Boardcast
 *     tags: [Boardcast]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: broadcastId
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
