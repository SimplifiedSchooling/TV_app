const express = require('express');
const validate = require('../../middlewares/validate');
const sessionValidation = require('../../validations/sessions.validation');
const sessionController = require('../../controllers/sessions.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(sessionValidation.createSession), sessionController.createSession)
  .get(validate(sessionValidation.getAllSession), sessionController.getAllSession);

router
  .route('/:sessionId')
  .get(validate(sessionValidation.getSessionById), sessionController.getSessionById)
  .patch(validate(sessionValidation.updateSessionId), sessionController.updateSessionById)
  .delete(validate(sessionValidation.deleteSessionById), sessionController.deleteSessionById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: session
 *   description:   session Management System
 */

/**
 * @swagger
 * /session:
 *   post:
 *     summary: Create a new Session
 *     tags: [session]
 *     requestBody:
 *       description: Session object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SessionInput'
 *     responses:
 *       200:
 *         description: session created successfully
 *   get:
 *     summary: Get list of Session
 *     tags: [session]
 *     responses:
 *       200:
 *         description: List of Sessionretrieved successfully
 *
 * /session/{sessionId}:
 *   patch:
 *     summary: Update a single Session by ID
 *     tags: [session]
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the session
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SessionInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Session not found
 *   delete:
 *     summary: Delete a single Sessionby ID
 *     tags: [session]
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the session
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Session not found
 *   get:
 *     summary: Get a single Sessionby ID
 *     tags: [session]
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the session
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: session not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SessionInput:
 *       type: object
 *       properties:
 *         sessionName:
 *           type: string
 *       example:
 *         sessionName: 2022-2023,2023-2024
 */
