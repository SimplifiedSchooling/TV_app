const express = require('express');
const validate = require('../../../middlewares/validate');
const safetyAndSecurityValidation = require('../../../validations/masterValidations/safety.and.security.validation');
const safetyAndSecurityController = require('../../../controllers/masterControllers/safety.and.security.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(safetyAndSecurityValidation.createSafetyAndSecurity), safetyAndSecurityController.createSafetyAndSecurity)
  .get(validate(safetyAndSecurityValidation.getAllSafetyAndSecurity), safetyAndSecurityController.getAllSafetyAndSecurity);

router
  .route('/:safetyAndSecurityId')
  .get(validate(safetyAndSecurityValidation.getSafetyAndSecurityById), safetyAndSecurityController.getSafetyAndSecurityById)
  .patch(
    validate(safetyAndSecurityValidation.updateSafetyAndSecurityId),
    safetyAndSecurityController.updateSafetyAndSecurityById
  )
  .delete(
    validate(safetyAndSecurityValidation.deleteSafetyAndSecurityById),
    safetyAndSecurityController.deleteSafetyAndSecurityById
  );

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: SafetyAndSecurity
 *   description:   safetyAndSecurity Management System
 */

/**
 * @swagger
 * /safetyandsecurity:
 *   post:
 *     summary: Create a new safetyAndSecurity
 *     tags: [SafetyAndSecurity]
 *     requestBody:
 *       description: safetyAndSecurity object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/safetyAndSecurityInput'
 *     responses:
 *       200:
 *         description: safetyAndSecurity created successfully
 *   get:
 *     summary: Get list of safetyAndSecurity
 *     tags: [SafetyAndSecurity]
 *     responses:
 *       200:
 *         description: List of safetyAndSecurity retrieved successfully
 *
 * /safetyandsecurity/{safetyAndSecurityId}:
 *   patch:
 *     summary: Update a single safetyAndSecurity by ID
 *     tags: [SafetyAndSecurity]
 *     parameters:
 *       - in: path
 *         name: safetyAndSecurityId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the safetyAndSecurity
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/safetyAndSecurityUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: safetyAndSecurity not found
 *   delete:
 *     summary: Delete a single safetyAndSecurity by ID
 *     tags: [SafetyAndSecurity]
 *     parameters:
 *       - in: path
 *         name: safetyAndSecurityId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the safetyAndSecurity
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: safetyAndSecurity not found
 *   get:
 *     summary: Get a single safetyAndSecurity by ID
 *     tags: [SafetyAndSecurity]
 *     parameters:
 *       - in: path
 *         name: safetyAndSecurityId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the safetyAndSecurity
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: safetyAndSecurity not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     safetyAndSecurityInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *       example:
 *         name: once a year
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    safetyAndSecurityUpdateInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *       example:
 *         name: once a year
 */
