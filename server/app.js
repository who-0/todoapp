const path = require("path");
const express = require("express");
const cookie = require("cookie-parser");
const bdparser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const api = require("./routers/api");
const verifyRouer = require("./middlewares/router.middleware");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(bdparser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookie());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(api);
//!---MERN api-----
app.use("/v1", api);
app.get("/*", (req, res) => {
  return res.render("pages/error", {
    title: "Error",
    message: "Your Request is not defined on our system!",
  });
});

module.exports = app;
