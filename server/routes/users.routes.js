const express = require("express")
const path = require("path")
const router = express.Router()
const UsersController = require("../controllers/users.controller")

router.post("/user/login",UsersController.userLogin)
router.post("/user/signup",UsersController.userSignup)

module.exports = router