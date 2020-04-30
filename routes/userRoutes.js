const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// router.post("/signup", authController.signup);

router
  .route("/signup")
  .post(authController.signup)
  .delete(authController.deleteAllUser);

module.exports = router;
