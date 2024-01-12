const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid');
const { s3Client } = require('./cdn');

const createStorage = (location) =>
  multerS3({
    s3: s3Client,
    bucket: location,
    acl: 'public-read',
    key(req, file, cb) {
      const fileName = `${uuidv4()}${file.originalname}`;
      cb(null, fileName);
    },
  });

const createS3Middleware = (location) => multer({ storage: createStorage(location) }).single('file');

// const multipleFileS3 = (location) => {
//   const storage = createStorage(location);
//   return multer({ storage }).fields([{ name: 'files', maxCount: 10 }]);
// };

const filterPath = async (cdnUrl) => {
  const parts = await cdnUrl.split('/');
  const folderName = parts[parts.length - 2];
  const fileName = parts[parts.length - 1];
  return `/${folderName}/${fileName}`;
};

// const multipleFilterPath = async (cdnUrls) => {
//   const filteredPaths = await Promise.all(
//     cdnUrls.map(async (cdnUrl) => {
//       if (typeof cdnUrl === 'string') {
//         const parts = await cdnUrl.split('/');
//         const folderName = parts[parts.length - 2]; // Get the second-to-last part (folder name)
//         const fileName = parts[parts.length - 1]; // Get the last part (filename)
//         return `/${folderName}/${fileName}`;
//       }
//       return cdnUrl; // If not a string, return the original value
//     })
//   );

//   return filteredPaths;
// };

module.exports = {
  createS3Middleware,
  // multipleFileS3,
  filterPath,
  // multipleFilterPath,
};
