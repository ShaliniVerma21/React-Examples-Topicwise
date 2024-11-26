import './style.css'
import React, { useState } from 'react'
import Lost from './Lost.jsx'
import Playing from './Playing.jsx'
import Start from './Start.jsx'
import Won from './Won.jsx'

function Game() {
 // setup useState
 const [game, setGame] = useState('start')
  
 // create a handleClick function
 const handleClick = (gameState) => {
   setGame(gameState)
 }

 return (
  <div className="App">
  <h1>Our Cool Game Demo</h1>

  {(() => {
    switch (game) {
      case 'start':
        return <Start handleClick={handleClick} />
      case 'playing':
        return <Playing handleClick={handleClick} />
      case 'won':
        return <Won handleClick={handleClick} />
      case 'lost':
        return <Lost handleClick={handleClick} />
      default:
        return null
    }
  })()}

</div>
 )
}

export default Game;