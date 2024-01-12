const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('node-uuid');
const validate = require('../../middlewares/validate');
const recordedBroadcastValidation = require('../../validations/recorded.broadcast.validation');
const recordedBroadcastController = require('../../controllers/recorded.broadcast.controller');

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, callback) => {
    const uniqueFileName = `${uuidv4()}${path.extname(file.originalname)}`;
    callback(null, uniqueFileName);
  },
});

const upload = multer({ storage });

router
  .route('/')
  .post(
    upload.fields([
      { name: 'landscapeImage', maxCount: 1 },
      { name: 'portraitImage', maxCount: 1 },
    ]),
    validate(recordedBroadcastValidation.createRecordedBroadcast),
    recordedBroadcastController.createRecordedBroadcast
  )
  .get(validate(recordedBroadcastValidation.getAllRecordedBroadcasts), recordedBroadcastController.getAllRecordedBroadcast);

router
  .route('/:recordedBroadcastId')
  .get(validate(recordedBroadcastValidation.getRecordedBroadcast), recordedBroadcastController.getRecordedBroadcastById)
  .patch(
    upload.fields([
      { name: 'landscapeImage', maxCount: 1 },
      { name: 'portraitImage', maxCount: 1 },
    ]),
    validate(recordedBroadcastValidation.updateRecordedBroadcastById),
    recordedBroadcastController.updateRecordedBroadcastById
  )
  .delete(
    validate(recordedBroadcastValidation.deleteRecordedBroadcastById),
    recordedBroadcastController.deleteRecordedBroadcastById
  );

router
  .route('/filter/:classId/:subjectId')
  .get(
    validate(recordedBroadcastValidation.getRecordedBroadcastByFilter),
    recordedBroadcastController.getRecordedBroadcastByFilter
  );

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: RecordedBroadcast
 *   description:   RecordedBroadcast Management System
 */

/**
 * @swagger
 * /recordedbroadcast:
 *   post:
 *     summary: Create a new RecordedBroadcast
 *     tags: [RecordedBroadcast]
 *     requestBody:
 *       description: RecordedBroadcast object to be created
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/RecordedBroadcast'
 *     responses:
 *       200:
 *         description: RecordedBroadcast created successfully
 *   get:
 *     summary: Get list of RecordedBroadcast
 *     tags: [RecordedBroadcast]
 *     responses:
 *       200:
 *         description: List of RecordedBroadcast retrieved successfully
 *
 * /recordedbroadcast/{recordedBroadcastId}:
 *   patch:
 *     summary: Update a single RecordedBroadcast by ID
 *     tags: [RecordedBroadcast]
 *     parameters:
 *       - in: path
 *         name: recordedBroadcastId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the recordedBroadcast
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/RecordedBroadcastUpdate'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: RecordedBroadcast not found
 *   delete:
 *     summary: Delete a single RecordedBroadcast by ID
 *     tags: [RecordedBroadcast]
 *     parameters:
 *       - in: path
 *         name: recordedBroadcastId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the recordedBroadcast
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: RecordedBroadcast not found
 *   get:
 *     summary: Get a single RecordedBroadcast by ID
 *     tags: [RecordedBroadcast]
 *     parameters:
 *       - in: path
 *         name: recordedBroadcastId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the RecordedBroadcast
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: RecordedBroadcast not found
 */

/**
 * @swagger
 * /recordedbroadcast/filter/{classId}/{subjectId}:
 *   get:
 *     summary: Get a RecordedBroadcast data from Filter
 *     tags: [RecordedBroadcast]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         description: The ID of the class
 *       - in: path
 *         name: subjectId
 *         required: true
 *         description: The ID of the subject
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RecordedBroadcast'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RecordedBroadcast:
 *       type: object
 *       properties:
 *         boardId:
 *           type: string
 *           description: ID of the board.
 *         mediumId:
 *           type: string
 *           description: ID of the medium.
 *         classId:
 *           type: string
 *           description: ID of the class.
 *         subjectId:
 *           type: string
 *           description: ID of the subject.
 *         studio:
 *           type: string
 *           description: ID of the studio.
 *         liveStreamingPath:
 *           type: string
 *           description: Live streaming path.
 *         date:
 *           type: string
 *           description: Date of the broadcast.
 *         time:
 *           type: string
 *           description: Time of the broadcast.
 *         title:
 *           type: string
 *           description: Title of the broadcast.
 *         type:
 *           type: string
 *           description: type of the broadcast.
 *         presenterName:
 *           type: string
 *           description: Presenter's name.
 *         landscapeImage:
 *           type: string
 *           format: binary
 *           description: URL of the landscape image.
 *         portraitImage:
 *           type: string
 *           format: binary
 *           description: URL of the portrait image.
 *       example:
 *         boardId: "6516761d9cee04ae5df9fb6f"
 *         mediumId: "6516761d9cee04ae5df9fb6f"
 *         classId: "6516761d9cee04ae5df9fb6f"
 *         subjectId: "6516761d9cee04ae5df9fb6f"
 *         studio: "6516761d9cee04ae5df9fb6f"
 *         liveStreamingPath: "rtmp://example.com/live/stream"
 *         date: "2023-01-01"
 *         time: "12:00 PM"
 *         title: "Broadcast Title"
 *         type: "Broadcast type"
 *         presenterName: "Presenter Name"
 *         landscapeImage: "https://example.com/landscape.jpg"
 *         portraitImage: "https://example.com/portrait.jpg"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RecordedBroadcastUpdate:
 *       type: object
 *       properties:
 *         boardId:
 *           type: string
 *           description: ID of the board.
 *         mediumId:
 *           type: string
 *           description: ID of the medium.
 *         classId:
 *           type: string
 *           description: ID of the class.
 *         subjectId:
 *           type: string
 *           description: ID of the subject.
 *         studio:
 *           type: string
 *           description: ID of the studio.
 *         liveStreamingPath:
 *           type: string
 *           description: Live streaming path.
 *         date:
 *           type: string
 *           description: Date of the broadcast.
 *         time:
 *           type: string
 *           description: Time of the broadcast.
 *         title:
 *           type: string
 *           description: Title of the broadcast.
 *         type:
 *           type: string
 *           description: type of the broadcast.
 *         presenterName:
 *           type: string
 *           description: Presenter's name.
 *         landscapeImage:
 *           type: string
 *           format: binary
 *           description: URL of the landscape image.
 *         portraitImage:
 *           type: string
 *           format: binary
 *           description: URL of the portrait image.
 *       example:
 *         boardId: "6516761d9cee04ae5df9fb6f"
 *         mediumId: "6516761d9cee04ae5df9fb6f"
 *         classId: "6516761d9cee04ae5df9fb6f"
 *         subjectId: "6516761d9cee04ae5df9fb6f"
 *         studio: "6516761d9cee04ae5df9fb6f"
 *         liveStreamingPath: "rtmp://example.com/live/stream"
 *         date: "2023-01-01"
 *         time: "12:00 PM"
 *         title: "Broadcast Title"
 *         type: "Broadcast type"
 *         presenterName: "Presenter Name"
 *         landscapeImage: "https://example.com/landscape.jpg"
 *         portraitImage: "https://example.com/portrait.jpg"
 */
