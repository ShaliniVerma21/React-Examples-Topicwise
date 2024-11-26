import React from 'react'

export default function Lost(props) {
  return (
    <div className="Lost">
      <h2>You lost the game</h2>
      <button onClick={ () => props.handleClick('start')}>New Game</button>
    </div>
  )
}
