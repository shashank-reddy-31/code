import React, {useState} from 'react'
import QRCode from 'react-qr-code'

const Home = ({onStartGame}) => {
  const [playerName, setPlayerName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (playerName) {
      onStartGame(playerName)
    }
  }

  return (
    <div className="home">
      <h1>Welcome to the Quiz Game!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={playerName}
          onChange={e => setPlayerName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Join Game</button>
      </form>
      <h2>Scan for Mobile:</h2>
      <QRCode value={window.location.href} size={128} />
    </div>
  )
}

export default Home
