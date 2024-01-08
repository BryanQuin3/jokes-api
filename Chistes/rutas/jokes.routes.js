// import all functions
const jokesController = require('../controladores/jokes.controller')
// add routes to app
module.exports = app => {
  app.get('/api/jokes', jokesController.getAllJokes)
  app.get('/api/jokes/random', jokesController.getRandomJoke)
  app.get('/api/jokes/:id', jokesController.getOneJoke)
  app.post('/api/jokes/new', jokesController.createJoke)
  app.put('/api/jokes/update/:id', jokesController.updateJoke)
  app.delete('/api/jokes/delete/:id', jokesController.deleteJoke)
}
