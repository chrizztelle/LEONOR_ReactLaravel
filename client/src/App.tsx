import './App.css';

type Student = {
  id: number;
  name: string;
  age: number;
  gradeLevel: string;
  status: 'active' | 'inactive';
  score: number;
};

function App() {
  const students: Student[] = [
    { id: 1010, name: 'Kyla Catalan', age: 22, gradeLevel: '10th Grade', status: 'active', score: 85 },
    { id: 1011, name: 'Arielle Alayon', age: 21, gradeLevel: '11th Grade', status: 'active', score: 94 },
    { id: 1012, name: 'Iris Tiffany Yu', age: 21, gradeLevel: '12th Grade', status: 'inactive', score: 78 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Student Profile System</h1>
      </header>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {students.map((student) => (
          <div 
            key={student.id} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
          >
            {/* Student Name & Status */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-800 leading-tight">{student.name}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                student.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {student.status}
              </span>
            </div>

            {/* Student Details */}
            <div className="space-y-3 border-t border-gray-50 pt-4">
              <div className="flex justify-between">
                <span className="text-black-400 text-sm">Student ID:</span>
                <span className="font-mono font-medium text-gray-700">#{student.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black-400 text-sm">Age:</span>
                <span className="font-mono font-medium text-gray-700">#{student.age}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black-400 text-sm">Grade Level:</span>
                <span className="font-medium text-gray-700">{student.gradeLevel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black-400 text-sm">Score:</span>
                <span className={`font-bold ${student.score >= 91 ? 'text-blue-600' : 'text-gray-700'}`}>
                  {student.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;