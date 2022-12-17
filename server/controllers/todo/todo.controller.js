const {
  addNewToDo,
  getToDoID,
  getUserToDo,
} = require("../../models/todo/todo.model");
const { getUserWithUserId } = require("../../models/todo/user.model");

const httpAddNewToDo = async (req, res) => {
  try {
    const { userId, todo } = req.body;
    const { email, username } = req.data;
    const user = await getUserWithUserId(userId, username, email);
    const userID = user.userId;
    const todoID = (await getToDoID(userID)) + 1;
    const newtodo = {
      userID,
      todoID,
      todo,
    };
    await addNewToDo(newtodo);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("pages/error", {
      title: "Error",
      message: error.message,
    });
  }
};

const httpGetTodo = async (req, res) => {
  const { userId } = req.data;
  const todos = await getUserToDo(userId);
  if (!todos) {
    todos = [];
  }
  return res.render("pages/todo", {
    title: "ToDo",
    userId,
    todos,
  });
};
module.exports = {
  httpAddNewToDo,
  httpGetTodo,
};
