const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const { demolishedController } = require('../../controllers');
const { demolishedValidation } = require('../../validations');
const { createS3Middleware } = require('../../utils/s3middleware');

const router = express.Router();

router
  .route('/')
  .post(
    auth('CREATE'),
    createS3Middleware('lmscontent'),
    validate(demolishedValidation.createDemolished),
    demolishedController.createDemolished
  )
  .post(auth('CREATE'), validate(demolishedValidation.createDemolished), demolishedController.createDemolished)
  .get(auth('GET'), validate(demolishedValidation.getAllDemolished), demolishedController.getAllDemolished);

router
  .route('/:demolishedId')
  .get(auth('GET'), validate(demolishedValidation.getDemolishedById), demolishedController.getDemolishedById)
  .patch(
    auth('UPDATE'),
    createS3Middleware('lmscontent'),
    validate(demolishedValidation.updateDemolishedById),
    demolishedController.updateDemolishedById
  )
  .delete(auth('DELETE'), validate(demolishedValidation.deleteDemolishedById), demolishedController.deleteDemolishedById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Demolished
 *   description: Demolished management and retrieval
 */

/**
 * @swagger
 * /demolished:
 *   post:
 *     summary: Create a Demolished
 *     description: Create other Demolished.
 *     tags: [Demolished]
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
 *                 type: file
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
 *               file: imagelink/icon1
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
 *
 *
 *   get:
 *     summary: Get all Demolished
 *     description: all Demolished.
 *     tags: [Demolished]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
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
 *         description: Maximum number of Demolished
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
 *                     $ref: '#/components/schemas/Demolished'
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
 * /demolished/{demolishedId}:
 *   get:
 *     summary: Get a Demolished
 *     tags: [Demolished]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: demolishedId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Demolished'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Demolished
 *     tags: [Demolished]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: demolishedId
 *         required: false
 *         schema:
 *           type: string
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
 *                 type: file
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
 *               asset: English
 *               file: imagelink/icon1
 *               totalAsset: 1
 *               totalDestroyed: abc
 *               reason: test123
 *               date: 1/10/2023
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Demolished'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Demolished
 *     tags: [Demolished]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: demolishedId
 *         required: true
 *         schema:
 *           type: string
 *         description: demolishedId
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
