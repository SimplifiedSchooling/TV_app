const express = require('express');
const validate = require('../../../middlewares/validate');
const ResultTypeValidation = require('../../../validations/masterValidations/results.validation');
const ResultTypeController = require('../../../controllers/masterControllers/results.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(ResultTypeValidation.createResultType), ResultTypeController.createResultType)
  .get(validate(ResultTypeValidation.getAllResultType), ResultTypeController.getAllResultType);

router
  .route('/:resultTypeId')
  .get(validate(ResultTypeValidation.getResultTypeById), ResultTypeController.getResultTypeById)
  .patch(validate(ResultTypeValidation.updateResultTypeId), ResultTypeController.updateResultTypeyId)
  .delete(validate(ResultTypeValidation.deleteResultTypeById), ResultTypeController.deleteResultTypeById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: ResultType
 *   description:   ResultType Management System
 */

/**
 * @swagger
 * /resultType:
 *   post:
 *     summary: Create a new ResultType
 *     tags: [ResultType]
 *     requestBody:
 *       description: ResultType object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResultTypeInput'
 *     responses:
 *       200:
 *         description: ResultType created successfully
 *   get:
 *     summary: Get list of ResultType
 *     tags: [ResultType]
 *     responses:
 *       200:
 *         description: List of ResultType retrieved successfully
 *
 * /resultType/{resultTypeId}:
 *   patch:
 *     summary: Update a single ResultType by ID
 *     tags: [ResultType]
 *     parameters:
 *       - in: path
 *         name: resultTypeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the ResultType
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResultTypeUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: ResultType not found
 *   delete:
 *     summary: Delete a single ResultType by ID
 *     tags: [ResultType]
 *     parameters:
 *       - in: path
 *         name: resultTypeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the ResultType
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: ResultType not found
 *   get:
 *     summary: Get a single ResultType by ID
 *     tags: [ResultType]
 *     parameters:
 *       - in: path
 *         name: resultTypeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the ResultType
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: ResultType not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ResultTypeInput:
 *       type: object
 *       properties:
 *         resultType:
 *           type: string
 *       example:
 *         resultType: 1-Promoted/Passed,2-Promoted/Passed with grace, 3-Detained/Repeater/Not Passed,
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    ResultTypeUpdateInput:
 *       type: object
 *       properties:
 *         resultType:
 *           type: string
 *       example:
 *         resultType: 1-Promoted/Passed,2-Promoted/Passed with grace, 3-Detained/Repeater/Not Passed,
 */
