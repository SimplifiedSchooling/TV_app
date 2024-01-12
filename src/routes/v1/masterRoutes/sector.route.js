const express = require('express');

const validate = require('../../../middlewares/validate');
const sectorValidation = require('../../../validations/masterValidations/sector.validation');
const sectorController = require('../../../controllers/masterControllers/sector.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(sectorValidation.createSector), sectorController.createSector)
  .get(validate(sectorValidation.getAllSectors), sectorController.getAllSector);

router
  .route('/:sectorId')
  .get(validate(sectorValidation.getSector), sectorController.getSectorById)
  .patch(validate(sectorValidation.updateSector), sectorController.updateSectorById)
  .delete(validate(sectorValidation.deleteSector), sectorController.deleteSectorById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sector description
 */

/**
 * @swagger
 * /sector:
 *   post:
 *     summary: Create a sector
 *     tags: [Sector]
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
 *               sector:
 *                 type: string *
 *             example:
 *               sector: "New"
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Sector'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Sector
 *     tags: [Sector]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           sector: string
 *         description: Sector *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Sector'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /sector/{sectorId}:
 *   get:
 *     summary: Get a Sector
 *     tags: [Sector]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sectorId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Sector'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Sector
 *     tags: [Sector]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sectorId
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
 *               sector:
 *                 type: string
 *             example:
 *               sector: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Sector'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Sector
 *     tags: [Sector]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sectorId
 *         required: true
 *         schema:
 *           type: string
 *         description: delete a sector
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
