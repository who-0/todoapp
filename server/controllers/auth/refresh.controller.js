const jwt = require("jsonwebtoken");
const { getUser } = require("../../models/auth/login.model");
const users = require("../../models/todo/users.mongo");
const R_TOKEN = process.env.R_TOKEN_API;
const TOKEN_API = process.env.TOKEN_API;
const httpGetRefresh = async (req, res) => {
  const { refreshToken } = req.cookies;
  await jwt.verify(refreshToken, R_TOKEN, async (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
    const { email } = data;
    console.log(email);
    const accessToken = jwt.sign({ email }, TOKEN_API, {
      expiresIn: "24h",
    });
    const refreshToken = jwt.sign({ email }, R_TOKEN);
    await users.findOneAndUpdate({ email }, { refreshToken });
    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
    res.redirect("/");
  });
};
module.exports = httpGetRefresh;
