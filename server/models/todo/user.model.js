const users = require("./users.mongo");
async function getUserWithUserId(userId, username, email) {
  return await users.findOne(
    { userId, username, email },
    { _id: 0, __v: 0, refreshToken: 0, password: 0 }
  );
}

module.exports = {
  getUserWithUserId,
};
