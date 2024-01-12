const mongoose = require('mongoose');

const roleSchema = mongoose.Schema(
  {
    role: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    actions: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
