const mongoose = require("mongoose");
imageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
});
const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
