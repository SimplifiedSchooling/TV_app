const express = require('express');
const validate = require('../../../middlewares/validate');
const laboratoryValidation = require('../../../validations/masterValidations/laboratories.validation');
const laboratoryController = require('../../../controllers/masterControllers/laboratories.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(laboratoryValidation.createLaboratory), laboratoryController.createLaboratory)
  .get(validate(laboratoryValidation.getAllLaboratory), laboratoryController.getAllLaboratory);

router
  .route('/:laboratoryId')
  .get(validate(laboratoryValidation.getLaboratoryById), laboratoryController.getLaboratoryById)
  .patch(validate(laboratoryValidation.updateLaboratoryId), laboratoryController.updateLaboratoryById)
  .delete(validate(laboratoryValidation.deleteLaboratoryById), laboratoryController.deleteLaboratoryById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Laboratory
 *   description:   Laboratory Management System
 */

/**
 * @swagger
 * /laboratory:
 *   post:
 *     summary: Create a new Laboratory
 *     tags: [Laboratory]
 *     requestBody:
 *       description: Laboratory object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LaboratoryInput'
 *     responses:
 *       200:
 *         description: Laboratory created successfully
 *   get:
 *     summary: Get list of Laboratory
 *     tags: [Laboratory]
 *     responses:
 *       200:
 *         description: List of Laboratoryretrieved successfully
 *
 * /laboratory/{laboratoryId}:
 *   patch:
 *     summary: Update a single Laboratory by ID
 *     tags: [Laboratory]
 *     parameters:
 *       - in: path
 *         name: laboratoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the laboratory
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LaboratoryInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Laboratory not found
 *   delete:
 *     summary: Delete a single Laboratoryby ID
 *     tags: [Laboratory]
 *     parameters:
 *       - in: path
 *         name: laboratoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the laboratory
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Laboratory not found
 *   get:
 *     summary: Get a single Laboratoryby ID
 *     tags: [Laboratory]
 *     parameters:
 *       - in: path
 *         name: laboratoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the laboratory
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: laboratory not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LaboratoryInput:
 *       type: object
 *       properties:
 *         laboratoryName:
 *           type: string
 *       example:
 *         laboratoryName: Physics,chemistry
 */
