const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Define the routes and map them to controller functions
router.post("/login", authController.login);
router.get('/logout', authController.logout);

module.exports = router;
