const express = require('express');
const { assetMasterController } = require('../../../controllers');

const router = express.Router();
router.route('/').post(assetMasterController.createAssetMaster).get(assetMasterController.getAllAssetMaster);

router
  .route('/:id')
  .get(assetMasterController.getAssetMasterById)
  .patch(assetMasterController.updateAssetMasterById)
  .delete(assetMasterController.deleteAssetMasterById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: AssetMaster
 *   description:   academics Management System
 */

/**
 * @swagger
 * /assetmaster:
 *   post:
 *     summary: Create a new academics
 *     tags: [AssetMaster]
 *     requestBody:
 *       description: academics object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssetMaster'
 *     responses:
 *       200:
 *         description: academics created successfully
 *   get:
 *     summary: Get list of AssetMaster
 *     tags: [AssetMaster]
 *     responses:
 *       200:
 *         description: List of academics retrieved successfully
 *
 * /assetmaster/{id}:
 *   patch:
 *     summary: Update a single AssetMaster by ID
 *     tags: [AssetMaster]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssetMaster'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: academics not found
 *   delete:
 *     summary: Delete a single academics by ID
 *     tags: [AssetMaster]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: academics not found
 *   get:
 *     summary: Get a single AssetMaster by ID
 *     tags: [AssetMaster]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the AssetMaster
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: AssetMaster not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AssetMaster:
 *       type: object
 *       properties:
 *         Name:
 *           type: string
 *       example:
 *         streamName: Art-1, Science-2, Commerce-3, Vocational Streams-4,
 */
