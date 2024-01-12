const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const assetMasterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
assetMasterSchema.plugin(toJSON);

const AssetMaster = mongoose.model('AssetMaster', assetMasterSchema);

module.exports = AssetMaster;
