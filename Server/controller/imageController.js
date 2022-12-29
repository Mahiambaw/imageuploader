const Images = require("../models/imageModel.js");
const multer = require("multer");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

exports.uploadFile = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: fileFilter,
});
exports.upload = async (req, res, next) => {
  try {
    let newImage;
    if (req.file) {
      importedImg = req.file;
      console.log(importedImg.buffer);
      const base64 = importedImg.buffer.toString("base64");
      // The user has uploaded a file
      newImage = new Images({
        image: base64,
      });
      console.log(newImage);
    } else {
      // The user has provided a link instead
      newImage = new Images({
        image: req.body.imageLink,
      });
    }
    newImage.save();
    res.status(200).json({
      status: "success",
      data: newImage,
    });
    next();
  } catch (err) {
    res.status(400).json({
      error: err,
    });
    console.log(err);
  }
};

exports.getAllImages = async (req, res, next) => {
  try {
    const allImages = await Images.find();

    const imageObject = allImages.map((image) => {});

    res.status(200).json({
      status: "sucess",
      data: { allImages },
    });
  } catch (err) {
    console.log(err);
  }
};
