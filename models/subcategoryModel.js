const mongoose = require('mongoose');

const subcategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

module.exports = mongoose.model('Sub-Categories', subcategorySchema);
