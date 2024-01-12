const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const sansthanShema = mongoose.Schema(
  {
    sansthanName: {
      type: String,
      required: true,
      trim: true,
    },
    registrationDist: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: 'sansthan',
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
      private: true, // used by the toJSON plugin
    },
    mobNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
sansthanShema.plugin(toJSON);
sansthanShema.plugin(paginate);

// Static method to check if userID already exists
sansthanShema.statics.isUserIDTaken = async function (userID) {
  const existingSansthan = await this.findOne({ userID });
  return !!existingSansthan;
};
sansthanShema.statics.isMobNumberTaken = async function (mobNumber) {
  const existingSansthan = await this.findOne({ mobNumber });
  return !!existingSansthan;
};
/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
sansthanShema.methods.isPasswordMatch = async function (password) {
  const sansthan = this;
  return bcrypt.compare(password, sansthan.password);
};

sansthanShema.pre('save', async function (next) {
  const sansthan = this;
  if (sansthan.isModified('password')) {
    sansthan.password = await bcrypt.hash(sansthan.password, 8);
  }
  next();
});

/**
 * @typedef Sansthan
 */
const Sansthan = mongoose.model('Sansthan', sansthanShema);
module.exports = Sansthan;
