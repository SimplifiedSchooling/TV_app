const express = require('express');
const validate = require('../../middlewares/validate');
const { leavingCertController } = require('../../controllers');
const { leaveingCertValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(leaveingCertValidation.createLeaveCert), leavingCertController.createLeaveVert)
  .get(validate(leaveingCertValidation.queryLeavingcert), leavingCertController.queryLeavingcert);

router
  .route('/get-student-applied-for/leaving-cert')
  .get(validate(leaveingCertValidation.getLeavingcertById), leavingCertController.getStudentsByFilter);

router.route('/search/students').post(validate(leaveingCertValidation.searchStudents), leavingCertController.searchStudents);
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: LeavingCert
 *   description: Medium management and retrieval
 */

/**
 * @swagger
 * /leaving-cert:
 *   post:
 *     summary: Create a leave cert
 *     description: Create a leave cert
 *     tags: [LeavingCert]
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
 *              apllyedName: fake name
 *              scode: sdvbjh2376r37862
 *              StudentId: fake student ID
 *              date: 2020-05-12T16:18:04.793Z
 *              status: true
 *              certificate: transfer certificate
 *              classId: 614a7e7d7f1d813bbf8e89b7
 *              sectionId: 614a7e7d7f1d813bbf8e89b7
 *              gender: Male
 *              admissionNo: 12424
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/LeavingCert'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all leave cert
 *     description: all leave cert.
 *     tags: [LeavingCert]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: scode
 *         schema:
 *           type: string
 *         description: scode name *
 *       - in: query
 *         name: admissionNo
 *         schema:
 *           type: string
 *         description: admissionNo *
 *       - in: query
 *         name: apllyedName
 *         schema:
 *           type: string
 *         description: apllyedName *
 *       - in: query
 *         name: StudentId
 *         schema:
 *           type: string
 *         description: StudentId  *
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of Medium
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
 *                     $ref: '#/components/schemas/LeavingCert'
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
 * /leaving-cert/search/students:
 *   post:
 *     summary: Create a leave cert
 *     description: Create a leave cert
 *     tags: [LeavingCert]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string *
 *             example:
 *              searchQuery: fake name
 *              scode: sdvbjh2376r37862

 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/LeavingCert'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /leaving-cert/get-student-applied-for/leaving-cert:
 *   get:
 *     summary: Get a Leaving Cert.
 *     tags: [LeavingCert]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: scode
 *         required: true
 *         schema:
 *           type: string
 *         description: certificate
 *       - in: query
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *         description: certificate
 *       - in: query
 *         name: sectionId
 *         required: true
 *         schema:
 *           type: string
 *         description: certificate
 *       - in: query
 *         name: certificate
 *         required: true
 *         schema:
 *           type: string
 *         description: certificate
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/LeavingCert'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
