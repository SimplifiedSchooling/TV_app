const express = require('express');

const validate = require('../../../middlewares/validate');
const saralInformation3Validation = require('../../../validations/saral/saral.information3.validation');
const saralInfo3Controller = require('../../../controllers/saral/saral.information3.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(saralInformation3Validation.createSaralInfo3), saralInfo3Controller.createSaralInfo3)
  .get(validate(saralInformation3Validation.getAllSaralInfo3s), saralInfo3Controller.getSaralInfo3s);

router
  .route('/:saralId')
  .get(validate(saralInformation3Validation.getSaralInfo3), saralInfo3Controller.getSaralInfo3)
  .patch(validate(saralInformation3Validation.updateSaralInfo3ById), saralInfo3Controller.updateSaralInfo3)
  .delete(validate(saralInformation3Validation.deleteSaralInfo3ById), saralInfo3Controller.deleteSaralInfo3);
router
  .route('/saral-info/:saralId')
  .get(validate(saralInformation3Validation.getSaralInfo), saralInfo3Controller.getSaralInfoBysaralId);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: SaralInformation3
 *   description: Saral Information3
 */

/**
 * @swagger
 * /saralInformation3:
 *   post:
 *     summary: Create a Saral Information3
 *     tags: [SaralInformation3]
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
 *               - totallaptop
 *               - totalprinter
 *               - totalprinterfun
 *               - laptopteacpurp
 *               - complearnpurp
 *               - computeradminpurp
 *               - schoolnetwork
 *               - bandwidth
 *               - serviceprovider
 *               - campusplan
 *               - englishkit
 *               - geographickit
 *               - braillebooks
 *               - largeprint
 *               - noofutensils
 *               - statusofutensils
 *               - utensilsfrom
 *               - noofplates:
 *               - noofspoons:
 *               - noofglass:
 *               - weighingmachine
 *               - heightmeastool
 *               - yearofprocurement
 *               - badminton
 *               - basketball
 *               - carrom
 *               - yoga
 *               - football
 *               - meterrun
 *               - allequipments:
 *               - seatingarrang
 *               - seatingarrangava
 *               - seatingarrangereq
 *               - transportprovider
 *               - vehicaltype
 *               - contractorowner
 *               - rtoregistration
 *               - drivername
 *               - driverlicenseno
 *               - driveraadharno
 *               - helpername
 *               - teacherresearch:
 *               - teacherarticlepublish
 *               - curriculumdetails
 *             properties:
 *               saralId : string
 *               totallaptop: number
 *               totalprinter: number
 *               totalprinterfun: number
 *               laptopteacpurp: string
 *               complearnpurp: string
 *               computeradminpurp: string
 *               schoolnetwork: string
 *               bandwidth: number
 *               serviceprovider: string
 *               campusplan: string
 *               englishkit: string
 *               geographickit: string
 *               braillebooks: string
 *               largeprint: string
 *               noofutensils: number
 *               statusofutensils: string
 *               utensilsfrom: number
 *               noofplates: number
 *               noofspoons: number
 *               noofglass: number
 *               weighingmachine: string
 *               heightmeastool: string
 *               yearofprocurement: number
 *               badminton: string
 *               basketball: string
 *               carrom: string
 *               yoga: string
 *               football: string
 *               meterrun: string
 *               allequipments: number
 *               seatingarrang: string
 *               seatingarrangava: string
 *               seatingarrangereq: string
 *               transportprovider: number
 *               vehicaltype: string
 *               contractorowner: string
 *               rtoregistration: string
 *               drivername: string
 *               driverlicenseno: number
 *               driveraadharno: number
 *               helpername: string
 *               teacherresearch: number
 *               teacherarticlepublish: number
 *               curriculumdetails: string
 *             example:
 *               saralId: "3242424222"
 *               scode: mh00001
 *               totallaptop: 3
 *               totalprinter: 4
 *               totalprinterfun: 1
 *               laptopteacpurp: Yes
 *               complearnpurp: No
 *               computeradminpurp: No
 *               schoolnetwork: No
 *               bandwidth: 12
 *               serviceprovider: No
 *               campusplan: Yes
 *               englishkit: Yes
 *               geographickit: Yes
 *               braillebooks: Yes
 *               largeprint: Yes
 *               noofutensils: 3
 *               statusofutensils: No
 *               utensilsfrom: 1
 *               noofplates: 8
 *               noofspoons: 8
 *               noofglass: 8
 *               weighingmachine: No
 *               heightmeastool: No
 *               yearofprocurement: 8
 *               badminton: No
 *               basketball: Test
 *               carrom: Test
 *               yoga: Test
 *               football: Test
 *               meterrun: Test
 *               allequipments: 4
 *               seatingarrang: Test
 *               seatingarrangava: Test
 *               seatingarrangereq: Yes
 *               transportprovider: 1
 *               vehicaltype: Yes
 *               contractorowner: Yes
 *               rtoregistration: Yes
 *               drivername: Yes
 *               driverlicenseno: 2
 *               driveraadharno: 5
 *               helpername: Yes
 *               teacherresearch: 5
 *               teacherarticlepublish: 6
 *               curriculumdetails: Test1
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation3'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Saral Information3
 *     tags: [SaralInformation3]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Saral Information3 name
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
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
 *                     $ref: '#/components/schemas/SaralInformation3'
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
 * /saralInformation3/{saralId}:
 *   get:
 *     summary: Get a Saral Information3 by object ID
 *     tags: [SaralInformation3]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Information3 saralId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation3'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Saral Information3
 *     tags: [SaralInformation3]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Information3 saralId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               totallaptop: number
 *               totalprinter: number
 *               totalprinterfun: number
 *               laptopteacpurp: string
 *               complearnpurp: string
 *               computeradminpurp: string
 *               schoolnetwork: string
 *               bandwidth: number
 *               serviceprovider: string
 *               campusplan: string
 *               englishkit: string
 *               geographickit: string
 *               braillebooks: string
 *               largeprint: string
 *               noofutensils: number
 *               statusofutensils: string
 *               utensilsfrom: number
 *               noofplates: number
 *               noofspoons: number
 *               noofglass: number
 *               weighingmachine: string
 *               heightmeastool: string
 *               yearofprocurement: number
 *               badminton: string
 *               basketball: string
 *               carrom: string
 *               yoga: string
 *               football: string
 *               meterrun: string
 *               allequipments: number
 *               seatingarrang: string
 *               seatingarrangava: string
 *               seatingarrangereq: string
 *               transportprovider: number
 *               vehicaltype: string
 *               contractorowner: string
 *               rtoregistration: string
 *               drivername: string
 *               driverlicenseno: number
 *               driveraadharno: number
 *               helpername: string
 *               teacherresearch: number
 *               teacherarticlepublish: number
 *               curriculumdetails: string
 *             example:
 *               totallaptop: 3
 *               totalprinter: 4
 *               totalprinterfun: 1
 *               laptopteacpurp: Yes
 *               complearnpurp: No
 *               computeradminpurp: No
 *               schoolnetwork: No
 *               bandwidth: 12
 *               serviceprovider: No
 *               campusplan: Yes
 *               englishkit: Yes
 *               geographickit: Yes
 *               braillebooks: Yes
 *               largeprint: Yes
 *               noofutensils: 3
 *               statusofutensils: No
 *               utensilsfrom: 3
 *               noofplates: 8
 *               noofspoons: 8
 *               noofglass: 8
 *               weighingmachine: No
 *               heightmeastool: No
 *               yearofprocurement: 8
 *               badminton: No
 *               basketball: Test
 *               carrom: Test
 *               yoga: Test
 *               football: Test
 *               meterrun: Test
 *               allequipments: 4
 *               seatingarrang: Test
 *               seatingarrangava: Test
 *               seatingarrangereq: Yes
 *               transportprovider: 1
 *               vehicaltype: Yes
 *               contractorowner: Yes
 *               rtoregistration: Yes
 *               drivername: Yes
 *               driverlicenseno: 5
 *               driveraadharno: 8
 *               helpername: Yes
 *               teacherresearch: 5
 *               teacherarticlepublish: 7
 *               curriculumdetails: Test1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation3'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Saral Information3
 *     tags: [SaralInformation3]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Information3 saralId
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

/**
 * @swagger
 * /saralInformation3/saral-info/{saralId}:
 *   get:
 *     summary: Get  SaralInformation2 by saralId
 *     tags: [SaralInformation3]
 *     parameters:
 *       - in: path
 *         name: saralId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Saral SaralInformation3.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SaralInformation3'
 *       '404':
 *         description:  SaralInformation3 not found.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */
