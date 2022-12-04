require("dotenv").config({ path: __dirname + "/.env" });
const PORT = process.env.PORT || 8000;

const path = require("path");
const fs = require("fs");
const https = require("https");
const { mongoConnect, mongoDisconnect } = require("./services/mongodb");
const app = require("./app");
const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
  },
  app
);

(async () => {
  try {
    await mongoConnect();
    console.log("Connection Ready!");
    server.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  } catch (error) {
    await mongoDisconnect();
    console.log(error);
  }
})();
