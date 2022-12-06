const express = require("express");
const error = express.Router();

error.get("/", (req, res) => {
  res.render("error");
});

module.exports = error;
