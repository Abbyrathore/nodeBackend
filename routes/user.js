const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  getUserList,
  updateUser,
  userPurchaseList,
} = require("../controllers/userController");
const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
} = require("../controllers/authController");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.get(
  "/order/user/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchaseList
);

router.get("/users", isSignedIn, isAuthenticated, isAdmin, getUserList);

module.exports = router;
