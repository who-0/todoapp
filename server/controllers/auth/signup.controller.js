const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { addNewUser, findUser } = require("../../models/auth/signup.model");

const httpGetSignup = (req, res) => {
  res.render("pages/signup", { title: "Signup" });
};

const httpPostSignup = async (req, res) => {
  const { username, email, password, cpassword } = req.body;
  console.log(username, email, password, cpassword);
  const oldUser = await findUser(email);
  if (oldUser) {
    return res.status(400).json({
      error: "You are already have account. Please Login!",
    });
  } else if (password !== cpassword) {
    return res.status(400).json({
      error: "Please match your password!",
    });
  }
  const A_token = process.env.TOKEN_API;
  const R_token = process.env.R_TOKEN_API;
  //todo optional id
  const accesstoken = jwt.sign({ email }, A_token, {
    expiresIn: "3m",
  });
  const refreshToken = jwt.sign({ email }, R_token);
  const hashedPassword = await bcrypt.hash(password, 8);
  const user = {
    username,
    email,
    password: hashedPassword,
    refreshToken,
  };
  await addNewUser(user);
  res.cookie("accessToken", accesstoken, { httpOnly: true });
  res.cookie("refreshToken", refreshToken, { httpOnly: true });
  return res.status(201).json(user);
};

module.exports = {
  httpGetSignup,
  httpPostSignup,
};
