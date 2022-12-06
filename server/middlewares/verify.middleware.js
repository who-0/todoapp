const jwt = require("jsonwebtoken");
const TOKEN_API = process.env.TOKEN_API;

const verifyToken = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.redirect("/login");
  }
  jwt.verify(accessToken, TOKEN_API, (err, data) => {
    if (err) {
      //! check jwt expries
      if (err.message === "jwt expires") {
        generateTokne(data);
      } else {
        res.status(400).json({
          error: err.message,
        });
      }
    }
    req.data = data;
    next();
  });
};

function generateTokne(data) {
  const { email } = data;
  res.clearCookie("accessToken");
  //todo optional id
  const accessToken = jwt.sign({ email }, TOKEN_API, { expiresIn: "10m" });
  res.cookie("accessToken", accessToken, { httpOnly: true });
}

module.exports = verifyToken;
