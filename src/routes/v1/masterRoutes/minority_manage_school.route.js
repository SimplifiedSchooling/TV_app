const express = require('express');
const validate = require('../../../middlewares/validate');
const MinorityManageSchoolController = require('../../../controllers/masterControllers/minority_manage_school.controller');
const MinorityManageSchoolValidation = require('../../../validations/masterValidations/minority_manage_school.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(MinorityManageSchoolValidation.createminority), MinorityManageSchoolController.createminority)
  .get(validate(MinorityManageSchoolValidation.getAllminority), MinorityManageSchoolController.getAllminority);

router
  .route('/:minorityId')
  .get(validate(MinorityManageSchoolValidation.getAllminority), MinorityManageSchoolController.getminorityById)
  .patch(validate(MinorityManageSchoolValidation.updateminority), MinorityManageSchoolController.updateminority)
  .delete(validate(MinorityManageSchoolValidation.deleteminority), MinorityManageSchoolController.deleteminority);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: minoritymanageschool
 *   description: minoritymanageschool management
 */

/**
 * @swagger
 * /minoritymanageschool:
 *   post:
 *     summary: Create a minoritymanageschool
 *     tags: [minoritymanageschool]
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
 *               name: CBSC
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/minoritymanageschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all minority
 *     tags: [minoritymanageschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: minority
 *         schema:
 *           type: string
 *         description: minority name *
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
 *         description: Maximum number of users
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
 *                     $ref: '#/components/schemas/minoritymanageschool'
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
 * /minoritymanageschool/{minorityId}:
 *   get:
 *     summary: Get a minoritymanageschool
 *     tags: [minoritymanageschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: minorityId
 *         required: true
 *         schema:
 *           type: string
 *         description: minorityId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/minoritymanageschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a minoritymanageschool
 *     tags: [minoritymanageschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: minorityId
 *         required: true
 *         schema:
 *           type: string
 *         description: minorityId
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
 *                $ref: '#/components/schemas/minoritymanageschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a minoritymanageschool
 *     tags: [minoritymanageschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: minorityId
 *         required: true
 *         schema:
 *           type: string
 *         description: minorityId
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
