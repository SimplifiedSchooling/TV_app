const express = require('express');
const validate = require('../../../middlewares/validate');
const languageController = require('../../../controllers/masterControllers/language.controller');
const languageValidation = require('../../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(languageValidation.createLanguage), languageController.createLanguage)
  .get(languageController.getAllLanguage);

router
  .route('/:languageId')
  .get(validate(languageValidation.getLanguageById), languageController.getLanguageById)
  .patch(validate(languageValidation.updateLanguage), languageController.updateLanguageById)
  .delete(validate(languageValidation.deleteLanguage), languageController.deleteLanguageById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Language
 *   description: Language management
 */

/**
 * @swagger
 * /language:
 *   post:
 *     summary: Create a Language
 *     tags: [Language]
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
 *                 type: string *
 *               code:
 *                 type: string
 *             example:
 *               name: english
 *               code: 34
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Language'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all language
 *     tags: [Language]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: board
 *         schema:
 *           type: string
 *         description: Board name *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Language'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /language/{lanuageId}:
 *   get:
 *     summary: Get a board
 *     tags: [Language]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: languageId
 *         required: true
 *         schema:
 *           type: string
 *         description: languageId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Language'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a language
 *     tags: [Language]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boardId
 *         required: true
 *         schema:
 *           type: string
 *         description: languageId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               code:
 *                 type: number
 *             example:
 *               name: fake name*
 *               code: 34
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Language'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a language
 *     tags: [Language]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: languageId
 *         required: true
 *         schema:
 *           type: string
 *         description: languageId
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
