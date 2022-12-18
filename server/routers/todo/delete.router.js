const express = require("express");
const deleteRouter = express.Router();
const {
  httpDelete,
  httpLiDelete,
} = require("../../controllers/todo/delete.controller");
const verifyToken = require("../../middlewares/verify.middleware");

deleteRouter.get("/", verifyToken, httpDelete);
deleteRouter.get("/:id", verifyToken, httpLiDelete);

module.exports = deleteRouter;
