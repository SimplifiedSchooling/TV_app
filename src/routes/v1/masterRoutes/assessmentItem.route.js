const express = require('express');
const validate = require('../../../middlewares/validate');
const AssessmentItemValidation = require('../../../validations/masterValidations/assessmentItem.validation');
const AssessmentItemController = require('../../../controllers/masterControllers/assessmentItem.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(AssessmentItemValidation.createAssessmentItem), AssessmentItemController.createAssessmentItem)
  .get(validate(AssessmentItemValidation.getAllAssessmentItem), AssessmentItemController.getAllAssessmentItem);

router
  .route('/:assessmentitemId')
  .get(validate(AssessmentItemValidation.getAssessmentItemById), AssessmentItemController.getAssessmentItemById)
  .patch(validate(AssessmentItemValidation.updateAssessmentItemId), AssessmentItemController.updateAssessmentItemById)
  .delete(validate(AssessmentItemValidation.deleteAssessmentItemById), AssessmentItemController.deleteAssessmentItemById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: assessmentitem
 *   description:   Assessment Item
 */

/**
 * @swagger
 * /assessmentitem:
 *   post:
 *     summary: Create a new assessment item
 *     tags: [assessmentitem]
 *     requestBody:
 *       description: Assessment item object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssessmentitemInput'
 *     responses:
 *       200:
 *         description: Assessment item created successfully
 *   get:
 *     summary: Get list of assessment item
 *     tags: [assessmentitem]
 *     responses:
 *       200:
 *         description: List of assessment item retrieved successfully
 *
 * /assessmentitem/{assessmentitemId}:
 *   patch:
 *     summary: Update a single assessment item by ID
 *     tags: [assessmentitem]
 *     parameters:
 *       - in: path
 *         name: assessmentitemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the assessment item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssessmentitemInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Assessment item not found
 *   delete:
 *     summary: Delete a single assessment item by ID
 *     tags: [assessmentitem]
 *     parameters:
 *       - in: path
 *         name: assessmentitemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the assessment item
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Assessment item not found
 *   get:
 *     summary: Get a single assessment item by ID
 *     tags: [assessmentitem]
 *     parameters:
 *       - in: path
 *         name: assessmentitemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the assessment item
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: assessment item not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AssessmentitemInput:
 *       type: object
 *       properties:
 *         assessmentitemName:
 *           type: string
 *       example:
 *         assessmentitemName: School,State
 */
