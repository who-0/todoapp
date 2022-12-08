const jwt = require("jsonwebtoken");
const { generateToken } = require("../controllers/auth/login.controller");

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
          const TOKEN_API = process.env.TOKEN_API;
          const R_TOKEN = process.env.R_TOKEN_API;
          const { email } = data;
          //todo optional id
          const accessToken = jwt.sign({ email }, TOKEN_API, {
            expiresIn: "1m",
          });
          const refreshToken = jwt.sign({ email }, R_TOKEN);
          res.cookie("accessToken", accessToken, { httpOnly: true });
          res.cookie("refreshToken", refreshToken, { httpOnly: true });
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
