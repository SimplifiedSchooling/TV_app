const express = require('express');
const validate = require('../../../middlewares/validate');
const BoardingResidentialSchoolController = require('../../../controllers/masterControllers/boarding_residential_school.controller');
const BoardResidentialSchoolValidation = require('../../../validations/masterValidations/boaring_residential_school.validation');

const router = express.Router();

router
  .route('/')
  .post(
    validate(BoardResidentialSchoolValidation.createresidential),
    BoardingResidentialSchoolController.createBoardResidential
  )
  .get(
    validate(BoardResidentialSchoolValidation.getAllresidential),
    BoardingResidentialSchoolController.getAllBoardResidential
  );

router
  .route('/:ResidentialId')
  .get(
    validate(BoardResidentialSchoolValidation.getresidential),
    BoardingResidentialSchoolController.getBoardResidentialById
  )
  .patch(
    validate(BoardResidentialSchoolValidation.updateresidential),
    BoardingResidentialSchoolController.updateBoardResidential
  )
  .delete(
    validate(BoardResidentialSchoolValidation.deleteresidential),
    BoardingResidentialSchoolController.deleteBoardResidential
  );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: boardresidentialschool
 *   description: residentialschool management
 */

/**
 * @swagger
 * /boardresidentialschool:
 *   post:
 *     summary: Create a residentialschool
 *     tags: [boardresidentialschool]
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
 *               naboardme:
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
 *                $ref: '#/components/schemas/boardresidentialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all boardresidentialschool
 *     tags: [boardresidentialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Residential
 *         schema:
 *           type: string
 *         description: Residential name *
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
 *                     $ref: '#/components/schemas/boardresidentialschool'
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
 * /boardresidentialschool/{ResidentialId}:
 *   get:
 *     summary: Get a Residential
 *     tags: [boardresidentialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ResidentialId
 *         required: true
 *         schema:
 *           type: string
 *         description: ResidentialId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/boardresidentialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a boardresidentialschool
 *     tags: [boardresidentialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ResidentialId
 *         required: true
 *         schema:
 *           type: string
 *         description: ResidentialId
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
 *               name: Add new board
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/boardresidentialschool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a boardresidentialschool
 *     tags: [boardresidentialschool]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ResidentialId
 *         required: true
 *         schema:
 *           type: string
 *         description: ResidentialId
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
