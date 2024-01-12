const express = require('express');
const validate = require('../../../middlewares/validate');
const districtValidation = require('../../../validations/masterValidations/district.validation');
const districtController = require('../../../controllers/masterControllers/district.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(districtValidation.createDistrict), districtController.createDistrict)
  .get(validate(districtValidation.getAllDistrict), districtController.getAllDistrict);

router
  .route('/:DistrictId')
  .get(validate(districtValidation.getDistrictById), districtController.getDistrictById)
  .patch(validate(districtValidation.updateDistrictTypeyId), districtController.updateDistrictById)
  .delete(validate(districtValidation.deleteDistrictTypeById), districtController.deleteistrictById);

router
  .route('/alldistrict/:stateId')
  .get(validate(districtValidation.getDistrictByStateId), districtController.getAllDistrictByStateId);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: District
 *   description:   district Management System
 */

/**
 * @swagger
 * /district:
 *   post:
 *     summary: Create a new district
 *     tags: [District]
 *     requestBody:
 *       description: district object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/District'
 *     responses:
 *       200:
 *         description: district created successfully
 *   get:
 *     summary: Get list of district
 *     tags: [District]
 *     responses:
 *       200:
 *         description: List of district retrieved successfully
 *
 * /district/{districtId}:
 *   patch:
 *     summary: Update a single district by ID
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: districtId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the district
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/District'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: district not found
 *   delete:
 *     summary: Delete a single district by ID
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: districtId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the district
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: district not found
 *   get:
 *     summary: Get a single district by ID
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: districtId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the district
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: district not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     District:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         stateId:
 *            type: string
 *       example:
 *         name: pune,nagpur
 *         stateId: 6512b9025f0082f0511d7ab2
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    District:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         stateId:
 *           type: string
 *       example:
 *         name: pune,nagpur
 *         stateId: 6512b9025f0082f0511d7ab2
 */
/**
 * @swagger
 * /district/alldistrict/{stateId}:
 *   get:
 *     summary: Get a District by State ID
 *     tags: [District]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: stateId
 *         required: true
 *         description: The ID of the subject
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/District'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
