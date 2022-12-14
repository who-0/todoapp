const express = require("express");
const error = express.Router();

error.get("/", (req, res) => {
  return res.render("pages/error", {
    title: "Error",
    message: null,
  });
});

module.exports = error;
