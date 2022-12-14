const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const {
  addNewUser,
  findUser,
  getLastestID,
} = require("../../models/auth/signup.model");

const httpGetSignup = (req, res) => {
  return res.render("pages/signup", {
    title: "Signup",
    error: null,
    success: null,
  });
};

const httpPostSignup = async (req, res) => {
  try {
    const { username, email, password, cpassword } = req.body;
    const oldUser = await findUser(email);
    if (oldUser) {
      return res.render("pages/signup", {
        title: "Signup",
        error: "You are already have account. Please Login!",
        success: null,
      });
    } else if (password !== cpassword) {
      res.render("pages/signup", {
        title: "Signup",
        error: "Please match your password!",
        success: null,
      });
    } else {
      let userId = (await getLastestID()) + 1;
      const A_token = process.env.TOKEN_API;
      const R_token = process.env.R_TOKEN_API;
      const accesstoken = jwt.sign({ userId, username, email }, A_token, {
        expiresIn: "24h",
      });
      const refreshToken = jwt.sign({ userId, username, email }, R_token);
      const hashedPassword = await bcrypt.hash(password, 8);
      const user = {
        userId,
        username,
        email,
        password: hashedPassword,
        refreshToken,
      };
      await addNewUser(user);
      res.cookie("accessToken", accesstoken, { httpOnly: true });
      res.cookie("refreshToken", refreshToken, { httpOnly: true });
      return res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    return res.render("pages/error", {
      title: "Error",
      message: "System Fail! Please Signup Again",
    });
  }
};

module.exports = {
  httpGetSignup,
  httpPostSignup,
};
