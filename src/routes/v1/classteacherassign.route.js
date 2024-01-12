const express = require('express');
const validate = require('../../middlewares/validate');
const ClassteacherValidation = require('../../validations/classteacherassign.validation');
const ClassteacherController = require('../../controllers/classteacherassign.controller');

const router = express.Router();
router
  .route('/getstudentslist')
  .get(validate(ClassteacherValidation.getAllStudentByclassTeacherId), ClassteacherController.getStudentsForTeacher);

router
  .route('/getclassbyteacherId/:teacherId')
  .get(validate(ClassteacherValidation.getClassTeachersByTeacherId), ClassteacherController.getClassteachersByTeacherId);

router
  .route('/getattendencelist')
  .get(validate(ClassteacherValidation.getAttendenceList), ClassteacherController.getAttendanceListForTeacher);
router
  .route('/')
  .post(validate(ClassteacherValidation.createClassTeacher), ClassteacherController.createClassteacher)
  .get(validate(ClassteacherValidation.getAllClassTeacher), ClassteacherController.getClassteacher);

router
  .route('/:classteacherId')
  .get(validate(ClassteacherValidation.getClassTeacher), ClassteacherController.getSingleClassteacher)
  .patch(validate(ClassteacherValidation.updateClassTeacherById), ClassteacherController.updateSingleClassTeacher)
  .delete(validate(ClassteacherValidation.deleteClassTeacherById), ClassteacherController.deleteSingleClassteacher);

router
  .route('/count/totalCounts')
  .get(validate(ClassteacherValidation.getTotalCounts), ClassteacherController.getTotalCountsController);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Classteacher
 *   description: Classteacher
 */

/**
 * @swagger
 * /classteacher/count/totalCounts:
 *   get:
 *     summary: Get total counts for students.
 *     tags: [Classteacher]
 *     parameters:
 *       - in: query
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: sectionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /classteacher/getstudentslist:
 *   get:
 *     summary:  A list of students attendence matching the specified classteacher
 *     tags: [Classteacher]
 *     parameters:
 *       - in: query
 *         name: teacherId
 *         schema:
 *           type: string
 *         description: The ID of the teacher to filter by.
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: The date to filter by.
 *     responses:
 *       '200':
 *         description: A list of students attendence matching the specified classteacher
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'  # Replace with the actual schema for a student
 *       '400':
 *         description: Bad request. Invalid parameters provided.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */
/**
 * @swagger
 * /classteacher/getattendencelist:
 *   get:
 *     summary:  A list of students attendence matching the specified classteacher
 *     tags: [Classteacher]
 *     parameters:
 *       - in: query
 *         name: teacherId
 *         schema:
 *           type: string
 *         description: The ID of the teacher to filter by.
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: The date to filter by.
 *     responses:
 *       '200':
 *         description: A list of students attendence list matching the specified classteacher
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'  # Replace with the actual schema for a student
 *       '400':
 *         description: Bad request. Invalid parameters provided.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */
/**
 * @swagger
 * /classteacher:
 *   post:
 *     summary: Create a Classteacher
 *     tags: [Classteacher]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - classId
 *               - sectionId
 *               - teacherId
 *             example:
 *               classId: 650c141a483c21d899148b29
 *               sectionId: 650c141a483c21d899148b29
 *               teacherId: 650c141a483c21d899148b29
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Classteacher'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Classteacher
 *     tags: [Classteacher]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         schema:
 *           type: string
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
 *         description: Maximum number of Classteacher
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
 *                     $ref: '#/components/schemas/Classteacher'
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
 * /classteacher/{classteacherId}:
 *   get:
 *     summary: Get a Classteacher
 *     tags: [Classteacher]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: classteacherId
 *         required: true
 *         schema:
 *           type: string
 *         description: classteacherId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Classteacher'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Classteacher
 *     tags: [Classteacher]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: classteacherId
 *         required: true
 *         schema:
 *           type: string
 *         description: classteacherId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - classId
 *               - teacherId
 *               - sectionId
 *             example:
 *               classId: 650c141a483c21d899148b29
 *               teacherId: 650c141a483c21d899148b29
 *               sectionId: 650c141a483c21d899148b29
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Classteacher'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Classteacher
 *     tags: [Classteacher]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: classteacherId
 *         required: true
 *         schema:
 *           type: string
 *         description: classteacherId
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
 * /classteacher/getclassbyteacherId/{teacherId}:
 *   get:
 *     summary: Get a Classteacher
 *     tags: [Classteacher]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         required: true
 *         schema:
 *           type: string
 *         description: teacherId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Classteacher'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
