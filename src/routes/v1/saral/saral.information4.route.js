const express = require('express');

const validate = require('../../../middlewares/validate');
const saralInformation4Validation = require('../../../validations/saral/saral.information4.validation');
const saralInfo4Controller = require('../../../controllers/saral/saral.information4.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(saralInformation4Validation.createSaralInfo4), saralInfo4Controller.createSaralInfo4)
  .get(validate(saralInformation4Validation.getAllSaralInfo4s), saralInfo4Controller.getSaralInfo4s);

router
  .route('/:saralId')
  .get(validate(saralInformation4Validation.getSaralInfo4), saralInfo4Controller.getSaralInfo4)
  .patch(validate(saralInformation4Validation.updateSaralInfo4ById), saralInfo4Controller.updateSaralInfo4)
  .delete(validate(saralInformation4Validation.deleteSaralInfo4ById), saralInfo4Controller.deleteSaralInfo4);
router
  .route('/saral-info/:saralId')
  .get(validate(saralInformation4Validation.getSaralInfo), saralInfo4Controller.getSaralInfoBysaralId);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: SaralInformation4
 *   description: Saral Information4
 */

/**
 * @swagger
 * /saralInformation4:
 *   post:
 *     summary: Create a Saral information4
 *     tags: [SaralInformation4]
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
 *               - typeofactivity
 *               - feestructapprove
 *               - feerevisionpendstatelev
 *               - committeesmc
 *               - smcacademicyear
 *               - smccommitteplan
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
 *             properties:
 *               saralId : string
 *               scode: string
 *               typeofactivity: string
 *               feestructapprove: string
 *               feerevisionpendstatelev: string
 *               committeesmc: string
 *               smcacademicyear: number
 *               smccommitteplan: string
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
 *             example:
 *               saralId : "234223423424"
 *               scode: mh00001
 *               typeofactivity: test
 *               feestructapprove: Test1
 *               feerevisionpendstatelev: Test1
 *               committeesmc: Test1
 *               smcacademicyear: 5
 *               smccommitteplan: Yes
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
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation4'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Saral Information4
 *     tags: [SaralInformation4]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Saral Information4
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
 *                     $ref: '#/components/schemas/SaralInformation4'
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
 * /saralInformation4/{saralId}:
 *   get:
 *     summary: Get a Saral Information4 by object ID
 *     tags: [SaralInformation4]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Information4 saralId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation4'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Saral Information4
 *     tags: [SaralInformation4]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Infromation4 saralId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               typeofactivity: string
 *               feestructapprove: string
 *               feerevisionpendstatelev: string
 *               committeesmc: string
 *               smcacademicyear: number
 *               smccommitteplan: string
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
 *             example:
 *               typeofactivity: test
 *               feestructapprove: Test1
 *               feerevisionpendstatelev: Test1
 *               committeesmc: Test1
 *               smcacademicyear: 5
 *               smccommitteplan: Yes
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
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation4'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Saral Information4
 *     tags: [SaralInformation4]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Infromation4 By saralId
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
 * /saralInformation4/saral-info/{saralId}:
 *   get:
 *     summary: Get  saralInformation4 by saralId
 *     tags: [SaralInformation4]
 *     parameters:
 *       - in: path
 *         name: saralId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Saral saralInformation4.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/saralInformation4'
 *       '404':
 *         description:  saralInformation4 not found.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */
