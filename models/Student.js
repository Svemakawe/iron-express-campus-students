const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const studentSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  _campus: Schema.Types.ObjectId, // starts with `_` because it's an ObjectId (convention)
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Student = mongoose.model('Student', studentSchema)
module.exports = Student
