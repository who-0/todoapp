const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const {
  addNewUser,
  findUser,
  getLastestID,
} = require("../../models/auth/signup.model");

const httpGetSignup = (req, res) => {
  res.render("pages/signup", { title: "Signup" });
};

const httpPostSignup = async (req, res) => {
  try {
    const { username, email, password, cpassword } = req.body;
    const oldUser = await findUser(email);
    if (oldUser) {
      return res.status(400).json({
        error: "You are already have account. Please Login!",
      });
    } else if (password !== cpassword) {
      return res.status(400).json({
        error: "Please match your password!",
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
    return res.redirect("/error");
  }
};

module.exports = {
  httpGetSignup,
  httpPostSignup,
};
