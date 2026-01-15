# Student Score Calculator

A full-stack web application for managing student records, subjects, and academic results. Built with modern web technologies for seamless student performance tracking.

## Features

- **Student Management**: Add, view, and manage student records
- **Subject Management**: Create and manage different subjects
- **Results Tracking**: Record and track student scores for each subject
- **Dashboard**: View comprehensive statistics and student performance overview
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web server framework

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Start the backend server**
   ```bash
   npm run server
   ```

The application will be available at `http://localhost:5173`

## Project Structure

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
