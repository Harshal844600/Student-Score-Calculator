import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import studentRoutes from './routes/students.js';
import resultRoutes from './routes/results.js';
import subjectRoutes from './routes/subjects.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/students', studentRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/subjects', subjectRoutes);


const connectDB = async () => {
  try {
   
    console.log('📚 Database connection established (Mock Mode)');
    console.log('📝 Note: Configure MongoDB connection string in production');
    
   
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};


connectDB();


app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Student Result Management API is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}/api/health`);
});