const express = require("express");
const imagesRourtes = require("./routes/imageRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/v1/images", imagesRourtes);
app.use("/api/v1/users", userRoutes);

module.exports = app;
