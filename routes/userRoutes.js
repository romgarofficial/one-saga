const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers.js");
const auth = require("../auth.js");

//USER REGISTRATION
console.log(userControllers);
router.post("/create", userControllers.createUser);

router.post("/login", userControllers.loginUser);


module.exports = router;