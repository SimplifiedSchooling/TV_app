const express = require('express');
const validate = require('../../../middlewares/validate');
const schoolCategoryValidation = require('../../../validations/masterValidations/school.category.validation');
const SchoolCategoryController = require('../../../controllers/masterControllers/school.category.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(schoolCategoryValidation.createSchoolCategory), SchoolCategoryController.createSchoolCategoryType)
  .get(validate(schoolCategoryValidation.getAllSchoolCategory), SchoolCategoryController.getAllSchoolCategory);

router
  .route('/:SchoolCategoryTypeId')
  .get(validate(schoolCategoryValidation.getSchoolCategoryById), SchoolCategoryController.getSchoolCategoryById)
  .patch(validate(schoolCategoryValidation.updateSchoolCategoryId), SchoolCategoryController.updateSchoolCategoryTypeyId)
  .delete(
    validate(schoolCategoryValidation.deleteSchoolCategoryById),
    SchoolCategoryController.deleteSchoolCategoryTypeById
  );

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: SchoolCategoryType
 *   description: SchoolCategoryType Management System
 */

/**
 * @swagger
 * /SchoolCategoryType:
 *   post:
 *     summary: Create a new SchoolCategoryType
 *     tags: [SchoolCategoryType]
 *     requestBody:
 *       description: SchoolCategoryType object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SchoolCategoryTypeInput'
 *     responses:
 *       200:
 *         description: SchoolCategoryType created successfully
 *   get:
 *     summary: Get a list of SchoolCategoryType
 *     tags: [SchoolCategoryType]
 *     responses:
 *       200:
 *         description: List of SchoolCategoryType retrieved successfully

 * /SchoolCategoryType/{SchoolCategoryTypeId}:
 *   parameters:
 *     - in: path
 *       name: SchoolCategoryTypeId
 *       required: true
 *       schema:
 *         type: string
 *       description: ID of the SchoolCategory
 *   patch:
 *     summary: Update a single SchoolCategoryType by ID
 *     tags: [SchoolCategoryType]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SchoolCategoryTypeUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: SchoolCategoryType not found
 *   delete:
 *     summary: Delete a single SchoolCategoryType by ID
 *     tags: [SchoolCategoryType]
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: SchoolCategoryType not found
 *   get:
 *     summary: Get a single SchoolCategoryType by ID
 *     tags: [SchoolCategoryType]
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: SchoolCategory not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SchoolCategoryTypeInput:
 *       type: object
 *       properties:
 *         detailsOfCategory:
 *           type: string
 *           example: Primary only with grades 1 to 5, Upper Primary with grades 1 to 8
 *         Code:
 *           type: number
 *           example: 1, 2, 3
 *         broadCategory:
 *           type: string
 *           example: primary, upper primary
 *       example:
 *         Code: 1, 2, 3
 *         broadCategory: primary, upper primary
 *         detailsOfCategory: Primary only with grades 1 to 5, Upper Primary with grades 1 to 8
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SchoolCategoryTypeUpdateInput:
 *       type: object
 *       properties:
 *         detailsOfCategory:
 *           type: string
 *           example: Primary only with grades 1 to 5, Upper Primary with grades 1 to 8
 *         Code:
 *           type: number
 *           example: 1, 2, 3
 *       example:
 *         Code: 1, 2, 3
 *         broadCategory: primary, upper primary
 *         detailsOfCategory: Primary only with grades 1 to 5, Upper Primary with grades 1 to 8
 */
