const express = require('express');

const validate = require('../../../middlewares/validate');
const schooleBuilding = require('../../../validations/masterValidations/schoole.building.validation');
const SchoolBuilding = require('../../../controllers/masterControllers/school.building.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(schooleBuilding.createBuilding), SchoolBuilding.createSchoolBuilding)
  .get(validate(schooleBuilding.getAllBuildings), SchoolBuilding.getAllSchoolBuilding);

router
  .route('/:buildingId')
  .get(validate(schooleBuilding.getBuilding), SchoolBuilding.getSchoolBuilding)
  .patch(validate(schooleBuilding.updateBuilding), SchoolBuilding.updateSchoolBuilding)
  .delete(validate(schooleBuilding.deleteBuilding), SchoolBuilding.deleteSchoolBuilding);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Building
 *   description: School building management
 */

/**
 * @swagger
 * /schoolBuilding:
 *   post:
 *     summary: Create a School building
 *     tags: [Building]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - buildingName
 *             properties:
 *               buildingName:
 *                 type: string *
 *             example:
 *               buildingName: xyz
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Building'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all school building
 *     tags: [Building]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: build
 *         schema:
 *           buildingName: string
 *         description: School Building *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Building'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /schoolBuilding/{buildingId}:
 *   get:
 *     summary: Get a School Building
 *     tags: [Building]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: buildingId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Building'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a School Building
 *     tags: [Building]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: buildingId
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
 *               buildingName:
 *                 type: string
 *             example:
 *               buildingName: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Building'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a School Building
 *     tags: [Building]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: buildingId
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
