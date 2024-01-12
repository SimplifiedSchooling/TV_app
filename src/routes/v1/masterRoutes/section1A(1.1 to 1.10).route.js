const express = require('express');
const validate = require('../../../middlewares/validate');
const Section1A10Controller = require('../../../controllers/masterControllers/section1A(1.1 to 1.10).controller');
const Section1A10Validation = require('../../../validations/masterValidations/section1A(1.1 to 1.10).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section1A10Validation.createSection1A10), Section1A10Controller.createSection1A10)
  .get(validate(Section1A10Validation.getAllSection1A10), Section1A10Controller.getAllSection1A10);
router
  .route('/getSchoolByScode/:scode')
  .get(validate(Section1A10Validation.getSchoolByScode), Section1A10Controller.getSchoolByScode);

router
  .route('/:Section1A10Id')
  .get(validate(Section1A10Validation.getSection1A10), Section1A10Controller.getSection1A10ById)
  .patch(validate(Section1A10Validation.updateSection1A10), Section1A10Controller.updateSection1A10)
  .delete(validate(Section1A10Validation.deleteSection1A10), Section1A10Controller.deleteSection1A10);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: section1A10
 *   description: section1A(1.1 to 1.10)  form -1
 */

/**
 * @swagger
 * /section1A10:
 *   post:
 *     summary: Create a section1A10
 *     tags: [section1A10]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - UDISEcode
 *               - schoolname
 *               - districtname
 *               - udiseblock
 *               - typeofschool
 *               - revenueblock
 *               - villagename
 *               - grampanchayatname
 *               - urbanlocalbodies
 *               - wardname
 *               - address
 *               - pincode
 *               - crc
 *               - assembly
 *               - parliamentary
 *               - latitude
 *               - longitude
 *               - stdcode
 *               - landline
 *               - mobileno
 *               - email
 *               - website
 *               - profile_count
 *               - scode
 *             example:
 *               UDISEcode : UDISE_CODE_VALUE
 *               schoolname: SCHOOL_NAME_VALUE
 *               districtname: 64d327a41128844220f0cce4
 *               udiseblock: 64d327a41128844220f0cce4
 *               typeofschool: TYPE_OF_SCHOOL_VALUE
 *               revenueblock: REVENUE_BLOCK_VALUE
 *               villagename: VILLAGE_NAME_VALUE
 *               grampanchayatname: GRAMPANCHAYAT_NAME_VALUE
 *               urbanlocalbodies: URBAN_LOCAL_BODIES_VALUE
 *               wardname: WARD_NAME_VALUE
 *               address: ADDRESS_VALUE
 *               pincode: "123123"
 *               crc: "CRC"
 *               assembly: ASSEMBLY_CONSTITUENCY_VALUE
 *               parliamentary: PARLIAMENTARY_CONSTITUENCY_VALUE
 *               latitude: LATITUDE_VALUE
 *               longitude: LONGITUDE_VALUE
 *               stdcode: "123"
 *               landline: "12312321"
 *               mobileno: "9049114189"
 *               email: manishspatil345@gmail.com
 *               website: https://www.example.com
 *               profile_count: PROFILE_COUNT_VALUE
 *               scode: SCODE_VALUE
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/section1A10'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all section1A10
 *     tags: [section1A10]
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
 *                     $ref: '#/components/schemas/section1A10'
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
 * /section1A10/getSchoolByScode/{scode}:
 *   get:
 *     summary: Get a  School by scode
 *     tags: [section1A10]
 *     parameters:
 *       - in: path
 *         name: scode
 *         required: true
 *         schema:
 *           type: string
 *         description: scode of the School
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: School not found
 */

/**
 * @swagger
 * /section1A10/{Section1A10Id}:
 *   get:
 *     summary: Get a section1A10
 *     tags: [section1A10]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A10Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A10Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/section1A10'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a section1A10
 *     tags: [section1A10]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A10Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A10Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - UDISEcode
 *               - schoolname
 *               - districtname
 *               - udiseblock
 *               - typeofschool
 *               - revenueblock
 *               - villagename
 *               - grampanchayatname
 *               - urbanlocalbodies
 *               - wardname
 *               - address
 *               - pincode
 *               - crc
 *               - assembly
 *               - parliamentary
 *               - latitude
 *               - longitude
 *               - stdcode
 *               - landline
 *               - mobileno
 *               - email
 *               - website
 *               - profile_count
 *               - scode
 *             example:
 *               UDISEcode : UDISE_CODE_VALUE
 *               schoolname: SCHOOL_NAME_VALUE
 *               districtname: 64d327a41128844220f0cce4
 *               udiseblock: 64d327a41128844220f0cce4
 *               typeofschool: TYPE_OF_SCHOOL_VALUE
 *               revenueblock: REVENUE_BLOCK_VALUE
 *               villagename: VILLAGE_NAME_VALUE
 *               grampanchayatname: GRAMPANCHAYAT_NAME_VALUE
 *               urbanlocalbodies: URBAN_LOCAL_BODIES_VALUE
 *               wardname: WARD_NAME_VALUE
 *               address: ADDRESS_VALUE
 *               pincode: "123123"
 *               crc: "CRC"
 *               assembly: ASSEMBLY_CONSTITUENCY_VALUE
 *               parliamentary: PARLIAMENTARY_CONSTITUENCY_VALUE
 *               latitude: LATITUDE_VALUE
 *               longitude: LONGITUDE_VALUE
 *               stdcode: "123"
 *               landline: "12312321"
 *               mobileno: "9049114189"
 *               email: manishspatil345@gmail.com
 *               website: https://www.example.com
 *               profile_count: PROFILE_COUNT_VALUE
 *               scode: SCODE_VALUE
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/section1A10'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type section1A10
 *     tags: [section1A10]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section1A10Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section1A10Id
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
