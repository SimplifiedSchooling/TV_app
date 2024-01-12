const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { sansthanService } = require('../services');

const getAllSansthan = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['sasthanName', 'userID']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await sansthanService.querySansthan(filter, options);
  res.send(result);
});

const getSansthanById = catchAsync(async (req, res) => {
  const sansthan = await sansthanService.getSansthanById(req.params.sansthanId);
  if (!sansthan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sansthan not found');
  }
  res.send(sansthan);
});

const updateSansthan = catchAsync(async (req, res) => {
  const sanstan = await sansthanService.updateSansthanById(req.params.sansthanId, req.body);
  res.send(sanstan);
});

module.exports = {
  updateSansthan,
  getSansthanById,
  getAllSansthan,
};
