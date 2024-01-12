const express = require('express');
const validate = require('../../middlewares/validate');
const { mappingController } = require('../../controllers');
const { mappingValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(mappingValidation.createMapping), mappingController.createMapping)
  .get(validate(mappingValidation.queryMapping), mappingController.queryMapping);

router.route('/getAllMaping').get(validate(mappingValidation.queryMapping), mappingController.getAllMaping);

router
  .route('/:mappingId')
  .get(validate(mappingValidation.getMappingById), mappingController.getMappingById)
  .patch(validate(mappingValidation.updateMapping), mappingController.updateMappingById)
  .delete(validate(mappingValidation.deleteMappingById), mappingController.deleteMapping);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Mapping
 *   description: Mapping management
 */

/**
 * @swagger
 * /mapping:
 *   post:
 *     summary: Create a mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the class
 *               boardId:
 *                 type: string
 *                 description: ID of the boardId
 *               mediumId:
 *                 type: string
 *                 description: ID of the mediumId
 *               classId:
 *                 type: string
 *                 description: ID of the classId
 *               subjectId:
 *                 type: string
 *                 description: ID of the subjectId
 *               bookId:
 *                 type: string
 *                 description: ID of the bookId
 *             example:
 *               name: class10
 *               boardId: 614a7e7d7f1d813bbf8e89b7
 *               mediumId: 614a7e7d7f1d813bbf8e89a9
 *               classId: 614a7e7d7f1d813bbf8e89b7
 *               subjectId: 614a7e7d7f1d813bbf8e89a9
 *               bookId: 614a7e7d7f1d813bbf8e89a9
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Mapping'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Create a mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 boardId:
 *                   type: string
 *                 mediumId:
 *                   type: string
 *                 classId:
 *                   type: string
 *                 subjectId:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     order:
 *                       type: integer
 *                     code:
 *                       type: string
 *                     thumbnail:
 *                       type: string
 *                     id:
 *                       type: string
 *                 bookId:
 *                   type: string
 *                 id:
 *                   type: string
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '#/components/responses/Forbidden'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /mapping/getAllMaping:
 *   get:
 *     summary: Get all mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 boardId:
 *                   type: string
 *                 mediumId:
 *                   type: string
 *                 classId:
 *                   type: string
 *                 subjectId:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     order:
 *                       type: integer
 *                     code:
 *                       type: string
 *                     thumbnail:
 *                       type: string
 *                     id:
 *                       type: string
 *                 bookId:
 *                   type: string
 *                 id:
 *                   type: string
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '#/components/responses/Forbidden'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /mapping/{mappingId}:
 *   get:
 *     summary: Get a mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: mappingId
 *         required: true
 *         schema:
 *           type: string
 *         description: mappingId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Mapping'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: mappingId
 *         required: true
 *         schema:
 *           type: string
 *         description: mappingId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the class
 *               boardId:
 *                 type: string
 *                 description: ID of the boardId
 *               mediumId:
 *                 type: string
 *                 description: ID of the mediumId
 *               classId:
 *                 type: string
 *                 description: ID of the classId
 *               subjectId:
 *                 type: string
 *                 description: ID of the subjectId
 *               bookId:
 *                 type: string
 *                 description: ID of the bookId
 *             example:
 *               name: class10
 *               boardId: 614a7e7d7f1d813bbf8e89b7
 *               mediumId: 614a7e7d7f1d813bbf8e89a9
 *               classId: 614a7e7d7f1d813bbf8e89b7
 *               subjectId: 614a7e7d7f1d813bbf8e89a9
 *               bookId: 614a7e7d7f1d813bbf8e89a9
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Mapping'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: mappingId
 *         required: true
 *         schema:
 *           type: string
 *         description: mappingId
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
 * /mapping/mobile/getbybookId/{bookId}:
 *   get:
 *     summary: get chapter and lesson by book
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 boardId:
 *                   type: string
 *                 mediumId:
 *                   type: string
 *                 classId:
 *                   type: string
 *                 subjectId:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     order:
 *                       type: integer
 *                     code:
 *                       type: string
 *                     thumbnail:
 *                       type: string
 *                     id:
 *                       type: string
 *                 bookId:
 *                   type: string
 *                 chapters:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       chapterName:
 *                         type: string
 *                       order:
 *                         type: integer
 *                       thumbnail:
 *                         type: string
 *                 multimedia:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       path:
 *                         type: string
 *                       lessionName:
 *                         type: string
 *                       icon1:
 *                         type: string
 *                       icon2:
 *                         type: integer
 *                       multimediaType:
 *                         type: string
 *                 id:
 *                   type: string
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '#/components/responses/Forbidden'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
