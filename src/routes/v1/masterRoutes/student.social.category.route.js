const express = require('express');

const validate = require('../../../middlewares/validate');
const socialCategoryValidation = require('../../../validations/masterValidations/student.social.category.validation');
const studentSocialCategory = require('../../../controllers/masterControllers/student.social.category.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(socialCategoryValidation.createSocialCategory), studentSocialCategory.createSocialCategory)
  .get(validate(socialCategoryValidation.getAllSocialCategorys), studentSocialCategory.getAllSocialCategorys);

router
  .route('/:socialcategoryId')
  .get(validate(socialCategoryValidation.getSocialCategory), studentSocialCategory.getSocialCategory)
  .patch(validate(socialCategoryValidation.updateSocialCategory), studentSocialCategory.updateSocialCategory)
  .delete(validate(socialCategoryValidation.deleteSocialCategory), studentSocialCategory.deleteSocialCategory);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StudentSocialCategory
 *   description: Student Social Category
 */

/**
 * @swagger
 * /socialCategory:
 *   post:
 *     summary: Create a social Category Type
 *     tags: [StudentSocialCategory]
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
 *               name: abc
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentSocialCategory'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Student Social Category Type
 *     tags: [StudentSocialCategory]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         type: board
 *         schema:
 *           type: string
 *         description: Student Social Category type *
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentSocialCategory'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /socialCategory/{socialcategoryId}:
 *   get:
 *     summary: Get a Student Social Category type
 *     tags: [StudentSocialCategory]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: socialcategoryId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentSocialCategory'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Student Social Category type
 *     tags: [StudentSocialCategory]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: socialcategoryId
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
 *                $ref: '#/components/schemas/StudentSocialCategory'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Student Social Category type
 *     tags: [StudentSocialCategory]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: socialcategoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: socialcategoryId
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
