const mongoose = require('mongoose')
// initialize connection to database
const configMongoose = () => {
  const url = 'mongodb://127.0.0.1:27017/jokes'
  mongoose.connect(url)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log('Error al conectar a la base de datos', err))
}

module.exports = configMongoose
