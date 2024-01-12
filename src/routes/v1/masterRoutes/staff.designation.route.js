const express = require('express');

const validate = require('../../../middlewares/validate');
const staffDesignationValidation = require('../../../validations/masterValidations/staff.designation.validation');
const staffDesignationController = require('../../../controllers/masterControllers/staff.designation.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(staffDesignationValidation.createDesignation), staffDesignationController.createStaffDesignation)
  .get(validate(staffDesignationValidation.getAllDesignations), staffDesignationController.getAllStaffDesignation);

router
  .route('/:designationId')
  .get(validate(staffDesignationValidation.getDesignation), staffDesignationController.getStaffDesignationById)
  .patch(validate(staffDesignationValidation.updateDesignation), staffDesignationController.updateStaffDesignationById)
  .delete(validate(staffDesignationValidation.deleteDesignation), staffDesignationController.deleteStaffDesignationById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StaffDesignation
 *   description: Staff Designation
 */

/**
 * @swagger
 * /staffdesignation:
 *   post:
 *     summary: Create a Staff Designation
 *     tags: [StaffDesignation]
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
 *               name: "Class Teacher"
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffDesignation'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Staff Designation
 *     tags: [StaffDesignation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           StaffDesignation: string
 *         description: Staff Designation *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffDesignation'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /staffdesignation/{designationId}:
 *   get:
 *     summary: Get a Staff Designation
 *     tags: [StaffDesignation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: designationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffDesignation'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a StaffDesignation
 *     tags: [StaffDesignation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: designationId
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
 *                $ref: '#/components/schemas/StaffDesignation'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Staff Designation
 *     tags: [StaffDesignation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: designationId
 *         required: true
 *         schema:
 *           type: string
 *         description: delete a Staff Designation
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
