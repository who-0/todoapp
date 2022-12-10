const express = require("express");
const verifyToken = require("../../middlewares/verify.middleware");
const { getUserWithUserId } = require("../../models/todo/user.model");
const userRouter = express.Router();

userRouter.get("/:id", verifyToken, async (req, res) => {
  const { userId, username, email } = req.data;
  const profileId = Number(req.params.id);
  console.log("userId", userId);
  console.log("profile", profileId);
  if (userId !== profileId) {
    return res.status(404).json({
      error: "You are not undefined users. Please login or Signup",
    });
  }
  console.log(userId);
  const user = await getUserWithUserId(userId);
  console.log(user);
});

module.exports = userRouter;
