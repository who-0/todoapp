const todoDB = require("./todo.mongo");
const userDB = require("./users.mongo");
const DEFAULT_TODO = 0;
const addNewToDo = async (todo) => {
  return await todoDB.insertMany(todo);
};

const getUserToDo = async (userID) => {
  return await todoDB.find({ userID });
};

async function getToDoID(userID) {
  const lastestID = await todoDB.findOne({ userID }).sort("-todoID");
  console.log(lastestID);
  if (!lastestID) {
    return DEFAULT_TODO;
  }
  return lastestID.todoID;
}

module.exports = {
  addNewToDo,
  getToDoID,
  getUserToDo,
};
