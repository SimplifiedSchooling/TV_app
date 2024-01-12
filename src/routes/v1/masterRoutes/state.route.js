const express = require('express');

const validate = require('../../../middlewares/validate');
const stateValidation = require('../../../validations/masterValidations/state.validation');
const stateController = require('../../../controllers/masterControllers/state.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(stateValidation.createState), stateController.createState)
  .get(validate(stateValidation.getAllStates), stateController.getAllState);

router
  .route('/:stateId')
  .get(validate(stateValidation.getState), stateController.getStateById)
  .patch(validate(stateValidation.updateState), stateController.updateStateById)
  .delete(validate(stateValidation.deleteState), stateController.deleteStateById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: State
 *   description: State description
 */

/**
 * @swagger
 * /state:
 *   post:
 *     summary: Create a State
 *     tags: [State]
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
 *               stateName:
 *                 type: string *
 *             example:
 *               stateName: "New"
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/State'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all State
 *     tags: [State]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           state: string
 *         description: State *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/State'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /state/{stateId}:
 *   get:
 *     summary: Get a State
 *     tags: [State]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: stateId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/State'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a State
 *     tags: [State]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: stateId
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
 *               stateName:
 *                 type: string
 *             example:
 *               stateName: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/State'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a State
 *     tags: [State]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: stateId
 *         required: true
 *         schema:
 *           type: string
 *         description: delete a State
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
