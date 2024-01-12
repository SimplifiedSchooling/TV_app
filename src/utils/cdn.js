const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../config/config');

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = 'https://lmscontent-cdn.blr1.digitaloceanspaces.com';

// Create an S3 client
const s3Client = new S3Client({
  forcePathStyle: true,
  endpoint: spacesEndpoint,
  region: config.cdn.region,
  credentials: {
    accessKeyId: config.cdn.accessKey,
    secretAccessKey: config.cdn.secreteKey,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: 'lmscontent',
    acl: 'public-read',
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname }); // Set any metadata you want to associate with the uploaded file
    },
    key(req, file, cb) {
      cb(null, `${Date.now().toString()}-${file.originalname}`); // Set the key (filename) for the uploaded file
    },
  }),
});

module.exports = { s3Client, upload };
