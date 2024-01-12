const { Menu } = require('../models');

/**
 * Create a menu
 * @param {Object} menuBody
 * @returns {Promise<Menu>}
 */

const createMenu = async (menuBody) => {
  return Menu.create(menuBody);
};

/**
 * get all menu
 * @returns {Promise<Menu>}
 */
const getAllMenu = async () => {
  const menu = await Menu.find();
  return menu;
};

module.exports = {
  createMenu,
  getAllMenu,
};
