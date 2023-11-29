const express = require('express');
const paymentController = require('../controllers/paymentController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/create-session')
  .post(authController.protect, paymentController.createCheckoutSession);
router
  .route('/packages')
  .get(authController.protect, paymentController.getPackages);

module.exports = router;
