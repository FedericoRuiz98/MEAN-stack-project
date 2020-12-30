const express = require('express');
const router = express.Router();
const UserController = require("../controllers/users");

//login page
router.post("/login", UserController.auth);

//register page
router.post("/register",UserController.register);

module.exports = router;