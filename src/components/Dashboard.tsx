import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Trophy, TrendingUp, Calendar, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalSubjects: 0,
    averageGrade: 0,
    passRate: 0
  });

  const [recentResults, setRecentResults] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setStats({
        totalStudents: 250,
        totalSubjects: 12,
        averageGrade: 78.5,
        passRate: 87.2
      });

      setRecentResults([
        { id: 1, student: 'John Doe', subject: 'Mathematics', grade: 'A', date: '2024-01-15' },
        { id: 2, student: 'Jane Smith', subject: 'Physics', grade: 'A+', date: '2024-01-14' },
        { id: 3, student: 'Mike Johnson', subject: 'English', grade: 'B+', date: '2024-01-14' },
        { id: 4, student: 'Sarah Wilson', subject: 'Chemistry', grade: 'A', date: '2024-01-13' },
      ]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const statCards = [
    {
      title: 'Total Students',
      value: stats.totalStudents,
      icon: Users,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Subjects',
      value: stats.totalSubjects,
      icon: BookOpen,
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Average Grade',
      value: `${stats.averageGrade}%`,
      icon: Trophy,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Pass Rate',
      value: `${stats.passRate}%`,
      icon: TrendingUp,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+':
      case 'A':
        return 'bg-green-100 text-green-800';
      case 'B+':
      case 'B':
        return 'bg-blue-100 text-blue-800';
      case 'C+':
      case 'C':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between animate-slide-in-down">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">📊 Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your students.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-xl">
          <Calendar className="h-4 w-4" />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index} 
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`${stat.bgColor} card-modern p-6 animate-scale-in hover:shadow-2xl transform hover:scale-105`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{stat.title}</p>
                  <p className="text-3xl font-bold text-gradient mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-12 transition-all duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-in-up">
        <div className="card-modern border-2 border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gradient">📈 Recent Results</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentResults.map((result, idx) => (
              <div 
                key={result.id}
                style={{ animationDelay: `${idx * 0.05}s` }}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg animate-slide-in-left table-row-modern"
              >
                <div>
                  <p className="font-semibold text-gray-900">{result.student}</p>
                  <p className="text-sm text-gray-600 mt-1">📚 {result.subject}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-3 py-1 text-sm font-bold rounded-full shadow-md badge-modern ${getGradeColor(result.grade)}`}>
                    {result.grade}
                  </span>
                  <p className="text-xs text-gray-500 mt-2">📅 {result.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-modern border-2 border-gray-100 p-6 animate-bounce-in">
          <h2 className="text-lg font-bold text-gradient mb-6">📊 Performance Overview</h2>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Excellent (A+, A)</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">65%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Good (B+, B)</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">22%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average (C+, C)</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">10%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Below Average (D, F)</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '3%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
                  
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-blue-700">Add New Student</p>
          </button>
          <button className="p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-green-700">Enter Results</p>
          </button>
          <button className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-purple-700">Generate Report</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;