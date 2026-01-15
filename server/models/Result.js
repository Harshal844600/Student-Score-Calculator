import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  examType: {
    type: String,
    enum: ['midterm', 'final', 'quiz', 'assignment', 'project'],
    required: true
  },
  marksObtained: {
    type: Number,
    required: true,
    min: 0
  },
  maxMarks: {
    type: Number,
    required: true,
    default: 100
  },
  percentage: {
    type: Number,
    min: 0,
    max: 100
  },
  grade: {
    type: String,
    enum: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F']
  },
  remarks: {
    type: String,
    trim: true
  },
  examDate: {
    type: Date,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  academicYear: {
    type: String,
    required: true
  },
  enteredBy: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});


resultSchema.pre('save', function(next) {
  this.percentage = (this.marksObtained / this.maxMarks) * 100;
  
          
  if (this.percentage >= 90) this.grade = 'A+';
  else if (this.percentage >= 80) this.grade = 'A';
  else if (this.percentage >= 70) this.grade = 'B+';
  else if (this.percentage >= 60) this.grade = 'B';
  else if (this.percentage >= 50) this.grade = 'C+';
  else if (this.percentage >= 40) this.grade = 'C';
  else if (this.percentage >= 30) this.grade = 'D';
  else this.grade = 'F';
  
  next();
});

export default mongoose.model('Result', resultSchema);