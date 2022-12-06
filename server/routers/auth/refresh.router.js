const express = require("express");
const refreshToken = require("../../controllers/auth/refresh.controller");
const refreshRouter = express.Router();

refreshRouter.get("/", refreshToken);

module.exports = refreshRouter;
