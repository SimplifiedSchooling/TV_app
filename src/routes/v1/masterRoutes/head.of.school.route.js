const express = require('express');
const validate = require('../../../middlewares/validate');
const inChargeTypeValidation = require('../../../validations/masterValidations/head.of.school.validation');
const inChargeTypeController = require('../../../controllers/masterControllers/head.of.school.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(inChargeTypeValidation.createInchargeType), inChargeTypeController.createInchargeType)
  .get(validate(inChargeTypeValidation.getAllInchargeType), inChargeTypeController.getAllInchargeType);

router
  .route('/:inchargeId')
  .get(validate(inChargeTypeValidation.getInchargeTypeById), inChargeTypeController.getInchargeTypeById)
  .patch(validate(inChargeTypeValidation.updateInchargeTypeyId), inChargeTypeController.updateInchargeTypeyId)
  .delete(validate(inChargeTypeValidation.deleteInchargeTypeById), inChargeTypeController.deleteInchargeTypeById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: inChargeType
 *   description:   inChargeType Management System
 */

/**
 * @swagger
 * /inchargetype:
 *   post:
 *     summary: Create a new inChargeType
 *     tags: [inChargeType]
 *     requestBody:
 *       description: inChargeType object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/inchargeInput'
 *     responses:
 *       200:
 *         description: inChargeType created successfully
 *   get:
 *     summary: Get list of inChargeType
 *     tags: [inChargeType]
 *     responses:
 *       200:
 *         description: List of inChargeType retrieved successfully
 *
 * /inchargetype/{inchargeId}:
 *   patch:
 *     summary: Update a single inCharge by ID
 *     tags: [inChargeType]
 *     parameters:
 *       - in: path
 *         name: inchargeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the inCharge
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/inChargeUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: inCharge not found
 *   delete:
 *     summary: Delete a single inCharge by ID
 *     tags: [inChargeType]
 *     parameters:
 *       - in: path
 *         name: inchargeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the inCharge
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: inCharge not found
 *   get:
 *     summary: Get a single inCharge by ID
 *     tags: [inChargeType]
 *     parameters:
 *       - in: path
 *         name: inchargeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the inCharge
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: inCharge not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     inchargeInput:
 *       type: object
 *       properties:
 *         inChargeType:
 *           type: string
 *       example:
 *         inChargeType: head oF school , Principal
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    inChargeUpdateInput:
 *       type: object
 *       properties:
 *         inChargeType:
 *           type: string
 *       example:
 *         inChargeType: head oF school , Principal
 */
