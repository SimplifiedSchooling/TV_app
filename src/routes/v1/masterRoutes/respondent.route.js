const express = require('express');

const validate = require('../../../middlewares/validate');
const Respondents = require('../../../validations/masterValidations/respondent.validation');
const Respondent = require('../../../controllers/masterControllers/respondent.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(Respondents.createRespondent), Respondent.createRespondent)
  .get(validate(Respondents.getAllRespondents), Respondent.getAllRespondents);

router
  .route('/:respondentId')
  .get(validate(Respondents.getRespondent), Respondent.getRespondent)
  .patch(validate(Respondents.updateRespondent), Respondent.updateRespondent)
  .delete(validate(Respondents.deleteRespondent), Respondent.deleteRespondent);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Respondent
 *   description: Respondent
 */

/**
 * @swagger
 * /RespondentType:
 *   post:
 *     summary: Create a Respondent Type
 *     tags: [Respondent]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *             properties:
 *               type:
 *                 type: string *
 *             example:
 *               type: abc
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Respondent'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Respondent Type
 *     tags: [Respondent]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           type: string
 *         description: respondent type *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Respondent'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /RespondentType/{respondentId}:
 *   get:
 *     summary: Get a Respondent type
 *     tags: [Respondent]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: respondentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Respondent'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Respondent type
 *     tags: [Respondent]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: respondentId
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
 *               type:
 *                 type: string
 *             example:
 *               type: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Respondent'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Respondent type
 *     tags: [Respondent]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: respondentId
 *         required: true
 *         schema:
 *           type: string
 *         description: respondentId
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
