const express = require('express');
const validate = require('../../middlewares/validate');
const { menuController } = require('../../controllers');
const { menuValidation } = require('../../validations');
const { createS3Middleware } = require('../../utils/s3middleware');

const router = express.Router();

router
  .route('/')
  .post(createS3Middleware('lmscontent'), validate(menuValidation.createMenu), menuController.createMenu)
  .get(validate(menuValidation.getAllMenu), menuController.getAllMenu);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Menu
 *   description: Menu for TV
 */

/**
 * @swagger
 * /menu:
 *   post:
 *     summary: Create a menu
 *     description: create other menu.
 *     tags: [Menu]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string *
 *               genderId:
 *                 type: string
 *               file:
 *                 type: file
 *                 format: binary
 *             example:
 *               name: English
 *               genderId: 23
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Menu'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Get a menu
 *     tags: [Menu]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Menu'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
