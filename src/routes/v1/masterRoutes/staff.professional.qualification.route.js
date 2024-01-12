const express = require('express');

const validate = require('../../../middlewares/validate');
const QualificationValidation = require('../../../validations/masterValidations/staff.professional.qualification.validation');
const qualificationController = require('../../../controllers/masterControllers/staff.professional.qualification.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(QualificationValidation.createStaffQualification), qualificationController.createProfessionalQualification)
  .get(validate(QualificationValidation.getAllStaffQualifications), qualificationController.getAllProfessionalQualification);

router
  .route('/:qualificationId')
  .get(validate(QualificationValidation.getStaffQualification), qualificationController.getProfessionalQualificationById)
  .patch(
    validate(QualificationValidation.updateStaffQualification),
    qualificationController.updateProfessionalQualificationById
  )
  .delete(
    validate(QualificationValidation.deleteStaffQualification),
    qualificationController.deleteProfessionalQualificationById
  );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StaffQualification
 *   description: Staff Professional Qualification
 */

/**
 * @swagger
 * /staffqualification:
 *   post:
 *     summary: Create a Staff Professional Qualification
 *     tags: [StaffQualification]
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
 *                $ref: '#/components/schemas/StaffQualification'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Staff Professional Qualification
 *     tags: [StaffQualification]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           name: string
 *         description: Staff Professional Qualification *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffQualification'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /staffqualification/{qualificationId}:
 *   get:
 *     summary: Get a Staff Professional Qualification
 *     tags: [StaffQualification]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: qualificationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffQualification'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Staff Professional Qualification
 *     tags: [StaffQualification]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: qualificationId
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
 *                $ref: '#/components/schemas/StaffQualification'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Staff Professional Qualification
 *     tags: [StaffQualification]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: qualificationId
 *         required: true
 *         schema:
 *           type: string
 *         description: delete a Staff Professional Qualification
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
