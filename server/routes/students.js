import express from 'express';

const router = express.Router();


let students = [
  {
    id: '1',
    studentId: 'STU001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1234567890',
    class: 'Grade 10',
    section: 'A',
    rollNumber: '101',
    status: 'active',
    enrollmentDate: '2024-01-15'
  },
  {
    id: '2',
    studentId: 'STU002',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    phone: '+1234567891',
    class: 'Grade 10',
    section: 'A',
    rollNumber: '102',
    status: 'active',
    enrollmentDate: '2024-01-15'
  }
];


router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: students,
      total: students.length
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.get('/:id', (req, res) => {
  try {
    const student = students.find(s => s.id === req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.post('/', (req, res) => {
  try {
    const newStudent = {
      id: (students.length + 1).toString(),
      ...req.body,
      enrollmentDate: new Date().toISOString().split('T')[0]
    };
    students.push(newStudent);
    res.status(201).json({ success: true, data: newStudent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.put('/:id', (req, res) => {
  try {
    const index = students.findIndex(s => s.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    students[index] = { ...students[index], ...req.body };
    res.json({ success: true, data: students[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.delete('/:id', (req, res) => {
  try {
    const index = students.findIndex(s => s.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    students.splice(index, 1);
    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;