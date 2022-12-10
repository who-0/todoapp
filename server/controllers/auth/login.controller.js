const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserWithEmail } = require("../../models/auth/login.model");

const httpGetUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUser(email);
    const solvepwd = await bcrypt.compare(password, user.password);
    if (!email && !password) {
      return res.status(400).json({
        error: "Please Input All. ",
      });
    } else if (!user) {
      return res.status(404).json({
        error: "Check your email.",
      });
    } else if (!solvepwd) {
      return res.status(404).json({
        error: "Incorrect Password. Please try again!",
      });
    } else {
      const TOKEN_API = process.env.TOKEN_API;
      const R_TOKEN = process.env.R_TOKEN_API;
      //todo optional id
      const accessToken = jwt.sign(
        { userId: user.userId, username: user.username, email },
        TOKEN_API,
        { expiresIn: "24h" }
      );
      const refreshToken = jwt.sign(
        { userId: user.userId, username: user.username, email },
        R_TOKEN
      );
      res.cookie("accessToken", accessToken, { httpOnly: true });
      res.cookie("refreshToken", refreshToken, { httpOnly: true });
      return res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    return res.redirect("/error");
  }
};

module.exports = {
  httpGetUser,
};
