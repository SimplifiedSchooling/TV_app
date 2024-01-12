const express = require('express');
const validate = require('../../../middlewares/validate');
const Section2B27Controller = require('../../../controllers/masterControllers/section2B(2.2 to 2.27).controller');
const Section2B27Validation = require('../../../validations/masterValidations/section2B(2.2 to 2.27).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section2B27Validation.createSection2B27), Section2B27Controller.createSection2B27)
  .get(validate(Section2B27Validation.getAllSection2B27), Section2B27Controller.getAllSection2B27);

router
  .route('/:Section2B27Id')
  .get(validate(Section2B27Validation.getSection2B27), Section2B27Controller.getSection2B27ById)
  .patch(validate(Section2B27Validation.updateSection2B27), Section2B27Controller.updateSection2B27)
  .delete(validate(Section2B27Validation.deleteSection2B27), Section2B27Controller.deleteSection2B27);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section2B27
 *   description: Section2B27(2.22-2.27) form-12
 */

/**
 * @swagger
 * /Section2B27:
 *   post:
 *     summary: Create a Section2B27
 *     tags: [Section2B27]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - totalpcavi
 *               - functpcavai
 *               - totallaptopavi
 *               - functlaptopavai
 *               - totaltabletavai
 *               - functtabletavai
 *               - totalteacherlerandevavai
 *               - functteacherlerandevavai
 *               - totalCMSavai
 *               - functCMSavai
 *               - totalprojectoravai
 *               - functprojectoravai
 *               - totalprinteravai
 *               - functprinteravai
 *               - totalscanneravai
 *               - functscanneravai
 *               - totalserveravai
 *               - functserveravai
 *               - totalwebcamavai
 *               - functwebcamavai
 *               - totalsmarttvavai
 *               - functsmarttvavai
 *               - totalsmartclassavai
 *               - functsmartclassavai
 *               - totalmobusedforteachingavai
 *               - functmobusedforteachingavai
 *               - totalradioavai
 *               - functradioavai
 *               - totalupsavai
 *               - functupsavai
 *               - internetf
 *               - typeofinternet
 *               - internetpurpose
 *               - computerlab
 *               - econtent
 *               - cwsn
 *               - dth
 *               - digitallab
 *               - ebookavi
 *               - ictteacher
 *               - noofhours
 *               - ictlab
 *               - yearofimplant
 *               - ictlabfunct
 *               - model1
 *               - ictinst
 *               - scode
 *             example:
 *               totalpcavi: "3"
 *               functpcavai: "32"
 *               totallaptopavi: "22"
 *               functlaptopavai: "21"
 *               totaltabletavai: "22"
 *               functtabletavai: "32"
 *               totalteacherlerandevavai: "32"
 *               functteacherlerandevavai: "54"
 *               totalCMSavai: "22"
 *               functCMSavai: "2"
 *               totalprojectoravai: "54"
 *               functprojectoravai: "12"
 *               totalprinteravai: "32"
 *               functprinteravai: "7"
 *               totalscanneravai: "3"
 *               functscanneravai: "2"
 *               totalserveravai: "50"
 *               functserveravai: "54"
 *               totalwebcamavai: "12"
 *               functwebcamavai: "65"
 *               totalsmarttvavai: "65"
 *               functsmarttvavai: "32"
 *               totalsmartclassavai: "65"
 *               functsmartclassavai: "75"
 *               totalmobusedforteachingavai: "12"
 *               functmobusedforteachingavai: "3"
 *               totalradioavai: "32"
 *               functradioavai: "22"
 *               totalupsavai: "21"
 *               functupsavai: "22"
 *               internetf: Broadband
 *               typeofinternet: DSL
 *               internetpurpose: Research
 *               computerlab: Yes
 *               econtent: Avaialable
 *               cwsn: Yes
 *               dth: No
 *               digitallab: Yes
 *               ebookavi: Available
 *               ictteacher: John Smit
 *               noofhours: "22"
 *               ictlab: Room 101
 *               yearofimplant: "2022"
 *               ictlabfunct: Yes
 *               model1: HP Pavilion
 *               ictinst: XYZ Institute
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section2B27'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section2B27
 *     tags: [Section2B27]
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
 *                     $ref: '#/components/schemas/Section2B27'
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
 * /Section2B27/{Section2B27Id}:
 *   get:
 *     summary: Get a Section2B27
 *     tags: [Section2B27]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section2B27Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section2B27Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section2B27'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section2B27
 *     tags: [Section2B27]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section2B27Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section2B27Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - totalpcavi
 *               - functpcavai
 *               - totallaptopavi
 *               - functlaptopavai
 *               - totaltabletavai
 *               - functtabletavai
 *               - totalteacherlerandevavai
 *               - functteacherlerandevavai
 *               - totalCMSavai
 *               - functCMSavai
 *               - totalprojectoravai
 *               - functprojectoravai
 *               - totalprinteravai
 *               - functprinteravai
 *               - totalscanneravai
 *               - functscanneravai
 *               - totalserveravai
 *               - functserveravai
 *               - totalwebcamavai
 *               - functwebcamavai
 *               - totalsmarttvavai
 *               - functsmarttvavai
 *               - totalsmartclassavai
 *               - functsmartclassavai
 *               - totalmobusedforteachingavai
 *               - functmobusedforteachingavai
 *               - totalradioavai
 *               - functradioavai
 *               - totalupsavai
 *               - functupsavai
 *               - internetf
 *               - typeofinternet
 *               - internetpurpose
 *               - computerlab
 *               - econtent
 *               - cwsn
 *               - dth
 *               - digitallab
 *               - ebookavi
 *               - ictteacher
 *               - noofhours
 *               - ictlab
 *               - yearofimplant
 *               - ictlabfunct
 *               - model1
 *               - ictinst
 *             example:
 *               totalpcavi: "3"
 *               functpcavai: "32"
 *               totallaptopavi: "22"
 *               functlaptopavai: "21"
 *               totaltabletavai: "22"
 *               functtabletavai: "32"
 *               totalteacherlerandevavai: "32"
 *               functteacherlerandevavai: "54"
 *               totalCMSavai: "22"
 *               functCMSavai: "2"
 *               totalprojectoravai: "54"
 *               functprojectoravai: "12"
 *               totalprinteravai: "32"
 *               functprinteravai: "7"
 *               totalscanneravai: "3"
 *               functscanneravai: "2"
 *               totalserveravai: "50"
 *               functserveravai: "54"
 *               totalwebcamavai: "12"
 *               functwebcamavai: "65"
 *               totalsmarttvavai: "65"
 *               functsmarttvavai: "32"
 *               totalsmartclassavai: "65"
 *               functsmartclassavai: "75"
 *               totalmobusedforteachingavai: "12"
 *               functmobusedforteachingavai: "3"
 *               totalradioavai: "32"
 *               functradioavai: "22"
 *               totalupsavai: "21"
 *               functupsavai: "22"
 *               internetf: Broadband
 *               typeofinternet: DSL
 *               internetpurpose: Research
 *               computerlab: Yes
 *               econtent: Avaialable
 *               cwsn: Yes
 *               dth: No
 *               digitallab: Yes
 *               ebookavi: Available
 *               ictteacher: John Smit
 *               noofhours: "22"
 *               ictlab: Room 101
 *               yearofimplant: "2022"
 *               ictlabfunct: Yes
 *               model1: HP Pavilion
 *               ictinst: XYZ Institute
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section2B27'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section2B27
 *     tags: [Section2B27]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section2B27Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section2B27Id
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
