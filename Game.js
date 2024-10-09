// src/components/Game.js
import React from 'react'

const Game = ({
  question,
  onAnswerCheck,
  currentQuestionIndex,
  totalQuestions,
}) => {
  const handleOptionClick = option => {
    onAnswerCheck(option)
  }

  return (
    <div className="game">
      <h2>{`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</h2>
      <p>{question.question}</p>
      <div>
        {Object.entries(question.options).map(([key, option]) => (
          <button key={key} onClick={() => handleOptionClick(key)}>
            {key}: {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Game
