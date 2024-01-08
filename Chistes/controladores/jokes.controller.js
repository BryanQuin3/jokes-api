const Joke = require('../modelos/jokes.model')
// CRUD operations for Jokes
module.exports = {
  getAllJokes: (req, res) => {
    Joke.find()
      .then(jokes => res.json(jokes))
      .catch(err => res.status(400).json(err))
  },
  getOneJoke: (req, res) => {
    Joke.findById(req.params.id)
      .then(joke => res.json(joke))
      .catch(err => res.status(400).json(err))
  },
  getRandomJoke: (req, res) => {
    Joke.aggregate([{ $sample: { size: 1 } }])
      .then(joke => res.json(joke[0]))
      .catch(err => res.status(400).json(err))
  },
  createJoke: (req, res) => {
    Joke.create(req.body)
      .then(joke => res.json(joke))
      .catch(err => res.status(400).json(err))
  },
  updateJoke: (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    })
      .then(joke => res.json(joke))
      .catch(err => res.status(400).json(err))
  },
  deleteJoke: (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
      .then(() => res.json({ status: 'success' }))
      .catch(err => res.status(400).json(err))
  }
}
