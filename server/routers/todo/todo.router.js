const express = require("express");
const verifyToken = require("../../middlewares/verify.middleware");

const todoRouter = express.Router();
const todos = [
  { todo: "you are my sunshine" },
  { todo: "you are my everything" },
  { todo: "you are my everything" },
  { todo: "you are my everything" },
  { todo: "you are my everything" },
  { todo: "you are my everything" },
  { todo: "you are my everything" },
  { todo: "you are my everything" },
  { todo: "you are my everything" },
  { todo: "you are my everything" },
  { todo: "you are my everything" },
];

todoRouter.get("/", verifyToken, (req, res) => {
  return res.render("pages/todo", {
    title: "ToDo",
    userId: req.data.userId,
    todos,
  });
});

todoRouter.post("/", verifyToken, (req, res) => {
  console.log(req.body);
});

module.exports = todoRouter;
