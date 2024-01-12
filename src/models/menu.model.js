const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const menuSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    genderId: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
menuSchema.plugin(toJSON);
menuSchema.plugin(paginate);

/**
 * @typedef Menu
 */
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
