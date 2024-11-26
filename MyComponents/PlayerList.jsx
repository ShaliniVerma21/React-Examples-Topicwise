import React from 'react'

export default function PlayerList(props) {
    const playerLists = props.playerLists;  
    const listItems = playerLists.map((players) =>  
      <li>{players}</li>  
    );  
    return (  
      <div>  
          <h2>Players Names are : </h2>  
                <ul>{listItems}</ul>  
      </div>  
    );  
  }  