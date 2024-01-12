const express = require('express');
const validate = require('../../../middlewares/validate');
const specialTraningValidation = require('../../../validations/masterValidations/school.special.training.validation');
const schooltraningController = require('../../../controllers/masterControllers/school.special.training.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(specialTraningValidation.createSchoolSpecialTraning), schooltraningController.createSchoolTraning)
  .get(validate(specialTraningValidation.getAllSchoolSpecialTraning), schooltraningController.getAllSchoolTranings);

router
  .route('/:traningId')
  .get(validate(specialTraningValidation.getSchoolSpecialTraningById), schooltraningController.getSchoolTraning)
  .patch(validate(specialTraningValidation.updateSchoolSpecialTraningId), schooltraningController.updateSchoolTraning)
  .delete(validate(specialTraningValidation.deleteSchoolSpecialTraningById), schooltraningController.deleteSchoolTraning);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: SchoolSpecialTraning
 *   description: School Special Traning Management
 */

/**
 * @swagger
 * /specialtraning:
 *   post:
 *     summary: Create a School Special Traning
 *     tags: [SchoolSpecialTraning]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string *
 *             example:
 *               name: School Teachers
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SchoolSpecialTraning'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all School Special Traning
 *     tags: [SchoolSpecialTraning]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: build
 *         schema:
 *           name: string
 *         description: School Special Traning *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SchoolSpecialTraning'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /specialtraning/{traningId}:
 *   get:
 *     summary: Get a School Special Traning
 *     tags: [SchoolSpecialTraning]
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
 *                $ref: '#/components/schemas/SchoolSpecialTraning'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a School Special Traning
 *     tags: [SchoolSpecialTraning]
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
 *                $ref: '#/components/schemas/SchoolSpecialTraning'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a School Special Traning
 *     tags: [SchoolSpecialTraning]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: traningId
 *         required: true
 *         schema:
 *           type: string
 *         description: traningId
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
