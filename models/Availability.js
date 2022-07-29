const mongoose = require('mongoose')

const Availability = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  availability: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('Availability', Availability)
