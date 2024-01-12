const express = require('express');
const validate = require('../../../middlewares/validate');
const internetTypeValidation = require('../../../validations/masterValidations/type.of.internet.validation');
const internetTypeController = require('../../../controllers/masterControllers/type.of.internet.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(internetTypeValidation.createInternetType), internetTypeController.createInternetType)
  .get(validate(internetTypeValidation.getAllInternetType), internetTypeController.getAllInternetType);

router
  .route('/:internetTypeId')
  .get(validate(internetTypeValidation.getInternetTypeById), internetTypeController.getInternetTypeById)
  .patch(validate(internetTypeValidation.updateInternetTypeId), internetTypeController.updateInternetTypeyId)
  .delete(validate(internetTypeValidation.deleteInternetTypeById), internetTypeController.deleteInternetTypeById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: InternetType
 *   description:   InternetType Management System
 */

/**
 * @swagger
 * /internetType:
 *   post:
 *     summary: Create a new InternetType
 *     tags: [InternetType]
 *     requestBody:
 *       description: InternetType object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InternetTypeInput'
 *     responses:
 *       200:
 *         description: InternetType created successfully
 *   get:
 *     summary: Get list of InternetType
 *     tags: [InternetType]
 *     responses:
 *       200:
 *         description: List of InternetType retrieved successfully
 *
 * /internetType/{internetTypeId}:
 *   patch:
 *     summary: Update a single InternetType by ID
 *     tags: [InternetType]
 *     parameters:
 *       - in: path
 *         name: internetTypeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the internetType
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InternetTypeUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: InternetType not found
 *   delete:
 *     summary: Delete a single InternetType by ID
 *     tags: [InternetType]
 *     parameters:
 *       - in: path
 *         name: internetTypeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the internetType
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: InternetType not found
 *   get:
 *     summary: Get a single InternetType by ID
 *     tags: [InternetType]
 *     parameters:
 *       - in: path
 *         name: internetTypeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the internetType
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: internetType not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     InternetTypeInput:
 *       type: object
 *       properties:
 *         internetType:
 *           type: string
 *       example:
 *         internetType: 1-Broadband/Leased Line, 2-USB Modem/dongle/Portable Hotspot
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    InternetTypeUpdateInput:
 *       type: object
 *       properties:
 *         internetType:
 *           type: string
 *       example:
 *         internetType: 1-Broadband/Leased Line, 2-USB Modem/dongle/Portable Hotspot
 */
