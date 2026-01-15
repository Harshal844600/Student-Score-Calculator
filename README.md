# 📚 Student Score Calculator

> A powerful, modern full-stack web application for managing student records, subjects, and academic results. Track student performance with ease using our intuitive interface!

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-v14+-green.svg)](https://nodejs.org)
[![React](https://img.shields.io/badge/react-18+-61dafb.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/typescript-5+-blue.svg)](https://www.typescriptlang.org)

## 🌟 Features

✨ **Comprehensive Student Management**
- Add, edit, view, and delete student records
- Maintain detailed student information
- Track student enrollment and status

📊 **Subject & Results Management**
- Create and manage multiple subjects
- Record detailed scores and grades
- Track performance metrics across subjects

📈 **Advanced Dashboard**
- Real-time performance analytics
- Visual statistics and charts
- Student progress overview
- Subject-wise performance breakdown

🎨 **Modern User Interface**
- Responsive design for all devices
- Intuitive and user-friendly layout
- Smooth navigation and interactions
- Clean, professional appearance

⚡ **High Performance**
- Fast build times with Vite
- Optimized rendering with React
- Efficient API calls and data management

## 🛠️ Tech Stack

### Frontend Architecture
- **React 18+** - Modern UI library with hooks
- **TypeScript 5+** - Strong typing for JavaScript
- **Vite** - Next-generation bundler (⚡ Lightning fast)
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Components** - Modular, reusable components

### Backend Architecture
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast and minimalist web framework
- **RESTful API** - Standard API design patterns

### Database Models
- Student Management
- Subject Tracking
- Results & Grades
- Performance Analytics

## 📦 Installation & Setup

### Prerequisites
- **Node.js** v14 or higher ([Download](https://nodejs.org))
- **npm** v6+ or **yarn** v1.22+
- **Git** for version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Harshal844600/Student-Score-Calculator.git
   cd Student-Score-Calculator
   ```

2. **Install all dependencies**
   ```bash
   npm install
   ```

3. **Start the frontend development server**
   ```bash
   npm run dev
   ```
   The application launches at `http://localhost:5173`

4. **In a new terminal, start the backend server**
   ```bash
   npm run server
   ```
   Backend runs on `http://localhost:5000`

### Alternative: Using Yarn
```bash
yarn install
yarn dev        # Frontend
yarn server     # Backend (in another terminal)
```

## 📁 Project Structure

```
Student-Score-Calculator/
├── src/                      # Frontend source code
│   ├── components/           # React components
│   │   ├── Dashboard.tsx     # Main dashboard
│   │   ├── Students.tsx      # Student management
│   │   ├── Subjects.tsx      # Subject management
│   │   └── Results.tsx       # Results tracking
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
│
├── server/                   # Backend API
│   ├── index.js             # Server entry point
│   ├── models/              # Data models
│   │   ├── Student.js       # Student schema
│   │   ├── Subject.js       # Subject schema
│   │   └── Result.js        # Result schema
│   └── routes/              # API endpoints
│       ├── auth.js          # Authentication
│       ├── students.js      # Student routes
│       ├── subjects.js      # Subject routes
│       └── results.js       # Results routes
│
├── public/                   # Static assets
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite configuration
└── tailwind.config.js       # Tailwind CSS config
```

## 🚀 Available Scripts

### Development
```bash
npm run dev           # Start Vite dev server
npm run server        # Start Express backend
npm run build         # Build for production
npm run preview       # Preview production build
```

### Code Quality
```bash
npm run lint          # Run ESLint
npm run type-check    # TypeScript type checking
```

## 📖 Usage Guide

### Managing Students
1. Navigate to the **Students** section
2. Click **"Add New Student"** button
3. Fill in student details (name, email, enrollment number)
4. Click **"Save"** to create student record

### Adding Subjects
1. Go to the **Subjects** section
2. Click **"Add Subject"**
3. Enter subject name and code
4. Select subject type (optional)
5. Save the subject

### Recording Results
1. Open the **Results** section
2. Select a student and subject
3. Enter marks/grades
4. Add remarks or comments
5. Submit and view updated statistics

### Viewing Dashboard
- See overall student statistics
- View performance trends
- Access subject-wise analytics
- Track progress over time

## 🔌 API Endpoints

### Students
- `GET /api/students` - Get all students
- `POST /api/students` - Create new student
- `GET /api/students/:id` - Get student details
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Subjects
- `GET /api/subjects` - Get all subjects
- `POST /api/subjects` - Create subject
- `GET /api/subjects/:id` - Get subject details
- `DELETE /api/subjects/:id` - Delete subject

### Results
- `GET /api/results` - Get all results
- `POST /api/results` - Record new result
- `GET /api/results/:id` - Get result details
- `PUT /api/results/:id` - Update result
- `DELETE /api/results/:id` - Delete result

## 🎯 Key Functionalities

✅ **Student Dashboard** - Complete overview of all students  
✅ **Performance Analytics** - Track grades and progress  
✅ **Subject Management** - Organize curriculum  
✅ **Results Tracking** - Record and analyze scores  
✅ **Data Export** - Export reports and data  
✅ **Responsive UI** - Works on phones, tablets, desktops  
✅ **Real-time Updates** - Instant data synchronization  

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Latest  |
| Firefox | Latest  |
| Safari  | Latest  |
| Edge    | Latest  |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support & Contact

For support, email your queries or create an issue in the repository.

- **GitHub Issues**: [Create an Issue](https://github.com/Harshal844600/Student-Score-Calculator/issues)
- **Project URL**: [GitHub Repository](https://github.com/Harshal844600/Student-Score-Calculator)

## 🙌 Acknowledgments

- Built with ❤️ using modern web technologies
- Inspired by real-world student management needs
- Thanks to the React and Node.js communities

---

<div align="center">

**Made with 💻 and ☕ by Harshal**

[⭐ Star this repo if you find it helpful!](https://github.com/Harshal844600/Student-Score-Calculator)

</div>

```
├── src/                  # Frontend React components
│   ├── components/       # Reusable UI components
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── server/              # Backend Node.js server
│   ├── models/          # Database models
│   ├── routes/          # API endpoints
│   └── index.js         # Server entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run server` - Start backend server
- `npm run lint` - Run ESLint

## License

This project is open source and available under the MIT License.

## Author

Created by Developer

---

For more information or contributions, please visit the repository.
