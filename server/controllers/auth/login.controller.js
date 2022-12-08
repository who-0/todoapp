const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUser } = require("../../models/auth/login.model");
const httpGetUser = async (req, res) => {
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
    console.log("This is login");
    const TOKEN_API = process.env.TOKEN_API;
    const R_TOKEN = process.env.R_TOKEN_API;
    //todo optional id
    const accessToken = jwt.sign({ email }, TOKEN_API, { expiresIn: "1m" });
    const refreshToken = jwt.sign({ email }, R_TOKEN);
    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
    return res.status(200).json(user);
  }
};

module.exports = {
  httpGetUser,
};
