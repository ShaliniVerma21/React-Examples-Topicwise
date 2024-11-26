import React from 'react'

export default function Start(props) {
  return (
    <div className="Start">
      <h2>This is the start page</h2>
      <button onClick={ () => props.handleClick('playing')}>Start Game</button>
    </div>
  )
}
