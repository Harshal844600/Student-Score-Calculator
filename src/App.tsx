import { useState } from 'react';
import { Users, BookOpen, BarChart3, Settings, Menu, X } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Results from './components/Results';
import Subjects from './components/Subjects';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'students', name: 'Students', icon: Users },
    { id: 'results', name: 'Results', icon: BookOpen },
    { id: 'subjects', name: 'Subjects', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <Students />;
      case 'results':
        return <Results />;
      case 'subjects':
        return <Subjects />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-white to-gray-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b-2 border-gray-100 bg-gradient-to-r from-blue-600 to-blue-700">
          <h1 className="text-xl font-bold text-white">
            📚 Student Results
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-700 transition-all text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-8 px-4 space-y-2">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-left ${
                  activeTab === item.id
                    ? 'sidebar-item-active shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="lg:ml-64">
        <div className="bg-white shadow-lg border-b-2 border-gray-100 px-6 py-4 animate-slide-in-down">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-all"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm font-semibold text-gray-600">
                📅 Academic Year 2024-25
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
                <span className="text-white font-bold text-sm">SR</span>
              </div>
            </div>
          </div>
        </div>

        <main className="p-6 animate-fade-in">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;