const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("This is users ROuter");
});

module.exports = userRouter;
