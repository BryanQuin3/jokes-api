const mongoose = require('mongoose')
const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, 'El setup es obligatorio'],
    minlength: [10, 'El setup debe tener al menos 10 caracteres']
  },
  punchline: {
    type: String,
    required: [true, 'El punchline es obligatorio'],
    minlength: [3, 'El punchline debe tener al menos 3 caracteres']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Joke', JokeSchema)
