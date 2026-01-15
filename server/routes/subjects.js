import express from 'express';

const router = express.Router();


let subjects = [
  {
    id: '1',
    subjectCode: 'MATH101',
    subjectName: 'Mathematics',
    credits: 4,
    department: 'Science',
    semester: 1,
    maxMarks: 100,
    passingMarks: 40
  },
  {
    id: '2',
    subjectCode: 'ENG101',
    subjectName: 'English Literature',
    credits: 3,
    department: 'Arts',
    semester: 1,
    maxMarks: 100,
    passingMarks: 40
  },
  {
    id: '3',
    subjectCode: 'SCI101',
    subjectName: 'Physics',
    credits: 4,
    department: 'Science',
    semester: 1,
    maxMarks: 100,
    passingMarks: 40
  }
];

router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: subjects,
      total: subjects.length
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.get('/:id', (req, res) => {
  try {
    const subject = subjects.find(s => s.id === req.params.id);
    if (!subject) {
      return res.status(404).json({ success: false, message: 'Subject not found' });
    }
    res.json({ success: true, data: subject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

  
router.post('/', (req, res) => {
  try {
    const newSubject = {
      id: (subjects.length + 1).toString(),
      ...req.body
    };
    subjects.push(newSubject);
    res.status(201).json({ success: true, data: newSubject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;