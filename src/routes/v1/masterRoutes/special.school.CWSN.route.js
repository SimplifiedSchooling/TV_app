const express = require('express');
const validate = require('../../../middlewares/validate');
const specialValidation = require('../../../validations/masterValidations/special.school.CWSN.validation');
const specialController = require('../../../controllers/masterControllers/special.school.CWSN.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(specialValidation.createSpecial), specialController.createSpecial)
  .get(validate(specialValidation.getAllSpecials), specialController.getAllSpecial);

router
  .route('/:specialId')
  .get(validate(specialValidation.getSpecial), specialController.getSpecialById)
  .patch(validate(specialValidation.updateSpecial), specialController.updateSpecialById)
  .delete(validate(specialValidation.deleteSpecial), specialController.deleteSpecialById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Specialschool
 *   description: Special School CWSN description
 */

/**
 * @swagger
 * /specialschool:
 *   post:
 *     summary: Create a Type of special school CWSN
 *     tags: [Specialschool]
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
 *               name: "Visual impairments"
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Specialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Type of Special school CWSN
 *     tags: [Specialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           name: string
 *         description: Type of Special school CWSN *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Specialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /specialschool/{specialId}:
 *   get:
 *     summary: Get a Type of Special school CWSN
 *     tags: [Specialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: specialId
 *         required: true
 *         schema:
 *           name: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Specialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Type of Special school CWSN
 *     tags: [Specialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: specialId
 *         required: true
 *         schema:
 *           name: string
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
 *               name: fake Special school*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Specialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Type of Special school CWSN
 *     tags: [Specialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: specialId
 *         required: true
 *         schema:
 *           name: string
 *         description: delete a Special school CWSN
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
