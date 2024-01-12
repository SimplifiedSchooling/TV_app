const express = require('express');

const validate = require('../../../middlewares/validate');
const managmentGroupschool = require('../../../validations/masterValidations/managment.groupschool.validation');
const managmentGroupSchool = require('../../../controllers/masterControllers/managment.groupSchool.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(managmentGroupschool.createManaGroupSchool), managmentGroupSchool.createManagmentGroupSchool)
  .get(validate(managmentGroupschool.getAllManaGroupSchools), managmentGroupSchool.getManagmentGroupSchools);

router
  .route('/:managementId')
  .get(validate(managmentGroupschool.getManaGroupSchool), managmentGroupSchool.getManagmentGroupSchool)
  .patch(validate(managmentGroupschool.updateManaGroupSchool), managmentGroupSchool.updateManagmentGroupSchool)
  .delete(validate(managmentGroupschool.deleteManaGroupSchool), managmentGroupSchool.deleteManagmentGroupSchool);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: ManagementGroup
 *   description: Management Group of school
 */

/**
 * @swagger
 * /managgroupschool:
 *   post:
 *     summary: Create a Management Group
 *     tags: [ManagementGroup]
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
 *                $ref: '#/components/schemas/ManagementGroup'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Management Group
 *     tags: [ManagementGroup]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: build
 *         schema:
 *           name: string
 *         description: Management Group *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementGroup'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /managgroupschool/{managementId}:
 *   get:
 *     summary: Get a Management Group
 *     tags: [ManagementGroup]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: managementId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ManagementGroup'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Management Group
 *     tags: [ManagementGroup]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: managementId
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
 *                $ref: '#/components/schemas/ManagementGroup'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Management Group
 *     tags: [ManagementGroup]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: managementId
 *         required: true
 *         schema:
 *           type: string
 *         description: buildingId
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
