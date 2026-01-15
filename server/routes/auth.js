import express from 'express';

const router = express.Router();


router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
          
    if (email === 'admin@school.edu' && password === 'admin123') {
      res.json({
        success: true,
        data: {
          user: {
            id: '1',
            email: 'admin@school.edu',
            name: 'Administrator',
            role: 'admin'
          },
          token: 'mock-jwt-token'
        }
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;