const express = require('express');

const validate = require('../../../middlewares/validate');
const saralInformation2Validation = require('../../../validations/saral/saral.information2.validation');
const saralInfo2Controller = require('../../../controllers/saral/saral.information2.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(saralInformation2Validation.createSaralInfo2), saralInfo2Controller.createSaralInfo2)
  .get(validate(saralInformation2Validation.getAllSaralInfo2s), saralInfo2Controller.getSaralInfo2s);

router
  .route('/:saralId')
  .get(validate(saralInformation2Validation.getSaralInfo2), saralInfo2Controller.getSaralInfo2)
  .patch(validate(saralInformation2Validation.updateSaralInfo2ById), saralInfo2Controller.updateSaralInfo2)
  .delete(validate(saralInformation2Validation.deleteSaralInfo2ById), saralInfo2Controller.deleteSaralInfo2);
router
  .route('/saral-info/:saralId')
  .get(validate(saralInformation2Validation.getSaralInfo), saralInfo2Controller.getSaralInfoBysaralId);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: SaralInformation2
 *   description: Saral Information2
 */

/**
 * @swagger
 * /saralInformation2:
 *   post:
 *     summary: Create a Saral Information2
 *     tags: [SaralInformation2]
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
 *             properties:
 *               saralId: string
 *               scode: string
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
 *             example:
 *               saralId: "324232342432"
 *               scode: mh00001
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
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation2'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Saral Information2
 *     tags: [SaralInformation2]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Saral Information2 name
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
 *                     $ref: '#/components/schemas/SaralInformation2'
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
 * /saralInformation2/{saralId}:
 *   get:
 *     summary: Get a Saral Information2 by object ID
 *     tags: [SaralInformation2]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description:  saralId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation2'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Saral Information2
 *     tags: [SaralInformation2]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral information2 saralId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
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
 *             example:
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
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/SaralInformation2'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Saral Information2
 *     tags: [SaralInformation2]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: saralId
 *         required: true
 *         schema:
 *           type: string
 *         description: Saral Information2 saralId
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
 * /saralInformation2/saral-info/{saralId}:
 *   get:
 *     summary: Get  SaralInformation2 by saralId
 *     tags: [SaralInformation2]
 *     parameters:
 *       - in: path
 *         name: saralId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Saral SaralInformation2.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SaralInformation2'
 *       '404':
 *         description:  SaralInformation2 not found.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */
