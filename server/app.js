const path = require("path");
const express = require("express");
const ejs = require("ejs");
const helmet = require("helmet");
const morgan = require("morgan");
const api = require("./routers/api");
const verifyRouer = require("./middlewares/router.middleware");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(verifyRouer, api);

module.exports = app;
