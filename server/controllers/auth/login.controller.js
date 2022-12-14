const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserWithEmail } = require("../../models/auth/login.model");

const httpGetUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.render("pages/login", {
        title: "Login",
        error: `Please Input All.`,
        success: null,
      });
    }
    const user = await getUserWithEmail(email);
    if (!user) {
      return res.render("pages/login", {
        title: "Login",
        error: `Check your email.`,
        success: null,
      });
    }
    const solvepwd = await bcrypt.compare(password, user.password);
    if (!solvepwd) {
      return res.render("pages/login", {
        title: "Login",
        error: `Incorrect Password. Please try again!`,
        success: null,
      });
    } else {
      const TOKEN_API = process.env.TOKEN_API;
      const R_TOKEN = process.env.R_TOKEN_API;
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
    return res.render("pages/error", {
      title: "Error",
      message: "System Fail! Please Login Again",
    });
  }
};

module.exports = {
  httpGetUser,
};
