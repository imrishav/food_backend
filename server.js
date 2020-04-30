const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.config.env" });

const app = require("./app");

const DB = process.env.DATABASE_LOCAL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB Connected Succesfully...");
  });

app.listen(3000, () => {
  console.log("Food Service is Working");
});
