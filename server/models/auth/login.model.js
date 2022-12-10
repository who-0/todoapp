const users = require("../todo/users.mongo");

async function getUser(email) {
  return await users.findOne({ email }, { __v: 0 });
}

module.exports = {
  getUser,
};
