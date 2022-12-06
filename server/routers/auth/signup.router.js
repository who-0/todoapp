const express = require("express");
const verifyToken = require("../../middlewares/verify.middleware");

const signupRouter = express.Router();
const {
  httpGetSignup,
  httpPostSignup,
} = require("../../controllers/auth/signup.controller");

signupRouter.get("/", httpGetSignup);
signupRouter.post("/", httpPostSignup);

module.exports = signupRouter;
