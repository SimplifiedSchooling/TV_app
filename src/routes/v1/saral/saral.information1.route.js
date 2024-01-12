const express = require('express');

const validate = require('../../../middlewares/validate');
const saralInformation1Validation = require('../../../validations/saral/saral.information1.validation');
const saralInfo1Controller = require('../../../controllers/saral/saral.information1.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(saralInformation1Validation.createSaralInfo1), saralInfo1Controller.createSaralInfo1)
  .get(validate(saralInformation1Validation.getAllSaralInfo1s), saralInfo1Controller.getSaralInfo1s);

router
  .route('/:saralId')
  .get(validate(saralInformation1Validation.getSaralByobjectId), saralInfo1Controller.getSaralInfo1)
  .patch(validate(saralInformation1Validation.updateSaralInfo1ById), saralInfo1Controller.updateSaralInfo1)
  .delete(validate(saralInformation1Validation.deleteSaralInfo1ById), saralInfo1Controller.deleteSaralInfo1);

router
  .route('/saral-info/:saralId')
  .get(validate(saralInformation1Validation.getSaralInfo1), saralInfo1Controller.getSaralInfoBysaralId);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: SaralInformation1
 *   description: Saral Information1
 */

/**
 * @swagger
 * /saralInformation1:
 *   post:
 *     summary: Create a Saral Information1
 *     tags: [SaralInformation1]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - saralId
 *               - anganwadicenteradj
 *               - noofanganwadinear
 *               - noofsevika
 *               - agewiseboy
 *               - agewisegirl
 *               - balwadicenter
 *               - recognizbalwadi
 *               - recognitiondate
 *               - noofteacher
 *               - eodeputyvisit
 *               - eovisit
 *               - dodeputyvisit
 *               - ddvisits
 *               - dvisitno
 *               - zmdvisits
 *               - mdminspno
 *               - internalaudit
 *               - externalaudit
 *               - localauditb
 *               - auditorauditbgen
 *               - boarddisplay
 *               - socialaudit
 *               - grantssa
 *               - spillapril
 *               - expenditurers
 *               - sdevelopgrant
 *               - smaintenancegrant
 *               - tlmgrant
 *               - fundscwsn
 *               - grantcontingency
 *               - contingengrantob
 *               - modelschool1
 *               - sbpgadoptscheme
 *               - hostelallowance
 *               - publiccontribut
 *               - attendallowance
 *               - examfeerefund
 *               - csr
 *               - shetkiallowance
 *               - idmifund
 *             properties:
 *               saralId:
 *                 type: string
 *               anganwadicenteradj:
 *                 type: string
 *               noofanganwadinear:
 *                 type: number
 *               noofsevika:
 *                 type: number
 *               agewiseboy:
 *                 type: number
 *               agewisegirl:
 *                 type: number
 *               recognizbalwadi:
 *                 type: number
 *               recognitiondate:
 *                 type: date
 *               noofteacher:
 *                 type: number
 *               eodeputyvisit:
 *                 type: number
 *               eovisit:
 *                 type: number
 *               dodeputyvisit:
 *                 type: number
 *               ddvisits:
 *                 type: number
 *               dvisitno: number
 *               zmdvisits: number
 *               mdminspno: number
 *               internalaudit: number
 *               externalaudit: number
 *               localauditb: number
 *               auditorauditbgen: number
 *               boarddisplay: number
 *               socialaudit: string
 *               grantssa: string
 *               spillapril: number
 *               expenditurers: number
 *               sdevelopgrant: string
 *               smaintenancegrant: string
 *               tlmgrant: string
 *               fundscwsn: string
 *               grantcontingency: string
 *               contingengrantob: number
 *               modelschool1: number
 *               sbpgadoptscheme: number
 *               hostelallowance: number
 *               publiccontribut: number
 *               attendallowance: number
 *               examfeerefund: number
 *               csr: number
 *               shetkiallowance: number
 *               idmifund: number
 *             example:
 *               saralId: "34242424242"
 *               scode: mh00001
 *               anganwadicenteradj: fake anganwadicenter
 *               noofanganwadinear: 1
 *               noofsevika: 2
 *               agewiseboy: 3
 *               agewisegirl: 10
 *               recognizbalwadi: 12
 *               recognitiondate: 2023-03-11
 *               noofteacher: 5
 *               eodeputyvisit: 3
 *               eovisit: 4
 *               dodeputyvisit: 5
 *               ddvisits: 6
 *               dvisitno: 5
 *               zmdvisits: 3
 *               mdminspno: 6
 *               internalaudit: 8
 *               externalaudit: 9
 *               localauditb: 7
 *               auditorauditbgen: 9
 *               boarddisplay: 2
 *               socialaudit: test
 *               grantssa: yes
 *               spillapril: 2
 *               expenditurers: 4
 *               sdevelopgrant: no
 *               smaintenancegrant: yes
 *               tlmgrant: no
 *               fundscwsn: no
 *               grantcontingency: no
 *               contingengrantob: 3
 *               modelschool1: 4
 *               sbpgadoptscheme: 5
 *               hostelallowance: 6
 *               publiccontribut: 7
 *               attendallowance: 2
 *               examfeerefund: 2
 *               csr: 4
 *               shetkiallowance: 5
 *               idmifund: 5
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation1'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Saral Information1
 *     tags: [SaralInformation1]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Saral Information1 name
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
 *                     $ref: '#/components/schemas/SaralInformation1'
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
 * /saralInformation1/{saralId}:
 *   get:
 *     summary: Get a Saral Information1 by saral Object Id
 *     tags: [SaralInformation1]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Information1 saralId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation1'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Saral Information1
 *     tags: [SaralInformation1]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Information 1 saralId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               anganwadicenteradj:
 *                 type: string
 *               noofanganwadinear:
 *                 type: number
 *               noofsevika:
 *                 type: number
 *               agewiseboy:
 *                 type: number
 *               agewisegirl:
 *                 type: number
 *               recognizbalwadi:
 *                 type: number
 *               recognitiondate:
 *                 type: date
 *               noofteacher:
 *                 type: number
 *               eodeputyvisit:
 *                 type: number
 *               eovisit:
 *                 type: number
 *               dodeputyvisit:
 *                 type: number
 *               ddvisits:
 *                 type: number
 *               dvisitno: number
 *               zmdvisits: number
 *               mdminspno: number
 *               internalaudit: number
 *               externalaudit: number
 *               localauditb: number
 *               auditorauditbgen: number
 *               boarddisplay: number
 *               socialaudit: string
 *               grantssa: string
 *               spillapril: number
 *               expenditurers: number
 *               sdevelopgrant: string
 *               smaintenancegrant: string
 *               tlmgrant: string
 *               fundscwsn: string
 *               grantcontingency: string
 *               contingengrantob: number
 *               modelschool1: number
 *               sbpgadoptscheme: number
 *               hostelallowance: number
 *               publiccontribut: number
 *               attendallowance: number
 *               examfeerefund: number
 *               csr: number
 *               shetkiallowance: number
 *               idmifund: number
 *             example:
 *               anganwadicenteradj: fake anganwadicenter
 *               noofanganwadinear: 1
 *               noofsevika: 2
 *               agewiseboy: 3
 *               agewisegirl: 10
 *               recognizbalwadi: 12
 *               recognitiondate: 2023-03-11
 *               noofteacher: 5
 *               eodeputyvisit: 3
 *               eovisit: 4
 *               dodeputyvisit: 5
 *               ddvisits: 6
 *               dvisitno: 5
 *               zmdvisits: 3
 *               mdminspno: 6
 *               internalaudit: 8
 *               externalaudit: 9
 *               localauditb: 7
 *               auditorauditbgen: 9
 *               boarddisplay: 2
 *               socialaudit: test
 *               grantssa: yes
 *               spillapril: 2
 *               expenditurers: 4
 *               sdevelopgrant: no
 *               smaintenancegrant: yes
 *               tlmgrant: no
 *               fundscwsn: no
 *               grantcontingency: no
 *               contingengrantob: 3
 *               modelschool1: 4
 *               sbpgadoptscheme: 5
 *               hostelallowance: 6
 *               publiccontribut: 7
 *               attendallowance: 2
 *               examfeerefund: 2
 *               csr: 4
 *               shetkiallowance: 5
 *               idmifund: 5
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation1'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Saral Information1
 *     tags: [SaralInformation1]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Information1 saralId
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

// /**
//  * @swagger
//  * /saralInformation1/saral-info:
//  *   get:
//  *     summary: Get Saral Information1 by saralId
//  *     tags: [SaralInformation1]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - saralId
//  *             properties:
//  *               saralId:
//  *                 type: string
//  *             example:
//  *               saralId: "34242424242"
//  *         description: The ID of the Saral Information1.
//  *     responses:
//  *       '200':
//  *         description: Successful response
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 // Define your response properties here based on the result structure.
//  *       '404':
//  *         description: Saral Information1 not found.
//  *       '500':
//  *         description: Internal server error. An error occurred while processing the request.
//  */
/**
 * @swagger
 * /saralInformation1/saral-info/{saralId}:
 *   get:
 *     summary: Get Saral Information1 by saralId
 *     tags: [SaralInformation1]
 *     parameters:
 *       - in: path
 *         name: saralId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Saral Information1.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SaralInformation1'
 *       '404':
 *         description: Saral Information1 not found.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */
