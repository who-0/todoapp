const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { addNewUser, findUser } = require("../../models/auth/signup.model");

const httpGetSignup = (req, res) => {
  res.send("this is signup router");
};

const httpPostSignup = async (req, res) => {
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
  }
  const A_token = process.env.TOKEN_API;
  //todo optional id
  const accesstoken = jwt.sign({ email }, A_token, {
    expiresIn: "5s",
  });
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = {
    username,
    email,
    password: hashedPassword,
  };
  await addNewUser(user);

  res.cookie("accessToken", accesstoken, { httpOnly: true });
  return res.status(201).json({ user });
};

module.exports = {
  httpGetSignup,
  httpPostSignup,
};
