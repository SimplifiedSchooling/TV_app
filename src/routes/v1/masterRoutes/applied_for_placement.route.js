const express = require('express');
const validate = require('../../../middlewares/validate');
const AppliedForPlacementValidation = require('../../../validations/masterValidations/applied_for_placement.validation');
const AppliedForPlacementController = require('../../../controllers/masterControllers/applied_for_placement.controller');

const router = express.Router();

router
  .route('/')
  .post(
    validate(AppliedForPlacementValidation.createappliedForPlacement),
    AppliedForPlacementController.createAppliedForPlacement
  )
  .get(
    validate(AppliedForPlacementValidation.getAllappliedForPlacement),
    AppliedForPlacementController.getAllAppliedForPlacement
  );

router
  .route('/:placementId')
  .get(
    validate(AppliedForPlacementValidation.getappliedForPlacementById),
    AppliedForPlacementController.getAppliedForPlacementById
  )
  .patch(
    validate(AppliedForPlacementValidation.updateappliedForPlacementId),
    AppliedForPlacementController.updateAppliedForPlacementById
  )
  .delete(
    validate(AppliedForPlacementValidation.deleteappliedForPlacementById),
    AppliedForPlacementController.deleteAppliedForPlacementById
  );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: appliedforplacement
 *   description:   Applied for placement
 */

/**
 * @swagger
 * /appliedforplacement:
 *   post:
 *     summary: Create a new applied for placement
 *     tags: [appliedforplacement]
 *     requestBody:
 *       description: Applied for placement object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AppliedForPlacementInput'
 *     responses:
 *       200:
 *         description: Applied for placement created successfully
 *   get:
 *     summary: Get list of applied for placement
 *     tags: [appliedforplacement]
 *     responses:
 *       200:
 *         description: List of applied for placement retrieved successfully
 *
 * /appliedforplacement/{placementId}:
 *   patch:
 *     summary: Update a single applied for placement by ID
 *     tags: [appliedforplacement]
 *     parameters:
 *       - in: path
 *         name: placementId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the applied for placement
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AppliedForPlacementInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Applied for placement not found
 *   delete:
 *     summary: Delete a single placement by ID
 *     tags: [appliedforplacement]
 *     parameters:
 *       - in: path
 *         name: placementId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the applied for placement
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Applied for placement not found
 *   get:
 *     summary: Get a single Placementby ID
 *     tags: [appliedforplacement]
 *     parameters:
 *       - in: path
 *         name: placementId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the applied for placement
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: applied for placement not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AppliedForPlacementInput:
 *       type: object
 *       properties:
 *         placementName:
 *           type: string
 *       example:
 *         placementName: Applied and Placed,Applied and Not Placed,Not Applied
 */
