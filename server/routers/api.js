const express = require("express");
const api = express.Router();
const loginRouter = require("./auth/login.router");
const refreshRouter = require("./auth/refresh.router");
const signupRouter = require("./auth/signup.router");
const todoRouter = require("./todo/todo.router");
const userRouter = require("./todo/profile.router");
const error = require("./auth/error.router");
const logoutRouter = require("./todo/logout.router");
const deleteRouter = require("./todo/delete.router");
api.use("/", todoRouter);
api.use("/profile", userRouter);
api.use("/login", loginRouter);
api.use("/logout", logoutRouter);
api.use("/signup", signupRouter);
api.use("/refresh", refreshRouter);
api.use("/delete", deleteRouter);
api.use("/error", error);
api.use("/test", (req, res) => {
  const data = req.body;
  res.status(200).json(data);
});

module.exports = api;
