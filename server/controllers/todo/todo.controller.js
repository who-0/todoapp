const { addNewToDo } = require("../../models/todo/todo.model")


const httpAddNewToDo = async (req, res) => {
    const { id, todo } = req.body;
    const newTodo = await addNewToDo( id, todo );
    console.log(newTodo);
}

module.exports = {
    httpAddNewToDo,
}