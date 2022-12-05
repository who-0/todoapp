const singupDB = require("../todo/users.mongo");

const addNewUser = async (user) => {
  const email = user.email;
  await singupDB.findOneAndUpdate({ email }, user, {
    upsert: true,
  });
};

async function findUser(email) {
  return await singupDB.findOne({ email });
}

module.exports = {
  addNewUser,
  findUser,
};
