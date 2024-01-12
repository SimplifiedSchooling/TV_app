const express = require('express');

const validate = require('../../../middlewares/validate');
const typeOfICTSchool = require('../../../validations/masterValidations/typeofICT.validation');
const typeOfICT = require('../../../controllers/masterControllers/typeofICT.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(typeOfICTSchool.createTypeOfICTGovSchool), typeOfICT.createTypeOfICTGovSchool)
  .get(validate(typeOfICTSchool.getAllTypeOfICTGovSchools), typeOfICT.getAllTypeOfICTGovSchool);

router
  .route('/:typeOfICTId')
  .get(validate(typeOfICTSchool.getTypeOfICTGovSchool), typeOfICT.getTypeOfICTGovSchool)
  .patch(validate(typeOfICTSchool.updateTypeOfICTGovSchool), typeOfICT.updateTypeOfICTGovSchool)
  .delete(validate(typeOfICTSchool.deleteTypeOfICTGovSchool), typeOfICT.deleteTypeOfICTGovSchool);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: TypeOfICTgovschool
 *   description: Type of ICT gov school
 */

/**
 * @swagger
 * /TypeOfICTgovschool:
 *   post:
 *     summary: Create a Type of ICT gov school
 *     tags: [TypeOfICTgovschool]
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
 *                $ref: '#/components/schemas/TypeOfICTgovschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all type of ICT gov school
 *     tags: [TypeOfICTgovschool]
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
 *                $ref: '#/components/schemas/TypeOfICTgovschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /TypeOfICTgovschool/{typeOfICTId}:
 *   get:
 *     summary: Get a ICT gov School
 *     tags: [TypeOfICTgovschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: typeOfICTId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/TypeOfICTgovschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a ICT gov School
 *     tags: [TypeOfICTgovschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: typeOfICTId
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
 *                $ref: '#/components/schemas/TypeOfICTgovschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a School Building
 *     tags: [TypeOfICTgovschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: typeOfICTId
 *         required: true
 *         schema:
 *           type: string
 *         description: typeOfICTId
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
