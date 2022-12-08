const express = require("express");
const httpGetRefresh = require("../../controllers/auth/refresh.controller");
const refreshRouter = express.Router();

refreshRouter.get("/", httpGetRefresh);

module.exports = refreshRouter;
