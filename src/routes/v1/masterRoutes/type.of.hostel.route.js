const express = require('express');
const validate = require('../../../middlewares/validate');
const typeofhostelValidation = require('../../../validations/masterValidations/type.of.hostel.validation');
const typeofhostelController = require('../../../controllers/masterControllers/type.of.hostel.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(typeofhostelValidation.createHostel), typeofhostelController.createTypeOfHostel)
  .get(validate(typeofhostelValidation.getAllHostels), typeofhostelController.getAllTypeOfHostel);

router
  .route('/:hostelId')
  .get(validate(typeofhostelValidation.getHostel), typeofhostelController.getTypeOfHostelById)
  .patch(validate(typeofhostelValidation.updateHostel), typeofhostelController.updateTypeOfHostelById)
  .delete(validate(typeofhostelValidation.deleteHostel), typeofhostelController.deleteTypeOfHostelById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Typeofhostel
 *   description: Type of hostel description
 */

/**
 * @swagger
 * /typeofhostel:
 *   post:
 *     summary: Create a Type of hostel
 *     tags: [Typeofhostel]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - hostelType
 *             properties:
 *               hostelType:
 *                 type: string *
 *             example:
 *               hostelType: "All types"
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Typeofhostel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Type of hostel
 *     tags: [Typeofhostel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           name: string
 *         description: Type of hostel *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Typeofhostel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /typeofhostel/{hostelId}:
 *   get:
 *     summary: Get a Type of hostel
 *     tags: [Typeofhostel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: hostelId
 *         required: true
 *         schema:
 *           name: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Typeofhostel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Type of hostel
 *     tags: [Typeofhostel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: hostelId
 *         required: true
 *         schema:
 *           hostelType: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hostelType:
 *                 type: string
 *             example:
 *               hostelType: fake Special school*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Typeofhostel'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Type of hostel
 *     tags: [Typeofhostel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: hostelId
 *         required: true
 *         schema:
 *           name: string
 *         description: delete a Type of hostel
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
