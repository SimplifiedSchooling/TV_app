const express = require('express');

const validate = require('../../../middlewares/validate');
const staffDisabilityValidation = require('../../../validations/masterValidations/staff.type.of.disability.validation');
const staffDisabilityController = require('../../../controllers/masterControllers/staff.type.of.disability.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(staffDisabilityValidation.createStaffDisability), staffDisabilityController.createTypeOfDisability)
  .get(validate(staffDisabilityValidation.getAllStaffDisabilitys), staffDisabilityController.getAllTypeOfDisability);

router
  .route('/:disabilityId')
  .get(validate(staffDisabilityValidation.getStaffDisability), staffDisabilityController.getTypeOfDisabilityById)
  .patch(validate(staffDisabilityValidation.updateStaffDisability), staffDisabilityController.updateTypeOfDisabilityById)
  .delete(validate(staffDisabilityValidation.deleteStaffDisability), staffDisabilityController.deleteTypeOfDisabilityById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StaffDisability
 *   description: Staff Type of Disability
 */

/**
 * @swagger
 * /staffdisability:
 *   post:
 *     summary: Create a Staff tType of Disability
 *     tags: [StaffDisability]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *             properties:
 *               name:
 *                 type: string *
 *             example:
 *               name: "Not Applicable"
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffDisability'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Staff Disability
 *     tags: [StaffDisability]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           name: string
 *         description: Staff of Disability *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffDisability'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /staffdisability/{disabilityId}:
 *   get:
 *     summary: Get a Staff of Disability
 *     tags: [StaffDisability]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: disabilityId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffDisability'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Staff of Disability
 *     tags: [StaffDisability]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: disabilityId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffDisability'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Staff Disability
 *     tags: [StaffDisability]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: disabilityId
 *         required: true
 *         schema:
 *           type: string
 *         description: delete a Staff Disability
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
