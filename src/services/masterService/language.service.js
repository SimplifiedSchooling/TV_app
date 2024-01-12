const httpStatus = require('http-status');
const { Language } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Language
 * @param {Object} reqBody
 * @returns {Promise<Language>}
 */
const createLanguage = async (reqBody) => {
  return Language.create(reqBody);
};

/**
 * Query for Language
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAlllanguage = async () => {
  const language = await Language.find();
  return language;
};

/**
 * Get Language by id
 * @param {ObjectId} id
 * @returns {Promise<Language>}
 */
const getLanguageById = async (id) => {
  return Language.findById(id);
};

/**
 * Update Language by id
 * @param {ObjectId} languageId
 * @param {Object} updateBody
 * @returns {Promise<Board>}
 */
const updateLanguageById = async (languageId, updateBody) => {
  const language = await getLanguageById(languageId);
  if (!language) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Language not found');
  }
  Object.assign(language, updateBody);
  await language.save();
  return language;
};

/**
 * Delete language by id
 * @param {ObjectId} languageId
 * @returns {Promise<Language>}
 */
const deleteLanguageById = async (languageId) => {
  const language = await getLanguageById(languageId);
  if (!language) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Language not found');
  }
  await language.remove();
  return language;
};

module.exports = {
  createLanguage,
  getAlllanguage,
  updateLanguageById,
  deleteLanguageById,
  getLanguageById,
};
