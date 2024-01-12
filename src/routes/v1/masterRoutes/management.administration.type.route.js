const express = require('express');

const validate = require('../../../middlewares/validate');
const managmentAdministrationType = require('../../../validations/masterValidations/management.codeSchool.validation');
const managementAdministrationType = require('../../../controllers/masterControllers/management.administration.type.controller');

const router = express.Router();

router
  .route('/')
  .post(
    validate(managmentAdministrationType.createManagementAdministrationType),
    managementAdministrationType.createManagementAdministrationType
  )
  .get(
    validate(managmentAdministrationType.getAllManagementAdministrationTypes),
    managementAdministrationType.getManagementAdministrationTypes
  );

router
  .route('/:managementAdmTypeId')
  .get(
    validate(managmentAdministrationType.getManagementAdministrationType),
    managementAdministrationType.getManagementAdministrationType
  )
  .patch(
    validate(managmentAdministrationType.updateManagementAdministrationType),
    managementAdministrationType.updateManagementAdministrationType
  )
  .delete(
    validate(managmentAdministrationType.deleteManagementAdministrationType),
    managementAdministrationType.deleteManagementAdministrationType
  );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: ManagementAdministrationType
 *   description: Management Administration type
 */

/**
 * @swagger
 * /managAdministrationType:
 *   post:
 *     summary: Create a Management Administration
 *     tags: [ManagementAdministrationType]
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
 *               type:
 *                 type: string *
 *             example:
 *               type: xyz
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementAdministrationType'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Management Administration type
 *     tags: [ManagementAdministrationType]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: build
 *         schema:
 *           name: string
 *         description: Management Administration *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementAdministrationType'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /managAdministrationType/{managementAdmTypeId}:
 *   get:
 *     summary: Get a Management Administration type
 *     tags: [ManagementAdministrationType]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: managementAdmTypeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementAdministrationType'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Management Administration
 *     tags: [ManagementAdministrationType]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: managementAdmTypeId
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
 *               type:
 *                 type: string
 *             example:
 *               type: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementAdministrationType'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Management Administrator Type
 *     tags: [ManagementAdministrationType]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: managementAdmTypeId
 *         required: true
 *         schema:
 *           type: string
 *         description: managementAdmTypeId
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
