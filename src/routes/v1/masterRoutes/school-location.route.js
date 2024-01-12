const express = require('express');
const validate = require('../../../middlewares/validate');
const schoolLocalValidation = require('../../../validations/masterValidations/school-location.validation');
const schoolLocationController = require('../../../controllers/masterControllers/school-location.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(schoolLocalValidation.createSchoolLocation), schoolLocationController.createSchoolLocationType)
  .get(validate(schoolLocalValidation.getAllSchoolLocation), schoolLocationController.getAllSchoolLocation);

router
  .route('/:schoolLocationId')
  .get(validate(schoolLocalValidation.getSchoolLocationById), schoolLocationController.getSchoolLocationById)
  .patch(validate(schoolLocalValidation.updateSchoolLocationTypeyId), schoolLocationController.updateSchoolLocationTypeyId)
  .delete(
    validate(schoolLocalValidation.deleteSchoolLocationTypeById),
    schoolLocationController.deleteSchoolLocationTypeById
  );

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: SchoolLocationType
 *   description:   SchoolLocationType Management System
 */

/**
 * @swagger
 * /schoollocationtype:
 *   post:
 *     summary: Create a new SchoolLocationType
 *     tags: [SchoolLocationType]
 *     requestBody:
 *       description: SchoolLocationType object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SchoolLocationTypeInput'
 *     responses:
 *       200:
 *         description: SchoolLocationType created successfully
 *   get:
 *     summary: Get list of SchoolLocationType
 *     tags: [SchoolLocationType]
 *     responses:
 *       200:
 *         description: List of SchoolLocationType retrieved successfully
 *
 * /schoollocationtype/{schoolLocationId}:
 *   patch:
 *     summary: Update a single SchoolLocationType by ID
 *     tags: [SchoolLocationType]
 *     parameters:
 *       - in: path
 *         name: schoolLocationId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the schoolLocation
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SchoolLocationTypeUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: SchoolLocationType not found
 *   delete:
 *     summary: Delete a single SchoolLocationType by ID
 *     tags: [SchoolLocationType]
 *     parameters:
 *       - in: path
 *         name: schoolLocationId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the schoolLocation
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: SchoolLocationType not found
 *   get:
 *     summary: Get a single SchoolLocationType by ID
 *     tags: [SchoolLocationType]
 *     parameters:
 *       - in: path
 *         name: schoolLocationId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the schoolLocation
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: schoolLocation not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SchoolLocationTypeInput:
 *       type: object
 *       properties:
 *         locationType:
 *           type: string
 *       example:
 *         locationType: rular,urban
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    SchoolLocationTypeUpdateInput:
 *       type: object
 *       properties:
 *         locationType:
 *           type: string
 *       example:
 *         locationType: rular,urban
 */
