const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1A40Controller = require('../../../controllers/masterControllers/section1A(1.31 to 1.40).controller');
const Section1A40Validation = require('../../../validations/masterValidations/section1A(1.31 to 1.40).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1A40Validation.createSection1A40), Section1A40Controller.createSection1A40)
  .get(validate(Section1A40Validation.getAllSection1A40), Section1A40Controller.getAllSection1A40);

router
  .route('/:Section1A40Id')
  .get(validate(Section1A40Validation.getSection1A40), Section1A40Controller.getSection1A40ById)
  .patch(validate(Section1A40Validation.updateSection1A40), Section1A40Controller.updateSection1A40)
  .delete(validate(Section1A40Validation.deleteSection1A40), Section1A40Controller.deleteSection1A40);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section1A40
 *   description: section1A(1.31 to 1.40)  form - 4
 */

/**
 * @swagger
 * /Section1A40:
 *   post:
 *     summary: Create a Section1A40
 *     tags: [Section1A40]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - primaryschdistance
 *               - upperprimaryschdistance
 *               - secondaryschdistance
 *               - highersecondaryschdistance
 *               - allweatherroad
 *               - primaryschinstructionalday
 *               - upperprimaryschinstructionalday
 *               - secondaryschinstructionalday
 *               - highersecondaryschinstructionalday
 *               - primaryschperdayhours
 *               - upperprimaryschperdayhours
 *               - secondaryschperdayhours
 *               - highersecondaryschperdayhours
 *               - primaryschperdayhoursteacher
 *               - upperprimaryschperdayhoursteacher
 *               - secondaryschperdayhoursteacher
 *               - highersecondaryschperdayhoursteacher
 *               - primaryCCE
 *               - upperprimaryCCE
 *               - secondaryCCE
 *               - highersecondaryCCE
 *               - primaryCCENoAss
 *               - upperprimaryCCENoAss
 *               - secondaryCCENoAss
 *               - highersecondaryCCENoAss
 *               - cumulativerecords
 *               - cumulativerecordsparent
 *               - assementprepared
 *               - academicsession
 *               - admissionundersec12
 *               - anganwadiavaliable
 *               - anganwaditrained1
 *               - aganwadieduSta1
 *               - anganwaditrained2
 *               - aganwadieduSta2
 *               - anganwaditrained3
 *               - aganwadieduSta3
 *               - anganwaditrained1Name
 *               - anganwaditrained1Boys
 *               - anganwaditrained1Girls
 *               - anganwaditrained2Name
 *               - anganwaditrained2Boys
 *               - anganwaditrained2Girls
 *               - anganwaditrained3Name
 *               - anganwaditrained3Boys
 *               - anganwaditrained3Girls
 *               - Balavatikastarted
 *               - scode
 *             example:
 *               primaryschdistance: Primary School Distance Value
 *               upperprimaryschdistance: Upper Primary School Distance Value
 *               secondaryschdistance: Secondary School Distance Value
 *               highersecondaryschdistance: igher Secondary School Distance Value
 *               allweatherroad: All-Weather Road Value
 *               primaryschinstructionalday: Primary School Instructional Day Value
 *               upperprimaryschinstructionalday: Upper Primary School Instructional Day Value
 *               secondaryschinstructionalday: Secondary School Instructional Day Value
 *               highersecondaryschinstructionalday: Higher Secondary School Instructional Day Value
 *               primaryschperdayhours: Primary School Per Day Hours Value
 *               upperprimaryschperdayhours: Upper Primary School Per Day Hours Value
 *               secondaryschperdayhours: Secondary School Per Day Hours Value
 *               highersecondaryschperdayhours: Higher Secondary School Per Day Hours Value
 *               primaryschperdayhoursteacher: Primary School Per Day Hours per Teacher Value
 *               upperprimaryschperdayhoursteacher: Upper Primary School Per Day Hours per Teacher Value
 *               secondaryschperdayhoursteacher: Secondary School Per Day Hours per Teacher Value
 *               highersecondaryschperdayhoursteacher: Higher Secondary School Per Day Hours per Teacher Value
 *               primaryCCE: Primary CCE Value
 *               upperprimaryCCE: Upper Primary CCE Value
 *               secondaryCCE: Secondary CCE Value
 *               highersecondaryCCE: Higher Secondary CCE Value
 *               primaryCCENoAss: Primary CCE No Assessment Value
 *               upperprimaryCCENoAss: Upper Primary CCE No Assessment Value
 *               secondaryCCENoAss: Secondary CCE No Assessment Value
 *               highersecondaryCCENoAss: Higher Secondary CCE No Assessment Value
 *               cumulativerecords: Cumulative Records Value
 *               cumulativerecordsparent: Cumulative Records Parent Value
 *               assementprepared: Assessment Prepared Value
 *               academicsession: Academic Session Value
 *               admissionundersec12: Admission Under Section 12 Value
 *               anganwadiavaliable: Anganwadi Available Value
 *               anganwaditrained1: Anganwadi Trained 1 Value
 *               aganwadieduSta1: Anganwadi Education Status 1 Value
 *               anganwaditrained2: Anganwadi Trained 2 Value
 *               aganwadieduSta2: Anganwadi Education Status 2 Value
 *               anganwaditrained3: Anganwadi Trained 3 Value
 *               aganwadieduSta3: Anganwadi Education Status 3 Value
 *               anganwaditrained1Name: Anganwadi Trained 1 Name Value
 *               anganwaditrained1Boys: Anganwadi Trained 1 Boys Value
 *               anganwaditrained1Girls: Anganwadi Trained 1 Girls Value
 *               anganwaditrained2Name: Anganwadi Trained 2 Name Value
 *               anganwaditrained2Boys: Anganwadi Trained 2 Boys Value
 *               anganwaditrained2Girls: Anganwadi Trained 2 Girls Value
 *               anganwaditrained3Name: Anganwadi Trained 3 Name Value
 *               anganwaditrained3Boys: Anganwadi Trained 3 Boys Value
 *               anganwaditrained3Girls: Anganwadi Trained 3 Girls Value
 *               Balavatikastarted: Balavatika Started Value
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A40'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section1A40
 *     tags: [Section1A40]
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
 *                     $ref: '#/components/schemas/Section1A40'
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
 * /Section1A40/{Section1A40Id}:
 *   get:
 *     summary: Get a Section1A40
 *     tags: [Section1A40]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A40Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A40Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A40'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section1A40
 *     tags: [Section1A40]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A40Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A40Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - primaryschdistance
 *               - upperprimaryschdistance
 *               - secondaryschdistance
 *               - highersecondaryschdistance
 *               - allweatherroad
 *               - primaryschinstructionalday
 *               - upperprimaryschinstructionalday
 *               - secondaryschinstructionalday
 *               - highersecondaryschinstructionalday
 *               - primaryschperdayhours
 *               - upperprimaryschperdayhours
 *               - secondaryschperdayhours
 *               - highersecondaryschperdayhours
 *               - primaryschperdayhoursteacher
 *               - upperprimaryschperdayhoursteacher
 *               - secondaryschperdayhoursteacher
 *               - highersecondaryschperdayhoursteacher
 *               - primaryCCE
 *               - upperprimaryCCE
 *               - secondaryCCE
 *               - highersecondaryCCE
 *               - primaryCCENoAss
 *               - upperprimaryCCENoAss
 *               - secondaryCCENoAss
 *               - highersecondaryCCENoAss
 *               - cumulativerecords
 *               - cumulativerecordsparent
 *               - assementprepared
 *               - academicsession
 *               - admissionundersec12
 *               - anganwadiavaliable
 *               - anganwaditrained1
 *               - aganwadieduSta1
 *               - anganwaditrained2
 *               - aganwadieduSta2
 *               - anganwaditrained3
 *               - aganwadieduSta3
 *               - anganwaditrained1Name
 *               - anganwaditrained1Boys
 *               - anganwaditrained1Girls
 *               - anganwaditrained2Name
 *               - anganwaditrained2Boys
 *               - anganwaditrained2Girls
 *               - anganwaditrained3Name
 *               - anganwaditrained3Boys
 *               - anganwaditrained3Girls
 *               - Balavatikastarted
 *             example:
 *               primaryschdistance: Primary School Distance Value
 *               upperprimaryschdistance: Upper Primary School Distance Value
 *               secondaryschdistance: Secondary School Distance Value
 *               highersecondaryschdistance: igher Secondary School Distance Value
 *               allweatherroad: All-Weather Road Value
 *               primaryschinstructionalday: Primary School Instructional Day Value
 *               upperprimaryschinstructionalday: Upper Primary School Instructional Day Value
 *               secondaryschinstructionalday: Secondary School Instructional Day Value
 *               highersecondaryschinstructionalday: Higher Secondary School Instructional Day Value
 *               primaryschperdayhours: Primary School Per Day Hours Value
 *               upperprimaryschperdayhours: Upper Primary School Per Day Hours Value
 *               secondaryschperdayhours: Secondary School Per Day Hours Value
 *               highersecondaryschperdayhours: Higher Secondary School Per Day Hours Value
 *               primaryschperdayhoursteacher: Primary School Per Day Hours per Teacher Value
 *               upperprimaryschperdayhoursteacher: Upper Primary School Per Day Hours per Teacher Value
 *               secondaryschperdayhoursteacher: Secondary School Per Day Hours per Teacher Value
 *               highersecondaryschperdayhoursteacher: Higher Secondary School Per Day Hours per Teacher Value
 *               primaryCCE: Primary CCE Value
 *               upperprimaryCCE: Upper Primary CCE Value
 *               secondaryCCE: Secondary CCE Value
 *               highersecondaryCCE: Higher Secondary CCE Value
 *               primaryCCENoAss: Primary CCE No Assessment Value
 *               upperprimaryCCENoAss: Upper Primary CCE No Assessment Value
 *               secondaryCCENoAss: Secondary CCE No Assessment Value
 *               highersecondaryCCENoAss: Higher Secondary CCE No Assessment Value
 *               cumulativerecords: Cumulative Records Value
 *               cumulativerecordsparent: Cumulative Records Parent Value
 *               assementprepared: Assessment Prepared Value
 *               academicsession: Academic Session Value
 *               admissionundersec12: Admission Under Section 12 Value
 *               anganwadiavaliable: Anganwadi Available Value
 *               anganwaditrained1: Anganwadi Trained 1 Value
 *               aganwadieduSta1: Anganwadi Education Status 1 Value
 *               anganwaditrained2: Anganwadi Trained 2 Value
 *               aganwadieduSta2: Anganwadi Education Status 2 Value
 *               anganwaditrained3: Anganwadi Trained 3 Value
 *               aganwadieduSta3: Anganwadi Education Status 3 Value
 *               anganwaditrained1Name: Anganwadi Trained 1 Name Value
 *               anganwaditrained1Boys: Anganwadi Trained 1 Boys Value
 *               anganwaditrained1Girls: Anganwadi Trained 1 Girls Value
 *               anganwaditrained2Name: Anganwadi Trained 2 Name Value
 *               anganwaditrained2Boys: Anganwadi Trained 2 Boys Value
 *               anganwaditrained2Girls: Anganwadi Trained 2 Girls Value
 *               anganwaditrained3Name: Anganwadi Trained 3 Name Value
 *               anganwaditrained3Boys: Anganwadi Trained 3 Boys Value
 *               anganwaditrained3Girls: Anganwadi Trained 3 Girls Value
 *               Balavatikastarted: Balavatika Started Value
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section1A40'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section1A40
 *     tags: [Section1A40]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A40Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A40Id
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
