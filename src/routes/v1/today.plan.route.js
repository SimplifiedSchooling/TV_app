const express = require('express');
const validate = require('../../middlewares/validate');
const planvideoController = require('../../controllers/today.plan.controller');
const planValidation = require('../../validations/today.plan.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(planValidation.createNewPlan), planvideoController.createNewPlan)
  .get(validate(planValidation.getAllPlan), planvideoController.getAllPlans);

router.route('/todayplan').get(validate(planValidation.getTodayPlan), planvideoController.getTodayPlans);

router
  .route('/:planId')
  .get(validate(planValidation.getSinglePlan), planvideoController.getSinglePlan)
  .patch(validate(planValidation.updatePlanById), planvideoController.updatePlan)
  .delete(validate(planValidation.deletePlanById), planvideoController.deletePlan);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: TodayPlan
 *   description: APIs for managing plan videos
 */

/**
 * @swagger
 * /todayplan:
 *   post:
 *     summary: Create a new plan video
 *     tags: [TodayPlan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodayPlanRequestBody'
 *     responses:
 *       201:
 *         description: Plan video successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TodayPlan'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all videos
 *     description: Only admins can retrieve all video.
 *     tags: [TodayPlan]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: User name *
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of video
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
 *                     $ref: '#/components/schemas/User'
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
 * /todayplan:
 *   get:
 *     summary: Get all plan videos
 *     tags: [TodayPlan]
 *     responses:
 *       200:
 *         description: List of plan videos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PlanVideo'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */

/**
 * @swagger
 * /todayplan/{planId}:
 *   get:
 *     summary: Get a single plan video by ID
 *     tags: [TodayPlan]
 *     parameters:
 *       - name: planId
 *         in: path
 *         description: ID of the plan video to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested plan video
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanVideo'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */

/**
 * @swagger
 * /todayplan/{planId}:
 *   patch:
 *     summary: Update a plan video by ID
 *     tags: [TodayPlan]
 *     parameters:
 *       - name: planId
 *         in: path
 *         description: ID of the plan video to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodayPlanRequestBody'
 *     responses:
 *       200:
 *         description: Plan video successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanVideo'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */

/**
 * @swagger
 * /todayplan/{planId}:
 *   delete:
 *     summary: Delete a plan video by ID
 *     tags: [TodayPlan]
 *     parameters:
 *       - name: planId
 *         in: path
 *         description: ID of the plan video to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Plan video successfully deleted
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */

/**
 * @swagger
 * /todayplan/todayplan:
 *   get:
 *     summary: Get all today plan videos
 *     tags: [TodayPlan]
 *     responses:
 *       200:
 *         description: List of  videos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PlanVideo'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     TodayPlanRequestBody:
 *       type: object
 *       required:
 *         - title
 *         - date
 *         - time
 *         - type
 *         - order
 *         - studioName
 *       properties:
 *         title:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *         time:
 *           type: string
 *           format: time
 *         type:
 *           type: string
 *         board:
 *           type: string
 *         medium:
 *           type: string
 *         class:
 *           type: string
 *         subject:
 *           type: string
 *         book:
 *           type: string
 *         chapter:
 *           type: string
 *         order:
 *           type: string
 *         studioName:
 *           type: string
 *         liveStreamingPath:
 *           type: string
 *         presenterName:
 *           type: string
 *         questions:
 *           type: array
 *           items:
 *             type: string
 *         videoPath:
 *           type: string
 *         poster:
 *           type: string
 *         thumpnail:
 *           type: string
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     PlanVideoUpdate:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 */
