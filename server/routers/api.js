const { application } = require("express");
const express = require("express");
const api = express.Router();
const loginRouter = require("./auth/login.router");
const refreshRouter = require("./auth/refresh.router");
const signupRouter = require("./auth/signup.router");
const todoRouter = require("./todo/todo.router");
const userRouter = require("./todo/users.router");
const error = require("./auth/error.router");

api.use("/", todoRouter);
api.use("/", userRouter);
api.use("/login", loginRouter);
api.use("/signup", signupRouter);
api.use("/refresh", refreshRouter);
api.use("/error", error);

module.exports = api;
