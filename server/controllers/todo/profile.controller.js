const { getUserWithUserId } = require("../../models/todo/user.model");
const httpGetProfile = async (req, res) => {
  const { userId, username, email } = req.data;
  if (!userId) {
    return res.status(404).json({
      error: "You are not undefined users. Please login or Signup",
    });
  }
  const user = await getUserWithUserId(userId, username, email);
  return res.render("pages/profile", { title: "Porfile", username, email });
};

module.exports = {
  httpGetProfile,
};
