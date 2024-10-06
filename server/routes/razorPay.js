// routes/razorpayRoutes.js

const express = require('express');
const router = express.Router();

const razorpayController = require('../controllers/razorpayController');

router.post('/create', razorpayController.createOrder);
router.post('/success', razorpayController.paymentSuccess);

module.exports = router;
