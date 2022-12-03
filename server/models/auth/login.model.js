const users = require("../todo/users.mogo");
const getUser = async (email) => {
  return await users.findOne({ email }, { __v: 0 });
};

module.exports = {
  getUser,
};
