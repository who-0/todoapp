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
  }
  if (!user) {
    return res.status(404).json({
      error: "Check your email.",
    });
  } else if (!solvepwd) {
    return res.status(404).json({
      error: "Incorrect Password. Please try again!",
    });
  } else {
    return res.status(200).json(user);
  }
};

module.exports = {
  httpGetUser,
};
