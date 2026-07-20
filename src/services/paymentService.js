const Payment = require('../models/Payment');

exports.processPayment = async (paymentData) => {
  const payment = await Payment.create(paymentData);
  // Placeholder for external payment gateway integration.
  return payment;
};
