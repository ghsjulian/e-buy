const express = require("express");
const path = require("path");
const multer = require("../configs/multer.config");
const router = express.Router();
const folder = path.join(__dirname, "../uploads/");
const uploader = multer(folder);
const uploaderController = require("../controllers/file.uploader");

router.post("/upload", uploader.single('file'), uploaderController.upload);

module.exports = router;
