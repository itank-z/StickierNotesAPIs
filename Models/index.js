const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost/my_database');

const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  username: String,
  password: String,
  created_at: Date,
  modified_at: Date,
});

mongoose.model('User', User);
