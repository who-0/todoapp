const singupDB = require("../todo/users.mogo");

const addNewUser = async (email, user) => {
  return await singupDB.findOneAndUpdate({ email }, user, { upsert: true });
};

module.exports = {
  addNewUser,
};
