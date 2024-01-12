const express = require('express');
const validate = require('../../../middlewares/validate');
const academicsValidation = require('../../../validations/masterValidations/academics.validation');
const academicsController = require('../../../controllers/masterControllers/academics.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(academicsValidation.createAcademics), academicsController.createAcademics)
  .get(validate(academicsValidation.getAllAcademics), academicsController.getAllAcademics);

router
  .route('/:academicsId')
  .get(validate(academicsValidation.getAcademicsById), academicsController.getAcademicsById)
  .patch(validate(academicsValidation.updateAcademicsbyId), academicsController.updateAcademicsById)
  .delete(validate(academicsValidation.deleteAcademicsById), academicsController.deleteistrictById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: academics
 *   description:   academics Management System
 */

/**
 * @swagger
 * /academics:
 *   post:
 *     summary: Create a new academics
 *     tags: [academics]
 *     requestBody:
 *       description: academics object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/academicsInput'
 *     responses:
 *       200:
 *         description: academics created successfully
 *   get:
 *     summary: Get list of academics
 *     tags: [academics]
 *     responses:
 *       200:
 *         description: List of academics retrieved successfully
 *
 * /academics/{academicsId}:
 *   patch:
 *     summary: Update a single academics by ID
 *     tags: [academics]
 *     parameters:
 *       - in: path
 *         name: academicsId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the academics
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/academicsUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: academics not found
 *   delete:
 *     summary: Delete a single academics by ID
 *     tags: [academics]
 *     parameters:
 *       - in: path
 *         name: academicsId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the academics
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: academics not found
 *   get:
 *     summary: Get a single academics by ID
 *     tags: [academics]
 *     parameters:
 *       - in: path
 *         name: academicsId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the academics
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: academics not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     academicsInput:
 *       type: object
 *       properties:
 *         streamName:
 *           type: string
 *       example:
 *         streamName: Art-1, Science-2, Commerce-3, Vocational Streams-4,
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    academicsUpdateInput:
 *       type: object
 *       properties:
 *         streamName:
 *           type: string
 *       example:
 *         streamName: Art-1, Science-2, Commerce-3, Vocational Streams-4,
 */
