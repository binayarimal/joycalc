const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const validation = require("./validation.js")
router.get("/users/sign_up_form", userController.signUpForm);
router.post("/users", validation.validateUsers,userController.create );
router.get("/users/sign_in_form",userController.signInForm);
router.post("/users/sign_in",userController.signIn);
router.get("/users/sign_out", userController.signOut)


module.exports = router;
