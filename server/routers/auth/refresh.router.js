const express = require("express");
const refreshRouter = express.Router();

refreshRouter.get("/", (req, res) => {
  res.send("This is Refresh ROuter");
});

module.exports = refreshRouter;
