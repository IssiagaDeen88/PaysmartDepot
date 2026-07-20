const Wallet = require('../models/Wallet');

exports.getWallets = async (req, res, next) => {
  try {
    const wallets = await Wallet.find({ user: req.user.id });
    res.json(wallets);
  } catch (error) {
    next(error);
  }
};

exports.createWallet = async (req, res, next) => {
  try {
    const wallet = await Wallet.create({ ...req.body, user: req.user.id });
    res.status(201).json(wallet);
  } catch (error) {
    next(error);
  }
};

exports.updateWallet = async (req, res, next) => {
  try {
    const wallet = await Wallet.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!wallet) return res.status(404).json({ message: 'Wallet not found' });
    res.json(wallet);
  } catch (error) {
    next(error);
  }
};

exports.deleteWallet = async (req, res, next) => {
  try {
    const wallet = await Wallet.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!wallet) return res.status(404).json({ message: 'Wallet not found' });
    res.json({ message: 'Wallet deleted' });
  } catch (error) {
    next(error);
  }
};
