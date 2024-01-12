const express = require('express');
const validate = require('../../../middlewares/validate');
const loanValidation = require('../../../validations/staff/applyloan.validation');
const loanController = require('../../../controllers/staff/applyloan.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(loanValidation.createLoan), loanController.createApplyLoan)
  .get(validate(loanValidation.getAllLoan), loanController.getAllApplyLoans);

router
  .route('/:loanId')
  .get(validate(loanValidation.getLoan), loanController.updateApplyLoan)
  .patch(validate(loanValidation.updateLoan), loanController.updateApplyLoan)
  .delete(validate(loanValidation.deleteLoan), loanController.deleteApplyLoan);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Loan
 *   description: Apply Loan Management
 */

/**
 * @swagger
 * /applyloan:
 *   post:
 *     summary: Create a apply loan
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - amount
 *             properties:
 *               title:
 *                 type: string *
 *               amount:
 *                 type: number *
 *             example:
 *               title: This is the title
 *               amount: 1
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Loan'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Apply Loan
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         title: name
 *         schema:
 *           title: string
 *         description: Apply Loan *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Loan'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /applyloan/{loanId}:
 *   get:
 *     summary: Get a Apply loan by id
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: loanId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Loan'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Apply Loan
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: loanId
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
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *             example:
 *               title: fake name*
 *               amount: 4
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Loan'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Apply Loan
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: loanId
 *         required: true
 *         schema:
 *           type: string
 *         description: loanId
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
