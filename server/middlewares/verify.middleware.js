const jwt = require("jsonwebtoken");
const { generateToken } = require("../controllers/auth/login.controller");
const TOKEN_API = process.env.TOKEN_API;
const verifyToken = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.redirect("/login");
  } else {
    jwt.verify(accessToken, TOKEN_API, (err, data) => {
      if (err) {
        if (err.message === "jwt expired") {
          res.redirect("/refresh");
        } else {
          res.status(400).json({
            error: err.message,
          });
        }
      }
      req.data = data;
      next();
    });
  }
};

module.exports = verifyToken;
