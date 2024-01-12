const express = require('express');
const validate = require('../../middlewares/validate');
const saralValidation = require('../../validations/saral.info.validation');
const SaralController = require('../../controllers/saral.info.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(saralValidation.createSaral), SaralController.createSaral)
  .get(validate(saralValidation.getAllSarals), SaralController.getSarals);

router
  .route('/:saralId')
  .get(validate(saralValidation.getSaral), SaralController.getSaral)
  .patch(validate(saralValidation.updateSaralById), SaralController.updateSaral)
  .delete(validate(saralValidation.deleteSaralById), SaralController.deleteSaral);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Sarals
 *   description: Saral Information
 */

/**
 * @swagger
 * /saralInfo:
 *   post:
 *     summary: Create a Saral
 *     tags: [Sarals]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - scode
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
 *               - maintenancegrant
 *               - buildingrant
 *               - pariposhan
 *               - buildingrent
 *               - othergrant
 *               - nostuadmissionquota
 *               - childenroll
 *               - nobookfiction
 *               - nobooknonfiction
 *               - magazine
 *               - jsmagazine:
 *               - rbook
 *               - tobaccoinside
 *               - smokingarea
 *               - infotobacco
 *               - cotpa
 *               - tobaccoinsideper
 *               - signage
 *               - controltobacco
 *               - intiativetobacco
 *               - statenodaloff
 *               - antitobacco
 *               - controltobaccocommite
 *               - meetreport
 *               - tobaccofreeschool
 *               - tobaccoyard
 *               - tfet
 *               - evidencetobacco
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
 *               - typeofactivity
 *               - ptaexecutiv
 *               - dateofapproval
 *               - feestructapprove
 *               - feerevisionpendstatelev
 *               - committeesmc
 *               - smcacademicyear
 *               - smccommitteplan
 *               - committedetail1
 *               - committeeconstitute
 *               - smcsmdccommitte
 *               - smdcpreviousyear
 *               - smdccommitteimprove
 *               - committedetail
 *               - committeeconstitutepta
 *               - noofmeetingpta
 *               - committedetailpta
 *               - committeeconstitutemta
 *               - committedetailmta
 *               - committeeconstituteac
 *               - committedetailac
 *               - committeeconstitutetc
 *               - committedetailtc
 *               - committeeconstitutesc
 *               - committedetailsc
 *               - committeeconstitutemdmc
 *               - committedetailmdmc
 *               - progress_count
 *               - progress_count1
 *               - progress_count2
 *               - progress_count3
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
 *                 type: number
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
 *               maintenancegrant: string
 *               buildingrant: string
 *               pariposhan: string
 *               buildingrent: number
 *               othergrant: string
 *               childenroll: number
 *               nostuadmissionquota: number
 *               nobookfiction: number
 *               nobooknonfiction: number
 *               magazine: string
 *               jsmagazine: number
 *               rbook: string
 *               tobaccoinside: string
 *               smokingarea: string
 *               infotobacco: string
 *               cotpa: string
 *               tobaccoinsideper: string
 *               signage: string
 *               controltobacco: string
 *               intiativetobacco: string
 *               statenodaloff: string
 *               antitobacco: string
 *               controltobaccocommite: string
 *               meetreport: string
 *               tobaccofreeschool: string
 *               tobaccoyard: string
 *               tfet: string
 *               evidencetobacco: string
 *               totallaptop: number
 *               totalprinter: number
 *               totalprinterfun: number
 *               laptopteacpurp: string
 *               complearnpurp: string
 *               computeradminpurp: string
 *               schoolnetwork: string
 *               bandwidth: string
 *               serviceprovider: string
 *               campusplan: string
 *               englishkit: string
 *               geographickit: string
 *               braillebooks: string
 *               largeprint: string
 *               noofutensils: number
 *               statusofutensils: string
 *               utensilsfrom: string
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
 *               transportprovider: string
 *               vehicaltype: string
 *               contractorowner: string
 *               rtoregistration: string
 *               drivername: string
 *               driverlicenseno: string
 *               driveraadharno: string
 *               helpername: string
 *               balwadicenter: number
 *               teacherresearch: number
 *               teacherarticlepublish: string
 *               curriculumdetails: string
 *               typeofactivity: string
 *               ptaexecutive: string
 *               dateofapproval: string
 *               feestructapprove: string
 *               feerevisionpendstatelev: string
 *               committeesmc: string
 *               smcacademicyear: number
 *               smccommitteplan: string
 *               committedetail1: string
 *               committeeconstitute: string
 *               smcsmdccommitte: string
 *               smdcpreviousyear: number
 *               smdccommitteimprove: string
 *               committedetail: string
 *               committeeconstitutepta: string
 *               noofmeetingpta: number
 *               committedetailpta: string
 *               committeeconstitutemta: string
 *               committedetailmta: string
 *               committeeconstituteac: string
 *               committedetailac: string
 *               committeeconstitutetc: string
 *               committedetailtc: string
 *               committeeconstitutesc: string
 *               committedetailsc: string
 *               committeeconstitutemdmc: string
 *               committedetailmdmc: string
 *               progress_count: string
 *               progress_count1: string
 *               progress_count2: string
 *               progress_count3: string
 *             example:
 *               scode: mh00001
 *               anganwadicenteradj: fake anganwadicenter
 *               noofanganwadinear: 1
 *               noofsevika: 2
 *               agewiseboy: 3
 *               agewisegirl: 10
 *               recognizbalwadi: 12
 *               recognitiondate: 2023
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
 *               maintenancegrant: Yes
 *               buildingrant: No
 *               pariposhan: No
 *               buildingrent: 5
 *               othergrant: Yes
 *               childenroll: 8
 *               nostuadmissionquota: 0
 *               nobookfiction: 9
 *               nobooknonfiction: 4
 *               magazine: Yes
 *               jsmagazine: 2
 *               rbook: Test
 *               tobaccoinside: Test
 *               smokingarea: Yes
 *               infotobacco: No
 *               cotpa: No
 *               tobaccoinsideper: No
 *               signage: No
 *               controltobacco: No
 *               intiativetobacco: No
 *               statenodaloff: No
 *               antitobacco: No
 *               controltobaccocommite: Yes
 *               meetreport: Yes
 *               tobaccofreeschool: Yes
 *               tobaccoyard: Yes
 *               tfet: Yes
 *               evidencetobacco: Yes
 *               totallaptop: 3
 *               totalprinter: 4
 *               totalprinterfun: 1
 *               laptopteacpurp: Yes
 *               complearnpurp: No
 *               computeradminpurp: No
 *               schoolnetwork: No
 *               bandwidth: No
 *               serviceprovider: No
 *               campusplan: Yes
 *               englishkit: Yes
 *               geographickit: Yes
 *               braillebooks: Yes
 *               largeprint: Yes
 *               noofutensils: 3
 *               balwadicenter : 4
 *               statusofutensils: No
 *               utensilsfrom: No
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
 *               transportprovider: Yes
 *               vehicaltype: Yes
 *               contractorowner: Yes
 *               rtoregistration: Yes
 *               drivername: Yes
 *               driverlicenseno: Yes
 *               driveraadharno: Yes
 *               helpername: Yes
 *               teacherresearch: 5
 *               teacherarticlepublish: Test1
 *               curriculumdetails: Test1
 *               typeofactivity: Test1
 *               ptaexecutive: Test1
 *               dateofapproval: Test1
 *               feestructapprove: Test1
 *               feerevisionpendstatelev: Test1
 *               committeesmc: Test1
 *               smcacademicyear: 5
 *               smccommitteplan: Yes
 *               committedetail1: Yes
 *               committeeconstitute: Yes
 *               smcsmdccommitte: Yes
 *               smdcpreviousyear: 7
 *               smdccommitteimprove: Yes
 *               committedetail: Yes
 *               committeeconstitutepta: Yes
 *               noofmeetingpta: 7
 *               committedetailpta: Yes
 *               committeeconstitutemta: Yes
 *               committedetailmta: Yes
 *               committeeconstituteac: Yes
 *               committedetailac: Yes
 *               committeeconstitutetc: Yes
 *               committedetailtc: Yes
 *               committeeconstitutesc: Yes
 *               committedetailsc: Yes
 *               committeeconstitutemdmc: Yes
 *               committedetailmdmc: Yes
 *               progress_count: Yes
 *               progress_count1: Yes
 *               progress_count2: Yes
 *               progress_count3: Yes
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Sarals'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Saral Information
 *     tags: [Sarals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Saral name
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
 *                     $ref: '#/components/schemas/Sarals'
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
 * /saralInfo/{saralId}:
 *   get:
 *     summary: Get a Saral by Id
 *     tags: [Sarals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Sarals'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Saral Information
 *     tags: [Sarals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral id
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
 *                 type: number
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
 *               maintenancegrant: string
 *               buildingrant: string
 *               pariposhan: string
 *               buildingrent: number
 *               othergrant: string
 *               childenroll: number
 *               nostuadmissionquota: number
 *               nobookfiction: number
 *               nobooknonfiction: number
 *               magazine: string
 *               jsmagazine: number
 *               rbook: string
 *               tobaccoinside: string
 *               smokingarea: string
 *               infotobacco: string
 *               cotpa: string
 *               tobaccoinsideper: string
 *               signage: string
 *               controltobacco: string
 *               intiativetobacco: string
 *               statenodaloff: string
 *               antitobacco: string
 *               controltobaccocommite: string
 *               meetreport: string
 *               tobaccofreeschool: string
 *               tobaccoyard: string
 *               tfet: string
 *               evidencetobacco: string
 *               totallaptop: number
 *               totalprinter: number
 *               totalprinterfun: number
 *               laptopteacpurp: string
 *               complearnpurp: string
 *               computeradminpurp: string
 *               schoolnetwork: string
 *               bandwidth: string
 *               serviceprovider: string
 *               campusplan: string
 *               englishkit: string
 *               geographickit: string
 *               braillebooks: string
 *               largeprint: string
 *               noofutensils: number
 *               statusofutensils: string
 *               utensilsfrom: string
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
 *               transportprovider: string
 *               vehicaltype: string
 *               contractorowner: string
 *               rtoregistration: string
 *               drivername: string
 *               driverlicenseno: string
 *               driveraadharno: string
 *               helpername: string
 *               balwadicenter: number
 *               teacherresearch: number
 *               teacherarticlepublish: string
 *               curriculumdetails: string
 *               typeofactivity: string
 *               ptaexecutive: string
 *               dateofapproval: string
 *               feestructapprove: string
 *               feerevisionpendstatelev: string
 *               committeesmc: string
 *               smcacademicyear: number
 *               smccommitteplan: string
 *               committedetail1: string
 *               committeeconstitute: string
 *               smcsmdccommitte: string
 *               smdcpreviousyear: number
 *               smdccommitteimprove: string
 *               committedetail: string
 *               committeeconstitutepta: string
 *               noofmeetingpta: number
 *               committedetailpta: string
 *               committeeconstitutemta: string
 *               committedetailmta: string
 *               committeeconstituteac: string
 *               committedetailac: string
 *               committeeconstitutetc: string
 *               committedetailtc: string
 *               committeeconstitutesc: string
 *               committedetailsc: string
 *               committeeconstitutemdmc: string
 *               committedetailmdmc: string
 *               progress_count: string
 *               progress_count1: string
 *               progress_count2: string
 *               progress_count3: string
 *             example:
 *               anganwadicenteradj: fake anganwadicenter
 *               noofanganwadinear: 1
 *               noofsevika: 2
 *               agewiseboy: 3
 *               agewisegirl: 10
 *               recognizbalwadi: 12
 *               recognitiondate: 2023
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
 *               maintenancegrant: Yes
 *               buildingrant: No
 *               pariposhan: No
 *               buildingrent: 5
 *               othergrant: Yes
 *               childenroll: 8
 *               nostuadmissionquota: 0
 *               nobookfiction: 9
 *               nobooknonfiction: 4
 *               magazine: Yes
 *               jsmagazine: 2
 *               rbook: Test
 *               tobaccoinside: Test
 *               smokingarea: Yes
 *               infotobacco: No
 *               cotpa: No
 *               tobaccoinsideper: No
 *               signage: No
 *               controltobacco: No
 *               intiativetobacco: No
 *               statenodaloff: No
 *               antitobacco: No
 *               controltobaccocommite: Yes
 *               meetreport: Yes
 *               tobaccofreeschool: Yes
 *               tobaccoyard: Yes
 *               tfet: Yes
 *               evidencetobacco: Yes
 *               totallaptop: 3
 *               totalprinter: 4
 *               totalprinterfun: 1
 *               laptopteacpurp: Yes
 *               complearnpurp: No
 *               computeradminpurp: No
 *               schoolnetwork: No
 *               bandwidth: No
 *               serviceprovider: No
 *               campusplan: Yes
 *               englishkit: Yes
 *               geographickit: Yes
 *               braillebooks: Yes
 *               largeprint: Yes
 *               noofutensils: 3
 *               balwadicenter : 4
 *               statusofutensils: No
 *               utensilsfrom: No
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
 *               transportprovider: Yes
 *               vehicaltype: Yes
 *               contractorowner: Yes
 *               rtoregistration: Yes
 *               drivername: Yes
 *               driverlicenseno: Yes
 *               driveraadharno: Yes
 *               helpername: Yes
 *               teacherresearch: 5
 *               teacherarticlepublish: Test1
 *               curriculumdetails: Test1
 *               typeofactivity: Test1
 *               ptaexecutive: Test1
 *               dateofapproval: Test1
 *               feestructapprove: Test1
 *               feerevisionpendstatelev: Test1
 *               committeesmc: Test1
 *               smcacademicyear: 5
 *               smccommitteplan: Yes
 *               committedetail1: Yes
 *               committeeconstitute: Yes
 *               smcsmdccommitte: Yes
 *               smdcpreviousyear: 7
 *               smdccommitteimprove: Yes
 *               committedetail: Yes
 *               committeeconstitutepta: Yes
 *               noofmeetingpta: 7
 *               committedetailpta: Yes
 *               committeeconstitutemta: Yes
 *               committedetailmta: Yes
 *               committeeconstituteac: Yes
 *               committedetailac: Yes
 *               committeeconstitutetc: Yes
 *               committedetailtc: Yes
 *               committeeconstitutesc: Yes
 *               committedetailsc: Yes
 *               committeeconstitutemdmc: Yes
 *               committedetailmdmc: Yes
 *               progress_count: Yes
 *               progress_count1: Yes
 *               progress_count2: Yes
 *               progress_count3: Yes
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Sarals'
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
 *     summary: Delete a Saral Information
 *     tags: [Sarals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral id
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
