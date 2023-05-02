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
  const apiCheck = req.baseUrl.includes("v1");
  try {
    const { username, email, password, cpassword } = req.body;
    if (!username || !email || !password) {
      if (apiCheck) {
        return res.status(400).json({
          error: "Need Username, email and password.",
        });
      } else {
        return res.render("pages/signup", {
          title: "Signup",
          error: "You need to fill all input.",
          success: null,
        });
      }
    }
    const oldUser = await findUser(email);
    if (oldUser) {
      if (apiCheck) {
        return res.status(403).json(oldUser);
      } else {
        return res.render("pages/signup", {
          title: "Signup",
          error: "You are already have account. Please Login!",
          success: null,
        });
      }
    } else if (password !== cpassword) {
      if (!apiCheck) {
        res.render("pages/signup", {
          title: "Signup",
          error: "Please match your password!",
          success: null,
        });
      }
    }
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
    if (apiCheck) {
      return res.status(200).json(user);
    } else {
      return res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    if (apiCheck) {
      return res.status(500).json({
        error: "System is something wrong. Please try again later.",
      });
    }
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
