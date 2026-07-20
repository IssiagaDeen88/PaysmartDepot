const Notification = require('../models/Notification');

exports.sendNotification = async (userId, title, message) => {
  return Notification.create({ user: userId, title, message });
};
