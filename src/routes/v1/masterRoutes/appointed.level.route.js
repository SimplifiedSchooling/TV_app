const express = require('express');

const validate = require('../../../middlewares/validate');
const appointedValidation = require('../../../validations/masterValidations/appointed.level.validation');
const appointedController = require('../../../controllers/masterControllers/appointed.level.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(appointedValidation.createAppointedLevel), appointedController.createAppointed)
  .get(validate(appointedValidation.getAllAppointedLevels), appointedController.getAllAppointed);

router
  .route('/:appointedId')
  .get(validate(appointedValidation.getAppointedLevel), appointedController.getAppointed)
  .patch(validate(appointedValidation.updateAppointedLevel), appointedController.updateAppointed)
  .delete(validate(appointedValidation.deleteAppointedLevel), appointedController.deleteAppointed);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: AppointedLevel
 *   description: Appointed for Level
 */

/**
 * @swagger
 * /appointed:
 *   post:
 *     summary: Create a Appointed For Level
 *     tags: [AppointedLevel]
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
 *               name: xyz
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/AppointedLevel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Appointed For Level
 *     tags: [AppointedLevel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: build
 *         schema:
 *           name: string
 *         description: AppointedLevel *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/AppointedLevel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /appointed/{appointedId}:
 *   get:
 *     summary: Get a Appointed For Level
 *     tags: [AppointedLevel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: appointedId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/AppointedLevel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Appointed For Level
 *     tags: [AppointedLevel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: appointedId
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
 *                $ref: '#/components/schemas/AppointedLevel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Appointed For Level
 *     tags: [AppointedLevel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: appointedId
 *         required: true
 *         schema:
 *           type: string
 *         description: appointedId
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
