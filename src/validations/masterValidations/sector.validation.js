const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSector = {
  body: Joi.object().keys({
    sector: Joi.string().required(),
  }),
};

const getAllSectors = {
  query: Joi.object().keys({
    sector: Joi.string(),
  }),
};

const getSector = {
  params: Joi.object().keys({
    sectorId: Joi.string().custom(objectId),
  }),
};

const updateSector = {
  params: Joi.object().keys({
    sectorId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      sector: Joi.string().required(),
    })
    .min(1),
};

const deleteSector = {
  params: Joi.object().keys({
    sectorId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSector,
  getAllSectors,
  getSector,
  updateSector,
  deleteSector,
};
