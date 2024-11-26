import React from 'react'

export default function Playing(props) {
  return (
    <div className="Playing">
    <h2>Playing the game page</h2>
    <button onClick={ () => props.handleClick('lost')}>Lost the Game</button>
    <button onClick={ () => props.handleClick('won')}>Won the Game</button>
    <button onClick={ () => props.handleClick('start')}>New Game</button>
  </div>
  )
}
