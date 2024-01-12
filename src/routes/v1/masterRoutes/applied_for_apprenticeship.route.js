const express = require('express');
const validate = require('../../../middlewares/validate');
const AppliedForApprenticeshipValidation = require('../../../validations/masterValidations/applied_for_apprenticeship.validation');
const AppliedForApprenticeshipController = require('../../../controllers/masterControllers/applied_for_apprenticeship.controller');

const router = express.Router();

router
  .route('/')
  .post(
    validate(AppliedForApprenticeshipValidation.createappliedForApprenticeship),
    AppliedForApprenticeshipController.createAppliedForApprenticeship
  )
  .get(
    validate(AppliedForApprenticeshipValidation.getAllappliedForApprenticeship),
    AppliedForApprenticeshipController.getAllAppliedForApprenticeship
  );

router
  .route('/:apprenticeshipId')
  .get(
    validate(AppliedForApprenticeshipValidation.getappliedForApprenticeshipById),
    AppliedForApprenticeshipController.getAppliedForApprenticeshipById
  )
  .patch(
    validate(AppliedForApprenticeshipValidation.updateappliedForApprenticeshipId),
    AppliedForApprenticeshipController.updateAppliedForApprenticeshipById
  )
  .delete(
    validate(AppliedForApprenticeshipValidation.deleteappliedForApprenticeshipById),
    AppliedForApprenticeshipController.deleteAppliedForApprenticeshipById
  );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: appliedforapprenticeship
 *   description:   Applied for apprenticeship
 */

/**
 * @swagger
 * /appliedforapprenticeship:
 *   post:
 *     summary: Create a new applied for apprenticeship
 *     tags: [appliedforapprenticeship]
 *     requestBody:
 *       description: Applied for apprenticeship object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AppliedForApprenticeshipInput'
 *     responses:
 *       200:
 *         description: Applied for apprenticeship created successfully
 *   get:
 *     summary: Get list of applied for apprenticeship
 *     tags: [appliedforapprenticeship]
 *     responses:
 *       200:
 *         description: List of applied for apprenticeship retrieved successfully
 *
 * /appliedforapprenticeship/{apprenticeshipId}:
 *   patch:
 *     summary: Update a single applied for apprenticeship by ID
 *     tags: [appliedforapprenticeship]
 *     parameters:
 *       - in: path
 *         name: apprenticeshipId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the applied for apprenticeship
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AppliedForApprenticeshipInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Applied for apprenticeship not found
 *   delete:
 *     summary: Delete a single apprenticeship by ID
 *     tags: [appliedforapprenticeship]
 *     parameters:
 *       - in: path
 *         name: apprenticeshipId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the applied for apprenticeship
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Applied for apprenticeship not found
 *   get:
 *     summary: Get a single Apprenticeshipby ID
 *     tags: [appliedforapprenticeship]
 *     parameters:
 *       - in: path
 *         name: apprenticeshipId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the applied for apprenticeship
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: applied for apprenticeship not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AppliedForApprenticeshipInput:
 *       type: object
 *       properties:
 *         apprenticeshipName:
 *           type: string
 *       example:
 *         apprenticeshipName: Applied and Given Apprenticeship,Applied But Not Given Apprenticeship,Not Applied
 */
