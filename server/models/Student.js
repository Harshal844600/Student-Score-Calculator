import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  class: {
    type: String,
    required: true
  },
  section: {
    type: String,
    default: 'A'
  },
  rollNumber: {
    type: String,
    required: true
  },
  parentContact: {
    name: String,
    phone: String,
    email: String,
    relationship: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'graduated', 'transferred'],
    default: 'active'
  }
}, {
  timestamps: true
});

export default mongoose.model('Student', studentSchema);