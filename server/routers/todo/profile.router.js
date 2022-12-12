const express = require("express");
const { httpGetProfile } = require("../../controllers/todo/profile.controller");
const verifyToken = require("../../middlewares/verify.middleware");
const { getUserWithUserId } = require("../../models/todo/user.model");
const userRouter = express.Router();

userRouter.get("/", verifyToken, httpGetProfile);

module.exports = userRouter;
