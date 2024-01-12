/* eslint-disable import/no-unresolved */
const httpStatus = require('http-status');
const crypto = require('crypto');
const randomstring = require('randomstring');
const { Staff, User } = require('../../models');
const ApiError = require('../../utils/ApiError');

// Generate a random username
function generateUsernameFromName(name) {
  const sanitizedName = name.replace(/\s+/g, '').toLowerCase();
  const randomString = randomstring.generate({
    length: 4,
    charset: 'alphanumeric',
  });
  return `${sanitizedName}${randomString}`;
}

/**
 * Create a staff
 * @param {Object} staffBody
 * @returns {Promise<Staff>}
 */
const createStaff = async (staffBody) => {
  // const staffData = { ...staffBody };
  const staff = await Staff.create(staffBody);
  const userName = generateUsernameFromName(staffBody.name);
  const randomPassword = crypto.randomBytes(16).toString('hex');
  const staffUser = await User.create({
    name: staff.name,
    userId: staff.id,
    scode: staff.scode,
    mobNumber: staff.mobNumber,
    userName,
    password: randomPassword,
    role: staff.role,
  });
  return { staffUser, staff };
};

/**
 * Query for Staff
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryStaff = async (filter, options) => {
  const Staffs = await Staff.paginate(filter, options);
  return Staffs;
};

/**
 * Get Staff by id
 * @param {ObjectId} _id
 * @returns {Promise<Staff>}
 */
const getStaffById = async (id) => {
  return Staff.findById(id);
};

/**
 * Get Staff by id
 * @param {ObjectId} userName
 * @returns {Promise<Staff>}
 */
const getStaffByUserName = async (userName) => {
  return Staff.findOne({ userName });
};

/**
 * Get Staff by scode
 * @param {ObjectId} scode
 * @returns {Promise<Staff>}
 */
const getStaffByScode = async (scode) => {
  return Staff.find(scode);
};

/**
 * Update Staff by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Staff>}
 */
const updateStaffById = async (StaffId, updateBody) => {
  const staff = await getStaffById(StaffId);
  if (!staff) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff not found');
  }
  Object.assign(staff, updateBody);
  await staff.save();
  return staff;
};

// /**
//  * Update Staff by id
//  * @param {ObjectId} userId
//  * @param {Object} updateBody
//  * @returns {Promise<Staff>}
//  */
// const updateStaffById = async (userName, updateBody) => {
//   const staff = await getStaffById(userName);
//   if (!staff) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Staff not found');
//   }
//   Object.assign(staff, updateBody);
//   await staff.save();
//   return staff;
// };

/**
 * Delete Staff by id
 * @param {ObjectId} staffId
 * @returns {Promise<Staff>}
 */
const deleteStaffById = async (staffId) => {
  const staff = await getStaffById(staffId);
  if (!staff) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff not found');
  }
  await staff.remove();
  return staff;
};

const StaffBulkFilter = (options) => {
  return {
    filter: options.filter || (options.saral_id ? { saral_id: options.saral_id } : {}),
    getFilter() {
      return this.filter;
    },
  };
};

const getStaffBySaral = async (filter) => {
  const staffFilter = StaffBulkFilter(filter).getFilter();
  if (staffFilter) {
    const record = await Staff.findOne(staffFilter).exec();
    return record;
  }
  return { message: 'Missing query params !!!' };
};
const bulkUpload = async (staffsArray, csvFilePath = null) => {
  let modifiedStaffsArray = staffsArray;
  if (csvFilePath) {
    modifiedStaffsArray = { staffs: csvFilePath };
  }
  if (!modifiedStaffsArray.staffs || !modifiedStaffsArray.staffs.length) return { error: true, message: 'missing array' };

  const records = [];
  const dups = [];
  await Promise.all(
    modifiedStaffsArray.staffs.map(async (staff) => {
      const staffFound = await getStaffBySaral({ saral_id: staff.saral_id });
      if (staffFound) {
        dups.push(staff);
      } else {
        let record = new Staff(staff);
        record = await record.save();
        const userName = generateUsernameFromName(staff.name);
        const randomPassword = crypto.randomBytes(16).toString('hex');
        await User.create({
          name: staff.name,
          userId: staff.id,
          scode: staff.scode,
          mobNumber: staff.mobNumber,
          userName,
          password: randomPassword,
          role: staff.role,
        });
        if (record) {
          records.push(staff);
        }
      }
    })
  );

  const duplicates = {
    totalDuplicates: dups.length ? dups.length : 0,
    data: dups.length ? dups : [],
  };
  const nonduplicates = {
    totalNonDuplicates: records.length ? records.length : 0,
    data: records.length ? records : [],
  };
  return { nonduplicates, duplicates };
};

module.exports = {
  createStaff,
  queryStaff,
  getStaffById,
  updateStaffById,
  deleteStaffById,
  bulkUpload,
  getStaffByUserName,
  getStaffByScode,
};
