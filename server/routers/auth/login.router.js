const express = require("express");
const { httpGetUser } = require("../../controllers/auth/login.controller");

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  res.send("This is login ROuter");
});

loginRouter.post("/", httpGetUser);

module.exports = loginRouter;
