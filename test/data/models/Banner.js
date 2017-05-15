const mongoose = load('mongoose')

module.exports = new mongoose.Schema({
  link: String,
  title: String,
  isValid: {
    type: Boolean,
    default: true
  }
}, {
  collection: 'Banner',
  strict: false
})
