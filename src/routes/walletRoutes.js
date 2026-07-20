const express = require('express');
const {
  getWallets,
  createWallet,
  updateWallet,
  deleteWallet,
} = require('../controllers/walletController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getWallets).post(protect, createWallet);
router.route('/:id').put(protect, updateWallet).delete(protect, deleteWallet);

module.exports = router;
