const tokens = require("./Rtoken.mongo");

const getToken = async (token) => {
  return await tokens.findOne({ id }, { __v: 0 });
};
const postToken = (id) => {
  token.findOneAndUpdate({ id }, token, { upsert: true });
};
