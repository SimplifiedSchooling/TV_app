const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const assectSchema = mongoose.Schema(
  {
    scode: {
      type: String,
    },
    assetId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'AssetMaster',
    },
    assectName: {
      type: String,
    },
    count: [
      {
        invoiceNo: {
          type: Number,
        },
        invoiceDate: {
          type: Date,
        },
        quantity: {
          type: Number,
        },
        description: {
          type: String,
        },
        imagePath: {
          type: String,
        },
      },
    ],
    totalasset: {
      type: Number,
    },
    totaldestroyed: {
      type: Number,
    },
    distroy: [
      {
        expiredate: {
          type: Date,
        },
        quantity: {
          type: Number,
        },
        reason: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to JSON
assectSchema.plugin(toJSON);
assectSchema.plugin(paginate);

const Assect = mongoose.model('Assect', assectSchema);

module.exports = Assect;
