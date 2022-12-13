const express = require("express");
const logoutRouter = express.Router();
const verifyToken = require("../../middlewares/verify.middleware");
const { httpGetLogout } = require("../../controllers/todo/logout.controller");

logoutRouter.get("/", verifyToken, httpGetLogout);

module.exports = logoutRouter;
