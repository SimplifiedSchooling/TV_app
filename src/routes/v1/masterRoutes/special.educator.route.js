const express = require('express');
const validate = require('../../../middlewares/validate');
const specialEducatorValidation = require('../../../validations/masterValidations/special.educator.validation');
const specialEducatorController = require('../../../controllers/masterControllers/special.educator.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(specialEducatorValidation.createSpecialEducator), specialEducatorController.createSpecialEducatorType)
  .get(validate(specialEducatorValidation.getAllSpecialEducator), specialEducatorController.getAllSpecialEducator);

router
  .route('/:specialEducatorId')
  .get(validate(specialEducatorValidation.getSpecialEducatorById), specialEducatorController.getSpecialEducatorById)
  .patch(validate(specialEducatorValidation.updateSpecialEducatorId), specialEducatorController.updateSpecialEducatorTypeyId)
  .delete(
    validate(specialEducatorValidation.deleteSpecialEducatorById),
    specialEducatorController.deleteSpecialEducatorTypeById
  );

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: SpecialEducatorType
 *   description:   SpecialEducatorType Management System
 */

/**
 * @swagger
 * /specialEducator:
 *   post:
 *     summary: Create a new SpecialEducatorType
 *     tags: [SpecialEducatorType]
 *     requestBody:
 *       description: SpecialEducatorType object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SpecialEducatorTypeInput'
 *     responses:
 *       200:
 *         description: SpecialEducatorType created successfully
 *   get:
 *     summary: Get list of SpecialEducatorType
 *     tags: [SpecialEducatorType]
 *     responses:
 *       200:
 *         description: List of SpecialEducatorType retrieved successfully
 *
 * /specialEducator/{specialEducatorId}:
 *   patch:
 *     summary: Update a single SpecialEducatorType by ID
 *     tags: [SpecialEducatorType]
 *     parameters:
 *       - in: path
 *         name: specialEducatorId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the specialEducator
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SpecialEducatorTypeUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: SpecialEducatorType not found
 *   delete:
 *     summary: Delete a single SpecialEducatorType by ID
 *     tags: [SpecialEducatorType]
 *     parameters:
 *       - in: path
 *         name: specialEducatorId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the specialEducator
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: SpecialEducatorType not found
 *   get:
 *     summary: Get a single SpecialEducatorType by ID
 *     tags: [SpecialEducatorType]
 *     parameters:
 *       - in: path
 *         name: specialEducatorId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the specialEducator
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: specialEducator not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SpecialEducatorTypeInput:
 *       type: object
 *       properties:
 *         specialEducator:
 *           type: string
 *       example:
 *         specialEducator: 1-Dedicated, 2-At cluster level, 3-No
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    SpecialEducatorTypeUpdateInput:
 *       type: object
 *       properties:
 *         specialEducator:
 *           type: string
 *       example:
 *         specialEducator: 1-Dedicated, 2-At cluster level, 3-No
 */
