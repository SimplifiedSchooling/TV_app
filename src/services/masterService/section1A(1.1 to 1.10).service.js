const httpStatus = require('http-status');
const Section1A10Schema = require('../../models/masterModels/section1A(1.1 to 1.10).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section1A10Schema
 * @param {Object} Section1A10SchemaBody
 * @returns {Promise<Section1A10Schema>}
 */
const createsection1A10 = async (Section1A10SchemaBody) => {
  return Section1A10Schema.create(Section1A10SchemaBody);
};

/**
 * Get school by scode
 * @param {ObjectId} scode
 * @returns {Promise<School>}
 */
const getSchoolScode = async (scode) => {
  const school = await Section1A10Schema.find({ scode });
  return school;
};

/**
 * Query for section1A10
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllsection1A10 = async (filter, options) => {
  const section1A10 = await Section1A10Schema.paginate(filter, options);
  return section1A10;
};

/**
 * Get Section1A10Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section1A10Schema>}
 */
const getsection1A10ById = async (id) => {
  return Section1A10Schema.findById(id);
};

/**
 * Update Section1A10Schema by id
 * @param {ObjectId} section1A10Id
 * @param {Object} updateBody
 * @returns {Promise<Section1A10Schema>}
 */
const updatesection1A10ById = async (section1A10Id, updateBody) => {
  const typesection1A10 = await getsection1A10ById(section1A10Id);
  if (!typesection1A10) {
    throw new ApiError(httpStatus.NOT_FOUND, 'section1A10 not found');
  }
  Object.assign(typesection1A10, updateBody);
  await typesection1A10.save();
  return typesection1A10;
};

/**
 * Delete Section1A10Schema by id
 * @param {ObjectId} section1A10Id
 * @returns {Promise<Section1A10Schema>}
 */
const deletesection1A10ById = async (section1A10Id) => {
  const section1A10 = await getsection1A10ById(section1A10Id);
  if (!section1A10) {
    throw new ApiError(httpStatus.NOT_FOUND, 'section1A10 not found');
  }
  await section1A10.remove();
  return section1A10;
};

module.exports = {
  createsection1A10,
  getAllsection1A10,
  getsection1A10ById,
  updatesection1A10ById,
  deletesection1A10ById,
  getSchoolScode,
};
