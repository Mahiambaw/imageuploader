const dotenv = require("dotenv");
("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose.set("strictQuery", false);
mongoose.connect(DB).then(() => console.log("databse is connected"));

const port = 3000 | 3001;

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
