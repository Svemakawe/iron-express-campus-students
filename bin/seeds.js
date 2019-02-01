const mongoose = require('mongoose')
const Campus = require('../models/Campus')
const Student = require('../models/Student')
const dataCampuses = require('./data-campuses') // Starts with './' because it's a file
const dataStudents = require('./data-students') // Starts with './' because it's a file

mongoose
  .connect('mongodb://localhost/iron-express-campus-students', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

Campus.deleteMany()
  .then(() => Student.deleteMany())
  .then(() => Campus.create(dataCampuses))  // This then is executed when Student.deleteMany is done
  .then(campusesDocs => {
    return Student.create(dataStudents.map(dataStudent => ({
      firstName: dataStudent.firstName,
      lastName: dataStudent.lastName,
      _campus: campusesDocs[Math.floor(Math.random()*campusesDocs.length)]._id
    })))
  })
  .then(() => {
    console.log('Done');
    mongoose.disconnect() // Close the connection to the db 
  })
  .catch(err => {
    console.log('Error:', err)
  })

