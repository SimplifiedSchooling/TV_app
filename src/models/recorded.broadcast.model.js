const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const recordedBroadcast = mongoose.Schema(
  {
    boardId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Board',
      required: true,
    },
    mediumId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Medium',
      required: true,
    },
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Classes',
      required: true,
    },
    subjectId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Subject',
      required: true,
    },
    studio: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Studio',
      required: true,
    },
    liveStreamingPath: {
      type: String,
      trim: true,
      required: true,
    },
    date: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    presenterName: {
      type: String,
      trim: true,
    },
    landscapeImage: {
      type: String,
      trim: true,
    },
    portraitImage: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
recordedBroadcast.plugin(toJSON);
recordedBroadcast.plugin(paginate);

const RecordedBroadcast = mongoose.model('recordedBroadcast', recordedBroadcast);

module.exports = RecordedBroadcast;
