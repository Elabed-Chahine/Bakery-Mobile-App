const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware')
const {
  placeOrder,
  registerUser,
  loginUser,
  updateUser,
  getOrders,
} = require("../controllers/userController");

router.post("/order/:id",protect,placeOrder);
router.post('/register',registerUser);
router.post("/update", updateUser);
router.post('/login',loginUser);
router.get("/orders/:id",protect, getOrders);
module.exports = router