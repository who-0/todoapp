const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

const mongoConnect = async () => {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
