const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const campusSchema = new Schema({
  city: String,
  gm: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Campus = mongoose.model('Campus', campusSchema)
module.exports = Campus
