const httpStatus = require('http-status');
const TypeResidentialSchool = require('../../models/masterModels/type_Residential_school.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a TypeResidentialSchool
 * @param {Object} TypeResidentialSchoolBody
 * @returns {Promise<TypeResidentialSchool>}
 */
const createresidential = async (TypeResidentialSchoolBody) => {
  return TypeResidentialSchool.create(TypeResidentialSchoolBody);
};

/**
 * Query for residential
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAlltyperesidential = async (filter, options) => {
  const residential = await TypeResidentialSchool.paginate(filter, options);
  return residential;
};

/**
 * Get TypeResidentialSchool by id
 * @param {ObjectId} id
 * @returns {Promise<TypeResidentialSchool>}
 */
const gettyperesidentialById = async (id) => {
  return TypeResidentialSchool.findById(id);
};

/**
 * Update TypeResidentialSchool by id
 * @param {ObjectId} residentialId
 * @param {Object} updateBody
 * @returns {Promise<TypeResidentialSchool>}
 */
const updatetyperesidentialById = async (residentialId, updateBody) => {
  const typeresidential = await gettyperesidentialById(residentialId);
  if (!typeresidential) {
    throw new ApiError(httpStatus.NOT_FOUND, 'type residential school not found');
  }
  Object.assign(typeresidential, updateBody);
  await typeresidential.save();
  return typeresidential;
};

/**
 * Delete TypeResidentialSchool by id
 * @param {ObjectId} residentialId
 * @returns {Promise<TypeResidentialSchool>}
 */
const deletetyperesidentialById = async (residentialId) => {
  const residential = await gettyperesidentialById(residentialId);
  if (!residential) {
    throw new ApiError(httpStatus.NOT_FOUND, 'type residential school not found');
  }
  await residential.remove();
  return residential;
};

module.exports = {
  createresidential,
  getAlltyperesidential,
  gettyperesidentialById,
  updatetyperesidentialById,
  deletetyperesidentialById,
};
