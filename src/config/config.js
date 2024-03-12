const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    MONGODB_URL_DEV: Joi.string().optional().when('NODE_ENV', {
      is: 'development',
      then: Joi.optional(),
    }),
    MONGODB_URL_PROD: Joi.string().optional().when('NODE_ENV', {
      is: 'production',
      then: Joi.optional(),
    }),
    MONGODB_URL_TEST: Joi.string().when('NODE_ENV', {
      is: 'test',
      then: Joi.required(),
    }),
    // MONGODB_URL_PROD: Joi.string().required().description('Mongo DB url'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which reset password token expires'),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which verify email token expires'),
    SMTP_HOST: Joi.string().description('server that will send the emails'),
    SMTP_PORT: Joi.number().description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().description('username for email server'),
    SMTP_PASSWORD: Joi.string().description('password for email server'),
    EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),
    AWS_ACCESS_KEY_ID: Joi.string(),
    AWS_SECRETE_ACCESS_KEY: Joi.string(),
    REGION: Joi.string(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.NODE_ENV === 'production' ? 3001 : 5000 || 3000,
  // mongoose: {
  // url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
  mongoose: {
    url: (() => {
      switch (envVars.NODE_ENV) {
        case 'development':
          return envVars.MONGODB_URL_DEV || 'mongodb://127.0.0.1:27017/TV_app';
        case 'production':
          return envVars.MONGODB_URL_PROD || 'mongodb://127.0.0.1:27017/TV_app';
        case 'test':
          return `${envVars.MONGODB_URL_DEV}-test` || 'mongodb://127.0.0.1:27017/TV_app';
        default:
          return envVars.MONGODB_URL_DEV; // Default to development URL
      }
    })(),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    username: 'root',
    password: 'repo',
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
  cdn: {
    accessKey: envVars.AWS_ACCESS_KEY_ID,
    secreteKey: envVars.AWS_SECRETE_ACCESS_KEY,
    region: envVars.REGION,
  },
};
