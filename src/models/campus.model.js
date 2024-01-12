const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uuid = require('node-uuid/uuid');
const { toJSON, paginate } = require('./plugins');

const campusSchema = mongoose.Schema(
  {
    scode: {
      type: String,
      default: uuid.v1,
    },
    name: {
      type: String,
      required: true,
    },
    // userName: {
    //   type: String,
    //   required: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   minlength: 8,
    //   validate(value) {
    //     if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    //       throw new Error('Password must contain at least one letter and one number');
    //     }
    //   },
    //   private: true, // used by the toJSON plugin
    // },
    mobNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    date: {
      type: Date,
    },
    role: {
      type: String,
      default: 'school',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
campusSchema.plugin(toJSON);
campusSchema.plugin(paginate);

/**
 * Check if userName is taken
 * @param {string} schoolName - The user's schoolName
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
campusSchema.statics.isUserNameTaken = async function (schoolName, excludeUserId) {
  const campus = await this.findOne({ schoolName, _id: { $ne: excludeUserId } });
  return !!campus;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
campusSchema.methods.isPasswordMatch = async function (password) {
  const campus = this;
  return bcrypt.compare(password, campus.password);
};

campusSchema.pre('save', async function (next) {
  const campus = this;
  if (campus.isModified('password')) {
    campus.password = await bcrypt.hash(campus.password, 8);
  }
  next();
});

const Campus = mongoose.model('Campus', campusSchema);

module.exports = Campus;
