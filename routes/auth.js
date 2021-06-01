var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { get } = require("lodash");
const {
  signout,
  signup,
  signin,
  isSignedIn,
} = require("../controllers/authController");

router.post(
  "/signup",
  check("name")
    .isLength({ min: 3 })
    .withMessage("name should be at least 3 chars long"),
  check("email").isEmail().withMessage("email is required"),
  check("password", "password should be at least 6 char ")
    .not()
    .isIn(["123", "password", "god"])
    .isLength({ min: 6 })
    .matches(/\d/),
  signup
);

router.post(
  "/signin",
  check("email").isEmail().withMessage("email is required"),
  check("password", "password field is required ").isLength({ min: 1 }),
  signin
);

router.get("/signout", signout);

// router.get("/test", isSignedIn, (req, res) => {
//   res.json(req.auth);
// });

module.exports = router;
