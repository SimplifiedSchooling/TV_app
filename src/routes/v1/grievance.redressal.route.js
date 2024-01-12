const express = require('express');
const validate = require('../../middlewares/validate');
const grievanceController = require('../../controllers/grievance.redressal.controller');
const grievanceValidation = require('../../validations/grievance.redressal.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(grievanceValidation.createGrievanceRedressal), grievanceController.createGrievance)
  .get(validate(grievanceValidation.queryGrievanceRedressal), grievanceController.getAllGrievances);

router
  .route('/:grievanceRedressalId')
  .get(validate(grievanceValidation.getGrievanceRedressal), grievanceController.getGrievance)
  .patch(validate(grievanceValidation.updateGrievanceRedressal), grievanceController.updateGrievance)
  .delete(validate(grievanceValidation.deleteGrievanceRedressal), grievanceController.deleteGrievance);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: GrievanceRedressal
 *   description: Grievance Redressal
 */

/**
 * @swagger
 * /grievanceredressal:
 *   post:
 *     summary: Create a Grievance Redressal
 *     tags: [GrievanceRedressal]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - complainType
 *               - complainBy
 *               - phone
 *               - date
 *             properties:
 *               complainType:
 *                 type: string *
 *               complainBy:
 *                 type: string
 *               phone:
 *                 type: number
 *               date:
 *                 type: date
 *             example:
 *               complainType: Fees
 *               complainBy: Teacher
 *               phone: 9632123456
 *               date: 2023/10/11
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/GrievanceRedressal'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get query Grievance Redressal
 *     tags: [GrievanceRedressal]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Grievance Redressal
 *         schema:
 *           type: string
 *         description: Grievance Redressal *
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
 *         description: Maximum number of Grievance Redressal
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
 *                     $ref: '#/components/schemas/GrievanceRedressal'
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
 * /grievanceredressal/{grievanceRedressalId}:
 *   get:
 *     summary: Get a Grievance Redressal
 *     tags: [GrievanceRedressal]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: grievanceRedressalId
 *         required: true
 *         schema:
 *           type: string
 *         description: grievanceRedressalId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/GrievanceRedressal'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Grievance Redressal
 *     tags: [GrievanceRedressal]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: grievanceRedressalId
 *         required: true
 *         schema:
 *           type: string
 *         description: grievanceRedressalId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               complainType:
 *                 type: string *
 *               complainBy:
 *                 type: string
 *               phone:
 *                 type: number
 *               date:
 *                 type: date
 *             example:
 *               complainType: Admission
 *               complainBy: Head Teacher
 *               phone: 9688889900
 *               date: 2023/11/17
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/GrievanceRedressal'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Grievance Redressal
 *     tags: [GrievanceRedressal]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: grievanceRedressalId
 *         required: true
 *         schema:
 *           type: string
 *         description: grievanceRedressalId
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
