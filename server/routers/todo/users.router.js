const express = require("express");
const verifyToken = require("../../middlewares/verify.middleware");
const userRouter = express.Router();

userRouter.get("/", verifyToken, (req, res) => {
  res.send("This is users ROuter");
});

module.exports = userRouter;
