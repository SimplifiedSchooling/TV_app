const express = require('express');

const validate = require('../../../middlewares/validate');
const managmentCodeschool = require('../../../validations/masterValidations/management.codeSchool.validation');
const managmentCodeSchool = require('../../../controllers/masterControllers/managment.codeSchool.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(managmentCodeschool.createManaCodeSchool), managmentCodeSchool.createManagmentCodeSchool)
  .get(validate(managmentCodeschool.getAllManaCodeSchools), managmentCodeSchool.getManagmentCodeSchools);

router
  .route('/:managementCodeId')
  .get(validate(managmentCodeschool.getManaCodeSchool), managmentCodeSchool.getManagmentCodeSchool)
  .patch(validate(managmentCodeschool.updateManaCodeSchool), managmentCodeSchool.updateManagmentCodeSchool)
  .delete(validate(managmentCodeschool.deleteManaCodeSchool), managmentCodeSchool.deleteManagmentCodeSchool);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: ManagementCode
 *   description: Management code of school
 */

/**
 * @swagger
 * /managCodeschool:
 *   post:
 *     summary: Create a Management Code
 *     tags: [ManagementCode]
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
 *               - code
 *               - group
 *             properties:
 *               name:
 *                 type: string *
 *               code:
 *                 type: number
 *               group:
 *                 type: string
 *             example:
 *               name: xyz
 *               code: 12
 *               group: A
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementCode'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Management Code
 *     tags: [ManagementCode]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: build
 *         schema:
 *           name: string
 *         description: Management Code *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementCode'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /managCodeschool/{managementCodeId}:
 *   get:
 *     summary: Get a Management code
 *     tags: [ManagementCode]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: managementCodeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementCode'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Management Code
 *     tags: [ManagementCode]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: managementCodeId
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
 *               code:
 *                 type: number
 *               group:
 *                 type: string
 *             example:
 *               name: fake name*
 *               code: 12
 *               group: fake group
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementCode'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Management Code
 *     tags: [ManagementCode]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: managementCodeId
 *         required: true
 *         schema:
 *           type: string
 *         description: managementCodeId
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
