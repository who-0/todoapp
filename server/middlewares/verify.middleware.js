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
        //! check jwt expries
        console.log(err.message);
        if (err.message === "jwt expires") {
          generateToken(data);
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
