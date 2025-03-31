// Requiring Packages...
const express = require("express")
const path = require("path")
const multerConfig = require("../configs/multer.config")
const folder = path.join(__dirname,"../uploads/")
const uploader = multerConfig(folder)
const router = express.Router()

router.get("/profile",adminController.profile)

module.exports = router;