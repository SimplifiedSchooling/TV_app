const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const studentMinorityGroupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
studentMinorityGroupSchema.plugin(toJSON);
studentMinorityGroupSchema.plugin(paginate);

const Studentminority = mongoose.model('studentminority', studentMinorityGroupSchema);

module.exports = Studentminority;
