const users = require("../todo/users.mongo");

async function getUserWithEmail(email) {
  return await users.findOne({ email }, { _id: 0, __v: 0 });
}

module.exports = {
  getUserWithEmail,
};
