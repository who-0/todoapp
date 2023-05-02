const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserWithEmail } = require("../../models/auth/login.model");

const httpGetUser = async (req, res) => {
  const apiCheck = req.baseUrl.includes("v1");
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      if (apiCheck) {
        return res.status(400).json({
          error: "!Need Username and Password",
        });
      } else {
        return res.render("pages/login", {
          title: "Login",
          error: `Please Input All.`,
          success: null,
        });
      }
    }
    const user = await getUserWithEmail(email);
    const solvepwd = await bcrypt.compare(password, user.password);
    if (!user) {
      if (apiCheck) {
        return res.status(400).json({
          error: "User not found.",
        });
      } else {
        return res.render("pages/login", {
          title: "Login",
          error: `Check your email.`,
          success: null,
        });
      }
    } else if (!solvepwd) {
      if (apiCheck) {
        return res.status(400).json({
          error: "Password is Incorrect.",
        });
      } else {
        return res.render("pages/login", {
          title: "Login",
          error: `Incorrect Password. Please try again!`,
          success: null,
        });
      }
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
      if (apiCheck) {
        return res.status(200).json(user);
      } else {
        return res.redirect("/");
      }
    }
  } catch (error) {
    console.log(error);
    if (apiCheck) {
      return res.status(500).json({
        error: "Something worng. Please try agin later.",
      });
    } else {
      return res.render("pages/error", {
        title: "Error",
        message: "System Fail! Please Login Again",
      });
    }
  }
};

module.exports = {
  httpGetUser,
};
