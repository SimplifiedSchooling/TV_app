const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { languageService } = require('../../services');

const createLanguage = catchAsync(async (req, res) => {
  const data = await languageService.createLanguage(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllLanguage = catchAsync(async (req, res) => {
  const result = await languageService.getAlllanguage();
  res.send(result);
});

const getLanguageById = catchAsync(async (req, res) => {
  const result = await languageService.getLanguageById(req.params.languageId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Language not found');
  }
  res.send(result);
});

const updateLanguageById = catchAsync(async (req, res) => {
  const result = await languageService.updateLanguageById(req.params.languageId, req.body);
  res.send(result);
});

const deleteLanguageById = catchAsync(async (req, res) => {
  await languageService.deleteLanguageById(req.params.languageId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLanguage,
  getAllLanguage,
  getLanguageById,
  updateLanguageById,
  deleteLanguageById,
};
