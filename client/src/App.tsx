function App() {
  let name: string = "Chrizztelle"
  let age: number = 20

  let score1: number = 85
  let score2: number = 90

  let totalScore: number = score1 + score2

  let average: number = totalScore / 2

  return (
  <>
<h1>Student Information</h1>

<p>Name: {name}</p>
<p>Age: {age}</p>

<h2>Scores</h2>
<p>Score 1: {score1}</p>
<p>Score 2: {score2}</p>

<h3>Total Score: {totalScore}</h3>
<h3>Average Score: {average}</h3>
</>
)


}

export default App