const Joi = require('joi');

// Joi schema for the count array
const countSchema = Joi.array().items(
  Joi.object({
    invoiceNo: Joi.number().required(),
    invoiceDate: Joi.date().required(),
    quantity: Joi.number().required(),
    description: Joi.string().required(),
    imagePath: Joi.string().required(),
  })
);

// Joi schema for the distroy array
const distroySchema = Joi.array().items(
  Joi.object({
    expiredate: Joi.date().required(),
    quantity: Joi.number().required(),
    reason: Joi.string().required(),
  })
);

// Joi schema for the Assect model
const assectSchema = Joi.object({
  scode: Joi.string(),
  assectName: Joi.string(),
  assetId: Joi.string(),
  count: countSchema,
  totalasset: Joi.number(),
  totaldestroyed: Joi.number(),
  distroy: distroySchema,
});

// Joi schema for POST (create) requests
const createAssetSchema = Joi.object({
  body: assectSchema.required(),
});

// Joi schema for PUT (update) requests
const updateAssectSchema = Joi.object({
  query: Joi.object().keys({
    assetId: Joi.string().required(),
    scode: Joi.string().required(),
  }),
  body: assectSchema,
});

module.exports = {
  createAssetSchema,
  updateAssectSchema,
};
