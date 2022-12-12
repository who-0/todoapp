const { getUserWithUserId } = require("../../models/todo/user.model");
const { use } = require("../../routers/todo/profile.router");
const httpGetProfile = async (req, res) => {
  console.log(req.data);
  const { userId, username, email } = req.data;

  if (!userId) {
    return res.status(404).json({
      error: "You are not undefined users. Please login or Signup",
    });
  }
  const user = await getUserWithUserId(userId, username, email);
  return res.status(200).json(user);
};

module.exports = {
  httpGetProfile,
};
