const express = require("express");
const { httpGetUser } = require("../../controllers/auth/login.controller");
const verifyToken = require("../../middlewares/verify.middleware");
const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  res.send("This is login ROuter");
});

loginRouter.post("/", verifyToken, httpGetUser);

module.exports = loginRouter;
