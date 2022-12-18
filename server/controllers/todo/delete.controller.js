const users = require("../../models/todo/users.mongo");
const todos = require("../../models/todo/todo.mongo");
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
    todos.deleteMany({ userID: userId }, (err) => {
      if (err) {
        console.log("this delete");
        console.log(err);
      }
      console.log("successfully todos delets");
    });
    return res.render("pages/signup", {
      title: "Signup",
      error: null,
      success: "You are successfully deleted your account",
    });
  } catch (error) {
    console.log(error);
    return res.render("pages/error", {
      title: "Error",
      message: error.message,
    });
  }
};

const httpLiDelete = async (req, res) => {
  try {
    const todoID = req.params.id;
    const { userId } = req.data;
    await todos.findOneAndDelete({ userID: userId, todoID });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("pages/error", {
      title: "Error",
      message: error.message,
    });
  }
};

module.exports = {
  httpDelete,
  httpLiDelete,
};
