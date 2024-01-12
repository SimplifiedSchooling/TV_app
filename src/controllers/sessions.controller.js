const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const sessionService = require('../services/session.service');

const createSession = catchAsync(async (req, res) => {
  const data = await sessionService.createSessions(req.body);
  res.status(httpStatus.CREATED).send(data);
});

const getAllSession = catchAsync(async (req, res) => {
  const result = await sessionService.getAllSession();
  res.send(result);
});

const getSessionById = catchAsync(async (req, res) => {
  const result = await sessionService.getSessionsById(req.params.sessionId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Session not found');
  }
  res.send(result);
});

const updateSessionById = catchAsync(async (req, res) => {
  const result = await sessionService.updateSessionById(req.params.sessionId, req.body);
  res.send(result);
});

const deleteSessionById = catchAsync(async (req, res) => {
  await sessionService.deleteSessionsById(req.params.sessionId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSession,
  getAllSession,
  getSessionById,
  updateSessionById,
  deleteSessionById,
};
