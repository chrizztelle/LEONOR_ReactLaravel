import './App.css';

function App() {
  let name: string = "Tala";
  let age: number = 23;
  let score1: number = 85;
  let score2: number = 90;
  let totalScore: number = score1 + score2;
  let average: number = totalScore / 2;

  type User = {
    id: number;
    name: string;
    age: number;
    gradeLevel: string;
    status: 'active' | 'inactive';
    score: number;
  };

  const students: User[] = [
    {
      id: 101,
      name: 'Chrizztelle G. Leonor',
      age: 25,
      gradeLevel: '10th Grade',
      status: 'active',
      score: 85
    },
    {
      id: 102,
      name: 'Kyla S. Catalan',
      age: 22,
      gradeLevel: '12th Grade',
      status: 'active',
      score: 92
    },
    {
      id: 103,
      name: 'Arielle S. Alayon',
      age: 23,
      gradeLevel: '11th Grade',
      status: 'inactive',
      score: 78
    }
  ];

  return (
    <>
      <h1 className='text-red-500'>Student Information</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <h2>Scores</h2>
      <p>Score 1: {score1}</p>
      <p>Score 2: {score2}</p>
      <h3>Total Score: {totalScore}</h3>
      <h3>Average Score: {average}</h3>

      <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Student Profile System
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {students.map((student) => (
            <div key={student.id} className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-bold text-blue-600 mb-4">
                {student.name}
              </h2>

              <p><b>ID:</b> {student.id}</p>
              <p><b>Age:</b> {student.age}</p>
              <p><b>Grade:</b> {student.gradeLevel}</p>
              <p>
                <b>Status:</b> {student.status}
              </p>
              <p><b>Score:</b> {student.score}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;