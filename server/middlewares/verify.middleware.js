const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const TOKEN_API = process.env.TOKEN_API;

const verifymiddle = (req, res, next) => {
  const { accessToken } = req.cookies;
  console.log(accessToken);
  if (!accessToken) {
    return res.status(400).json({
      error: "Please Login or Signup",
    });
  }
  jwt.verify(accessToken, TOKEN_API, (err, data) => {
    if (!err) {
      return res.status(404).json({
        error: err.message,
      });
    }
    req.data = data;
    next();
  });
};

module.exports = verifyToken;
