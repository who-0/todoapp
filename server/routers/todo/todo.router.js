const express = require("express");
const {
  httpGetTodo,
  httpAddNewToDo,
} = require("../../controllers/todo/todo.controller");
const verifyToken = require("../../middlewares/verify.middleware");

const todoRouter = express.Router();

todoRouter.get("/", verifyToken, httpGetTodo);
todoRouter.post("/", verifyToken, httpAddNewToDo);

module.exports = todoRouter;
