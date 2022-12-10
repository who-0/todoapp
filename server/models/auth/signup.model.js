const singupDB = require("../todo/users.mongo");
let default_LastestID = 0;
const addNewUser = async (user) => {
  const email = user.email;
  await singupDB.findOneAndUpdate({ email }, user, {
    upsert: true,
  });
};

async function findUser(email) {
  return await singupDB.findOne({ email });
}

async function getLastestID() {
  const lastestID = await singupDB.findOne().sort("-userId");
  if (!lastestID) {
    return default_LastestID;
  }
  return lastestID.userId;
}

module.exports = {
  addNewUser,
  findUser,
  getLastestID,
};
