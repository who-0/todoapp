const express = require("express");
const deleteRouter = express.Router();
const { httpDelete } = require("../../controllers/todo/delete.controller");
const verifyToken = require("../../middlewares/verify.middleware");

deleteRouter.get("/", verifyToken, httpDelete);

module.exports = deleteRouter;
