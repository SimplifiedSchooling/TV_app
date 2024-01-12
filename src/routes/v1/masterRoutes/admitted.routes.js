const express = require('express');
const validate = require('../../../middlewares/validate');
const AdmitValidation = require('../../../validations/masterValidations/admitted.validation');
const AdmitController = require('../../../controllers/masterControllers/admitted.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(AdmitValidation.createAdmit), AdmitController.createAdmit)
  .get(validate(AdmitValidation.getAllAdmit), AdmitController.getAllAdmit);

router
  .route('/:admitId')
  .get(validate(AdmitValidation.getAdmitById), AdmitController.getAdmitById)
  .patch(validate(AdmitValidation.updateAdmitbyId), AdmitController.updateAdmitById)
  .delete(validate(AdmitValidation.deleteAdmitById), AdmitController.deleteadmitById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Admit
 *   description:   Admit Management System
 */

/**
 * @swagger
 * /Admit:
 *   post:
 *     summary: Create a new Admit
 *     tags: [Admit]
 *     requestBody:
 *       description: Admit object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmitInput'
 *     responses:
 *       200:
 *         description: Admit created successfully
 *   get:
 *     summary: Get list of Admit
 *     tags: [Admit]
 *     responses:
 *       200:
 *         description: List of Admit retrieved successfully
 *
 * /Admit/{AdmitId}:
 *   patch:
 *     summary: Update a single Admit by ID
 *     tags: [Admit]
 *     parameters:
 *       - in: path
 *         name: AdmitId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Admit
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmitUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Admit not found
 *   delete:
 *     summary: Delete a single Admit by ID
 *     tags: [Admit]
 *     parameters:
 *       - in: path
 *         name: AdmitId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Admit
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Admit not found
 *   get:
 *     summary: Get a single Admit by ID
 *     tags: [Admit]
 *     parameters:
 *       - in: path
 *         name: AdmitId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Admit
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Admit not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AdmitInput:
 *       type: object
 *       properties:
 *         admitType:
 *           type: string
 *       example:
 *         admitType: 0- None, 1-Section 12 of the RTE, 2-EWS,
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    AdmitUpdateInput:
 *       type: object
 *       properties:
 *         admitType:
 *           type: string
 *       example:
 *         admitType: 0- None, 1-Section 12 of the RTE, 2-EWS,
 */
