const users = require("../../models/todo/users.mongo");
const httpDelete = async (req, res) => {
  const { userId, username, email } = req.data;
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    users.findOneAndDelete({ userId, username, email }, (err) => {
      if (err) {
        throw err;
      }
    });
    return res.render("pages/signup", {
      title: "Signup",
      error: null,
      success: "You are successfully deleted your account",
    });
  } catch (error) {
    console.log(error);
    return res.render("pages/error");
  }
};

module.exports = {
  httpDelete,
};
