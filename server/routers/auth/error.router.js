const express = require("express");
const error = express.Router();

error.get("/", (req, res) => {
  res.send("This is error router");
});

module.exports = error;
