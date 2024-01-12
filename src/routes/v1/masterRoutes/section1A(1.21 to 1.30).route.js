const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1A30Controller = require('../../../controllers/masterControllers/section1A(1.21 to 1.30).controller');
const Section1A30Validation = require('../../../validations/masterValidations/section1A(1.21 to 1.30).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1A30Validation.createSection1A30), Section1A30Controller.createSection1A30)
  .get(validate(Section1A30Validation.getAllSection1A30), Section1A30Controller.getAllSection1A30);

router
  .route('/:Section1A30Id')
  .get(validate(Section1A30Validation.getSection1A30), Section1A30Controller.getSection1A30ById)
  .patch(validate(Section1A30Validation.updateSection1A30), Section1A30Controller.updateSection1A30)
  .delete(validate(Section1A30Validation.deleteSection1A30), Section1A30Controller.deleteSection1A30);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section1A30
 *   description: section1A(1.21 to 1.30)  form - 3
 */

/**
 * @swagger
 * /Section1A30:
 *   post:
 *     summary: Create a Section1A30
 *     tags: [Section1A30]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - primaryclass
 *               - upperprimary
 *               - Secondary
 *               - languageId
 *               - cwsnschool
 *               - cwsnschooltype
 *               - trainingcenterschool
 *               - residentialschool
 *               - residentialschooltype
 *               - hosteltype
 *               - kgbvclass6boys
 *               - kgbvclass7boys
 *               - kgbvclass8boys
 *               - kgbvclass9boys
 *               - kgbvclass10boys
 *               - kgbvclass11boys
 *               - kgbvclass12boys
 *               - kgbvclass6girls
 *               - kgbvclass7girls
 *               - kgbvclass8girls
 *               - kgbvclass9girls
 *               - kgbvclass10girls
 *               - kgbvclass11girls
 *               - kgbvclass12girls
 *               - schoolhosteltype
 *               - hoprimary
 *               - hoprimaryboys
 *               - hoprimarygirls
 *               - houpperprimary
 *               - houpperprimaryboys
 *               - houpperprimarygirls
 *               - hosecondary
 *               - hosecondaryboys
 *               - hosecondarygirls
 *               - hohighersecondary
 *               - hohighersecondaryboys
 *               - hohighersecondarygirls
 *               - minorityschool
 *               - minoritytype
 *               - mothertongue
 *               - medium1
 *               - medium2
 *               - medium3
 *               - medium4
 *               - othermedium
 *               - languagetaught1
 *               - classtaught1
 *               - langtatboys1
 *               - langtatgirls1
 *               - langtattrans1
 *               - languagetaught2
 *               - classtaught2
 *               - langtatboys2
 *               - langtatgirls2
 *               - langtattrans2
 *               - languagetaught3
 *               - classtaught3
 *               - langtatboys3
 *               - langtatgirls3
 *               - langtattrans3
 *               - languagetaught4
 *               - classtaught4
 *               - langtatboys4
 *               - langtatgirls4
 *               - langtattrans4
 *               - languagetaught5
 *               - classtaught5
 *               - langtatboys5
 *               - langtatgirls5
 *               - langtattrans5
 *               - prevocational
 *               - scode
 *             example:
 *               primaryclass: Primary Class Value
 *               upperprimary: Upper Primary Value
 *               Secondary: Secondary Value
 *               languageId: 64d327a41128844220f0cce4
 *               cwsnschool: CWSN School Value
 *               cwsnschooltype: CWSN School Type Value
 *               shiftschool: Shift School Value
 *               trainingcenterschool: Training Center School Value
 *               residentialschool: Residential School Value
 *               residentialschooltype: Residential School Type Value
 *               hosteltype: Hostel Type Value
 *               kgbvclass6boys: KGBV Class 6 Boys Value
 *               kgbvclass7boys: KGBV Class 7 Boys Value
 *               kgbvclass8boys: KGBV Class 8 Boys Value
 *               kgbvclass9boys: KGBV Class 9 Boys Value
 *               kgbvclass10boys: KGBV Class 10 Boys Value
 *               kgbvclass11boys: KGBV Class 11 Boys Value
 *               kgbvclass12boys: KGBV Class 12 Boys Value
 *               kgbvclass6girls: KGBV Class 6 Girls Value
 *               kgbvclass7girls: KGBV Class 7 Girls Value
 *               kgbvclass8girls: KGBV Class 8 Girls Value
 *               kgbvclass9girls: KGBV Class 9 Girls Value
 *               kgbvclass10girls: KGBV Class 10 Girls Value
 *               kgbvclass11girls: KGBV Class 11 Girls Value
 *               kgbvclass12girls: KGBV Class 12 Girls Value
 *               schoolhosteltype: School Hostel Type Value
 *               hoprimary: HO Primary Value
 *               hoprimaryboys: HO Primary Boys Value
 *               hoprimarygirls: HO Primary Girls Value
 *               houpperprimaryboys: HO Upper Primary Boys Value
 *               houpperprimarygirls: HO Upper Primary Girls Value
 *               hosecondary: HO Secondary Value
 *               hosecondarygirls: HO Secondary Girls Value
 *               hohighersecondary: HO Higher Secondary Value
 *               hohighersecondaryboys: HO Higher Secondary Boys Value
 *               hohighersecondarygirls: HO Higher Secondary Girls Value
 *               minorityschool: Minority School Value
 *               minoritytype: Minority Type Value
 *               mothertongue: Mother Tongue Value
 *               medium1: 64d327a41128844220f0cce4
 *               medium2: 64d327a41128844220f0cce4
 *               medium3: 64d327a41128844220f0cce4
 *               medium4: 64d327a41128844220f0cce4
 *               othermedium: Other Medium Value
 *               languagetaught1: 64d327a41128844220f0cce4
 *               classtaught1: Class Taught 1 Value
 *               langtatboys1: Language Taught Boys 1 Value
 *               langtatgirls1: Language Taught Girls 1 Value
 *               langtattrans1: Language Taught Trans 1 Value
 *               languagetaught2: 64d327a41128844220f0cce4
 *               classtaught2: Class Taught 2 Value
 *               langtatboys2: Language Taught Boys 2 Value
 *               langtatgirls2: Language Taught Girls 2 Value
 *               langtattrans2: Language Taught Trans 2 Value
 *               languagetaught3: 64d327a41128844220f0cce4
 *               classtaught3: Class Taught 3 Value
 *               langtatboys3: Language Taught Boys 3 Value
 *               langtatgirls3: Language Taught Girls 3 Value
 *               langtattrans3: Language Taught Trans 3 Value
 *               languagetaught4: 64d327a41128844220f0cce4
 *               classtaught4: Class Taught 4 Value
 *               langtatboys4: Language Taught Boys 4 Value
 *               langtatgirls4: Language Taught Girls 4 Value
 *               langtattrans4: Language Taught Trans 4 Value
 *               languagetaught5: 64d327a41128844220f0cce4
 *               classtaught5: Class Taught 1 Value
 *               langtatboys5: Language Taught Boys 5 Value
 *               langtatgirls5: Language Taught Girls 5 Value
 *               langtattrans5: Language Taught Trans 5 Value
 *               prevocational: prevocational
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A30'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section1A30
 *     tags: [Section1A30]
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
 *                     $ref: '#/components/schemas/Section1A30'
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
 * /Section1A30/{Section1A30Id}:
 *   get:
 *     summary: Get a Section1A30
 *     tags: [Section1A30]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A30Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A30Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A30'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section1A30
 *     tags: [Section1A30]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A30Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A30Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - primaryclass
 *               - upperprimary
 *               - Secondary
 *               - languageId
 *               - cwsnschool
 *               - cwsnschooltype
 *               - trainingcenterschool
 *               - residentialschool
 *               - residentialschooltype
 *               - hosteltype
 *               - kgbvclass6boys
 *               - kgbvclass7boys
 *               - kgbvclass8boys
 *               - kgbvclass9boys
 *               - kgbvclass10boys
 *               - kgbvclass11boys
 *               - kgbvclass12boys
 *               - kgbvclass6girls
 *               - kgbvclass7girls
 *               - kgbvclass8girls
 *               - kgbvclass9girls
 *               - kgbvclass10girls
 *               - kgbvclass11girls
 *               - kgbvclass12girls
 *               - schoolhosteltype
 *               - hoprimary
 *               - hoprimaryboys
 *               - hoprimarygirls
 *               - houpperprimary
 *               - houpperprimaryboys
 *               - houpperprimarygirls
 *               - hosecondary
 *               - hosecondaryboys
 *               - hosecondarygirls
 *               - hohighersecondary
 *               - hohighersecondaryboys
 *               - hohighersecondarygirls
 *               - minorityschool
 *               - minoritytype
 *               - mothertongue
 *               - medium1
 *               - medium2
 *               - medium3
 *               - medium4
 *               - othermedium
 *               - languagetaught1
 *               - classtaught1
 *               - langtatboys1
 *               - langtatgirls1
 *               - langtattrans1
 *               - languagetaught2
 *               - classtaught2
 *               - langtatboys2
 *               - langtatgirls2
 *               - langtattrans2
 *               - languagetaught3
 *               - classtaught3
 *               - langtatboys3
 *               - langtatgirls3
 *               - langtattrans3
 *               - languagetaught4
 *               - classtaught4
 *               - langtatboys4
 *               - langtatgirls4
 *               - langtattrans4
 *               - languagetaught5
 *               - classtaught5
 *               - langtatboys5
 *               - langtatgirls5
 *               - langtattrans5
 *               - prevocational
 *             example:
 *               primaryclass: Primary Class Value
 *               upperprimary: Upper Primary Value
 *               Secondary: Secondary Value
 *               languageId: 64d327a41128844220f0cce4
 *               cwsnschool: CWSN School Value
 *               cwsnschooltype: CWSN School Type Value
 *               shiftschool: Shift School Value
 *               trainingcenterschool: Training Center School Value
 *               residentialschool: Residential School Value
 *               residentialschooltype: Residential School Type Value
 *               hosteltype: Hostel Type Value
 *               kgbvclass6boys: KGBV Class 6 Boys Value
 *               kgbvclass7boys: KGBV Class 7 Boys Value
 *               kgbvclass8boys: KGBV Class 8 Boys Value
 *               kgbvclass9boys: KGBV Class 9 Boys Value
 *               kgbvclass10boys: KGBV Class 10 Boys Value
 *               kgbvclass11boys: KGBV Class 11 Boys Value
 *               kgbvclass12boys: KGBV Class 12 Boys Value
 *               kgbvclass6girls: KGBV Class 6 Girls Value
 *               kgbvclass7girls: KGBV Class 7 Girls Value
 *               kgbvclass8girls: KGBV Class 8 Girls Value
 *               kgbvclass9girls: KGBV Class 9 Girls Value
 *               kgbvclass10girls: KGBV Class 10 Girls Value
 *               kgbvclass11girls: KGBV Class 11 Girls Value
 *               kgbvclass12girls: KGBV Class 12 Girls Value
 *               schoolhosteltype: School Hostel Type Value
 *               hoprimary: HO Primary Value
 *               hoprimaryboys: HO Primary Boys Value
 *               hoprimarygirls: HO Primary Girls Value
 *               houpperprimaryboys: HO Upper Primary Boys Value
 *               houpperprimarygirls: HO Upper Primary Girls Value
 *               hosecondary: HO Secondary Value
 *               hosecondarygirls: HO Secondary Girls Value
 *               hohighersecondary: HO Higher Secondary Value
 *               hohighersecondaryboys: HO Higher Secondary Boys Value
 *               hohighersecondarygirls: HO Higher Secondary Girls Value
 *               minorityschool: Minority School Value
 *               minoritytype: Minority Type Value
 *               mothertongue: Mother Tongue Value
 *               medium1: 64d327a41128844220f0cce4
 *               medium2: 64d327a41128844220f0cce4
 *               medium3: 64d327a41128844220f0cce4
 *               medium4: 64d327a41128844220f0cce4
 *               othermedium: Other Medium Value
 *               languagetaught1: 64d327a41128844220f0cce4
 *               classtaught1: Class Taught 1 Value
 *               langtatboys1: Language Taught Boys 1 Value
 *               langtatgirls1: Language Taught Girls 1 Value
 *               langtattrans1: Language Taught Trans 1 Value
 *               languagetaught2: 64d327a41128844220f0cce4
 *               classtaught2: Class Taught 2 Value
 *               langtatboys2: Language Taught Boys 2 Value
 *               langtatgirls2: Language Taught Girls 2 Value
 *               langtattrans2: Language Taught Trans 2 Value
 *               languagetaught3: 64d327a41128844220f0cce4
 *               classtaught3: Class Taught 3 Value
 *               langtatboys3: Language Taught Boys 3 Value
 *               langtatgirls3: Language Taught Girls 3 Value
 *               langtattrans3: Language Taught Trans 3 Value
 *               languagetaught4: 64d327a41128844220f0cce4
 *               classtaught4: Class Taught 4 Value
 *               langtatboys4: Language Taught Boys 4 Value
 *               langtatgirls4: Language Taught Girls 4 Value
 *               langtattrans4: Language Taught Trans 4 Value
 *               languagetaught5: 64d327a41128844220f0cce4
 *               classtaught5: Class Taught 1 Value
 *               langtatboys5: Language Taught Boys 5 Value
 *               langtatgirls5: Language Taught Girls 5 Value
 *               langtattrans5: Language Taught Trans 5 Value
 *               prevocational: prevocational
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A30'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section1A30
 *     tags: [Section1A30]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A30Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A30Id
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
