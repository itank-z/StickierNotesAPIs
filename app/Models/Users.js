const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  email: { type: String, required: true, },
  username: { type: String, required: true, },
  password: { type: String, required: true, },
}, { timestamps: true });

const UsersModel = mongoose.model('User', User);

module.exports = UsersModel;
