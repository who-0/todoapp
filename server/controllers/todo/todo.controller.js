const { addNewToDo } = require("../../models/todo/todo.model");

const httpAddNewToDo = async (req, res) => {
  const { id, todo } = req.body;
  console.log(newTodo);
};

const httpGetTodo = (req, res) => {
  const { userId } = req.body;
  return res.render("pages/todo", { title: "ToDo", userId });
};

module.exports = {
  httpAddNewToDo,
};
