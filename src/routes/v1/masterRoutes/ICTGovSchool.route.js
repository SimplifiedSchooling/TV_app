const express = require('express');

const validate = require('../../../middlewares/validate');
const ICTGovSchool = require('../../../validations/masterValidations/ICTGovSchool.validation');
const ICTGovImplementSchool = require('../../../controllers/masterControllers/ICTGovSchool.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(ICTGovSchool.createICTGovSchool), ICTGovImplementSchool.createICTGovSchool)
  .get(validate(ICTGovSchool.getAllICTGovSchools), ICTGovImplementSchool.getAllICTGovSchool);

router
  .route('/:ictGovSchoolId')
  .get(validate(ICTGovSchool.getICTGovSchool), ICTGovImplementSchool.getICTGovSchool)
  .patch(validate(ICTGovSchool.updateICTGovSchool), ICTGovImplementSchool.updateICTGovSchool)
  .delete(validate(ICTGovSchool.deleteICTGovSchool), ICTGovImplementSchool.deleteICTGovSchool);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: ICTgovschool
 *   description: ICT gov Implement school
 */

/**
 * @swagger
 * /ICTgovschool:
 *   post:
 *     summary: Create a ICT gov school
 *     tags: [ICTgovschool]
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
 *                $ref: '#/components/schemas/ICTgovschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all ICT gov school
 *     tags: [ICTgovschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: build
 *         schema:
 *           name: string
 *         description: ICT gov school *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ICTgovschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /ICTgovschool/{ictGovSchoolId}:
 *   get:
 *     summary: Get a ICT gov School
 *     tags: [ICTgovschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ictGovSchoolId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ICTgovschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a ICT gov School
 *     tags: [ICTgovschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ictGovSchoolId
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
 *                $ref: '#/components/schemas/ICTgovschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a School Building
 *     tags: [ICTgovschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ictGovSchoolId
 *         required: true
 *         schema:
 *           type: string
 *         description: ictGovSchoolId
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
