const express = require('express');
const validate = require('../../../middlewares/validate');
const { LeaveController } = require('../../../controllers');
const { LeaveValidation } = require('../../../validations');
const { createS3Middleware } = require('../../../utils/s3middleware');

const router = express.Router();

router
  .route('/')
  .post(createS3Middleware('lmscontent'), validate(LeaveValidation.createLeave), LeaveController.createLeave)
  .get(validate(LeaveValidation.getAllLeave), LeaveController.getAllLeave);

router
  .route('/:LeaveId')
  .get(validate(LeaveValidation.getLeave), LeaveController.getLeaveById)
  .patch(createS3Middleware('lmscontent'), validate(LeaveValidation.updateLeave), LeaveController.updateLeave)
  .delete(validate(LeaveValidation.deleteLeave), LeaveController.deleteLeave);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Leave
 *   description: Leave swagger
 */

/**
 * @swagger
 * /Leave:
 *   post:
 *     summary: Create a Leave
 *     tags: [Leave]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *          multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: file
 *                   format: binary
 *               fromdate:
 *                 type: string
 *                 example: "2023-10-22"
 *               todate:
 *                 type: string
 *                 example: "2023-10-24"
 *               totaldays:
 *                 type: string
 *                 example: "2"
 *               reason:
 *                 type: string
 *                 example: "vacation"
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Leave'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Leave
 *     tags: [Leave]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Residential
 *         schema:
 *           type: string
 *         description: Residential name
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
 *                     $ref: '#/components/schemas/Leave'
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
 * /Leave/{LeaveId}:
 *   get:
 *     summary: Get a Leave
 *     tags: [Leave]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: LeaveId
 *         required: true
 *         schema:
 *           type: string
 *         description: LeaveId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Leave'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Leave
 *     tags: [Leave]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: LeaveId
 *         required: true
 *         schema:
 *           type: string
 *         description: LeaveId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - fromdate
 *               - todate
 *               - totaldays
 *               - reason
 *             example:
 *               fromdate: "2023-09-15"
 *               todate: "2023-09-17"
 *               totaldays: "2"
 *               reason: Vacation
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Leave'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Leave
 *     tags: [Leave]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: LeaveId
 *         required: true
 *         schema:
 *           type: string
 *         description: LeaveId
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
