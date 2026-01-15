import express from 'express';

const router = express.Router();


let results = [
  {
    id: '1',
    studentId: '1',
    subjectId: '1',
    examType: 'midterm',
    marksObtained: 85,
    maxMarks: 100,
    percentage: 85,
    grade: 'A',
    examDate: '2024-03-15',
    semester: 1,
    academicYear: '2024-25'
  },
  {
    id: '2',
    studentId: '1',
    subjectId: '2',
    examType: 'midterm',
    marksObtained: 78,
    maxMarks: 100,
    percentage: 78,
    grade: 'B+',
    examDate: '2024-03-16',
    semester: 1,
    academicYear: '2024-25'
  },
  {
    id: '3',
    studentId: '2',
    subjectId: '1',
    examType: 'midterm',
    marksObtained: 92,
    maxMarks: 100,
    percentage: 92,
    grade: 'A+',
    examDate: '2024-03-15',
    semester: 1,
    academicYear: '2024-25'
  }
];

const calculateGrade = (percentage) => {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B+';
  if (percentage >= 60) return 'B';
  if (percentage >= 50) return 'C+';
  if (percentage >= 40) return 'C';
  if (percentage >= 30) return 'D';
  return 'F';
};


router.get('/', (req, res) => {
  try {
    const { studentId, subjectId, examType } = req.query;
    let filteredResults = results;

    if (studentId) {
      filteredResults = filteredResults.filter(r => r.studentId === studentId);
    }
    if (subjectId) {
      filteredResults = filteredResults.filter(r => r.subjectId === subjectId);
    }
    if (examType) {
      filteredResults = filteredResults.filter(r => r.examType === examType);
    }

    res.json({
      success: true,
      data: filteredResults,
      total: filteredResults.length
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.get('/:id', (req, res) => {
  try {
    const result = results.find(r => r.id === req.params.id);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Result not found' });
    }
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.post('/', (req, res) => {
  try {
    const { marksObtained, maxMarks = 100 } = req.body;
    const percentage = (marksObtained / maxMarks) * 100;
    const grade = calculateGrade(percentage);

    const newResult = {
      id: (results.length + 1).toString(),
      ...req.body,
      percentage,
      grade,
      maxMarks
    };

    results.push(newResult);
    res.status(201).json({ success: true, data: newResult });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.put('/:id', (req, res) => {
  try {
    const index = results.findIndex(r => r.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Result not found' });
    }

    const { marksObtained, maxMarks = 100 } = req.body;
    const percentage = (marksObtained / maxMarks) * 100;
    const grade = calculateGrade(percentage);

    results[index] = { 
      ...results[index], 
      ...req.body,
      percentage,
      grade
    };

    res.json({ success: true, data: results[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.delete('/:id', (req, res) => {
  try {
    const index = results.findIndex(r => r.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Result not found' });
    }
    results.splice(index, 1);
    res.json({ success: true, message: 'Result deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;