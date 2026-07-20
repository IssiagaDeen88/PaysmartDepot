const express = require('express');
const {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getPayments).post(protect, createPayment);
router.route('/:id').get(protect, getPaymentById).put(protect, updatePayment).delete(protect, deletePayment);

module.exports = router;
