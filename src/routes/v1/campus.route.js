const express = require('express');
const validate = require('../../middlewares/validate');
const { campusController } = require('../../controllers');
const { campusValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(campusValidation.createCampus), campusController.createCampus)
  .get(validate(campusValidation.queryCampus), campusController.queryCampus);

router
  .route('/:campusId')
  .get(validate(campusValidation.getCampusById), campusController.getCampusById)
  .patch(validate(campusValidation.updateCampus), campusController.updateCampus)
  .delete(validate(campusValidation.deleteCampusById), campusController.deleteCampus);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Campus
 *   description: Campus management
 */

/**
 * @swagger
 * /campus:
 *   post:
 *     summary: Create a campus
 *     tags: [Campus]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UDISEcode:
 *                 type: string
 *               name:
 *                 type: string
 *               mobNumber:
 *                 type: number
 *               address:
 *                 type: string
 *               date:
 *                 type: date
 *             example:
 *               UDISEcode: MH0001
 *               name: fake school name
 *               mobNumber: 765368723632
 *               address: fake address
 *               date: 2020-05-12T16:18:04.793Z
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Campus'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get query campus
 *     tags: [Campus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: campus name *
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of campus
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Campus'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /campus/{campusId}:
 *   get:
 *     summary: Get a campus
 *     tags: [Campus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: campusId
 *         required: true
 *         schema:
 *           type: string
 *         description: campusId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Campus'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a campus
 *     tags: [Campus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: campusId
 *         required: true
 *         schema:
 *           type: string
 *         description: campusId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UDISEcode:
 *                 type: string
 *               name:
 *                 type: string
 *               mobNumber:
 *                 type: number
 *               address:
 *                 type: string
 *               date:
 *                 type: date
 *             example:
 *               UDISEcode: MH00001
 *               name: fake school name
 *               mobNumber: 765368723632
 *               address: fake address
 *               date: 2020-05-12T16:18:04.793Z
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Campus'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a campus
 *     tags: [Campus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: campusId
 *         required: true
 *         schema:
 *           type: string
 *         description: campusId
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
