const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  toUser: String,
  content: String,
  type: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);
