const express = require("express");
const verifyToken = require("../../middlewares/verify.middleware");

const todoRouter = express.Router();

todoRouter.get("/", verifyToken, (req, res) => {
  res.send("This is TODO ROuter");
});

module.exports = todoRouter;
