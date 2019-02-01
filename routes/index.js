const express = require('express');
const Campus = require('../models/Campus');
const Student = require('../models/Student');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/campuses', (req,res,next) => {
  Campus.find()
    .then(campuses => {
      res.render('campuses', {campuses})
    })
})

router.get('/campuses/:campusId', (req,res,next) => {
  Campus.find()
    .then(campuses => {
      res.render('campuses', {campuses})
    })
})

router.get('/students', (req,res,next) => {
  Student.find()
    .populate('_campus') // NEW: replace the id of `_campus` by the document from the db
    .then(students => {
      res.render('students', {students})
    })
})

module.exports = router;
