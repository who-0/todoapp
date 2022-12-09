const jwt = require("jsonwebtoken");
const { generateToken } = require("../controllers/auth/login.controller");
const TOKEN_API = process.env.TOKEN_API;
const verifyToken = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.redirect("/login");
  } else {
    try {
      jwt.verify(accessToken, TOKEN_API, (err, data) => {
        if (err) {
          if (err.message === "jwt expired") {
            return res.redirect("/refresh");
          } else {
            return res.status(400).json({
              error: err.message,
            });
          }
        }
        req.data = data;
        next();
      });
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  }
};

module.exports = verifyToken;
