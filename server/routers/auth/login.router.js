const express = require("express");
const { httpGetUser } = require("../../controllers/auth/login.controller");
const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  res.render("pages/login", { title: "Login", error: null, success: null });
});

loginRouter.post("/", httpGetUser);

module.exports = loginRouter;
