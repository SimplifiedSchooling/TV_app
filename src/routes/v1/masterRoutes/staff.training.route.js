const express = require('express');

const validate = require('../../../middlewares/validate');
const tranningValidation = require('../../../validations/masterValidations/staff.training.validation');
const tranningController = require('../../../controllers/masterControllers/staff.training.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(tranningValidation.createTranning), tranningController.createStaffTranning)
  .get(validate(tranningValidation.getAllTrannings), tranningController.getAllStaffTranning);

router
  .route('/:traningId')
  .get(validate(tranningValidation.getTranning), tranningController.getStaffTranningById)
  .patch(validate(tranningValidation.updateTranning), tranningController.updateStaffTranningById)
  .delete(validate(tranningValidation.deleteTranning), tranningController.deleteStaffTranningById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StaffTranning
 *   description: Staff Tranning
 */

/**
 * @swagger
 * /stafftranning:
 *   post:
 *     summary: Create a Staff Tranning
 *     tags: [StaffTranning]
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
 *                $ref: '#/components/schemas/StaffTranning'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Staff Tranning
 *     tags: [StaffTranning]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           name: string
 *         description: Staff Tranning *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffTranning'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /stafftranning/{traningId}:
 *   get:
 *     summary: Get a Staff Tranning
 *     tags: [StaffTranning]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: traningId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StaffTranning'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Staff Tranning
 *     tags: [StaffTranning]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: traningId
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
 *                $ref: '#/components/schemas/StaffTranning'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Staff Tranning
 *     tags: [StaffTranning]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: traningId
 *         required: true
 *         schema:
 *           type: string
 *         description: delete a Staff Tranning
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
