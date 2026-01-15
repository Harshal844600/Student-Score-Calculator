import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, BookOpen } from 'lucide-react';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingSubject, setEditingSubject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/subjects');
      const data = await response.json();
      if (data.success) {
        setSubjects(data.data);
      }
    } catch (error) {
      console.error('Error fetching subjects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const url = editingSubject 
        ? `http://localhost:5000/api/subjects/${editingSubject.id}`
        : 'http://localhost:5000/api/subjects';
      
      const method = editingSubject ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        fetchSubjects();
        setShowModal(false);
        setEditingSubject(null);
      }
    } catch (error) {
      console.error('Error saving subject:', error);
    }
  };

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.subjectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.subjectCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !filterDepartment || subject.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(subjects.map(subject => subject.department))];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-blue-500 border-t-2"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="animate-slide-in-left">
          <h1 className="text-3xl font-bold text-gradient">📚 Subjects</h1>
          <p className="text-gray-600 mt-2">Manage academic subjects and courses</p>
        </div>
        <button
          onClick={() => {
            setEditingSubject(null);
            setShowModal(true);
          }}
          className="btn-primary-modern flex items-center space-x-2 animate-bounce-in"
        >
          <Plus className="h-5 w-5" />
          <span>Add Subject</span>
        </button>
      </div>

      <div className="card-modern p-6 animate-slide-in-up">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="🔍 Search subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-modern pl-12 py-3 shadow-md"
            />
          </div>
          <div className="relative">
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="input-modern py-3 shadow-md"
            >
              <option value="">📌 All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
        {filteredSubjects.map((subject, idx) => (
          <div 
            key={subject.id}
            style={{ animationDelay: `${idx * 0.05}s` }}
            className="card-modern p-6 hover:shadow-2xl transform hover:scale-105 animate-slide-in-up"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditingSubject(subject);
                    setShowModal(true);
                  }}
                  className="text-green-600 hover:text-green-700"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{subject.subjectName}</h3>
                <p className="text-sm text-gray-600">{subject.subjectCode}</p>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Department: {subject.department}</span>
                <span>Credits: {subject.credits}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Max Marks: {subject.maxMarks}</span>
                <span>Pass Marks: {subject.passingMarks}</span>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  Semester {subject.semester}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

          
      {showModal && (
        <SubjectModal
          subject={editingSubject}
          onClose={() => {
            setShowModal(false);
            setEditingSubject(null);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

const SubjectModal = ({ subject, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    subjectCode: subject?.subjectCode || '',
    subjectName: subject?.subjectName || '',
    description: subject?.description || '',
    credits: subject?.credits || 4,
    department: subject?.department || '',
    semester: subject?.semester || 1,
    maxMarks: subject?.maxMarks || 100,
    passingMarks: subject?.passingMarks || 40
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      credits: parseInt(formData.credits),
      semester: parseInt(formData.semester),
      maxMarks: parseInt(formData.maxMarks),
      passingMarks: parseInt(formData.passingMarks)
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {subject ? 'Edit Subject' : 'Add New Subject'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject Code
                </label>
                <input
                  type="text"
                  name="subjectCode"
                  value={formData.subjectCode}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Credits
                </label>
                <input
                  type="number"
                  name="credits"
                  value={formData.credits}
                  onChange={handleChange}
                  required
                  min="1"
                  max="10"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject Name
              </label>
              <input
                type="text"
                name="subjectName"
                value={formData.subjectName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Semester
                </label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                    <option key={sem} value={sem}>Semester {sem}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max Marks
                </label>
                <input
                  type="number"
                  name="maxMarks"
                  value={formData.maxMarks}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passing Marks
                </label>
                <input
                  type="number"
                  name="passingMarks"
                  value={formData.passingMarks}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {subject ? 'Update' : 'Create'} Subject
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subjects;