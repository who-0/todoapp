const users = require("./users.mongo");
async function getUserWithUserId(userId) {
  return await users.findOne({ userId }, { _id: 0, __v: 0 });
}

module.exports = {
  getUserWithUserId,
};
