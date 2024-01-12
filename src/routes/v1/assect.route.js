const express = require('express');

const validate = require('../../middlewares/validate');
const { assectController } = require('../../controllers');
const { assectValidaton } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(assectValidaton.createAssetSchema), assectController.createAssect)
  .get(validate(assectValidaton.queryAssect), assectController.queryAssect);

router
  .route('/:id')
  .get(validate(assectValidaton.getAssect), assectController.getAssect)
  .delete(validate(assectValidaton.deleteAssect), assectController.deleteAssect);

router.route('/update/asset').patch(validate(assectValidaton.updateAssectSchema), assectController.updateAssect);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Asset
 *   description: API for Asset management
 */

/**
 * @swagger
 * /assets:
 *   post:
 *     summary: Create an Assect
 *     tags: [Asset]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               scode:
 *                 type: string
 *               assetId:
 *                 type: string
 *               assectName:
 *                 type: string
 *               count:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     invoiceNo:
 *                       type: number
 *                     invoiceDate:
 *                       type: string
 *                       format: date
 *                     quantity:
 *                       type: number
 *                     description:
 *                       type: string
 *                     imagePath:
 *                       type: string
 *                 example:
 *                   [
 *                     {
 *                       invoiceNo: 12345,
 *                       invoiceDate: "2023-07-01",
 *                       quantity: 5,
 *                       description: "Description 1",
 *                       imagePath: "path/to/image1.jpg"
 *                     },
 *                     {
 *                       invoiceNo: 67890,
 *                       invoiceDate: "2023-07-15",
 *                       quantity: 3,
 *                       description: "Description 2",
 *                       imagePath: "path/to/image2.jpg"
 *                     }
 *                   ]
 *               totalasset:
 *                 type: number
 *               totaldestroyed:
 *                 type: number
 *               distroy:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     expiredate:
 *                       type: string
 *                       format: date
 *                     quantity:
 *                       type: number
 *                     reason:
 *                       type: string
 *                 example:
 *                   [
 *                     {
 *                       expiredate: "2023-08-01",
 *                       quantity: 2,
 *                       reason: "Expired"
 *                     },
 *                     {
 *                       expiredate: "2023-08-15",
 *                       quantity: 1,
 *                       reason: "Damaged"
 *                     }
 *                   ]
 *     responses:
 *       '201':
 *         description: Assect created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error

 *   get:
 *     summary: Get Assects
 *     tags: [Asset]
 *     parameters:
 *       - in: query
 *         name: scode
 *         schema:
 *           type: string
 *         description: Assect code
 *       - in: query
 *         name: assectName
 *         schema:
 *           type: string
 *         description: Assect name
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Asset'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

// /**
//  * @swagger
//  * /assets/update:
//  *   patch:
//  *     summary: Update an Assect by ID and scode
//  *     tags: [Asset]
//  *     parameters:
//  *     query:
//  *       - in: path
//  *         name: scode
//  *         required: true
//  *         schema:
//  *           type: string
//  *       - in: path
//  *         name: assetId
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Asset ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Asset'
//  *     responses:
//  *       '200':
//  *         description: Assect updated
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Asset'
//  *       '400':
//  *         description: Bad request
//  *       '404':
//  *         description: Assect not found
//  *       '500':
//  *         description: Internal server error
//  */

/**
 * @swagger
 * /assets/update/asset:
 *   patch:
 *     summary: Update an Asset by ID and scode
 *     tags: [Asset]
 *     parameters:
 *       - in: query
 *         name: scode
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: assetId
 *         required: true
 *         schema:
 *           type: string
 *         description: Asset ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Asset'
 *     responses:
 *       '200':
 *         description: Asset updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Asset not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /assets/{id}:
 *   get:
 *     summary: Get a Asset
 *     tags: [Asset]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Asset'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Asset
 *     tags: [Asset]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: id
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
