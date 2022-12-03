const express = require("express");

const todoRouter = express.Router();

todoRouter.get("/", (req, res) => {
  res.send("This is TODO ROuter");
});

module.exports = todoRouter;
