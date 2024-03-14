const express = require('express');
const validate = require('../../middlewares/validate');
const studioValidation = require('../../validations/studio.validation');
const studioController = require('../../controllers/studio.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(studioValidation.createStudio), studioController.createStudio)
  .get(validate(studioValidation.getAllStudios), studioController.getStudios);

router
  .route('/:studioId')
  .get(validate(studioValidation.getStudio), studioController.getStudio)
  .patch(validate(studioValidation.updateStudioById), studioController.updateStudio)
  .delete(validate(studioValidation.deleteStudioById), studioController.deleteStudio);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Studios
 *   description:   Studios Management System
 */

/**
 * @swagger
 * /studio:
 *   post:
 *     summary: Create a new studio
 *     tags: [Studios]
 *     requestBody:
 *       description: Studio object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudioInput'
 *     responses:
 *       200:
 *         description: Studio created successfully
 *   get:
 *     summary: Get list of studios
 *     tags: [Studios]
 *     responses:
 *       200:
 *         description: List of studio retrieved successfully
 *
 * /studio/{studioId}:
 *   patch:
 *     summary: Update a single chapter by ID
 *     tags: [Studios]
 *     parameters:
 *       - in: path
 *         name: studioId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studio
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudioUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Chapter not found
 *   delete:
 *     summary: Delete a single studio by ID
 *     tags: [Studios]
 *     parameters:
 *       - in: path
 *         name: studioId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studio
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Studio not found
 *   get:
 *     summary: Get a single studio by ID
 *     tags: [Studios]
 *     parameters:
 *       - in: path
 *         name: studioId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studio
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Studio not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudioInput:
 *       type: object
 *       properties:
 *         studioName:
 *           type: string
 *         location:
 *           type: string
 *       example:
 *         studioName: studio1 or studio-2
 *         location: pune,mumbai,delhi
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudioUpdateInput:
 *       type: object
 *       properties:
 *         studioName:
 *           type: string
 *         location:
 *           type: string
 *       example:
 *         studioName: studio1 or studio-2
 *         location: pune,mumbai,delhi
 */
