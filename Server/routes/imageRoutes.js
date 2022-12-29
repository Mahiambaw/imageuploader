const imageController = require("../controller/imageController");
const express = require("express");
const router = express.Router();

router.route("/").get(imageController.getAllImages);
router
  .route("/")
  .post(imageController.uploadFile.single("image"), imageController.upload);

module.exports = router;
