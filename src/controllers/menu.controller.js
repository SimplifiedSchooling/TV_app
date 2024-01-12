const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { menuService } = require('../services');

const createMenu = catchAsync(async (req, res) => {
  const { file } = req;
  req.body.imageUrl = await file.location;
  const menu = await menuService.createMenu(req.body);
  res.status(httpStatus.CREATED).send(menu);
});

const getAllMenu = catchAsync(async (req, res) => {
  const result = await menuService.getAllMenu();
  res.send(result);
});

module.exports = {
  createMenu,
  getAllMenu,
};
