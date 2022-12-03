const todoDB = require("./todo.mongoose");
const usersDB = require("./users.mogo");

const addNewToDo = async (id, todo) => {
  const userID = await usersDB.findById(id, { _id: 0, __v: 0 });
  return await todoDB.findOneAndUpdate({ userID }, todo, { upsert: true });
};

module.exports = {
  addNewToDo,
};
