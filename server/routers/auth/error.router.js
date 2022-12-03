const express = require("express");
const error = express.Router();

error.get("/", (req, res) => {
  res.send("This is error ROuter");
});

module.exports = error;
