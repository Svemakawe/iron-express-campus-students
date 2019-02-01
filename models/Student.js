const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  _campus: {  // starts with `_` because it's an ObjectId (convention)
    type: Schema.Types.ObjectId,
    ref: 'Campus' // Don't forget this line, otherwise populate won't work
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Student = mongoose.model('Student', studentSchema)
module.exports = Student
