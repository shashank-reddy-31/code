import React, {useState} from 'react'
import Home from './components/Home'
import Game from './components/Game'
import Result from './components/Result'
import './App.css'

const App = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [players, setPlayers] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState({})
  const [isGameOver, setIsGameOver] = useState(false)

  const startGame = name => {
    setPlayerName(name)
    setPlayers([...players, name])
    setGameStarted(true)
  }

  const nextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1)
  }

  const handleAnswerCheck = answer => {
    const currentQuestion = questions[currentQuestionIndex]
    if (answer === currentQuestion.correct) {
      setCorrectAnswers({
        ...correctAnswers,
        [playerName]: (correctAnswers[playerName] || 0) + 1,
      })
      setTimeout(nextQuestion, 2000),
        alert('Congratulations it was an correct Answer')
    } else {
      alert('Wrong answer! Try again.')
    }
  }

  const resetGame = () => {
    setPlayers([])
    setCurrentQuestionIndex(0)
    setCorrectAnswers({})
    setIsGameOver(false)
    setGameStarted(false)
  }

  const questions = [
    {
      question: 'What is the capital of Italy?',
      options: {A: 'Rome', B: 'Venice', C: 'Florence', D: 'Milan'},
      correct: 'A',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: {A: 'Earth', B: 'Mars', C: 'Jupiter', D: 'Saturn'},
      correct: 'B',
    },
    {
      question: 'What is the smallest prime number?',
      options: {A: '0', B: '1', C: '2', D: '3'},
      correct: 'C',
    },
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      options: {A: 'Oxygen', B: 'Carbon Dioxide', C: 'Nitrogen', D: 'Hydrogen'},
      correct: 'B',
    },
  ]

  return (
    <div className="App">
      {isGameOver ? (
        <Result
          players={players}
          correctAnswers={correctAnswers}
          resetGame={resetGame}
        />
      ) : gameStarted ? (
        <Game
          question={questions[currentQuestionIndex]}
          onAnswerCheck={handleAnswerCheck}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />
      ) : (
        <Home onStartGame={startGame} />
      )}
    </div>
  )
}

export default App
