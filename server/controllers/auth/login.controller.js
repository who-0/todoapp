const bcrypt = require("bcryptjs");
const { getUser } = require("../../models/auth/login.model");
const httpGetUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUser(email);
  const solvepwd = await bcrypt.compare(password, user.password);
  if (!email && !password) {
    return res.status(400).json({
      error: "Please Input All. ",
    });
  }else if (!user) {
    return res.status(404).json({
      error: "Check your email.",
    });
  } else if (!solvepwd) {
    return res.status(404).json({
      error: "Incorrect Password. Please try again!",
    });
  } else {
    generateToken(user);
    return res.status(200).json(user);
  }
};


function generateToken(data) {
  const { email } = data;
  //todo optional id
  const accessToken = jwt.sign({ email }, TOKEN_API, { expiresIn: "1m" });
  const refreshToken = jwt.sign({email},)
  res.cookie("accessToken", accessToken, { httpOnly: true });
  res.cookie('refreshToken',refreshToken,{httpOnly:true});
}

module.exports = {
  httpGetUser,
  generateToken,
};
