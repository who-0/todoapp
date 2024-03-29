const jwt = require("jsonwebtoken");
const users = require("../../models/todo/users.mongo");
const R_TOKEN = process.env.R_TOKEN_API;
const TOKEN_API = process.env.TOKEN_API;
const httpGetRefresh = async (req, res) => {
  const apiCheck = req.baseUrl.includes("v1");
  const { refreshToken } = req.cookies;
  await jwt.verify(refreshToken, R_TOKEN, async (err, data) => {
    if (err) {
      return res.render("pages/error", {
        title: "Error",
        message: err.message,
      });
    }
    const { email } = data;
    const accessToken = jwt.sign({ email }, TOKEN_API, {
      expiresIn: "24h",
    });
    const refreshToken = jwt.sign({ email }, R_TOKEN);
    await users.findOneAndUpdate({ email }, { refreshToken });
    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
    if (apiCheck) {
      return;
    } else {
      res.redirect("/");
    }
  });
};
module.exports = httpGetRefresh;
