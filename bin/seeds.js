const mongoose = require('mongoose')
const Campus = require('../models/Campus')
const Student = require('../models/Student')
const dataCampuses = require('./data-campuses') // Starts with './' because it's a file

mongoose
  .connect('mongodb://localhost/iron-express-campus-students', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

Campus.deleteMany()
  .then(() => Campus.create(dataCampuses))
  .then(() => { // This then is executed when Campus.create is done
    console.log('Done');
    mongoose.disconnect() // Close the connection to the db 
  })
  .catch(err => {
    console.log('Error:', err)
  })

